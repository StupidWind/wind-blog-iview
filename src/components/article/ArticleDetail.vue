<template>
  <div>
    <div class="article-head">
      <h2>标题</h2>
      <i-input v-model="articleTitle" style="width: 300px"></i-input>
      <p v-if="publishTime != null">
        发布于
        <Time :time="publishTime" interval="60"></Time>
      </p>
    </div>
    <div class="article-brief">
      <h2>简介</h2>
      <i-input
        v-model="articleBrief"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 5 }"
        placeholder="请输入简介..."
      ></i-input>
    </div>
    <mavon-editor ref="mavon" v-model="markdownContent" @save="saveMavon"></mavon-editor>
  </div>
</template>

<script>
import { notEmpty } from "@/libs/utils.js";
import { getArticleDetail, saveArticle } from "@/apis/article-request.js";

export default {
  data() {
    return {
      pageType: "",
      articleId: null,
      articleTitle: "",
      articleBrief: "",
      publishTime: null,
      articleInfo: null,
      markdownContent: ""
    };
  },
  methods: {
    getArticleById(articleId) {
      let vm = this;
      if (notEmpty(articleId)) {
        getArticleDetail(articleId).then(res => {
          let resdata = res.data.data;
          vm.articleInfo = resdata;
          vm.markdownContent = resdata.mdContent;
          vm.articleTitle = resdata.title;
          vm.articleBrief = resdata.brief;
          vm.publishTime = resdata.createTime;
        });
      }
    },
    saveMavon(markdownValue, htmlValue) {
      let vm = this;
      let article = vm.articleInfo;
      let params = {
        articleId: notEmpty(vm.articleId) ? vm.articleId : "",
        title: vm.articleTitle,
        brief: vm.articleBrief,
        mdContent: markdownValue,
        htmlContent: htmlValue,
        authorId: "1",
        authorName: "StupidWind"
      };
      saveArticle(params).then(
        res => {
          let resdata = res.data;
          if (resdata.success) {
            vm.articleInfo = resdata.data;
            vm.articleId = resdata.data.articleId;
            vm.articleTitle = resdata.data.title;
            vm.articleBrief = resdata.data.brief;
            vm.publishTime = resdata.data.createTime;
            vm.$Message.success(resdata.msg);
          } else {
            vm.$Message.error(resdata.msg);
          }
        },
        error => {
          vm.$Message.error("保存失败");
        }
      );
    }
  },
  created() {
    this.articleId = this.$route.params.articleId;
    this.pageType = this.$route.params.type;
    this.getArticleById(this.articleId);
  }
};
</script>

<style>
.markdown-body {
  margin: 20px 0;
}

.article-head {
  margin-bottom: 7px;
}
</style>