<template>
    <div id="tmpl">
        <div class="title">
            <h4 v-text="info.title">标题</h4>
            <p>{{info.add_time | datefmt("YYYY-MM-DD")}} {{info.click}}次浏览量</p>
        </div>
        <div class="content" v-html="info.content">
            内容
        </div>

    </div>

</template>

<script>
    import { Toast } from 'mint-ui';
    import common from '../../common/common.js';

    export default {
        data(){
            return{
                id: -1,
                info: {
                    "id": 13,
                    "title": "1季度多家房企利润跌幅超5% 去库存促销战打响",
                    "add_time": "2015-04-16T03:50:28.000Z",
                    "content": "sdfsdf"
                }
            };
        },
        created(){
            // 获取 url 传入的 id 参数值，赋值给data中的id属性
            this.id = this.$route.params.id;

            // 请求服务器获取到 id 对应的详细数据对象
            this.getInfo();
        },
        methods:{
            getInfo(){
                // 定义 url
                var url = common.apidomain + "/newsInfo"+this.id+".json";

                // 发出 ajax 请求
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status === 0){
                        this.info = data.message;
                    }else{
                        Toast(data.message);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color: #aaaaaa;
    }
    .title,.content {
        padding: 8px;
    }
</style>