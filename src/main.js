import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);
// 将 vue-resource 在 vue 中绑定，自动在 vue 实例上住一个 $http 对象

// 注册 mint-ui
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(mintui);

// 注册 mui 的 css 样式
import '../static/mui/css/mui.css';

import App from './App.vue';

import home from './components/home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';

// 导入当前系统的 全局样式
import '../static/css/site.css';

// 定义路由规则
var router = new VueRouter({
	routes: [
		{path: '/home',component: home},
		{path: '/shopcar',component: shopcar},
		{path: '/news/newslist',component: newslist}
	],
	linkActiveClass : "mui-active"	// 改变路由激活时的class名称
});

import Moment from 'moment';
// 定义全局过滤器实现日期的格式化
Vue.filter("datefmt",function (input,fmtString) {
	// 使用 momentjs 日期格式化类库实现日期格式化
	return Moment(Date.parse(input)).format(fmtString);
});

new Vue({
	el: "#app",
	// 使用路由对象实例
	router,
	render:c=>c(App)	// es6 的箭头函数写法 =>: goes to
});
