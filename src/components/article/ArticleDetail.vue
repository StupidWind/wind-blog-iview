<template>
  <div>
    <div class="article-head">
      <h2>标题</h2>
      <input v-model="articleTitle" />
      <p v-if="publishTime != null">
        发布于
        <Time :time="publishTime" ></Time>
      </p>
    </div>
    <mavon-editor ref="mavon" v-model="markdownContent" @save="saveMavon"></mavon-editor>
  </div>
</template>

<script>
import { getArticleDetail, saveArticle } from "@/apis/article-request.js";

export default {
  data() {
    return {
      articleTitle: "",
      publishTime: null,
      articleInfo: null,
      markdownContent: ""
    };
  },
  methods: {
    getArticleById(articleId) {
      let vm = this;
      getArticleDetail(articleId).then(res => {
        vm.articleInfo = res.data.data;
        vm.markdownContent = res.data.data.mdContent;
        vm.articleTitle = res.data.data.title;
        vm.publishTime = res.data.data.createTime;
      });
    },
    saveMavon(markdownValue, htmlValue) {
      let vm = this;
      let article = vm.articleInfo;
      let params = {
        articleId: article.articleId,
        title: vm.articleTitle,
        brief: article.brief,
        mdContent: markdownValue,
        htmlContent: htmlValue,
        authorId: "1",
        authorName: "StupidWind",
        thumbsUpCount: article.thumbsUpCount,
        readCount: article.readCount
      };
      saveArticle(params).then(res => {
        vm.$Message.success(res.data.msg);
      });
    }
  },
  created() {
    let articleId = this.$route.params.id;
    this.getArticleById(articleId);
  }
};
</script>

<style>
.markdown-body {
  margin: 20px 0;
}
</style>