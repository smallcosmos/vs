<template>
	<div id="hello">hello</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				msg: 'hello'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	#hello{
		background: blue;
	}
</style>