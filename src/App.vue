<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import {login} from './api/apiUrl'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  methods:{
    getLogin(){
      let params={
        username: 'wangjianhua',
      }
      login(params).then(res=>{
        console.log(res);
      })
    }
  },
  mounted(){
    this.getLogin();
  },
  computed:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
