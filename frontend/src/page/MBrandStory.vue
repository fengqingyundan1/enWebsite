<template>
  <div>
    <header>
       <m-header></m-header>
    </header>
    <div class="banner-box">
        <!--video-box start-->
        <div class="img-box">
           <img class="banner-img" :src="bannerImage" alt="">
        </div>
        <!--video-box end-->
    </div>
    <div class="container m-content-box">
      <!-- Wonderful focus部分start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
           Company Profile
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="text-box">
             <p class="wonderful-text">In 1999, Shengfaqiang and Wang Jing founded Pathfinder, which managed and promoted Pathfinder Company as one of the first batch of enterprises in 2009 and successfully landed on the GEM of China (stock code: 300005).</p>
             <img class="wonderful-img" src="../assets/m_img/m_brand1.png" alt="">
          </div>
        </div>
      </div>
      <!-- Wonderful focus部分end-->
      <!--Professional start-->
      <div class="brand-banner-box">
          <!--<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="item active">
                <img src="../assets/m_img/m_brand2.png" alt="First slide">
              </div>
              <div class="item">
                <img src="../assets/m_img/m_brand3.png" alt="Second slide">
              </div>
              <div class="item">
                <img src="../assets/m_img/m_brand4.png" alt="Third slide">
              </div>
            </div>
          </div>-->



          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in brandImgUrl">
                <img :src="item" alt="">
              </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>




      </div>
      <!--Professional end-->
      <!--Culture start-->
      <div class="row culture-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center culture-box-title">
            News information
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <div class="img-box">
              <img class="culture-img" src="../assets/m_img/m_brand5.png" alt="">
           </div>
           <div class="text-box">
             <div class="text-box-item">
                <h3 class="text-box-item-name">Mission</h3>
                <p class="text-box-item-text">
                  Let everyone have a healthy lifestyle, let life beyond and wonderful
                </p>
                <h3 class="text-box-item-name">Culture</h3>
                <p class="text-box-item-text">
                  Exploration, Responsibility, Synergy, Growth and Trustworthiness
                </p>
             </div>
           </div>
         </div>
      </div>
      <!--Culture end-->
    </div>
    <footer>
      <m-footer></m-footer>
    </footer>
    <div class="top-box">
      <m-top></m-top>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Swiper from 'swiper'
import mTop from '../components/MTop'
import mHeader from '../components/MHeader'
import mFooter from '../components/MFooter'
const ERR_OK = 0
export default{
  name:"ContentList",
  components:{
     mHeader,mFooter,mTop
  },
  data(){
    return {
      contentList:{},
      num: "0",
        bannerImage:'',
        bannerLists:[],
        brandImgUrl:[]
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
      getData(){
          let that=this
          let obj={}
          obj.menu_type='About'
          obj.terminal_type=2
          obj.lanauage_type=2
          that.$axios({
              url:'/Adminapi/gethomeinfo',
              method:'post',
              data:obj
          }).then(res=>{
              console.log(res.data)
              if(res.data){
                  that.bannerLists=res.data.storyImgUrl.split(',')
                  that.bannerImage=that.bannerLists[0]
                  that.brandImgUrl=res.data.brandImgUrl.split(',')
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
          // var mySwiper2 = new Swiper('.swiper-container2',{
          //     autoplay:true,
          //     loop:true,
          //     // 如果需要分页器
          //     pagination: {
          //         el: '.swiper-pagination',
          //     },
          //     // initialSlide :0,
          //     observer:true,//修改swiper自己或子元素时，自动初始化swiper
          //     observeParents:true//修改swiper的父元素时，自动初始化swiper
          // })
      }
  }
}
</script>
<style lang="less" scoped>
.banner-box{
  padding-top:58px;
  .img-box{
    width:100%;
    height:auto;
    .banner-img{
      width:100%;
      height:100%;
    }
  }
}
.m-content-box{
  overflow:hidden;
 .wonderful-box{
    .title{
       font-size: 22px;
       color: #000000;
       margin:10px 0;
       text-align: center;
     }
    .text-box{
      text-align:center;
      .wonderful-img{
        width:100%;
        height:auto;
      }
      .wonderful-text{
        font-size:14px;
        color: #000000;
        margin:0 auto 20px;
        text-align:center;
      }
    }
 }
 .brand-banner-box{
    padding:10px 0;
    .swiper-container{
      overflow:visible;
      img{
        width:100%;
      }
      .swiper-pagination-bullets{
        bottom:-30px;
        z-index:2;
      }
    }
    .carousel-indicators{
        //bottom:-50px;
        .active{
         //background:#E50113;
         //border:1px solid #E50113;
         //height:8px;
         //width:8px;
         //margin:0;
        }
        li{
          //background:#A2A8AC;
          //border:1px solid #A2A8AC;
          //width:8px;
          //height:8px;
          //margin:0;
        }
    }
 }
 .culture-box{
    background:#F2F2F2;
    margin:40px 0 0;
    padding:0 0 40px;
    .culture-box-title{
        font-size:24px;
        padding:30px 0;
    }
    .img-box{
      .culture-img{
        width:50%;
      }
    }
    .text-box{

    }
 }
}
</style>
