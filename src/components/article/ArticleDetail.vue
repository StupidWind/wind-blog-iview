<template>
  <div>
    <div class="article-title">
      <h1>{{articleInfo.title}}</h1>
      <p>发布于 <Time :time="articleInfo.createTime"></Time></p>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from "@/apis/article-request.js";

export default {
  data() {
    return {
      articleInfo: null
    };
  },
  methods: {
    getArticleById(articleId) {
      let vm = this;
      getArticleDetail(articleId).then(res => {
        console.log(res);
        vm.articleInfo = res.data.data;
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