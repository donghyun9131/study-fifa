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
                    <div class="rightPlayers">
                      <div class="playersCard"></div>
                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[7] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[7] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[7]">{{ allPosition[7] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[7]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[8] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[8] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[8]">{{ allPosition[8] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[8]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[16] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[16] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[16]">{{ allPosition[16] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[16]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[27] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[27] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[27]">{{ allPosition[27] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[27]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard"></div>
                    </div>
                    <div class="rightPlayers">
                      <div class="playersCard"></div>
                      <div class="playersCard"></div>
                      <div class="playersCard" v-if="returnHomePlayers[6] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[6] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[6]">{{ allPosition[6] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[6]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[11] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[11] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[11]">{{ allPosition[11] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[11]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[15] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[15] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[15]">{{ allPosition[15] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[15]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[19] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[19] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[19]">{{ allPosition[19] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[19]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[22] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[22] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[22]">{{ allPosition[22] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[22]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[26] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[26] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[26]">{{ allPosition[26] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[26]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>
                    </div>
                    <div class="rightPlayers">
                      <div class="playersCard" v-if="returnHomePlayers[0] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p' + returnHomePlayers[0].toString().slice(-6) + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[0]">{{ allPosition[0] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[0]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[1] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[1] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[1]">{{ allPosition[1] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[1]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[10] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[10] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[10]">{{ allPosition[10] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[10]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[14] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[14] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[14]">{{ allPosition[14] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[14]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[18] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[18] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[18]">{{ allPosition[18] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[18]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[21] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[21] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[21]">{{ allPosition[21] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[21]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[25] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[25] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[25]">{{ allPosition[25] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[25]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>
                    </div>
                    <div class="rightPlayers">
                      <div class="playersCard"></div>
                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[4] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[4] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[4]">{{ allPosition[4] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[4]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[9] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[9] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[9]">{{ allPosition[9] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[9]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[13] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[13] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[13]">{{ allPosition[13] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[13]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[17] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[17] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[17]">{{ allPosition[17] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[17]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[20] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[20] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[20]">{{ allPosition[20] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[20]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[24] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[24] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[24]">{{ allPosition[24] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[24]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>
                    </div>
                    <div class="rightPlayers">
                      <div class="playersCard"></div>

                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[3] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[3] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[3]">{{ allPosition[3] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[3]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[2] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[2] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[2]">{{ allPosition[2] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[2]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard" v-if="returnHomePlayers[12] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[12] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[12]">{{ allPosition[12] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[12]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard"></div>

                      <div class="playersCard" v-if="returnHomePlayers[23] !== undefined">
                        <div class="playerImgDiv">
                          <img
                            :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[23] + '.png'"
                            alt="벤제마"
                            class="playerImg"
                          />
                        </div>
                        <div class="css-18wvhjm">
                          <div color="#212121" class="playerPosition" :id="allPosition[23]">{{ allPosition[23] }}</div>
                          <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[23]) }}</div>
                        </div>
                      </div>
                      <div class="playersCard" v-else></div>

                      <div class="playersCard"></div>
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
import { reactive, onMounted, ref } from 'vue'

const visible = reactive({ 'accordion-1': false, 'accordion-2': false, 'accordion-3': false })
const resultData = reactive({ nickname: '', response: [], userNotFound: false })
const returnHomePlayers = reactive({})
const returnAwayPlayers = reactive({})
const allPlayers = ref([])
const allPosition = ref({})

onMounted(async () => {
  allPosition.value = {
    0: 'GK',
    1: 'SW',
    2: 'RWB',
    3: 'RB',
    4: 'RCB',
    5: 'CB',
    6: 'LCB',
    7: 'LB',
    8: 'LWB',
    9: 'RDM',
    10: 'CDM',
    11: 'LDM',
    12: 'RM',
    13: 'RCM',
    14: 'CM',
    15: 'LCM',
    16: 'LM',
    17: 'RAM',
    18: 'CAM',
    19: 'LAM',
    20: 'RF',
    21: 'CF',
    22: 'LF',
    23: 'RW',
    24: 'RS',
    25: 'ST',
    26: 'LS',
    27: 'LW',
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
      console.log(allPlayers.value)
      console.log(allPosition.value[7])
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
    // if (allPlayers.value[index].name.split(' ')[0] === '비니시우스') {
    //   return allPlayers.value[index].name.split(' ')[0]
    // } else {
    //   return allPlayers.value[index].name.split(' ')[1]
    // }
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
          // for (let i = totalRowCount.value - 1; i >= 0; i--) {
          //   if (i > 27) {
          //     returnHomePlayers.push({ spPosition: i })
          //     returnAwayPlayers.push({ spPosition: i })
          //   }
          // }

          for (let i = matchInfoHome.length - 1; i >= 0; i--) {
            returnHomePlayers[matchInfoHome[i].spPosition] = matchInfoHome[i].spId
            // document.getElementById('homePosition' + matchInfoHome[i].spPosition).innerHTML = `<div class="playerImgDiv">
            //               <img src="https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${matchInfoHome[i].spid}.png" alt="벤제마" class="playerImg" />
            //             </div>
            //             <div class="css-18wvhjm">
            //               <div color="#212121" class="playerPosition">CAM</div>
            //               <div color="#FFFFFF" class="playerName">벤제마</div>
            //             </div>`
          }

          for (let i = matchInfoAway.length - 1; i >= 0; i--) {
            returnAwayPlayers[matchInfoAway[i].spPosition] = matchInfoAway[i].spId
            // document.getElementById('awayPosition' + matchInfoAway[i].spPosition).innerHTML = `<div class="playerImgDiv">
            //               <img src="https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${matchInfoAway[i].spid}.png" alt="벤제마" class="playerImg" />
            //             </div>
            //             <div class="css-18wvhjm">
            //               <div color="#212121" class="playerPosition">CAM</div>
            //               <div color="#FFFFFF" class="playerName">벤제마</div>
            //             </div>`
          }

          console.log(returnHomePlayers[3])
          console.log(returnAwayPlayers[2])
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
.background {
  height: 500px;
  background-image: url('../assets/그라운드.svg');
  display: flex;
}
.rightPlayers {
  display: flex;
}

.playersBoard {
  width: 50%;
  height: 100%;
  position: relative;
}
.playersCard {
  width: 100%;
  height: 100px;
}
.playerImgDiv {
  width: 55px;
  height: 60%;
  background: rgb(51, 154, 240);
  border: 2px solid rgba(173, 181, 189, 0.54);
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  align-items: center;
}
.playerImg {
  border-radius: 50%;
  width: 50px;
}
.playerPosition {
  text-align: center;
  min-width: 4rem;
  padding: 0px 0.2rem;
  font-size: 0.7rem;
  color: rgb(33, 33, 33);
  background: rgb(255, 212, 59);
  border-radius: 0.4rem;
}
.playerName {
  text-align: center;
  min-width: 4rem;
  padding: 0px 0.2rem;
  font-size: 0.1rem;
  color: rgb(254, 255, 251);
  background: rgb(117, 117, 115);
  border-radius: 0.4rem;
}
.playerWrab {
  width: 50%;
  margin: 0px auto;
}
.css-18wvhjm {
  width: 80%;
  margin: 0px auto;
}
#away {
  transform: rotate(180deg);
}
#away .playersCard {
  transform: rotate(-180deg);
}
#SW,
#RWB,
#RB,
#CB,
#LCB,
#RCB,
#LB,
#LWB {
  background: rgb(77, 171, 247);
}
#RF,
#CF,
#LF,
#RW,
#RS,
#ST,
#LS,
#LW {
  background: rgb(255, 107, 107);
}
#RDM,
#CDM,
#LDM,
#RM,
#RCM,
#CM,
#LCM,
#LM,
#RAM,
#CAM,
#LAM {
  background: rgb(81, 207, 102);
}
</style>
