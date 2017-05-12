<template>
	<div id="app">
		<img src="./assets/img/logo.png" />
    	<router-view></router-view>
	</div>
</template>

<script>
	module.exports = {
		name: 'test'
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	background: green;
}
</style>