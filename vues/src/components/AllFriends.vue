<template>
	<div id="allfriends">
		<h2>All frinds</h2>
		<div v-for="(friend,index) in friends" :key="index">
			<h6 @click="unfriend(friend.name)">{{friend.name}}</h6>
		</div>
	</div>
</template>
<script>
	export default{
		name:'AllFriends',
		props:['friends'],
		data(){
			return{
				
			}
		},
		methods:{
			unfriend(name){
				this.$emit('delete',{name})
			}
		}
	}
	
</script>
<style scoped>
h6 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#allfriends{
	display: none;
}
</style>