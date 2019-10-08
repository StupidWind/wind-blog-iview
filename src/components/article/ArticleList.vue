<template>
  <div class="article-container">
    <div class="article-list-header">
      <h1 id="page-title">文章列表</h1>
      <div class="toolbar">
        <Button icon="ios-add-circle-outline" type="success" @click="newArticle">新建文章</Button>
      </div>
    </div>
    <Card v-for="article in articleList" :key="article.articleId">
      <div slot="title" class="article-card-title">
        <p class="article-title">{{article.title}}</p>
        <div class="toolbar">
          <Button
            icon="md-search"
            shape="circle"
            type="success"
            @click="viewArticle(article.articleId)"
          ></Button>
          <Button
            icon="md-create"
            shape="circle"
            type="info"
            @click="editArticle(article.articleId)"
          ></Button>
          <Button
            icon="md-close"
            shape="circle"
            type="error"
            @click="delArticle(article.articleId)"
          ></Button>
        </div>
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
import { getArticleList, delArticle } from "@/apis/article-request.js";
export default {
  data() {
    return {
      articleList: [],
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
    newArticle() {
      this.$router.push({
        name: "article-detail",
        params: { type: "create" }
      });
    },
    viewArticle(articleId) {
      this.$router.push({
        name: "article-detail",
        params: {
          type: "view",
          articleId: articleId
        }
      });
    },
    editArticle(articleId) {
      this.$router.push({
        name: "article-detail",
        params: {
          type: "edit",
          articleId: articleId
        }
      });
    },
    delArticle(articleId) {
      this.$Modal.confirm({
        title: "删除文章",
        content: "<p>确定删除吗 ?</p>",
        onOk: () => {
          delArticle(articleId).then(res => {
            if (res.data.success) {
              this.$Message.success(res.data.msg);
              let aIndex = this.articleList.findIndex(article => {
                if (article.articleId == articleId) {
                  return true;
                }
              });
              this.articleList.splice(aIndex, 1);
            } else {
              this.$Message.error(res.data.msg);
            }
            this.$Modal.remove();
          });
        },
        onCancle: () => {
          this.$Modal.remove();
        }
      });
    }
  },
  filters: {
    dateFormat(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
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

.article-list-header {
  display: flex;
}

.article-list-header > #page-title {
  flex: 2 1 120px;
}

.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
}

.toolbar > .ivu-btn {
  margin: 0 2px;
}

.article-card-title {
  display: flex;
}

.ivu-card {
  margin-top: 10px;
}

.ivu-card .article-brief {
  margin: 5px 2px;
  padding: 2px;
}

.ivu-page {
  margin: 10px auto;
}
</style>