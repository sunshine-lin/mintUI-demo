<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  font-size: 13.3333333vw;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
body {
  background: #f4f4f4;
}
</style>
