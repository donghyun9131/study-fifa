<template>
  <div class="matchStatCover">
    <div class="matchStats">
      <div class="statTitle">평균 평점</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].matchDetail.playerRatingAvg }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].matchDetail.playerRatingAvg }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">슈팅</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].shoot.shootTotal }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].shoot.shootTotal }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">유효 슈팅</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].shoot.effectiveShootTotal }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].shoot.effectiveShootTotal }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle" v>점유율(%)</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].matchDetail.possession }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].matchDetail.possession }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">패스 성공률(%)</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{
          (props.resultData.matchInfo[0].pass.passSuccess / props.resultData.matchInfo[0].pass.passTry).toFixed(2) * 100
        }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{
          (props.resultData.matchInfo[1].pass.passSuccess / props.resultData.matchInfo[1].pass.passTry).toFixed(2) * 100
        }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">코너킥</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].matchDetail.cornerKick }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].matchDetail.cornerKick }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">태클</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].defence.tackleSuccess }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].defence.tackleSuccess }}</span>
      </div>
    </div>
    <div class="matchStats">
      <div class="statTitle">파울</div>
      <div class="statDiv">
        <span :class="props.resultData.matchInfo[0].matchDetail.matchResult">{{ props.resultData.matchInfo[0].matchDetail.foul }}</span>
        <span class="dividLine"> | </span>
        <span :class="props.resultData.matchInfo[1].matchDetail.matchResult">{{ props.resultData.matchInfo[1].matchDetail.foul }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  resultData: {
    type: Object,
    require: true,
  },
})
</script>
<style></style>
