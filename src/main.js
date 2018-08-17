import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册 mint-ui
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';

// 注册 mui 的 css 样式
import '../static/mui/css/mui.css';

import App from './App.vue';

import login from './components/account/login.vue';
import register from './components/account/register.vue';

Vue.use(VueRouter);
Vue.use(mintui);

// 定义路由规则
var router = new VueRouter({
	routes: [
		{path: '/login',component: login},
		{path: '/register',component: register}
	]
});

new Vue({
	el: "#app",
	// 使用路由对象实例
	router,
	render:c=>c(App)	// es6 的箭头函数写法 =>: goes to
});
