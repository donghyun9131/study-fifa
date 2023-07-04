<template>
  <div>
    <input type="text" v-model="nickname">
    <button @click="submitButton">검색</button>
    <div v-if="userNotFound">유저를 찾을 수 없습니다.</div>
    <div v-else>
      <div v-for="result in response" :key="result.matchId">
        <hr>
        <ul>
          <li>{{ result.matchDate }}</li>
          <li>{{ result.matchType }}</li>
          <li>{{ result.matchInfo[0].nickname }} {{result.matchInfo[0].matchDetail.matchResult }}</li>
          <li>{{ result.matchInfo[1].nickname }} {{result.matchInfo[1].matchDetail.matchResult }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nickname: '',
      response: [],
      userNotFound: false,
      
    };
  },
  methods: {
    submitButton() {
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM4Njg2NzczNyIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNzAzNTY4NTg1LCJpYXQiOjE2ODgwMTY1ODUsIm5iZiI6MTY4ODAxNjU4NSwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.07txWeL2lyLvtYvTcCVpGTRQpD5GZ7I9lQH6nnsXD1g'
      };

      axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${this.nickname}`, { // 유저 조회 (닉네임)
        headers: headers
      }).then(res => {
            const urls = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${res.data.accessId}/matches?matchtype=50&offset=0&limit=3`  // 유저 매치기록
            
            axios.get(urls, {
              headers: headers
            }).then(res => {
              this.response.splice(0);  // 배열 초기화 로직
              res.data.forEach(element => {

                const urls2 = `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${element}`  // 매치 상세조회
              
                axios.get(urls2, {
                  headers: headers
                }).then(res => {
                  this.response.push(res.data);
                }).catch(error => {
                  console.error(error); //
                  if(error.response.status === 404){
                    this.response = JSON.stringify(error.message);
                  } 
                });
              
              });
              console.log(this.response)

            }).catch(error => {
              console.error(error); //
              if(error.response.status === 404){
                this.response = JSON.stringify(error.message);
              } 
            });
            
      }).catch(error => {
        console.error(error); //
        if(error.response.status === 404){
          this.response = JSON.stringify(error.message);
        } 
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
