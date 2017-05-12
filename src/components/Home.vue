<template>
	<div class="page">
		<div id="home">home</div>
		<div id="hello">hello</div>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				msg: 'welcome'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#home{
		background: red;
	}
</style>