<template>
  <div class="player-modal">
    <div class="overlay" @click="openModal"></div>
    <div class="modal-card">
      <div class="modal-contnet">
        <!-- <div class="modal-header" style="display: flex; justify-content: end">
          <button style="background: transparent; border: 0px">X</button>
        </div> -->
        <div class="modal-body">
          <div class="seasonCardImg" :style="'background-image:url(' + props.playerInfo.playerInfo.seasonCardImg + ')'">
            <img :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p' + props.playerInfo.spId + '.png'" class="seasonPlayerImg" />
            <img
              :src="'https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/' + props.playerInfo.playerInfo.className + '_big.png'"
              class="seasonLogoImg"
            />
            <div class="playerInfoName">
              <img :src="props.playerInfo.playerInfo.seasonImg" style="padding-right: 10px" />
              {{ props.playerInfo.playerName }}
            </div>
            <div class="playerInfoName">
              <div :class="'gradeNum ' + props.playerInfo.gradeColor">{{ props.playerInfo.spGrade }}</div>
            </div>
          </div>
          <div class="playerStats">
            <ul class="statsRows">
              <span class="playerStatsTitle">주요 지표</span>
              <li>
                <span class="playersStatSpan">평점</span><span>{{ props.playerInfo.spRating }}</span>
              </li>
              <li>
                <span class="playersStatSpan">득점</span><span>{{ props.playerInfo.status.goal }}</span>
              </li>
              <li>
                <span class="playersStatSpan">어시스트</span><span>{{ props.playerInfo.status.assist }}</span>
              </li>
              <li>
                <span class="playersStatSpan">패스 성공률</span
                ><span>{{ (props.playerInfo.status.passSuccess / props.playerInfo.status.passTry).toFixed(1) * 100 }}%</span>
              </li>
            </ul>
            <ul class="statsRows">
              <span class="playerStatsTitle">공격 지표</span>
              <li>
                <span class="playersStatSpan">슈팅 정확도</span>
                <span class="playersStatSpan" v-if="props.playerInfo.status.shoot !== 0">
                  {{ (props.playerInfo.status.effectiveShoot / props.playerInfo.status.shoot).toFixed(1) * 100 }}%
                </span>
                <span v-else> 0% </span>
              </li>
              <li>
                <span class="playersStatSpan">빗나간 슈팅</span><span>{{ props.playerInfo.status.shoot - props.playerInfo.status.effectiveShoot }}</span>
              </li>
              <li>
                <span class="playersStatSpan">유효 슈팅</span><span>{{ props.playerInfo.status.effectiveShoot }}</span>
              </li>
              <li>
                <span class="playersStatSpan">전체 슛</span><span>{{ props.playerInfo.status.shoot }}</span>
              </li>
              <li>
                <span class="playersStatSpan">득점</span><span>{{ props.playerInfo.status.goal }}</span>
              </li>
              <li>
                <span class="playersStatSpan">어시스트</span><span>{{ props.playerInfo.status.assist }}</span>
              </li>
            </ul>
            <ul class="statsRows">
              <span class="playerStatsTitle">수비 지표</span>
              <li>
                <span class="playersStatSpan">인터셉트</span><span>{{ props.playerInfo.status.intercept }}</span>
              </li>
              <li>
                <span class="playersStatSpan">디펜딩</span><span>{{ props.playerInfo.status.defending }}</span>
              </li>
              <li>
                <span class="playersStatSpan">블락 시도</span><span>{{ props.playerInfo.status.blockTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">블락 성공</span><span>{{ props.playerInfo.status.block }}</span>
              </li>
              <li>
                <span class="playersStatSpan">태클 시도</span><span>{{ props.playerInfo.status.tackleTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">태클 성공</span><span>{{ props.playerInfo.status.tackle }}</span>
              </li>
            </ul>
            <ul class="statsRows">
              <span class="playerStatsTitle">공통 지표</span>
              <li><span class="playersStatSpan">패스 성공률</span><span>91%</span></li>
              <li>
                <span class="playersStatSpan">패스 시도</span><span>{{ props.playerInfo.status.passTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">패스 성공</span><span>{{ props.playerInfo.status.passSuccess }}</span>
              </li>
              <li>
                <span class="playersStatSpan">드리블 시도</span><span>{{ props.playerInfo.status.dribbleTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">드리블 성공</span><span>{{ props.playerInfo.status.dribbleSuccess }}</span>
              </li>
              <li>
                <span class="playersStatSpan">볼 소유 시도</span><span>{{ props.playerInfo.status.ballPossesionTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">볼 소유 성공</span><span>{{ props.playerInfo.status.ballPossesionSuccess }}</span>
              </li>
              <li>
                <span class="playersStatSpan">공중볼 경합 시도</span><span>{{ props.playerInfo.status.aerialTry }}</span>
              </li>
              <li>
                <span class="playersStatSpan">공중볼 경합 성공</span><span>{{ props.playerInfo.status.aerialSuccess }}</span>
              </li>
              <li>
                <span class="playersStatSpan">옐로 카드</span><span>{{ props.playerInfo.status.yellowCards }}</span>
              </li>
              <li>
                <span class="playersStatSpan">레드 카드</span><span>{{ props.playerInfo.status.redCards }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modalData: {
    type: String,
    require: true,
  },
  playerInfo: {
    type: Object,
    require: true,
  },
})

const emits = defineEmits(['close', 'findSeason'])

const openModal = () => {
  emits('close', false)
}

// const emitFindSeasion = () => {
//   emits('findSeason', false)
// }
</script>
