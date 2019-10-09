<template>
  <div>
    <sui-segments>
      <sui-segment emphasis="secondary">
        <sui-grid :columns="2">
          <sui-grid-column>
            <sui-icon name="idea"></sui-icon>分类
          </sui-grid-column>
          <sui-grid-column textAlign="right">
            <a href="#">
              more
              <sui-icon name="angle double right"></sui-icon>
            </a>
          </sui-grid-column>
        </sui-grid>
      </sui-segment>
      <sui-segment color="orange">
        <sui-menu vertical fluid>
          <sui-menu-item>
            编程技术
            <sui-label color="orange" basic>13</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            生活日常
            <sui-label color="orange" basic>13</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            思考感悟
            <sui-label color="orange" basic>13</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            学习日志
            <sui-label color="orange" basic>13</sui-label>
          </sui-menu-item>
          <sui-menu-item>
            学习日志
            <sui-label color="orange" basic>13</sui-label>
          </sui-menu-item>
        </sui-menu>
      </sui-segment>
    </sui-segments>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>