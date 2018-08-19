<!-- 以后项目的根组件 -->
<!-- template 主要是放 html 元素（html的页面结构） -->
<!-- 当前页面的css 样式写到 style， -->
<!-- 其中scoped表示此处的css代码只是当前组件页面上有效，不会影响到其他组件页面 -->
<template>
	<div>
		<!-- 利用 mint-ui 中的 header 组件实现整个系统的头部 -->
		<mt-header fixed title="Vue商城系统demo"></mt-header>

		<!-- 利用 vue-router 的 router-view 进行占位 -->
		<router-view></router-view>


		<!-- 利用 mui 中的 tabbar 组件实现系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-contact">
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-email">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	// 按需导入
	import { Toast } from 'mint-ui';

	// 负责导出 .vue 这个组件对象 (它本质上是一个 Vue 对象，所以vue中该定义的元素都可以使用)
	export default{
		data(){	// 等价于 es5 的 data: function(){}
			return {
				
			};
		},
	methods:{
		
	},
	created(){

	}
}
</script>

<style scoped>

</style>