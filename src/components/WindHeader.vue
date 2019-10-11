<template>
  <div>
    <!-- 导航 -->
    <sui-segment inverted attached class="m-padded-tb-mini">
      <div is="sui-container">
        <div class="ui inverted secondary stackable menu">
          <h2 class="ui orange header item">WindBlog</h2>
          <a href="#" class="item" v-show="showMenu">
            <i class="home small icon"></i>首页
          </a>
          <a href="#" class="item" v-show="showMenu">
            <i class="idea small icon"></i>分类
          </a>
          <a href="#" class="item" v-show="showMenu">
            <i class="tag small icon"></i>标签
          </a>
          <a href="#" class="item" v-show="showMenu">
            <i class="clone small icon"></i>归档
          </a>
          <a href="#" class="item" v-show="showMenu">
            <i class="comment small icon"></i>留言板
          </a>
          <a href="#" class="item" v-show="showMenu">
            <i class="info small icon"></i>关于我
          </a>
          <div class="right item" v-show="showMenu">
            <div class="ui icon inverted transparent input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="ui black icon button m-right-top m-mobile-show" @click="toggleMenu">
        <i class="sidebar icon"></i>
      </a>
    </sui-segment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    this.showMenu = this.screenWidth > 768 ? true : false;
  }
};
</script>

<style>
</style>