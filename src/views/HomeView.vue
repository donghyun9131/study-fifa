<template>
  <div class="background-video">
    <video src="/videos/190312_28_StadioOlimpicoAndFans_Drone_003.mp4" autoplay muted loop></video>
  </div>
  <MatchList msg="Welcome to Your Vue.js App" />
</template>

<script>
// @ is an alias to /src
import MatchList from '@/components/MatchList.vue'

export default {
  name: 'HomeView',
  components: {
    MatchList,
  },
}
</script>
