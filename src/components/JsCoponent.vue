<template>
	<div id="">
		<!-- 加载更多 loadMord -->
       <!--  <mt-loadmore :top-method="pullDown"  :bottomMethod="pullUp" 
        @top-status-change="handleTopChange"
         @bottom-status-change="handleBottomChange">
           <ul>
             <li v-for="item in 20">{{ item }}</li>
         </ul>
         </mt-loadmore> -->
       <!--   <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
           <li v-for="item in list">{{ item }}</li>
         </ul> -->
         <!-- alert confirm prompt -->
        <mt-button type="success" @click.native="mtAlert()">alert</mt-button>
         <mt-button type="danger"  @click.native="mtConfirm()">confirm</mt-button>
          <mt-button type="warning"  @click.native="mtPrompt()">prompt</mt-button>
          <!-- action sheet -->
          <mt-button type="warning"  @click.native="showSheet()">action sheet</mt-button>
          <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
          </mt-actionsheet>
          <!-- popup 主要做容器用z-->
           <mt-button type="warning"  @click.native="popupVisible = true">popup</mt-button>
          <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            position="bottom">
            <mt-button type="success">按钮</mt-button>
          </mt-popup>
        <!-- swiper -->
        <mt-swipe @change="swiperChange">
          <mt-swipe-item class="swiperItem">
            1
          </mt-swipe-item>
          <mt-swipe-item class="swiperItem">
             2
          </mt-swipe-item>
          <mt-swipe-item class="swiperItem">
             3
          </mt-swipe-item>
        </mt-swipe>
        <!-- range -->
        <mt-range
          v-model="rangeValue"
      
          :bar-height="5">
          <span slot="start">{{rangeValue}}</span>
           <span slot="end">100</span>
        </mt-range>
        <!-- progress -->
        <mt-progress :value="60" barHeight="10">
          <div slot="start">0%</div>
          <div slot="end">100%</div>
        </mt-progress>
        <!-- picker -->
        <mt-picker :slots="slots" @change="pickValueChange"></mt-picker>
        <!-- data picker -->
        <mt-button type="success" @click.native="datePickShow">data picker按钮</mt-button>
        <mt-datetime-picker
           ref="picker"
           type="datetime"
           v-model="datePickerValue">
        </mt-datetime-picker>
        <span>{{datePickerValue}}</span>
	</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
    export default {
    	porps: {},
    	components: {},
    	data() {
             return {
               topStatus: '',
               loading: true,
               actions: [{
                name: '第一项',
                method: this.first
               },{
                name: '第二项',
                method: this.second
               }],
               sheetVisible: false,
               popupVisible: false,
               rangeValue: 20,
               slots: [
                       {
                         flex: 1,
                         values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                         className: 'slot1',
                         textAlign: 'right'
                       }, {
                         divider: true,
                         content: '-',
                         className: 'slot2'
                       }, {
                         flex: 1,
                         values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                         className: 'slot3',
                         textAlign: 'left'
                       }
                     ],
                datePickerValue: ``
             
             };
           },
           methods: {
             handleTopChange(status) {
               console.log(status)
             },
             handleBottomChange (status) {
                 console.log(status)
             },
             pullDown () {
                // console.log("pullDown")
             },
             pullUp () {
                // console.log("PullUp")
             },
             loadMore() {
               this.loading = true;
               setTimeout(() => {
                 let last = this.list[this.list.length - 1];
                 for (let i = 1; i <= 10; i++) {
                   this.list.push(last + i);
                 }
                 this.loading = false;
               }, 2500);
             },
             mtAlert () {
                MessageBox.alert(    'alert狂message','alert的title'
                )
             },
             mtConfirm () {
                 MessageBox.confirm('确定执行此操作删除?','你确定吗').then((action)=>{
                    console.log(action)
                 })
             },
             mtPrompt () {
                MessageBox.prompt('确定执行此操作删除?','你确定吗').then((value,action)=>{
                    console.log(value,action)
                 })
             },
             showSheet () {
                this.sheetVisible = true
             },
             first () {
                alert("first")
             },
             second () {
                alert("second")
             },
             swiperChange (index) {
                console.log(index)
             },
             pickValueChange (arr,values) {
                console.log(values)
             },
             datePickShow () {
                this.$refs.picker.open()
             }
           },

    }
</script>
<style rel="stylesheet" lang="scss">
.mint-swipe-items-wrap{
    width: 400px !important;
    height: 200px !important;
}
    .mint-swipe-item{
        width: 400px;
        height: 200px;
        background: #f00;
        &:nth-child(2){
            background: #0f0;
        };
        &:nth-child(3){
            background: #00f;
        }
    }
</style>