<template>
<h1>{{test}}</h1>
<button @click="updater">me</button>
</template>
<script>
	export default{
		name:'HookWStudy',
		data(){
			return{
				test:"current state is up"
			}
		},
		methods:{
			updater(){
				this.test="New state has been fired"
			}
		},
		beforeCreate(){
			alert('Before Created HookWStudy')
		},
		created(){
			alert('After created HookWStudy')
		},
		beforeUpdate(){
			alert('its before updaed')
		}
	}
</script>
<style>

</style>