<template>
  <div id="app">
    <div class="main-container">
      <wind-header></wind-header>
      <router-view></router-view>
      <wind-footer></wind-footer>
    </div>
  </div>
</template>

<script>
import WindHeader from "./components/WindHeader";
import WindFooter from "./components/WindFooter";

export default {
  name: "App",
  components: {
    "wind-header": WindHeader,
    "wind-footer": WindFooter
  }
};
</script>

<style>
body {
  background: url("https://stupidwind-1300173318.cos.ap-guangzhou.myqcloud.com/wallpaper/memphis-colorful.png")
}

/* padded */
.m-padded-mini {
  padding: 0.2em !important;
}
.m-padded-tiny {
  padding: 0.3em !important;
}
.m-padded-tb-mini {
  padding-top: 0.2em !important;
  padding-bottom: 0.2em !important;
}
.m-padded-tb-tiny {
  padding-top: 0.3em !important;
  padding-bottom: 0.3em !important;
}
.m-padded-tb-small {
  padding-top: 0.5em !important;
  padding-bottom: 0.5em !important;
}
.m-padded-tb {
  padding-top: 1em !important;
  padding-bottom: 1em !important;
}
.m-padded-tb-large {
  padding-top: 2em !important;
  padding-bottom: 2em !important;
}
.m-padded-tb-big {
  padding-top: 3em !important;
  padding-bottom: 3em !important;
}
.m-padded-tb-huge {
  padding-top: 4em !important;
  padding-bottom: 4em !important;
}
.m-padded-tb-massive {
  padding-top: 5em !important;
  padding-bottom: 5em !important;
}
.m-padded-lr {
  padding-left: 1em !important;
  padding-right: 1em !important;
}
.m-padded-lr-large {
  padding-left: 2em !important;
  padding-right: 2em !important;
}
.m-padded-bottom-middle {
  padding-bottom: 1.2em !important;
}

/* margin */
.m-margin-tb-tiny {
  margin-top: 0.3em !important;
  margin-bottom: 0.3em !important;
}
.m-margin-tb-small {
  margin-top: 0.4em !important;
  margin-bottom: 0.4em !important;
}
.m-margin-top-large {
  margin-top: 1.4em !important;
}
.m-margin-bottom-large {
  margin-bottom: 1.4em !important;
}

/* text */
.m-text {
  font-weight: 300 !important;
  letter-spacing: 1px !important;
  line-height: 1.8;
}
.m-text-thin {
  font-weight: 300 !important;
}
.m-text-spaced {
  letter-spacing: 1px !important;
}
.m-text-lined {
  line-height: 1.8;
}
.m-text-aligned-center {
  text-align: center;
}
.m-opacity-mini {
  opacity: 0.8 !important;
}

/* display */
.m-inline-block {
  display: inline-block !important;
}

/* positon */
.m-right-top {
  position: absolute;
  top: 18px;
  right: 16px;
}

/* container */
.m-container {
  max-width: 72em !important;
  margin: auto !important;
}

/* color */
.m-black {
  color: #333 !important;
}

.m-mobile-show {
  display: none !important;
}

@media screen and (max-width: 768px) {
  .m-mobile-show {
    display: block !important;
  }
}

</style>
