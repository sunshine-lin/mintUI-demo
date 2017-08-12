<template>
<mt-tabbar v-model="selected">
  <mt-tab-item v-for="(item,index) in footerArr" :key="index" id="外卖">
    <img slot="icon" :src="item.img">
    {{item.title}}
  </mt-tab-item>
</mt-tabbar>
</template>
<script type="text/ecmascript-6">
   export default {
   		data () {
   			return {
   				footerArr: [
   					{title: '首页', img: require('./images/icon-homeOff.png')},
   					{title: '搜索', img: require('./images/icon-searchOff.png')},
   					{title: '购物车', img: require('./images/icon-cartOff.png')},
   					{title: '我的', img: require('./images/icon-myOff.png')}
   				]
   			}
   			
   		}
   }
</script>
<style rel="stylesheet" lang="scss">
    
</style>