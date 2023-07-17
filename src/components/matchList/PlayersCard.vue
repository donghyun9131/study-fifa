<template>
  <div class="playersCard" v-for="players in rows" :key="players">
    <div class="playerImgDiv active" v-if="players.spId !== ''" @click="closeModal([players.spId, players])">
      <div :class="'score ' + players.ratingColor">{{ players.spRating }}</div>
      <img
        :src="'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p' + Number(players.spId.toString().slice(-6)) + '.png'"
        :alt="emitFindPlayer(players.spId)"
        class="playerImg"
      />
    </div>
    <div class="css-18wvhjm active" v-if="players.spId !== ''">
      <div color="#212121" class="playerPosition" :id="allPosition[players.position]">{{ allPosition[players.position] }}</div>
      <div color="#FFFFFF" class="playerName">{{ emitFindPlayer(players.spId) }}</div>
      <div class="goalBox" v-if="players.status.goal !== 0">
        <img src="@/assets/축구공.png" style="width: 15px; height: 15px" v-for="goals in players.status.goal" :key="goals" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'

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

const emits = defineEmits(['close'])

const closeModal = (params) => {
  emits('close', [params[0], params[1]])
}
const rows = ref(props.rows)
const allPosition = ref(props.allPosition)

const emitFindPlayer = (division) => {
  return props.findPlayer(division)
}
</script>

<style></style>
