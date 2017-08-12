<template>
	<div id="">
		  <!-- switch 开关 -->
          <mt-switch v-model="switchValue"></mt-switch>
          <!-- checkLIst 多选框 -->
          <mt-checklist
            title="复选框列表"
            v-model="checkLIstValue"
            :options="['选项A', '选项B', '选项C']">
          </mt-checklist>
          <!-- radio -->
          <mt-radio
            title="单选框列表"
            v-model="radioValue"
            :options="['选项A', '选项B', '选项C']" align="right">
          </mt-radio>
          <!-- form-field -->
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="邮箱" placeholder="请输入用户名" type="email" v-model="email" state="success"
                    :attr="{maxlength:11}"></mt-field>
        <mt-field label="手机号码" placeholder="输入手机号" v-model="telValue" type="number"></mt-field>
        <!-- bgdge  -->
        <mt-badge size="large" type="success" color="#f00">{{badgeCount}}</mt-badge>
        <!-- toast -->
        <mt-button size="small" type="info" @click="showToast">点我</mt-button>
	</div>
</template>
<script type="text/ecmascript-6">
 import { Toast } from 'mint-ui';
 import { Indicator } from 'mint-ui';
    export default {
       
    	porps: {},
    	components: {
      
        },
    	data () {
    		return {
                switchValue: true,
                checkLIstValue: [],
                radioValue: '',
                username: ``,
                email: ``,
                telValue: ``,
                badgeCount: 10
            }
    	},
    	computed: {},
    	created () {},
        watch: {
            switchValue () {
                console.log(this.switchValue)
            },
            checkLIstValue: {
                handler (curVal, oldVal) {
                    console.log(curVal,oldVal)
                },
                deep: true 
            }
        },
    	mounted () {
            Indicator.open({
              text: '加载中...',
              spinnerType: 'snake'
            });
            setTimeout(()=>{
                Indicator.close();
            },2000)
        },
    	methods: {
            showToast () {
                Toast({
                    message: "谁点的我",
                    position: "bottom",
                    duration: 1000
                })
            }
        }
    }
</script>
<style rel="stylesheet" lang="scss">
    
</style>