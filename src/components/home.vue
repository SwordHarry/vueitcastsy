<template>
    <div id="tmpl">
        <!-- 轮播图 mint-ui 中的 swipe 组件实现-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="map in carouselMap">
                <img :src="map.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 利用 MUI 的9宫格样式实现导航区域 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newsList">
						<span class="mui-icon mui-icon-home">
						</span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/img/imgList">
						<span class="mui-icon mui-icon-email">
						</span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodsList">
						<span class="mui-icon mui-icon-chatbubble">

						</span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
						<span class="mui-icon mui-icon-location">

						</span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/vedio">
						<span class="mui-icon mui-icon-search">

						</span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
						<span class="mui-icon mui-icon-phone">

						</span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>

            </ul>
        </div>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                carouselMap: []
            };
        },
        created() {
            // 当页面中的 data 和 methods 对象都创建完毕以后，就会自动调用
            this.getMap();
        },
        methods: {
            getMap() {
                // 实现轮播组件中的数据请求
                var url = "../../data/carouselMap.json";

                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if (data.status === 0) {
                        this.carouselMap = data.message;
                    } else {
                        // 异常处理
                        Toast(data.message);
                    }

                });
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 300px;
    }

    .mint-swipe-item {
        background-color: red;
        width: 100%;
        height: 300px;
        /*这里不能使用 px 的*/
    }

    .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    .mui-content, .mui-content ul {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
    }

    .mui-grid-view.mui-grid-9 {
        border-top: 0px;
        border-left: 0px;
    }

    /*九宫格 的图片样式*/
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    .mui-icon-home:before {
        background-image: url(../../static/imgs/6.png);
    }

    .mui-icon-email:before {
        background-image: url(../../static/imgs/4.png);
    }

    .mui-icon-chatbubble:before {
        background-image: url(../../static/imgs/3.png);
    }

    .mui-icon-location:before {
        background-image: url(../../static/imgs/2.png);
    }

    .mui-icon-search:before {
        background-image: url(../../static/imgs/5.png);
    }

    .mui-icon-phone:before {
        background-image: url(../../static/imgs/1.png);
    }
    .mui-table-view .mui-media, .mui-table-view .mui-media-body{
        overflow: visible;
    }

</style>