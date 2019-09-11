<template>
  <div id="app">
    <div class="main-container">
      <div class="main-block">
        <wind-header></wind-header>
      </div>
      <div class="main-block main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import WindHeader from "./components/WindHeader";

export default {
  name: "App",
  components: {
    "wind-header": WindHeader
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: ghostwhite;
}

#app {
  display: flex;
  justify-content: center;
}

#app > .main-container {
  width: 80%;
  margin-top: 2%;
}

#app > .main-container > .main-block {
  background-color: snow;
}

#app > .main-container > .main-content {
  margin-top: 20px;
}
</style>
