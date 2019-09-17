<template>
  <div>
    <div class="article-title">
      <h1>{{articleInfo.title}}</h1>
      <p>
        发布于
        <Time :time="articleInfo.createTime"></Time>
      </p>
      <mavon-editor v-model="markdownContent"></mavon-editor>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from "@/apis/article-request.js";

export default {
  data() {
    return {
      articleInfo: null,
      markdownContent: ""
    };
  },
  methods: {
    getArticleById(articleId) {
      let vm = this;
      getArticleDetail(articleId).then(res => {
        console.log(res);
        vm.articleInfo = res.data.data;
        vm.markdownContent = res.data.data.mdContent;
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
</style>