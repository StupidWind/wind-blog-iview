<template>
  <div class="m-padded-tb-large">
    <sui-container>
      <sui-grid stackable>
        <sui-grid-column width="eleven">
          <!-- 左侧博客列表 -->
          <article-list></article-list>
        </sui-grid-column>
        <sui-grid-column width="five">
          <!-- 右边的top -->
          <category-list class="m-margin-bottom-large"></category-list>
          <tags-list class="m-margin-bottom-large"></tags-list>
          <newest-recommend class="m-margin-bottom-large"></newest-recommend>
          <!-- 二维码 -->
          <sui-divider class="m-margin-top-large" horizontal>
            <h4 is="sui-header">扫码加我</h4>
          </sui-divider>
          <sui-card class="centered" style="width:14em">
            <sui-image
              rounded
              src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/wechat-QR.jpg"
            ></sui-image>
          </sui-card>
        </sui-grid-column>
      </sui-grid>
    </sui-container>
  </div>
</template>

<script>
import HomePageArticleList from "@/components/article/HomePageArticleList";
import HomePageCategoryList from "@/components/category/HomePageCategoryList";
import HomePageTagsList from "@/components/tags/HomePageTagsList";
import HomePageNewestRecommend from "@/views/HomePageNewestRecommend";

export default {
  components: {
    "article-list": HomePageArticleList,
    "category-list": HomePageCategoryList,
    "tags-list": HomePageTagsList,
    "newest-recommend": HomePageNewestRecommend
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>