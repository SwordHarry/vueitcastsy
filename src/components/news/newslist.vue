<template>	
	<div id="tmpl">
		<!--实现新闻资讯列表样式-->
		<ul class="mui-table-view">
			<li v-for="news in newsList" class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="news.img_url">
					<div class="mui-media-body">
						{{news.title}}
						<p class='mui-ellipsis' v-text="news.summary"></p>

						<div class="news-foot">
							<span>发表时间:{{news.add_time | datefmt("YYYY-MM-DD HH:mm") }}</span>
							<span>点击数:{{news.click}}</span>
						</div>
					</div>
				</a>
			</li>

		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';

	export default{
		data(){
		    return{
		        newsList: []// 新闻列表
			};
		},
		created(){
			this.getNewsList();
		},
		methods:{
		    // 获取api中的新闻资讯数据
			getNewsList(){
			    // 确定url
			    var url = "../../../data/newsList.json";

			    // 利用 $http 的 get 方式请求到数据
				this.$http.get(url).then(function (response) {
					var data = response.body;
					if(data.status === 0){
					    this.newsList = data.message;
					}else{
                        Toast(data.message);
					}
                })
			}
		}
	}
</script>

<style scoped>
	.mui-table-view img{
		height: 70px;
		width: 70px;
	}
	.mui-table-view .mui-media-object{
		max-width: 70px;
		line-height: 70px;
	}
	.news-foot {
		margin-top:	1em;
		font-size: 12px;
		color: #0094ff;
	}
	.news-foot > span:last-child {
		margin-left: 20px;
	}
</style>