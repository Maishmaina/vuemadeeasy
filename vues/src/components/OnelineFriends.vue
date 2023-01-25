<template>
	<div id="onlinefriends">
		<h2>Online frinds</h2>

		<div v-for="(friend,index) in friends" :key="index">
			<h6 v-if="friend.online">{{friend.name}}</h6>
		</div>
	</div>
</template>
<script>
	export default{
		name:'OnelineFriends',
		props:['friends'],
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
#onlinefriends{
	display: none;
}
</style>