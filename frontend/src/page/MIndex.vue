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
            <!--<div class="swiper-slide">-->
              <!--<img src="../assets/m_img/m_brand_banner.png" alt="">-->
            <!--</div>-->
            <!--<div class="swiper-slide">-->
              <!--<img src="../assets/m_img/m_climbing_banner.png" alt="">-->
            <!--</div>-->
            <!--<div class="swiper-slide">-->
              <!--<img src="../assets/m_img/m_outgoing_banner.png" alt="">-->
            <!--</div>-->
              <!--<div class="swiper-slide">-->
                <!--<img src="../assets/m_img/m_responsibility_banner.png" alt="">-->
              <!--</div>-->
              <!--<div class="swiper-slide">-->
                <!--<img src="../assets/m_img/m_technology_banner.png" alt="">-->
              <!--</div>-->
          </div>

          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

    </div>
    <div class="container content-box-app">
        <!-- 系列部分start-->
        <div class="row series-box" v-for="item in seriesLists">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h5 class="series-type first-series-type">{{item.label}}</h5>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="img-box">
              <img class="series-img" :src="item.imgUrl" alt="">
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
               <h2 class="series-name">{{item.title}}</h2>
               <p class="series-text">{{item.info}}</p>
                <router-link class="learn-link" to="/MSkatingDetails">learn more</router-link>
            </div>
          </div>
        </div>

        <!--<div class="row series-box">-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
              <!--<h5 class="series-type">MOUNTAINEERING</h5>-->
          <!--</div>-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
            <!--<div class="img-box">-->
              <!--<img class="series-img" src="../assets/m_img/m_index2.gif" alt="">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
            <!--<div class="text-box">-->
               <!--<h2 class="series-name">My 143 day</h2>-->
               <!--<p class="series-text">"We will see the ultimate beauty only if we first experience extreme difficulties; we may discover our original selves only if we are already on the journey." Ms. Wang Jing is a well-known figure in the field of mountaineering and exploration. She has reached the top of the snow-capped mountains above 8000 meters 9 times (3 times she successfully reached the top of Everest). She completed the Explorers Grand Slam (The seven highest peaks and both poles), named the 7+2 project by Ms. Wang Jing, in 143 consecutive days and became the fastest person in the world to complete this exploration project.</p>-->
                <!--<router-link class="learn-link" to="/MClimbingDetails">learn more</router-link>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="row series-box">-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
              <!--<h5 class="series-type">OUTDOOR </h5>-->
          <!--</div>-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
            <!--<div class="img-box">-->
              <!--<img class="series-img" src="../assets/m_img/m_index3.gif" alt="">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
            <!--<div class="text-box">-->
               <!--<h2 class="series-name">"TOREAD Flying Team won the first championship"</h2>-->
               <!--<p class="series-text">Flying Team participated UTMB competition in France for the first time. Among runners, Jia Orenga, who participated in the OCC group competition, won the zero breakthrough of the Chinese champion in UTMB, which inspired the morale of the Chinese people. Moreover, the victory was a milestone in the history of Chinese outdoor sports.</p>-->
                <!--<router-link class="learn-link" to="/MOutgoingDetails">learn more</router-link>-->
           <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!-- 系列部分end-->
        <!--SELECTED start-->
        <div class="row selected-box">
          <h2 class="selected-name">SELECTED</h2>
          <div class="text-center selected-img-box">
             <img class="selected-img" src="../assets/m_img/m_index4.png" alt="">
          </div>
          <div class="text-center selected-text-box">
             <h2 class="selected-title">"THINKING FOR FUTURE"</h2>
             <router-link class="learn-link" to="/MSelected">learn more</router-link>
          </div>
          <div class="text-center selected-img-box">
             <img class="selected-img" src="../assets/m_img/m_index5.png" alt="">
          </div>
          <div class="text-center selected-text-box">
             <h2 class="selected-title">"FREE YOUR MIND"</h2>
             <router-link class="learn-link learn-link-last" to="/MSelected">learn more</router-link>
          </div>

        </div>
        <!--SELECTED end-->
        <!--科技部分展示start-->
        <div class="row technology-box" v-for="item in techLists">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
            <!--<h2 class="technology-box-title">TOREAD "Polar Bionic Technology"</h2>-->
            <h2 class="technology-box-title">{{item.text}}</h2>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="img-box">
              <img class="technology-img" :src="item.imgUrl" alt="">
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
               <!--<p class="technology-text">TiEF  Fbrics Technology / SAFree  Shoe-soles Technology</p>-->
               <p class="technology-text">{{item.title}}</p>
                <router-link class="learn-link" to="/MTechnology">learn more</router-link>
            </div>
          </div>
        </div>
        <!--科技部分展示end-->
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
  import mHeader from '../components/MHeader'
  import mFooter from '../components/MFooter'
  import mTop from '../components/MTop'
  import axios from 'axios'
  import Swiper from 'swiper'
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
      mHeader,mFooter,mTop
    },
    data(){
        return{
            homeList:[],
            num: "0",
            isShow:'false',
            bannerLists:[],
            seriesLists:[],
            techLists:[]
        }
    },
    methods:{
       getNumFormSon(data){
          this.num = data
          //console.log(this.num)
       },
        getDatas(){
            let that=this
            let obj={}
            obj.menu_type='Home'
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
                    that.seriesLists=res.data.cateTabs
                    that.techLists=res.data.techs
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
    created() {
        let that=this
        that.getDatas()
    },
    // mounted(){
    //   var mySwiper = new Swiper('.swiper-container',{
    //       autoplay:true,
    //       loop:true,
    //      // 如果需要分页器
    //       pagination: {
    //         el: '.swiper-pagination',
    //       },
    //       // initialSlide :0,
    //       observer:true,//修改swiper自己或子元素时，自动初始化swiper
    //       observeParents:true//修改swiper的父元素时，自动初始化swiper
    //   })
    // }
  }
</script>
<style lang="less">
.banner-box{
  padding-top:58px;
  img{
    width:100%;
  }
}
.content-box-app{
  .series-box{
    .series-type{
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      text-align:left;
      margin:10px 0 30px;
    }
    .first-series-type{
      margin-top:30px;
    }
    .img-box{
      width:80%;
      margin:0 auto;
      .series-img{
        width:100%;
      }
    }
    .text-box{
      .series-name{
        font-size: 24px;
        color: #000000;
        letter-spacing: 0;
        margin:40px 0 30px;
        font-weight:bold;
      }
      .series-text{
        font-size: 14px;
        color: #202020;
        text-align: center;
        line-height: 20px;
      }
      .learn-link{
        display:inline-block;
        width:40%;
        height:40px;
        line-height:40px;
        border:2px solid #000000;
        margin:18px 0;
      }
    }
  }
  .selected-box{
     .selected-name{
        opacity: 0.38;
        font-family: HiraKakuStd-W8;
        font-size: 50px;
        color: #3E4C5B;
        letter-spacing: 0;
        text-align:left;
        margin:0;
    }
    .selected-img-box{
      .selected-img{
        width:100%;
      }
    }
    .selected-text-box{
      padding:0 15px;
      .selected-title{
        font-size:18px;
        font-weight:bold;
      }
      .selected-text{
        color:#000000;
      }
      .learn-link{
        display:inline-block;
        width:40%;
        height:40px;
        line-height:40px;
        border:2px solid #000000;
        margin:18px 0 26px;
        background:#000000;
        color:#ffffff!important;
      }
     .learn-link-last{
        margin:18px 0;
      }
    }
  }
  .technology-box{
     background:#f2f2f2;
     margin:0 -6px;
    .technology-box-title{
      font-size:24px;
      color: #000000;
      letter-spacing: 0;
      text-align:center;
      margin:10px 0;
    }
    .img-box{
       .technology-img{
          width:100%;
       }
    }
    .text-box{
      .technology-text{
         font-size: 18px;
         color: #000000;
         letter-spacing: 0;
         text-align: center;
         line-height: 26px;
         margin:30px 0 0;
      }
      .learn-link{
        display:inline-block;
        font-size: 18px;
        width:40%;
        height:40px;
        line-height:40px;
        border:2px solid #000000;
        margin:18px 0;
      }
    }
  }
}
</style>
