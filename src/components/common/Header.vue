<template>
	<mt-header fixed :title="title">
	  <span slot="left" @click="$router.go(-1)">
	    <mt-button icon="back">返回</mt-button>
	  </span>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
</template>
<script type="text/ecmascript-6">
    export default {
    	props: {
			title: ''
    	}
    }
</script>
<style rel="stylesheet">
    
</style>
