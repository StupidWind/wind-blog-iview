<template>
  <div>
    <sui-segment inverted vertical class="m-padded-tb-massive">
      <sui-container>
        <sui-grid inverted divided>
          <sui-grid-column width="three">
            <sui-list inverted>
              <sui-list-item>
                <sui-image
                  rounded
                  style="width:110px"
                  src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/wechat-QR.jpg"
                ></sui-image>
              </sui-list-item>
            </sui-list>
          </sui-grid-column>
          <sui-grid-column
            width="three"
            class="m-text-thin m-text-spaced m-opacity-mini m-text-aligned-center"
          >
            <h4 is="sui-header" textAlign="center" inverted>最新博客</h4>
            <sui-list inverted>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">用户故事(User Story)</a>
                </sui-list-content>
              </sui-list-item>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">用户故事(User Story)</a>
                </sui-list-content>
              </sui-list-item>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">用户故事(User Story)</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-grid-column>
          <sui-grid-column
            width="three"
            class="m-text-thin m-text-spaced m-opacity-mini m-text-aligned-center"
          >
            <h4 is="sui-header" textAlign="center" inverted>联系我</h4>
            <sui-list inverted>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">Email: pex2460@163.com</a>
                </sui-list-content>
              </sui-list-item>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">Wechat: StupidWind2333</a>
                </sui-list-content>
              </sui-list-item>
              <sui-list-item>
                <sui-list-content>
                  <a href="#">QQ: 944291293</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-grid-column>
          <sui-grid-column
            width="seven"
            class="m-text-thin m-text-spaced m-opacity-mini m-text-aligned-center"
          >
            <h4 is="sui-header" textAlign="center" inverted>StupidWind</h4>
            <p>这是我的个人博客，会分享关于编程、日常、思考和相关的任何内容，希望可以给来到这儿的人有所帮助...</p>
          </sui-grid-column>
        </sui-grid>
        <sui-divider inverted />
        <p
          class="m-text-thin m-text-spaced m-opacity-mini m-text-aligned-center"
        >Copyright © 2019 - 2020 StupidWind Designed by StupidWind</p>
      </sui-container>
    </sui-segment>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>