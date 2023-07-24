<template>
  <div style="max-width: 1400px; margin: 0px auto; padding: 20px 0px">
    <div class="hedaerTitle">
      <div class="text-box">
        <div class="text-wrap">
          <div class="heart"></div>
          <a class="logoText" href="/"><h1>M.O.M</h1></a>
          <h4>Man Of the Match</h4>
        </div>
      </div>
      <div>
        <b-row class="justify-content-md-center p-5">
          <b-col cols="12" md="auto">
            <b-input-group size="md">
              <b-form-input v-model="totalData.nickname" placeholder="구단주명" @keyup.enter="submitButton"></b-form-input>
              <b-input-group-append>
                <b-button text="Button" variant="primary" @click="submitButton">검색</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </div>
    </div>
    <transition name="fade">
      <loading-overlay :active="loading" :opacity="0.5">
        <div class="loadingImg">
          <p class="loadingText">경기 결과를 불러오는 중입니다...</p>
        </div>
      </loading-overlay>
    </transition>
    <div v-if="resultData.response.length === 0"></div>
    <div v-else>
      <!-- userprofile component -->
      <UserProfile :resultData="resultData" :findDivision="findDivision" />
      <!-- :avgGoal="resultData.findUserInfo.avgGoal"
        :winCount="resultData.findUserInfo.winCount"
        :winPossession="resultData.findUserInfo.winPossession"
        :gameCount="resultData.response.length" -->
      <div class="accordion" role="tablist">
        <b-card no-body class="cardTitle mb-2" v-for="(result, index) in resultData.response" :key="result.matchId">
          <b-card-header header-tag="header" class="cardHedaer" role="tab" @click="toggleCollapse('accordion-' + (index + 1))" style="border: none">
            <div :class="'test-' + result.matchInfo[0].matchDetail.matchResult">
              <div style="font-size: 15px; color: white">Home</div>
              <div style="align-items: center; width: 100%">
                <div>
                  <img style="width: 60px; height: 60px" :src="findDivision(resultData.userDivisionInfo[0].division)" />
                  {{ result.matchInfo[0].nickname }}
                </div>
              </div>
            </div>
            <div class="test">
              <div class="titleCenter">
                <div class="titleCenterScore">{{ result.matchInfo[0].shoot.goalTotal }}</div>
              </div>

              <div class="titleCenter">
                <div><img src="../assets/공식경기로고.png" style="width: 120px; height: 100px" /></div>
              </div>

              <div class="titleCenter">
                <div class="titleCenterScore">{{ result.matchInfo[1].shoot.goalTotal }}</div>
              </div>
            </div>
            <div :class="'test-' + result.matchInfo[1].matchDetail.matchResult">
              <div style="font-size: 15px; color: white">Away</div>
              <div style="align-items: center; width: 100%">
                <div>
                  <img style="width: 60px; height: 60px" :src="findDivision(resultData.userDivisionInfo[1].division)" />
                  {{ result.matchInfo[1].nickname }}
                </div>
              </div>
            </div>
          </b-card-header>
          <b-collapse :id="'accordion-' + (index + 1)" accordion="my-accordion" role="tabpanel" :visible="visible['accordion-' + (index + 1)]">
            <b-card-body>
              <b-card>
                <div>
                  <div class="background">
                    <div class="playersBoard" id="home">
                      <div class="rightPlayers" v-for="rows in result.homePlayerRows" :key="rows">
                        <PlayersCard :rows="rows" :allPosition="allPosition" :findPlayer="findPlayer" @close="changePopState" />
                      </div>
                    </div>
                    <div class="playersBoard" id="away">
                      <div class="rightPlayers" v-for="rows in result.awayPlayerRows" :key="rows">
                        <PlayersCard :rows="rows" :allPosition="allPosition" :findPlayer="findPlayer" @close="changePopState" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- MatchStat -->
                <MatchStat :resultData="result" />
              </b-card>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <transition name="fade">
        <PlayerStatusModal v-if="popState" @close="changePopState" :playerInfo="playerInfo" :popState="popState" />
      </transition>
      <div class="moreBtnArea" @click="moreButton">더보기+</div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, onMounted, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import LoadingOverlay from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import UserProfile from './matchList/UserProfile.vue'
import MatchStat from './matchList/MatchStat.vue'
import PlayersCard from './matchList/PlayersCard.vue'
import PlayerStatusModal from './matchList/PlayerStatusModal.vue'

const loading = ref(false) // loading overlay 반응형 객체
const visible = reactive({}) // Accordion-Body 노출 여부 반응형 객체
const resultData = reactive({ nickname: '', response: [], userNotFound: false, findUserInfo: {} }) // 경기 조회 반응형 객체
let totalData = { nickname: '', response: [], userNotFound: true, findUserInfo: {} } // resultData의 참조 객체
const allPlayers = ref([]) // 모든 선수의 데이터
const allPosition = ref({}) // 모든 선수 포지션 데이터
const allDivision = ref({}) // 모든 등급 데이터
const allSeason = ref({}) // 모든 선수(카드) 시즌 데이터
const store = useStore() // 상태관리 store
const positions = computed(() => store.state.positions) // 모든 포지션 영문이름 데이터
const playerRows = store.state.playerRows //Ground(Accordion-body) 영역
const bodyStyle = ref('') // Modal on/off 시에 페이지 overflow 반응형 객체
const playerInfo = ref({}) // 검색한 유저의 데이터 반응형 객체
const popState = ref(false) // 모달 on / off 반응형 객체
const headers = {
  // API 통신 header
  'Content-Type': 'application/json',
  Authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM4Njg2NzczNyIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNzAzNTY4NTg1LCJpYXQiOjE2ODgwMTY1ODUsIm5iZiI6MTY4ODAxNjU4NSwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.07txWeL2lyLvtYvTcCVpGTRQpD5GZ7I9lQH6nnsXD1g',
}

//페이지 로드시(마운트) 실행 함수
onMounted(async () => {
  const positionArray = positions.value.split(',')
  for (let i = 0; i < positionArray.length; i++) {
    allPosition.value[i] = positionArray[i]
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM4Njg2NzczNyIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNzAzNTY4NTg1LCJpYXQiOjE2ODgwMTY1ODUsIm5iZiI6MTY4ODAxNjU4NSwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.07txWeL2lyLvtYvTcCVpGTRQpD5GZ7I9lQH6nnsXD1g',
  }

  const urls = 'https://static.api.nexon.co.kr/fifaonline4/latest/spid.json'
  const divisionUrls = 'https://static.api.nexon.co.kr/fifaonline4/latest/division.json'
  const seasionUrls = 'https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json'

  //모든 시즌 카드 정보
  await axios
    .get(seasionUrls, {
      headers: headers,
    })
    .then((res) => {
      allSeason.value = res.data
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.log('실패')
      }
    })

  //모든 등급 정보
  await axios
    .get(divisionUrls, {
      headers: headers,
    })
    .then((res) => {
      // for(res.data.value.length)
      let tempData = res.data
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].divisionImg = `https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank${i}.png`
      }
      allDivision.value = tempData
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.log('실패')
      }
    })

  //모든 선수 정보
  await axios
    .get(urls, {
      headers: headers,
    })
    .then((res) => {
      allPlayers.value = res.data
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.log('실패')
      }
    })

  document.body.setAttribute('style', bodyStyle.value)
})

// 모달 on / off
const changePopState = (params) => {
  popState.value = !popState.value
  if (popState.value === true) {
    bodyStyle.value = 'overflow:hidden;!important'
    let findIndex = findSeason(params[0])
    params[1].playerInfo = allSeason.value[findIndex]
    params[1].playerName = findPlayer(params[1].spId, true)
    playerInfo.value = params[1]
    console.log('open modal - resultData', resultData)
    console.log('open modal - totalData', resultData)
  } else {
    bodyStyle.value = 'overflow:auto;!important'
  }
}

// popState 변경될 때마다 <body> 요소에 적용
watch(popState, () => {
  document.body.setAttribute('style', bodyStyle.value)
})

// 유저의 등급 정보 찾기
const findDivision = (division) => {
  return allDivision.value.find((item) => item.divisionId === division)?.divisionImg || ''
}

//Accordion 확장
const toggleCollapse = (propName) => {
  console.log('resultData', resultData)
  console.log('totalData', totalData)
  visible[propName] = !visible[propName]
}

// 선수 찾기(이름)
const findPlayer = (spId, pull) => {
  const index = allPlayers.value.findIndex((item) => {
    // item은 현재 배열 요소이므로 원하는 value 값을 포함한 객체 구조에 맞게 수정
    const value = item.id
    return value === spId
  })

  if (index !== -1) {
    const playerName = allPlayers.value[index].name
    if (pull) {
      return playerName
    } else {
      if (playerName.includes(' ')) {
        const splittedName = playerName.split(' ')
        if (allPlayers.value[index].name.split(' ')[0] === '비니시우스') {
          return allPlayers.value[index].name.split(' ')[0]
        } else if (playerName.includes('-')) {
          return allPlayers.value[index].name.split('-')[1]
        } else {
          return splittedName.slice(1).join(' ')
        }
      } else {
        return playerName
      }
    }
  }
}

// 선수(카드)의 정보(시즌)
const findSeason = (reqSeasonId) => {
  let sliceSeasonId = reqSeasonId.toString().slice(0, 3)
  const index = allSeason.value.findIndex((item) => {
    // item은 현재 배열 요소이므로 원하는 value 값을 포함한 객체 구조에 맞게 수정해야 합니다.
    const value = item.seasonId // 예를 들어, value라는 속성을 비교한다고 가정합니다.
    return value === Number(sliceSeasonId)
  })

  if (index !== -1) {
    let seasonCardImg = allSeason.value[index].className.split('(')[0].replace(/\s/g, '')
    allSeason.value[index].seasonCardImg = `https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/card/${seasonCardImg}.png`
    allSeason.value[index].className = seasonCardImg
    return index
  }
}

// 검색 버튼
const submitButton = () => {
  totalData.response = []

  //닉네임으로 유저 조회 url
  const findUserApiUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${totalData.nickname}`

  //닉네임으로 유저 조회 실패 콜백
  const findUserApiFailCallback = (apiErrorResult) => {
    alert('조회된 유저가 없습니다.')
    totalData.userNotFound = true
    totalData.response.push(apiErrorResult.message)
    resultData.response = []
    loading.value = false
  }

  //닉네임으로 유저 조회 API
  axiosConnet(findUserApiUrl, headers, findUserApiCallback, findUserApiFailCallback)
}

// 닉네임으로 유저 검색 콜백
const findUserApiCallback = async (apiResult) => {
  totalData.findUserInfo = { accessId: apiResult.data.accessId, level: apiResult.data.level, winCount: 0, winPossession: 0, avgGoal: 0 }

  //찾은 유저의 경기 기록 조회 url
  const urls = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${totalData.findUserInfo.accessId}/matches?matchtype=50&offset=0&limit=3`
  const bestDivisionUrls = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${totalData.findUserInfo.accessId}/maxdivision`
  loading.value = true
  await axios
    .get(urls, {
      headers: headers,
    })
    .then(async (res) => {
      if (res.data.length > 0) {
        await axios
          .get(bestDivisionUrls, {
            headers: headers,
          })
          .then((res) => {
            totalData.userDivisionInfo = res.data
          })
          .catch((error) => {
            if (error.response.status === 404) {
              console.log('실패')
            }
          })
        let matchIds = res.data
        let results = []
        axios
          .all([
            axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[0]}`, { headers: headers }),
            axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[1]}`, { headers: headers }),
            axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[2]}`, { headers: headers }),
          ])
          .then(
            axios.spread((res1, res2, res3) => {
              results.push(res1.data)
              results.push(res2.data)
              results.push(res3.data)

              results.forEach((element, index) => {
                //아코디언 visible 처리
                let visibleObjKey = 'accordion-' + (totalData.response.length + 1)
                visible[visibleObjKey] = false

                totalData.response.push(element) //매치상세 추가
                findUserWinning(element) //승률셋팅
                groundOnplayer(element, index) //선수셋팅
              })
              resultData.response = totalData.response
              resultData.userDivisionInfo = totalData.userDivisionInfo
              resultData.findUserInfo = totalData.findUserInfo
              resultData.userNotFound = totalData.userNotFound
              resultData.nickname = totalData.nickname

              loading.value = false
            }),
          )
      } else {
        resultData.response = []
        loading.value = false
        alert('조회된 경기가 없습니다.')
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        loading.value = false
        console.log(error)
      }
    })
}

// 더보기 버튼
const moreButton = async () => {
  //찾은 유저의 경기 기록 조회 url
  loading.value = true
  document.body.style.overflow = 'auto'
  const urls = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${resultData.findUserInfo.accessId}/matches?matchtype=50&offset=${resultData.response.length}&limit=3`

  await axios
    .get(urls, {
      headers: headers,
    })
    .then(async (res) => {
      let matchIds = res.data
      let results = []
      axios
        .all([
          axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[0]}`, { headers: headers }),
          axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[1]}`, { headers: headers }),
          axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchIds[2]}`, { headers: headers }),
        ])
        .then(
          axios.spread((res1, res2, res3) => {
            results.push(res1.data)
            results.push(res2.data)
            results.push(res3.data)

            results.forEach((element) => {
              //아코디언 visible 처리
              let visibleObjKey = 'accordion-' + (totalData.response.length + 1)
              visible[visibleObjKey] = false

              totalData.response.push(element) //매치상세 추가
              findUserWinning(element) //승률셋팅
              groundOnplayer(element, totalData.response.length - 1) //선수셋팅
            })

            resultData.response = []
            resultData.response.push(...totalData.response)
            loading.value = false
          }),
        )
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.log(error)
      }
    })
}

// 그라운드(Accordion Body)에 선수 그리기
const groundOnplayer = (detailData, index) => {
  //상세 조회 로직
  let homePlayerRows = JSON.parse(JSON.stringify(playerRows))
  let awayPlayerRows = JSON.parse(JSON.stringify(playerRows))
  let returnHomePlayers = {}
  let returnAwayPlayers = {}
  let matchInfoHome = detailData.matchInfo[0].player
  let matchInfoAway = detailData.matchInfo[1].player

  let maxSpRating1 = -Infinity
  let maxSpId1 = null
  let sumHomeSpRating = 0

  let maxSpRating2 = -Infinity
  let maxSpId2 = null
  let sumAwaySpRating = 0

  for (let i = matchInfoHome.length - 1; i >= 0; i--) {
    //home
    const homeItem = matchInfoHome[i]
    const homeSpRating = homeItem.status.spRating
    sumHomeSpRating += homeSpRating
    if (matchInfoHome[i].spPosition === 28) {
      matchInfoHome.splice(i, 1)
    } else {
      returnHomePlayers[matchInfoHome[i].spPosition] = matchInfoHome[i]
    }
    if (homeSpRating > maxSpRating1) {
      maxSpRating1 = homeSpRating
      maxSpId1 = homeItem.spId
    }

    //away
    const awayItem = matchInfoAway[i]
    const awaySpRating = awayItem.status.spRating
    sumAwaySpRating += awaySpRating

    if (matchInfoAway[i].spPosition === 28) {
      matchInfoAway.splice(i, 1)
    } else {
      returnAwayPlayers[matchInfoAway[i].spPosition] = matchInfoAway[i]
    }

    if (awaySpRating > maxSpRating2) {
      maxSpRating2 = awaySpRating
      maxSpId2 = awayItem.spId
    }
  }

  const maxSpId = maxSpRating1 > maxSpRating2 ? maxSpId1 : maxSpId2

  for (let i = 0; i < playerRows.length; i++) {
    for (let y = 0; y < playerRows[i].length; y++) {
      //home
      if (playerRows[i][y].position in returnHomePlayers) {
        homePlayerRows[i][y].spId = returnHomePlayers[playerRows[i][y].position].spId
        homePlayerRows[i][y].spRating = returnHomePlayers[playerRows[i][y].position].status.spRating.toFixed(1)
        homePlayerRows[i][y].status = returnHomePlayers[playerRows[i][y].position].status
        homePlayerRows[i][y].spGrade = returnHomePlayers[playerRows[i][y].position].spGrade

        let grade = homePlayerRows[i][y].spGrade
        if (grade < 2) {
          homePlayerRows[i][y].gradeColor = 'nomal'
        } else if (grade > 1 && grade <= 4) {
          homePlayerRows[i][y].gradeColor = 'bronze'
        } else if (grade > 4 && grade <= 7) {
          homePlayerRows[i][y].gradeColor = 'silver'
        } else {
          homePlayerRows[i][y].gradeColor = 'gold'
        }

        if (returnHomePlayers[playerRows[i][y].position].status.spRating < 7.0) {
          homePlayerRows[i][y].ratingColor = 'rateLow'
        } else if (returnHomePlayers[playerRows[i][y].position].status.spRating <= 8.0) {
          homePlayerRows[i][y].ratingColor = 'rateMid'
        } else if (returnHomePlayers[playerRows[i][y].position].status.spRating > 8.0) {
          homePlayerRows[i][y].ratingColor = 'rateHigh'
        }
        if (returnHomePlayers[playerRows[i][y].position].spId === maxSpId) {
          homePlayerRows[i][y].ratingColor = 'bestPlayer'
          homePlayerRows[i][y].spRating += '⭐️'
        }
      }
      //away
      if (playerRows[i][y].position in returnAwayPlayers) {
        awayPlayerRows[i][y].spId = returnAwayPlayers[playerRows[i][y].position].spId
        awayPlayerRows[i][y].spRating = returnAwayPlayers[playerRows[i][y].position].status.spRating.toFixed(1)
        awayPlayerRows[i][y].status = returnAwayPlayers[playerRows[i][y].position].status
        awayPlayerRows[i][y].spGrade = returnAwayPlayers[playerRows[i][y].position].spGrade

        let grade = awayPlayerRows[i][y].spGrade
        if (grade < 2) {
          awayPlayerRows[i][y].gradeColor = 'nomal'
        } else if (grade > 1 && grade <= 4) {
          awayPlayerRows[i][y].gradeColor = 'bronze'
        } else if (grade > 4 && grade <= 7) {
          awayPlayerRows[i][y].gradeColor = 'silver'
        } else {
          awayPlayerRows[i][y].gradeColor = 'gold'
        }

        if (returnAwayPlayers[playerRows[i][y].position].status.spRating < 7.0) {
          awayPlayerRows[i][y].ratingColor = 'rateLow'
        } else if (returnAwayPlayers[playerRows[i][y].position].status.spRating <= 8.0) {
          awayPlayerRows[i][y].ratingColor = 'rateMid'
        } else if (returnAwayPlayers[playerRows[i][y].position].status.spRating > 8.0) {
          awayPlayerRows[i][y].ratingColor = 'rateHigh'
        }
        if (returnAwayPlayers[playerRows[i][y].position].spId === maxSpId) {
          awayPlayerRows[i][y].ratingColor = 'bestPlayer'
          awayPlayerRows[i][y].spRating += '⭐️'
        }
      }
    }
  }

  totalData.response[index].homePlayerRows = homePlayerRows
  totalData.response[index].awayPlayerRows = awayPlayerRows
  totalData.response[index].matchInfo[0].matchDetail.playerRatingAvg = (sumHomeSpRating / 11).toFixed(1)
  totalData.response[index].matchInfo[1].matchDetail.playerRatingAvg = (sumAwaySpRating / 11).toFixed(1)
}

// 유저 프로필(승률 ..) 정보
const findUserWinning = (detail) => {
  let winCount = 0
  let winPossession = 0
  let avgGoal = 0

  for (let i = 0; i < 2; i++) {
    if (detail.matchInfo[i].accessId === totalData.findUserInfo.accessId) {
      if (detail.matchInfo[i].matchDetail.matchResult === '승') {
        detail.gameResult = 'win'
        detail.matchInfo[i].matchDetail.matchResult === '승' ? (winCount += 1) : winCount
      } else if (detail.matchInfo[i].matchDetail.matchResult === '무') {
        detail.gameResult = 'draw'
      } else {
        detail.gameResult = 'lose'
      }
      winPossession += detail.matchInfo[i].matchDetail.possession
      avgGoal += detail.matchInfo[i].shoot.goalTotal
    } else {
      const bestDivisionUrls2 = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${detail.matchInfo[i].accessId}/maxdivision`
      axios
        .get(bestDivisionUrls2, {
          headers: headers,
        })
        .then((res) => {
          resultData.otherDivisionInfo = res.data
        })
        .catch((error) => {
          if (error.response.status === 404) {
            console.log('실패')
          }
        })
    }
  }
  totalData.findUserInfo.winCount += winCount
  totalData.findUserInfo.winPossession += winPossession
  totalData.findUserInfo.avgGoal += avgGoal
}

// Axios 공통 함수
const axiosConnet = async (url, header, successCallback, failCallback) => {
  axios
    .get(url, {
      headers: header,
    })
    .then((res) => {
      if (res.data !== '') {
        successCallback(res)
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        failCallback(error.message)
      }
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '@/assets/css/matchList.css';
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
</style>
