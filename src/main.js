import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import Home from '@/components/Home';
import Hello from '@/components/Hello';

// there is a bug, see also:
// https://github.com/webpack-contrib/less-loader/issues/109#issuecomment-253797335
// import 'assets/css/common.less';

import './assets/css/common.sass';
Vue.use(Router);

var routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	}
];

var router = new Router({
	routes // equals routes: routes
});

Vue.component('App', App);
new Vue({
	el: '#app',
	router,
	template: '<App />'
});