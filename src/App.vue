<template>
	<div id="app">
		<div class="g-header"></div>
		<div class="g-body">
			<div class="g-leftmenu f-cb">
				<ul>
					<li><div><a href="#">Home</a></div></li>
					<li><div><a href="#/hello">Hello</a></div></li>
				</ul>
			</div>
			<div class="g-content">
				<router-view></router-view>
			</div>
		</div>
		<div class="g-footer">
			<div class="u-support"><a href="#">SUPPORT</a></div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name: 'app'
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
	height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 14px;
	text-align: center;
	color: #2c3e50;
}
.g-header{
	height: 80px;
	background: #c9efc0;
}
.g-body{
	height: 100%;
	min-height: 800px;
	background: #fff;
}
.g-leftmenu{
	float: left;
	height: 100%;
	width: 200px;
	padding: 20px 0;
	background: #d6f1fc;
}
.g-leftmenu ul li div{
	display: table;
	height: 40px;
	width: 100%;
}
.g-leftmenu ul li div a{
	display: table-cell;
	padding: 0 20px;
	vertical-align: middle;
}
.g-leftmenu ul li:hover{
	background: #bbe9fa;
}
.g-content{
	padding: 20px;
	font-size: 26px;
}
.g-footer{
	background: #f6f6f6;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
}
.g-footer .u-support{
	position: absolute;
	right: 200px;
	top: 20px;
}
</style>