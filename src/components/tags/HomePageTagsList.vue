<template>
  <div>
    <sui-segments>
      <sui-segment emphasis="secondary">
        <sui-grid :columns="2">
          <sui-grid-column>
            <sui-icon name="tag"></sui-icon>标签
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
        <a is="sui-label" tag color="red" class="m-margin-tb-small">
          Java
          <sui-label-detail>22</sui-label-detail>
        </a>
        <a is="sui-label" tag color="orange" class="m-margin-tb-small">
          Linux
          <sui-label-detail>22</sui-label-detail>
        </a>
        <a is="sui-label" tag color="yellow" class="m-margin-tb-small">
          MySQL
          <sui-label-detail>22</sui-label-detail>
        </a>
        <a is="sui-label" tag color="green" class="m-margin-tb-small">
          Docker
          <sui-label-detail>22</sui-label-detail>
        </a>
        <a is="sui-label" tag color="teal" class="m-margin-tb-small">
          JavaScript
          <sui-label-detail>22</sui-label-detail>
        </a>
      </sui-segment>
    </sui-segments>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>