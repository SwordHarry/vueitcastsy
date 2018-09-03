<template>
    <div id="tmpl">
        <!--评论组件-->
        <!--1.0 实现提交评论到服务器的静态结构-->
        <div id="postcomment">
            <h4>提交评论</h4>
            <p></p>
            <textarea placeholder="请输入您要评论的内容" v-model="content"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
        <p></p>
        <!--2.0 评论数据列表-->
        <div id="getcomment">
            <h4>评论列表</h4>
            <p></p>
            <div v-for="(comment,index) in commentsList">
                <div class="title">
                    <span>{{index+1}}楼: </span>
                    <span>{{comment.user_name}}</span>
                    <span>{{comment.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="comment.content">
                    </li>
                </ul>
            </div>
        </div>

        <!--实现获取更多按钮-->
        <div class="loadMore">
            <mt-button type="danger" size="large" @click="getMoreComment" plain>
                加载更多
            </mt-button>
        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js';
    import {Toast} from 'mint-ui';

    export default {
        name: "comment",
        data() {
            return {
                pageIndex: 1,   // 代表 评论 数据的第几页
                content: '', // 用来自动获取用户填写的评论内容
                commentsList: []
            };
        },
        props: ['id'],   // 作用是用来接收父组件传入过来的id值
        created() {
            this.getcomment(this.pageIndex);
        },
        methods: {
            // 评论数据的提交
            postcomment() {
                if (this.content.trim().length > 0) {
                    // 确定提交的地址
                    var url = common.apidomain + "/api/postcomment/" + this.id;
                    Toast("提交评论数据" + this.id);
                    // 利用 Post 请求提交评论数据
                    // this.$http.post(url,{content: this.content},{emulateJSON: true}).then(function (response) {
                    //     Toast(response.body.message);
                    // });


                    // 将最新的评论数据追加到评论列表的最顶部
                    this.commentsList = [
                        {
                            "user_name": "匿名用户",
                            "add_time": new Date(),
                            "content": this.content
                        }
                    ].concat(this.commentsList);

                    // 将文本框中的评论内容清空
                    this.content = "";

                } else {
                    Toast("请输入评论");
                }

            },
            // 获取当前所有的评论的列表，pageIndex 代表那一页数据
            getcomment(pageIndex) {
                /* || */
                pageIndex = pageIndex || 1;
                // var url = common.apidomain + "/newscomment"+this.id+".json?pageIndex="+pageIndex;
                var url = common.apidomain + "/newscomment.json";

                // 发出 ajax 请求获取数据
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if (data.status === 0) {
                        this.commentsList = this.commentsList.concat(data.message);
                    } else {
                        Toast("获取评论失败");
                    }
                });
            },
            // 实现加载更多按钮功能
            getMoreComment() {
                this.pageIndex++;
                this.getcomment(this.pageIndex);
            }
        }
    }
</script>

<style scoped>
    /*1.0 实现提交评论样式*/
    p {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .title {
        margin: 5px 0px 5px;
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    #postcomment, #getcomment {
        padding: 8px;
    }

    .loadMore {
        display: block;
        padding: 8px;
    }

</style>