<template>
  <div class="article-container">
    <h1 class="title">文章列表</h1>
    <Card v-for="article in articleList" :key="article.articleId">
      <div slot="title">
        <router-link :to="article.articleId|detailRoute">
          <p>{{article.title}}</p>
        </router-link>
      </div>

      <p class="article-brief">{{article.brief}}</p>
      <Icon type="md-heart" />
      {{article.thumbsUpCount}}
      <Icon type="md-eye" />
      {{article.readCount}}
      <p>发布于 {{article.createTime|dateFormat}}</p>
    </Card>
    <Page :total="pageTotal" :current="page" :page-size="pageSize" @on-change="searchArticle"></Page>
  </div>
</template>

<script>
import { getArticleList } from "@/apis/article-request.js";
export default {
  data() {
    return {
      articleList: [
        {
          title: "test",
          brief: "test",
          thumbsUpCount: "test",
          readCount: "test",
          createTime: "test"
        }
      ],
      page: 1,
      pageSize: 10,
      pageTotal: 0
    };
  },
  methods: {
    searchArticle(thePage) {
      thePage = thePage == null ? 1 : thePage;
      let param = {
        pageNum: thePage,
        pageSize: this.pageSize
      };
      getArticleList(param).then(res => {
        this.articleList = res.data.list;
        this.page = res.data.page;
        this.pageTotal = res.data.total;
      });
    },
    viewArticle(arttcleId) {},
    editArticle(arttcleId) {},
    delArticle(articleId) {}
  },
  filters: {
    dateFormat(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = date.getMonth() - 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let second = date.getSeconds();

      let fillZero = function(num) {
        return num < 10 ? "0" + num : num;
      };

      let dateStr =
        year +
        "-" +
        fillZero(month) +
        "-" +
        fillZero(day) +
        " " +
        fillZero(hour) +
        ":" +
        fillZero(minutes) +
        ":" +
        fillZero(second);
      return dateStr;
    },
    detailRoute(articleId) {
      return "/article/detail/" + articleId;
    }
  },
  created() {
    this.searchArticle();
  }
};
</script>

<style scoped>
.article-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.article-container > .title {
  padding: 5px 10px;
}

.ivu-card {
  margin-top: 10px;
}

.ivu-card .article-brief {
  margin: 5px 2px;
  padding: 2px;
}
</style>