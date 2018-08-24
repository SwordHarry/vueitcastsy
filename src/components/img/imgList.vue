<template>
    <div id="tmpl">
        <!--图片分类-->
        <div id="imgCategory">
            <!--设定ul的总长度以便滚动-->
            <ul v-bind="{style:'width:'+ ulWidth + 'px'}">
                <li @click="getImg(0)">全部</li>
                <li v-for="item in category" @click="getImg(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <!--图片列表-->
        <div id="imgList">
            <ul>
                <li v-for="item in imgList">
                    <img v-lazy="item.img_url">
                    <div id="description">
                        <h5 v-text="item.title"></h5>
                        <p v-text="item.summary"></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js';
    import Toast from 'mint-ui';

    export default {
        data() {
            return {
                ulWidth: 320,
                category: [], // 存放图片分类
                imgList: [] // 存储图片数据的数组
            };
        },
        created() {
            var all = 0;   // 获取所有数据
            this.getCategory();
            this.getImg(all);
        },
        methods: {
            getCategory() {
                var url = common.apidomain + "/imgCategory.json";
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if (data.status === 0) {
                        this.category = data.message;

                        // 实现当前分类数据所在 ul 的总宽度
                        var width = 62;
                        var count = data.message.length + 1;
                        this.ulWidth = width * count;
                    } else {
                        Toast(data.message);
                    }
                });

            },
            getImg(cateId) {
                // 0表示获取全部图片
                cateId = cateId || 0;

                var url = common.apidomain + "/imgList" + cateId + ".json";

                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status === 0){
                        this.imgList = data.message;
                    }else{
                        Toast(data.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    /*图片分类*/
    #imgCategory {
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
    }

    #imgCategory ul {
        margin: 0px;
        padding-left: 10px;
        padding-bottom: 10px;
    }

    #imgCategory li {
        list-style: none;
        display: inline-block;
        color: #0094ff;
        font-size: 14px;
        margin-left: 6px;
        cursor: pointer;
    }

    /*图片列表样式*/
    #imgList {

    }

    #imgList ul {
        margin: 5px 0px;
        padding: 0px 5px;
    }

    #imgList li {
        list-style: none;
        position: relative;
    }

    #imgList img {
        width: 100%;
        height: 300px;
    }

    #description {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        padding-top: 5px;
        position: absolute;
        bottom: 2px;
        left: 0px;
    }

    #description h5 {
        color: #f3f3f3;
        font-weight: bold;
    }

    #description p {
        color: #f3f3f3;
    }

    /*延迟加载*/
    image[lazy=loading]{
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>
