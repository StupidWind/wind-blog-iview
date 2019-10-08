<template>
  <div>
    <!-- header -->
    <sui-segment attached="top">
      <sui-grid :columns="2" verticalAlign="middle">
        <sui-grid-column>
          <h3 is="sui-header" color="orange">博客</h3>
        </sui-grid-column>
        <sui-grid-column textAlign="right">
          共
          <h3 is="sui-header" color="orange" class="m-inline-block m-text-thin">14</h3>篇
        </sui-grid-column>
      </sui-grid>
    </sui-segment>

    <!-- content -->
    <sui-segment attached>
      <sui-segment vertical class="m-padded-tb-large m-padded-lr">
        <sui-grid>
          <sui-grid-column width="eleven">
            <h3 is="sui-header">你真的理解什么是财富自由吗？</h3>
            <p class="m-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque.</p>
          </sui-grid-column>
          <sui-grid-column width="five">
            <sui-image
              rounded
              src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/wallpaper/cat.png"
            ></sui-image>
          </sui-grid-column>
        </sui-grid>
        <sui-grid>
              <sui-grid-column width="eleven">
                <sui-list link horizontal size="mini">
                  <sui-list-item>
                    <sui-image
                      avatar
                      src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/stupid-avatar.jpg"
                    ></sui-image>
                  </sui-list-item>
                  <sui-list-item>
                    <h4 is="sui-header">StupidWind</h4>
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="calendar"></sui-icon>2019-10-01
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="eye"></sui-icon>1000
                  </sui-list-item>
                </sui-list>
              </sui-grid-column>
              <sui-grid-column width="five" textAlign="right">
                <sui-label class="m-padded-tiny m-text-thin" color="orange" basic>认知升级</sui-label>
              </sui-grid-column>
            </sui-grid>
      </sui-segment>
       <sui-segment vertical class="m-padded-tb-large m-padded-lr">
        <sui-grid>
          <sui-grid-column width="eleven">
            <h3 is="sui-header">你真的理解什么是财富自由吗？</h3>
            <p class="m-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque.</p>
          </sui-grid-column>
          <sui-grid-column width="five">
            <sui-image
              rounded
              src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/wallpaper/cat.png"
            ></sui-image>
          </sui-grid-column>
        </sui-grid>
        <sui-grid>
              <sui-grid-column width="eleven">
                <sui-list link horizontal size="mini">
                  <sui-list-item>
                    <sui-image
                      avatar
                      src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/stupid-avatar.jpg"
                    ></sui-image>
                  </sui-list-item>
                  <sui-list-item>
                    <h4 is="sui-header">StupidWind</h4>
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="calendar"></sui-icon>2019-10-01
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="eye"></sui-icon>1000
                  </sui-list-item>
                </sui-list>
              </sui-grid-column>
              <sui-grid-column width="five" textAlign="right">
                <sui-label class="m-padded-tiny m-text-thin" color="orange" basic>认知升级</sui-label>
              </sui-grid-column>
            </sui-grid>
      </sui-segment>
       <sui-segment vertical class="m-padded-tb-large m-padded-lr">
        <sui-grid>
          <sui-grid-column width="eleven">
            <h3 is="sui-header">你真的理解什么是财富自由吗？</h3>
            <p class="m-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque.</p>
          </sui-grid-column>
          <sui-grid-column width="five">
            <sui-image
              rounded
              src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/wallpaper/cat.png"
            ></sui-image>
          </sui-grid-column>
        </sui-grid>
        <sui-grid>
              <sui-grid-column width="eleven">
                <sui-list link horizontal size="mini">
                  <sui-list-item>
                    <sui-image
                      avatar
                      src="https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/avatar/stupid-avatar.jpg"
                    ></sui-image>
                  </sui-list-item>
                  <sui-list-item>
                    <h4 is="sui-header">StupidWind</h4>
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="calendar"></sui-icon>2019-10-01
                  </sui-list-item>
                  <sui-list-item>
                    <sui-icon name="eye"></sui-icon>1000
                  </sui-list-item>
                </sui-list>
              </sui-grid-column>
              <sui-grid-column width="five" textAlign="right">
                <sui-label class="m-padded-tiny m-text-thin" color="orange" basic>认知升级</sui-label>
              </sui-grid-column>
            </sui-grid>
      </sui-segment>
      
    </sui-segment>

    <!-- footer -->
    <sui-segment attached="bottom">
      <sui-grid :columns="2" verticalAlign="middle">
        <sui-grid-column>
          <sui-button size="mini" color="orange" basic>上一页</sui-button>
        </sui-grid-column>
        <sui-grid-column textAlign="right">
          <sui-button size="mini" color="orange" basic>下一页</sui-button>
        </sui-grid-column>
      </sui-grid>
    </sui-segment>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>