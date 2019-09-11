<template>
  <div class="article-container">
    <h1 class="title">文章列表</h1>
    
    <Table :columns="articleColumns" :data="articleList">
      <template slot-scope="{ row }" slot="title">
        <span>{{ row.title }}</span>
      </template>
      <template slot-scope="{ row }" slot="brief">
        <span>{{ row.brief }}</span>
      </template>
      <template slot-scope="{ row }" slot="thumbsUpCount">
        <span>{{ row.thumbsUpCount }}</span>
      </template>
      <template slot-scope="{ row }" slot="readCount">
        <span>{{ row.readCount }}</span>
      </template>
      <template slot-scope="{ row }" slot="createTime">
        <span>{{ row.createTime }}</span>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button type="success" @click="viewArticle(row.articleId)">查看</Button>
        <Button type="primary" @click="editArticle(row.articleId)">编辑</Button>
        <Button type="error" @click="delArticle(row.articleId)">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import { getArticleList } from "@/apis/article-request.js";

export default {
  data() {
    return {
      articleColumns: [
        { title: "标题", key: "title" },
        { title: "简介", key: "brief" },
        { title: "点赞数", key: "thumbsUpCount" },
        { title: "阅读数", key: "readCount" },
        { title: "发布时间", key: "createTime" }
      ],
      articleList: [
        {
          title: "test",
          brief: "test",
          thumbsUpCount: "test",
          readCount: "test",
          createTime: "test"
        }
      ]
    };
  },
  methods: {
    searchArticle() {
      getArticleList().then(res => {
        this.articleList = res.data.list;
      });
    },
    viewArticle(arttcleId) {},
    editArticle(arttcleId) {},
    delArticle(articleId) {}
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

</style>