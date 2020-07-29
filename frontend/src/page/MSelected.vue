<template>
  <div class="m-index">
    <header>
      <m-header></m-header>
    </header>
    <div class="banner-box">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerLists">
                <img :src="item" alt="">
            </div>
        </div>

        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="tabs-box">
         <!--tabs start-->
         <div class="tabs clearfix">
           <div class="tab" data-index='0' data-tab='MTravel' @click="toggleTab"><a :class="[seriesIndex==0?'active':'']">Travel</a></div>
           <div class="tab" data-index='1' data-tab='MChild' @click="toggleTab"><a :class="[seriesIndex==1?'active':'']">Child</a></div>
           <div class="tab" data-index='2' data-tab='MOutgoing' @click="toggleTab"><a :class="[seriesIndex==2?'active':'']">Outgoing</a></div>
           <div class="tab" data-index='3' data-tab='MClimbing' @click="toggleTab"><a :class="[seriesIndex==3?'active':'']">Climbing</a></div>
           <div class="tab" data-index='4' data-tab='MSkating' @click="toggleTab"><a :class="[seriesIndex==4?'active':'']">Skiing</a></div>
         </div>
         <!--tabs end-->
    </div>
    <div class="container content-box">
        <!-- Wonderful focus部分start-->
        <div class="tabs-content-box">

          <!--tabs content start-->
          <!-- is 特性动态绑定子组件
           keep-alive 将切换出去的组件保留在内存中-->
             <MSkating :is="currentTab" keep-alive></MSkating>
          <!--tabs content end-->

        </div>
        <!-- Wonderful focus部分end-->
    </div>
    <div class="top-box">
        <m-top></m-top>
    </div>
    <footer>
      <m-footer></m-footer>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import mTop from '../components/MTop'
  import mHeader from '../components/MHeader'
  import mFooter from '../components/MFooter'
  import MSkating from '../components/MSkating';
  import MClimbing from '../components/MClimbing';
  import MOutgoing from '../components/MOutgoing';
  import MChild from '../components/MChild';
  import MTravel from '../components/MTravel';
  import Swiper from 'swiper';
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
      mHeader,mFooter,MSkating,MClimbing,MOutgoing,MChild,MTravel,mTop
    },
    data(){
        return{
            homeList:[],
            num: "0",
            isShow:'false',
            currentTab:"MSkating",
            seriesIndex:"4",
            bannerLists:[]
        }
    },
    methods:{
       getNumFormSon(data){
          this.num = data
          //console.log(this.num)
       },
       toggleTab (e) {
         this.seriesIndex = e.currentTarget.getAttribute('data-index');
         this.currentTab = e.currentTarget.getAttribute('data-tab');
       },
        getData(){
            let that=this
            let obj={}
            obj.menu_type='Select'
            obj.terminal_type=2
            obj.lanauage_type=2
            that.$axios({
                url:'/Adminapi/gethomeinfo',
                method:'post',
                data:obj
            }).then(res=>{
                console.log(res.data)
                if(res.data){
                    that.bannerLists=res.data.bannerImgUrl.split(',')
                    setTimeout(()=>{
                        that.initSwiper()
                    },0)
                }
            })
        },
        initSwiper(){
            var mySwiper = new Swiper('.swiper-container',{
                autoplay:true,
                loop:true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // initialSlide :0,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true//修改swiper的父元素时，自动初始化swiper
            })
        }
    },
     created(){
        this.getData()
     }
  }
</script>
<style lang="less" scoped>
.banner-box{
  padding-top:58px;
  img{
    width:100%;
  }
}
.tabs-box{
   width:100%;
   margin:20px auto;
   border-bottom:1px solid #c7c7c7;
   .tabs{
     .tab{
         width:20%;
         text-align:center;
         float:right;
         font-size:12px;
         padding:0 0 20px;
     }
     .active{
       color:#ffffff!important;
       padding:5px 8px;
       background:#000000;
     }
   }
}
</style>
