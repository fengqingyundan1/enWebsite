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
      <!-- FirstTechnology 部分start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            TOREAD "Polar Bionic Technology"
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <div class="text-box">
             <img class="wonderful-img" :src="wonderfulImageUrl" alt="">
             <h2 class="wonderful-name">{{wonderfulTitle}}</h2>
             <p class="wonderful-text">{{wonderfulInfo}}</p>
           </div>
         </div>
      </div>
      <!-- FirstTechnology 部分end-->
      <!--SecondTechnology 部分 start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 title-ud">
            TIEF Technology
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" v-for="item in tiffMLists">
           <div class="text-box">
             <img class="wonderful-img" :src="item.imageUrl" alt="">
             <h2 class="wonderful-name">{{item.title}}</h2>
             <p class="wonderful-text">
               {{item.info}}
             </p>
           </div>
         </div>

        <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
           <!--<div class="text-box">-->
             <!--<img class="wonderful-img" src="../assets/m_img/m_tief2.png" alt="">-->
             <!--<h2 class="wonderful-name">TiEF SKIN ®</h2>-->
             <!--<p class="wonderful-text">-->
               <!--1. Application: Light Jackets</br>-->
               <!--2. Bionic Element: Sunset Butterflies</br>-->
               <!--3. Function: Ultralightblock- UPF ＞40，uva＜5%, block 99% of UV-->
             <!--</p>-->
           <!--</div>-->
        <!--</div>-->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <router-link class="learn-link" to="/MTief">learn more</router-link>
        </div>
      </div>
      <!--SecondTechnology 部分 end-->
      <!--ThirdTechnology 部分 start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 title-ud">
            SAFree  Technology
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" v-for="item in SAFreeMLists">
           <div class="text-box">
             <img class="wonderful-img" :src="item.imageUrl" alt="">
             <h2 class="wonderful-name">{{item.title}}</h2>
             <p class="wonderful-text">
              {{item.info}}</p>
           </div>
         </div>
         <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
            <!--<div class="text-box">-->
              <!--<img class="wonderful-img" src="../assets/m_img/m_safree6.png" alt="">-->
              <!--<h2 class="wonderful-name">SAFree Rock ∙ AIR ®</h2>-->
              <!--<p class="wonderful-text">-->
                <!--1.Application: Mountaineering shoes/ Trekking shoes/ Trail running shoes</br>-->
                <!--2.Bionic Element: Rocks</br>-->
                <!--3. Function: Rub wear resistance&#45;&#45;&#45;&#45; Weight is 25% less than normal shoes. Wear resistance is 30% more than normal rubber-->
              <!--</p>-->
            <!--</div>-->
         <!--</div>-->
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <router-link class="learn-link" to="/MSafree">learn more</router-link>
         </div>


      </div>
      <!--ThirdTechnology 部分 end-->
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
// import axios from 'axios'
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
        bannerLists:[],
        bannerImage:'',
        wonderfulInfo:'',
        wonderfulTitle:'',
        wonderfulImageUrl:'',
        tiffMLists:[],
        SAFreeMLists:[],
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
                  that.bannerLists=res.data.techImgUrl.split(',')
                  that.bannerImage=that.bannerLists[0]
                  that.wonderfulImageUrl=res.data.wonderfulImageUrl
                  that.wonderfulInfo=res.data.wonderfulInfo
                  that.wonderfulTitle=res.data.wonderfulTitle
                  that.tiffMLists=res.data.tiffMLists
                  that.SAFreeMLists=res.data.SAFreeMLists
              }
          })
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
       font-size:22px;
       color: #000000;
       margin:10px 0;
       text-align: left;
     }
     .title-ud{
        font-size:22px;
        color: #000000;
        margin:0 0 10px;
     }
     .learn-link{
        display:inline-block;
        width:100%;
        height:40px;
        line-height:40px;
        text-align:center;
        background:#000000;
        font-size:14px;
        color:#ffffff!important;
        margin:0 0 20px;
     }
    .text-box{
      text-align:left;
      .wonderful-img{
        width:100%;
        height:auto;
      }
      .wonderful-name{
        font-size: 16px;
        color: #000000;
        margin:10px auto;
        line-height:20px;
      }
      .wonderful-text{
        font-size: 12px;
        color: #000000;
        margin:0 auto 20px;
      }
    }
 }
  .professional-box{
     margin:0 auto;
    .title{
      font-size:22px;
      color: #000000;
    }
    .img-box{
      .professional-img{
        width:100%;
        //height:300px;
      }
    }
  }
}
</style>
