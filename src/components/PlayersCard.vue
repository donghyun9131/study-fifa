<template>
  <div class="rightPlayers">
    <div class="playersCard"></div>
    <div class="playersCard"></div>

    <div class="playersCard" v-if="returnHomePlayers[7] !== undefined">
      <div class="playerImgDiv">
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[7] + '.png'" alt="벤제마" class="playerImg" />
      </div>
      <div class="css-18wvhjm">
        <div color="#212121" class="playerPosition" :id="allPosition[7]">{{ allPosition[7] }}</div>
        <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[7]) }}</div>
      </div>
    </div>
    <div class="playersCard" v-else></div>

    <div class="playersCard" v-if="returnHomePlayers[8] !== undefined">
      <div class="playerImgDiv">
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[8] + '.png'" alt="벤제마" class="playerImg" />
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
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[6] + '.png'" alt="벤제마" class="playerImg" />
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
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[1] + '.png'" alt="벤제마" class="playerImg" />
      </div>
      <div class="css-18wvhjm">
        <div color="#212121" class="playerPosition" :id="allPosition[1]">{{ allPosition[1] }}</div>
        <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[1]) }}</div>
      </div>
    </div>
    <div class="playersCard" v-else-if="returnHomePlayers[5] !== undefined">
      <div class="playerImgDiv">
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[5] + '.png'" alt="벤제마" class="playerImg" />
      </div>
      <div class="css-18wvhjm">
        <div color="#212121" class="playerPosition" :id="allPosition[5]">{{ allPosition[5] }}</div>
        <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[5]) }}</div>
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
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[4] + '.png'" alt="벤제마" class="playerImg" />
      </div>
      <div class="css-18wvhjm">
        <div color="#212121" class="playerPosition" :id="allPosition[4]">{{ allPosition[4] }}</div>
        <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[4]) }}</div>
      </div>
    </div>
    <div class="playersCard" v-else></div>

    <div class="playersCard" v-if="returnHomePlayers[9] !== undefined">
      <div class="playerImgDiv">
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[9] + '.png'" alt="벤제마" class="playerImg" />
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
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[3] + '.png'" alt="벤제마" class="playerImg" />
      </div>
      <div class="css-18wvhjm">
        <div color="#212121" class="playerPosition" :id="allPosition[3]">{{ allPosition[3] }}</div>
        <div color="#FFFFFF" class="playerName">{{ findPlayer(returnHomePlayers[3]) }}</div>
      </div>
    </div>
    <div class="playersCard" v-else></div>

    <div class="playersCard" v-if="returnHomePlayers[2] !== undefined">
      <div class="playerImgDiv">
        <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + returnHomePlayers[2] + '.png'" alt="벤제마" class="playerImg" />
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
</template>

<script>
export default {}
</script>

<style></style>
