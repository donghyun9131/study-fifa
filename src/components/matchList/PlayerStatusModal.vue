<template>
  <div class="player-modal">
    <div class="overlay" @click="openModal"></div>
    <div :class="{ 'modal-card': true, 'fade-in': props.popState, 'fade-out': !props.popState }">
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
            <dl class="statsRows">
              <dt class="playerStatsTitle">주요 지표</dt>
              <dd>
                <span class="playersStatSpan">평점</span><span class="playerStatText">{{ props.playerInfo.spRating }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">득점</span><span class="playerStatText">{{ props.playerInfo.status.goal }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">어시스트</span><span class="playerStatText">{{ props.playerInfo.status.assist }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">패스 성공률</span
                ><span class="playerStatText">{{ (props.playerInfo.status.passSuccess / props.playerInfo.status.passTry).toFixed(1) * 100 }}%</span>
              </dd>
              <hr />
              <dt class="playerStatsTitle">공격 지표</dt>
              <dd>
                <span class="playersStatSpan">슈팅 정확도</span>
                <span class="playerStatText" v-if="props.playerInfo.status.shoot !== 0">
                  {{ (props.playerInfo.status.effectiveShoot / props.playerInfo.status.shoot).toFixed(1) * 100 }}%
                </span>
                <span class="playerStatText" v-else> 0% </span>
              </dd>
              <dd>
                <span class="playersStatSpan">빗나간 슈팅</span
                ><span class="playerStatText">{{ props.playerInfo.status.shoot - props.playerInfo.status.effectiveShoot }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">유효 슈팅</span><span class="playerStatText">{{ props.playerInfo.status.effectiveShoot }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">전체 슛</span><span class="playerStatText">{{ props.playerInfo.status.shoot }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">득점</span><span class="playerStatText">{{ props.playerInfo.status.goal }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">어시스트</span><span class="playerStatText">{{ props.playerInfo.status.assist }}</span>
              </dd>
              <hr />
              <dt class="playerStatsTitle">수비 지표</dt>
              <dd>
                <span class="playersStatSpan">인터셉트</span><span class="playerStatText">{{ props.playerInfo.status.intercept }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">디펜딩</span><span class="playerStatText">{{ props.playerInfo.status.defending }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">블락 시도</span><span class="playerStatText">{{ props.playerInfo.status.blockTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">블락 성공</span><span class="playerStatText">{{ props.playerInfo.status.block }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">태클 시도</span><span class="playerStatText">{{ props.playerInfo.status.tackleTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">태클 성공</span><span class="playerStatText">{{ props.playerInfo.status.tackle }}</span>
              </dd>
              <hr />
              <dt class="playerStatsTitle">공통 지표</dt>
              <dd><span class="playersStatSpan">패스 성공률</span><span class="playerStatText">91%</span></dd>
              <dd>
                <span class="playersStatSpan">패스 시도</span><span class="playerStatText">{{ props.playerInfo.status.passTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">패스 성공</span><span class="playerStatText">{{ props.playerInfo.status.passSuccess }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">드리블 시도</span><span class="playerStatText">{{ props.playerInfo.status.dribbleTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">드리블 성공</span><span class="playerStatText">{{ props.playerInfo.status.dribbleSuccess }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">볼 소유 시도</span><span class="playerStatText">{{ props.playerInfo.status.ballPossesionTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">볼 소유 성공</span><span class="playerStatText">{{ props.playerInfo.status.ballPossesionSuccess }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">공중볼 경합 시도</span><span class="playerStatText">{{ props.playerInfo.status.aerialTry }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">공중볼 경합 성공</span><span class="playerStatText">{{ props.playerInfo.status.aerialSuccess }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">옐로 카드</span><span class="playerStatText">{{ props.playerInfo.status.yellowCards }}</span>
              </dd>
              <dd>
                <span class="playersStatSpan">레드 카드</span><span class="playerStatText">{{ props.playerInfo.status.redCards }}</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  popState: {
    type: Boolean,
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
