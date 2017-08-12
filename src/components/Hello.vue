<template>
  <div class="hello">
  <!-- 头部 -->
     <!--  <mt-header fixed title="固定在顶部">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header> -->
      <g-header title="我是头部导航"></g-header>
      <!-- tab切换 -->
      <mt-navbar v-model="tabSelected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
      <!-- tab切换内容 -->
      <mt-tab-container v-model="tabSelected" swipeable>
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>

      <g-footer title="我是头部导航"></g-footer>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      tabSelected: "1"
    }
  },
  watch: {
    tabSelected () {
      console.log(this.tabSelected)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 1rem 0;
}
</style>
