<template>
  <b-container fluid="sm">
    <div>
      <b-row class="justify-content-md-center p-3">
        <b-col cols="12" md="auto">
          <b-input-group size="lg" class="mb-5">
            <b-form-input v-model="resultData.nickname" placeholder="닉네임 입력.."></b-form-input>
            <b-input-group-append>
              <b-button size="lg" text="Button" variant="success" @click="submitButton">검색</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
    <div v-if="resultData.userNotFound">{{ resultData.response[0] }}</div>
    <div v-else>
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-3"
          v-for="(result, index) in resultData.response"
          :key="result.matchId"
          style="background: rgb(225, 239, 255); border-inline-start: 8px solid rgb(0, 114, 245); border-radius: 30px"
        >
          <b-card-header header-tag="header" class="p-1" role="tab" @click="toggleCollapse('accordion-' + (index + 1))" style="border: none">
            <div style="display: flex; justify-content: space-between; padding: 20px 10px; align-items: center">
              <div>
                <div>2023-05-05</div>
                <div>16:44:32</div>
              </div>
              <div>
                {{ result.matchType === 50 ? '[일반]' : '[친선]' }} {{ result.matchInfo[0].nickname }} ({{ result.matchInfo[0].matchDetail.matchResult }}) VS
                {{ result.matchInfo[1].nickname }} ({{ result.matchInfo[1].matchDetail.matchResult }})
              </div>
              <div></div>
            </div>
          </b-card-header>
          <b-collapse :id="'accordion-' + (index + 1)" accordion="my-accordion" role="tabpanel" :visible="visible['accordion-' + (index + 1)]">
            <b-card-body>
              <b-card>
                <div class="background">
                  <div class="playersBoard" id="home">
                    <div class="rightPlayers" v-for="rows in playerRows" :key="rows">
                      <div class="playersCard" v-for="players in rows" :key="players">
                        <div class="playerImgDiv" v-if="players.value !== ''">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + players.value + '.png'"
                            alt="벤제마"
                            class="playerImg"
                            v-if="players.key !== '0'"
                          />
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p' + players.value.toString().slice(-6) + '.png'"
                            alt="벤제마"
                            class="playerImg"
                            v-else
                          />
                        </div>
                        <div class="css-18wvhjm" v-if="players.value !== ''">
                          <div color="#212121" class="playerPosition" :id="allPosition[players.key]">{{ allPosition[players.key] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(players.value) }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script setup>
import axios from 'axios'
import { reactive, onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'

const visible = reactive({ 'accordion-1': false, 'accordion-2': false, 'accordion-3': false })
const resultData = reactive({ nickname: '', response: [], userNotFound: false })
const returnHomePlayers = reactive({})
const returnAwayPlayers = reactive({})
const allPlayers = ref([])
const allPosition = ref({})
const store = useStore()
const positions = computed(() => store.state.positions)
const playerRows = reactive(computed(() => store.state.playerRows).value)

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
})

const toggleCollapse = (propName) => {
  visible[propName] = !visible[propName]
}

const findPlayer = (spId) => {
  const index = allPlayers.value.findIndex((item) => {
    // item은 현재 배열 요소이므로 원하는 value 값을 포함한 객체 구조에 맞게 수정해야 합니다.
    const value = item.id // 예를 들어, value라는 속성을 비교한다고 가정합니다.
    return value === spId
  })

  if (index !== -1) {
    const playerName = allPlayers.value[index].name
    if (playerName.includes(' ')) {
      const splittedName = playerName.split(' ')
      if (allPlayers.value[index].name.split(' ')[0] === '비니시우스') {
        return allPlayers.value[index].name.split(' ')[0]
      } else {
        return splittedName.slice(1).join(' ')
      }
    } else {
      return playerName
    }
  }
}

const submitButton = () => {
  resultData.response.splice(0) //API result 초기화
  resultData.userNotFound = false //API result 초기화
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM4Njg2NzczNyIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNzAzNTY4NTg1LCJpYXQiOjE2ODgwMTY1ODUsIm5iZiI6MTY4ODAxNjU4NSwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.07txWeL2lyLvtYvTcCVpGTRQpD5GZ7I9lQH6nnsXD1g',
  }
  //닉네임으로 유저 조회 url
  const findUserApiUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${resultData.nickname}`

  //닉네임으로 유저 조회 성공 콜백
  const findUserApiCallback = (apiResult) => {
    //찾은 유저의 경기 기록 조회 url
    const urls = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${apiResult.data.accessId}/matches?matchtype=50&offset=0&limit=1`

    //경기 기록 조회 성공 콜백
    const matchInfoCallback = (apiResult) => {
      apiResult.data.forEach((element) => {
        const urls2 = `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${element}` // 매치 상세조회 url

        //경기 기록 상세 조회 콜백
        const matchDetailCallback = (apiResult) => {
          resultData.response.push(apiResult.data)
          let matchInfoHome = apiResult.data.matchInfo[0].player
          let matchInfoAway = apiResult.data.matchInfo[1].player

          for (let i = matchInfoHome.length - 1; i >= 0; i--) {
            if (matchInfoHome[i].spPosition === 28) {
              matchInfoHome.splice(i, 1)
            }
            if (matchInfoAway[i].spPosition === 28) {
              matchInfoAway.splice(i, 1)
            }
          }

          for (let i = matchInfoHome.length - 1; i >= 0; i--) {
            returnHomePlayers[matchInfoHome[i].spPosition] = matchInfoHome[i].spId
            returnAwayPlayers[matchInfoAway[i].spPosition] = matchInfoAway[i].spId
          }

          for (const groupItem of playerRows) {
            for (const item of groupItem) {
              if (item.key in returnHomePlayers) {
                item.value = returnHomePlayers[item.key]
              }
            }
          }
        }

        //경기 기록 상세 조회 실패 콜백
        const matchDetailFailCallback = (apiErrorResult) => {
          resultData.userNotFound = true
          resultData.response.push(apiErrorResult.message)
        }

        //경기 기록 상세 조회 API
        axiosConnet(urls2, headers, matchDetailCallback, matchDetailFailCallback)
      })
    }

    //경기 기록 조회 실패 콜백
    const mathInfoFailCallback = (apiErrorResult) => {
      resultData.userNotFound = true
      resultData.response.push(apiErrorResult.message)
    }

    //유저의 경기 기록 조회 API
    axiosConnet(urls, headers, matchInfoCallback, mathInfoFailCallback)
  }

  //닉네임으로 유저 조회 실패 콜백
  const findUserApiFailCallback = (apiErrorResult) => {
    resultData.userNotFound = true
    resultData.response.push(apiErrorResult.message)
  }

  //닉네임으로 유저 조회 API
  axiosConnet(findUserApiUrl, headers, findUserApiCallback, findUserApiFailCallback)
}

const axiosConnet = (url, header, successCallback, failCallback) => {
  axios
    .get(url, {
      headers: header,
    })
    .then((res) => {
      successCallback(res)
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
</style>
