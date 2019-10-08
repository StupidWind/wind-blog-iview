<template>
  <div class="m-padded-tb-large">
    <sui-container>
      <sui-grid>
        <sui-grid-column width="eleven">
          <!-- 左侧博客列表 -->
          <article-list></article-list>
        </sui-grid-column>
        <sui-grid-column width="five">
          <!-- 右边的top -->
          <category-list></category-list>
        </sui-grid-column>
      </sui-grid>
    </sui-container>
  </div>
</template>

<script>
import HomePageArticleList from "@/components/article/HomePageArticleList";
import HomePageCategoryList from "@/components/category/HomePageCategoryList";

export default {
  components: {
    "article-list": HomePageArticleList,
    "category-list": HomePageCategoryList
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>