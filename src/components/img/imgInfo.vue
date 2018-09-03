<template>
    <div id="tmpl">
        <!--实现图片详情和缩略图-->
        <div id="info">
            <!--图片详情 标题部分-->
            <div id="title">
                <h4>{{imgInfo.title}}</h4>
                <p>
                    {{imgInfo.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}} {{imgInfo.click}}次浏览
                </p>
                <p class="line"></p>
            </div>
            <!--缩略图-->
            <div class="imgContent">
                <!--<ul class="mui-table-view mui-grid-view mui-grid-9">-->
                    <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" >-->
                        <vue-preview :slides="list">

                        </vue-preview>
                    <!--</li>-->
                <!--</ul>-->
            </div>
            <!--图片详情 摘要部分-->
            <p v-html="imgInfo.content">
                摘要部分
            </p>

        </div>
        <!--集成评论组件-->
        <div id="comment">
            <comment :id="id"></comment>
        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js';

    // 10.0 导入 评论组件
    import comment from '../subcom/comment.vue';

    import {Toast} from 'mint-ui';

    export default {
        name: "img-info",
        data() {
            return {
                id: 0, // 图片id
                imgInfo: {
                            "id": 52,
                            "title": "从json中拿到的图片详情标题",
                            "click": 5,
                            "add_time": "2015-04-18T06:27:06.000Z",
                            "content": "从json中拿到的图片摘要部分"
                },
                list:[]   // 负责存储缩略图的数据
            };
        },
        created() {
            // 获取传入的 id
            this.id = this.$route.params.id;

            this.getInfo();
            this.getImg();
        },
        components: {
            comment // 10.1 注册评论组件
        },
        methods:{
            // 得到图片详情信息
            getInfo(){
                var url = common.apidomain + "/imgInfo.json";
                
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status === 0){
                        this.imgInfo = data.message[0];
                    }else{
                        Toast(data.message);
                    }
                });
            },
            getImg(){
                var url = common.apidomain + "/img.json";
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status === 0){
                        // 由于 vue-preview 要求数据格式问题
                        var img = document.createElement('img');
                        data.message.forEach(function (item) {
                            // 解决图片实际预览宽高问题
                            img.src = item.src;
                            item.w = img.width;
                            item.h = img.height;
                            item.msrc = item.src;
                            console.log(item.w);
                        });
                        this.list = data.message;
                    }else{
                        Toast(data.message);
                    }
                });

            }
        }
    }
</script>

<style scoped>
    /*图片详情样式*/
    #info {
        padding: 8px;
    }
    #info #title h4 {
        color: #0094ff;
    }
    #info #title p {
        color: rgba(0,0,0,0.4);
    }
    #info #title .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
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

    /* 9宫格实现缩略图 */
    .imgContent img {
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    .imgContent figure {
        margin: 9px;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

</style>