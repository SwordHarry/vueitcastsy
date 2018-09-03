<template>
    <div id="tmpl">
        <!-- 利用 mui 中的 图文表格实现-->
        <div class="mui-content" style="background-color:#fff">

            <ul class="mui-table-view mui-grid-view">
                <li v-for="item in goodsList" class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body" v-text="item.title">
                        </div>
                        <div class="desc">
                            <p>
                                <span>￥{{item.sell_price}}</span>
                                <s>{{item.market_price}}</s>
                            </p>
                            <p>
                                <span class="floatleft">热卖中</span>
                                <span class="floatRight">剩余{{item.stock_quantity}}件</span>
                            </p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js';
    import {Toast} from 'mint-ui';

    export default {
        name: "goods-list",
        data(){
            return {
                goodsList: []
            };
        },
        created(){
          this.getGoods();
        },
        methods:{
            getGoods(){
                // 获取商品列表数据
                var url = common.apidomain + "/goodsList.json";

                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status === 0){
                        this.goodsList = data.message;
                    }else{
                        Toast(data.message);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .mui-content li {
        border: 1px solid rgba(0, 0, 0, 0.4);
        margin-left: 2px;
        box-shadow: 0 0 1px #000;
        width: 50%;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell {
        padding: 1px 2px;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        color: #0094ff;
    }

    .mui-content .desc {
        height: 60px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-top: 10px;
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 5px;
        text-align: left;
    }
    .mui-content .desc>p:first-child>span{
        font-size: large;
        color: red;
        margin-right: 15px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
        margin: 0 1px;
    }
    .mui-content .floatRight{
        position: absolute;
        right: 10px;
        bottom: 5px;
    }
    .mui-content .floatleft{
        position: absolute;
        left: 10px;
        bottom: 5px;
    }
</style>