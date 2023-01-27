import { createApp } from 'vue'
import App from './App.vue'

//Globally filters created |snippet

// Vue.filter('snippet',val=>{
// 	if(!val || typeof(val) !='string') return ''
// 	val= val.slice(0,100)
// 	return val	
// })
createApp(App).mount('#app')
