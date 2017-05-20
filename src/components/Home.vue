<template>
	<div class="g-content-wrap">
		<p>{{msg}}</p>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				msg: 'This is home page!'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
	color: #f00;
}
</style>