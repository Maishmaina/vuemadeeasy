<template>
<h1>{{axiost}}</h1><hr/>
<input type="text" v-model="searchTeam" placeholder="Search">
	<table>
		<thead>
			<tr>
				<th>NO</th>
				<th>Heading</th>
				<th>Body</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="post in filtersearch" :key="post.id">
				<td>{{post.id}}</td>
				<td>{{post.title}}</td>
				<td>{{post.body}}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	import axios from "axios"
	export default{
		name:'AxiosResult',
		data(){
			return{
				axiost:"Axios Request",
				posts:[],
				searchTeam: ''
			}
		},
		computed:{
			filtersearch(){
				return this.posts.filter(post=>{
					return post.title.match(this.searchTeam)
				})
			}
		},
		methods:{

		},
		created(){
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response=>{
				this.posts=response.data
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>
<style scoped>
h1{
	color: red;
	text-align: center;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>