<template>
<div id="app">
  <h2>{{title}}</h2>
  <Navbar></Navbar>
  <AllFriends :friends="friends" @delete="deleteFriend"></AllFriends>
  <OnelineFriends :friends="friends"></OnelineFriends>
  <AxiosResult></AxiosResult>
</div>
</template>
<script>

import Navbar from './components/Navbar.vue'
import AllFriends from './components/AllFriends.vue'
import OnelineFriends from './components/OnelineFriends.vue'
// import HookWStudy from "./components/Hook.vue"
import AxiosResult from "./components/Axios.vue"


export default {
  name: 'App',
  data(){
    return {
      title:'Title vue app running',
      friends:[
          {name:'A',online:true},
          {name:'B',online:false},
          {name:'C',online:true},
          {name:'D',online:false},
          {name:'E',online:true}
          ]
    }
  },
  components:{
    Navbar,
    AllFriends,
    OnelineFriends,
    AxiosResult
  },
  methods:{
    deleteFriend(payload){
        // console.log(payload);
      this.friends=this.friends.filter(friend=>{
        return friend.name !== payload.name
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*
VUEJS PATH 
study line

->Pass props from parent to child.
->Pass props from child to parent.
->Lifecycle event Hook.options beroreCreate,
->Axios call request
-> vue filter removed in vuejs 3 issue
->
->
->
->
->
->
->

*/
</style>
