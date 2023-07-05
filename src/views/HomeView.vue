<template>
  <div class="home">
    <MatchList msg="Welcome to Your Vue.js App" />
  </div>
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
