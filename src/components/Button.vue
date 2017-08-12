<template>
	<div id="">
		<!-- 按钮 -->
		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		<!-- cell -->
		<mt-cell title="标题文字"></mt-cell>
		<mt-cell title="标题文字" class="cellClass" value="说明文字" 
				to="/hello" is-link>
					<img class="icon" src="./common/images/icon-homeOff.png" slot="icon" alt="">
				</mt-cell>
		<mt-cell-swipe
		  title="标题文字"
		  :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' , fontSize: '0.3rem'},
		      handler: () => this.$messagebox('delete')
		    }
		  ]"></mt-cell-swipe>
		  <!-- spinner 家在动画 -->
		  <mt-spinner type="snake" color="#f99" :size="40"></mt-spinner>
		  <mt-spinner type="double-bounce"></mt-spinner>
		  <mt-spinner type="triple-bounce"></mt-spinner>
		  <mt-spinner type="fading-circle"></mt-spinner>
		  <!-- tab-container 可以滑动的tab切换 -->
		  <mt-tab-container v-model="active">
		    <mt-tab-container-item id="tab-container1">
		      <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
		    </mt-tab-container-item>
		    <mt-tab-container-item id="tab-container2">
		      <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
		    </mt-tab-container-item>
		    <mt-tab-container-item id="tab-container3">
		      <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
		    </mt-tab-container-item>
		  </mt-tab-container>
		  <!-- 搜索 -->
		  <mt-search
		    v-model="value"
		    cancel-text="取消"
		    placeholder="搜索"
			result="resArr"
		    >
		  </mt-search>
		
	</div>
</template>
<script type="text/ecmascript-6">
    export default {
    	porps: {},
    	components: {},
    	data () {
    		return {
    			active: 'tab-container1',
    			value: 'a',
    			resArr: ['aaaa1','bb1112'],
    			switchValue: ``
    		}
    	},
    	computed: {},
    	created () {},
    	watch: {
    		switchValue () {
    			console.log(this.switchValue)
    		}
    	},
    	mounted () {},
    	methods: {}
    }
</script>
<style rel="stylesheet" lang="scss">
    .cellClass{
    	margin-top: 0.5rem;
    	// background: #f99;
		// .icon {
		// 	width: 0.4rem;
		// 	height: 0.4rem;

		// }
    }
</style>