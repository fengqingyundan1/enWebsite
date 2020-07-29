<template>
  <div>
    <header>
       <my-header @func="getNumFormSon"  tabType="3"></my-header>
    </header>
    <div class="banner-box">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in bannerLists">
                    <img :src="item" alt="">
                </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <div class="container content-box">
      <!-- Wonderful focus部分start-->
      <div class="row tabs-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tabs clearfix">
           <!--tabs start-->
           <div class="float-left">
             Series
           </div>
           <div class="float-right text-right clearfix">
             <div class="tab" @click="currentTab=tab" v-for="tab in tabs"><a :class="{ active: currentTab === tab }">{{tab}}</a></div>
           </div>
           <!--tabs end-->
         </div>
        <!--tabs content start-->
        <!-- is 特性动态绑定子组件
         keep-alive 将切换出去的组件保留在内存中-->
           <Skating :is="currentTab" keep-alive></Skating>
        <!--tabs content end-->



      </div>
      <!-- Wonderful focus部分end-->
    </div>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>
// import axios from 'axios'
import myHeader from '../components/Header'
import myFooter from '../components/Footer'
import Skating from '../components/Skating';
import Climbing from '../components/Climbing';
import Outgoing from '../components/Outgoing';
import Child from '../components/Child';
import Travel from '../components/Travel';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
const ERR_OK = 0
export default{
  name:"ContentList",
  components:{
     myHeader,myFooter,Skating,Climbing,Outgoing,Child,Travel
  },
  data(){
    return {
      contentList:{},
      num: "0",
      showVideo:false,
      currentTab:"Skating",
      seriesIndex:"4",
        bannerLists:[],
        tabs:['Travel','Child','Outgoing','Climbing','Skating']
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getNumFormSon(data){
      this.num = data
      //console.log(this.num)
    },
    // toggleTab (e) {
    //   this.seriesIndex = e.currentTarget.getAttribute('data-index');
    //     console.log(e)
    //   this.currentTab = e.currentTarget.getAttribute('data-tab');
    // },
    changeVideoUrl(e){
      this.$refs.video.src=e;
    },
    isShowVideo(){
      this.showVideo=true;
    },
      getData(){
          let that=this
          let obj={}
          obj.menu_type='Select'
          obj.terminal_type=1
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
  }
}
</script>
<style lang="less" scoped>
.container{
  width:1170px!important;
}
.banner-box{
  padding-top:100px;
  img{
    width:100%;
  }
}
.content-box{
 .tabs-box{
    width:90%;
    margin:0 auto;
    .tabs{
      box-sizing:border-box;
      padding:40px 0 15px;
      color:#000000;
      border-bottom:1px solid #F2F2F2;
      margin-bottom:25px;
      .float-left{
        box-sizing:border-box;
        float:left;
        width:50%;
      }
      .float-right{
        box-sizing:border-box;
        float:right;
        width:50%;
        .tab{
          box-sizing:border-box;
          width:20%;
          float:right;
          a{
            padding:5px 8px;
          }
          .active{
             background:#000000;
             color:#ffffff!important;
          }
        }
      }
    }
 }
  .products-box{
     width:90%;
     margin:40px auto;
     .title{
      font-size: 36px;
      color: #000000;
      letter-spacing: 0;
      margin:0 0 40px;
      .products-box-title{
          margin-left:170px;
          margin-top:0;
      }
     }
     .text-box{
        text-align:center;
        .products-img{
          width:80%;
        }
     }
  }
}
</style>
