<template>
  <div class="playersCard" v-for="players in rows" :key="players">
    <div class="playerImgDiv active" v-if="players.value !== ''">
      <div :class="'score ' + players.ratingColor">{{ players.spRating }}</div>
      <img
        :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p' + Number(players.value.toString().slice(-6)) + '.png'"
        :alt="emitFindPlayer(players.value)"
        class="playerImg"
      />
    </div>
    <div class="css-18wvhjm active" v-if="players.value !== ''">
      <div color="#212121" class="playerPosition" :id="allPosition[players.key]">{{ allPosition[players.key] }}</div>
      <div color="#FFFFFF" class="playerName">{{ emitFindPlayer(players.value) }}</div>
      <div class="goalBox" v-if="players.goal !== 0">
        <img src="@/assets/축구공.png" style="width: 15px; height: 15px" v-for="goals in players.goal" :key="goals" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    require: true,
  },
  allPosition: {
    type: Object,
    require: true,
  },
  findPlayer: {
    type: Function,
    require: true,
  },
})

const rows = ref(props.rows)
const allPosition = ref(props.allPosition)

const emitFindPlayer = (division) => {
  return props.findPlayer(division)
}
</script>

<style></style>
