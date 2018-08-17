<!-- 以后项目的根组件 -->
<!-- template 主要是放 html 元素（html的页面结构） -->
<!-- 当前页面的css 样式写到 style， -->
<!-- 其中scoped表示此处的css代码只是当前组件页面上有效，不会影响到其他组件页面 -->
<template>
	<div>
		<span v-text="msg" class="red"></span>

		<router-link to="/login">登录</router-link>
		<router-link to="/register">注册</router-link>

		<!-- 路由占位符 -->
		<router-view></router-view>

		<!-- 使用 mint-ui 中的button组件 -->
		<mt-button type="danger" size="large" @click="tip">danger</mt-button>

		<!-- 使用 mui 中的九宫格样式 -->
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-home">
						</span>
						<div class="mui-media-body">
							Home
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-email">
							<span class="mui-badge">
								5
							</span>
						</span>
						<div class="mui-media-body">
							Email
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-chatbubble">

						</span>
						<div class="mui-media-body">
							Chat
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<span class="mui-icon mui-icon-location">

						</span>
						<div class="mui-media-body">
							location
						</div>
					</a>
				</li>

			</ul> 
		</div>

		<!-- 使用 mui 的图文表格 -->
		<div class="title">
			缩略图居左
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
					<div class="mui-media-body">
						幸福
						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
					<div class="mui-media-body">
						木屋
						<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
					<div class="mui-media-body">
						CBD
						<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
					</div>
				</a>
			</li>
		</ul>
	</div>

</template>

<script>
	// 按需导入
	import { Toast } from 'mint-ui';

	// 负责导出 .vue 这个组件对象 (它本质上是一个 Vue 对象，所以vue中该定义的元素都可以使用)
	export default{
		data(){	// 等价于 es5 的 data: function(){}
		return {
			msg: 'hello vuejs111'
		}
	},
	methods:{
		tip(){
			Toast('你好');
		}
	},
	created(){

	}
}
</script>

<style scoped>

.red{
	color: red;
}
</style>