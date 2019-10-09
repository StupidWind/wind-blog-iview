<template>
  <div>
    <!-- 导航 -->
    <sui-segment inverted attached class="m-padded-tb-mini">
      <div is="sui-container">
        <sui-menu inverted secondary>
          <sui-menu-item>
            <h2 is="sui-header" color="orange">WindBlog</h2>
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="home"></sui-icon>首页
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="idea"></sui-icon>分类
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="tag"></sui-icon>标签
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="clone"></sui-icon>归档
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="comment"></sui-icon>留言板
          </sui-menu-item>
          <sui-menu-item>
            <sui-icon size="mini" name="info"></sui-icon>关于我
          </sui-menu-item>
          <sui-menu-item position="right">
            <sui-input inverted transparent icon="search" placeholder="Search..."></sui-input>
          </sui-menu-item>
        </sui-menu>
      </div>
    </sui-segment>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>