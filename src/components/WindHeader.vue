<template>
  <div class="container">
    <div class="left-nav">
      <img id="avatar" :src="avatarUrl" />
      <div id="blog-title">Wind Blog</div>
    </div>

    <ul class="navbar">
      <li v-for="menu in menuList" :key="menu.id">
        <router-link :to="menu.menuUrl" tag="a">{{menu.menuName}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl:
        "https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/stupid-avatar.jpg",
      menuList: [
        { id: 1, menuName: "文章", menuUrl: "/article/list" },
        { id: 2, menuName: "评论", menuUrl: "/comment/list" },
        { id: 3, menuName: "留言板", menuUrl: "/leaveMessageBorad/list" },
        { id: 4, menuName: "友情链接", menuUrl: "/friendshipLink/list"}
        // { id: 5, menuName: "资源", menuUrl: "/demo/4" }
      ]
    };
  },
  methods: {
    initUserDetails() {}
  },
  created() {
    this.initUserDetails();
  }
};
</script>

<style>
/* 引入tahoma字体 */
@font-face {
  font-family: MyTahoma;
  src: url(../assets/ttf/Tahoma/tahoma.ttf);
}

.container {
  display: flex;
  width: 100%;
}

.container > .left-nav {
  flex: 2 1 120px;
  display: flex;
  width: 100%;
}

.container > .left-nav > #avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-self: center;
}

.container > .left-nav > #blog-title {
  flex-basis: 200px;
  margin-left: 15px;
  font-size: 35px;
  font-family: MyTahoma, sans-serif;
  color: dimgray;
}

.container > .navbar {
  flex: 8;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 40px;
  margin-bottom: 3px;
}

.container > .navbar > li {
  font-size: 15px;
  margin: 0 5px;
}

.navbar > li > a {
  color: darkgrey;
}

.navbar > li > a:hover {
  color: dimgray;
}

.navbar > li > a:active {
  color: black;
}
</style>