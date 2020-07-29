<template>
  <div>
    <header>
       <m-header></m-header>
    </header>
    <div class="banner-box">
        <!--video-box start-->
        <div class="video-box">
           <video class="shadow-video"  style="object-fit: fill" src="otherVideos[0].srcUrl"
                  controls="controls" x5-playsinline="" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true"
                  x5-video-player-type="h5" x5-video-player-fullscreen="" x5-video-orientation="portraint"  poster="otherVideos[0].imageUrl">
             your browser does not support the video tag
           </video>
        </div>
        <!--video-box end-->
    </div>
    <div class="container m-content-box">
      <!-- Wonderful focus部分start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            Wonderful focus
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding" v-for="item in focusLists">
          <div class="text-box box-shadow">
             <img class="wonderful-img" :src="item.imageUrl" alt="">
             <h2 class="wonderful-name">{{item .title}}</h2>
             <p class="wonderful-text">{{item.info}}</p>
          </div>
        </div>
      </div>
      <!-- Wonderful focus部分end-->
      <!--Professional start-->
      <div class="row professional-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            Professional
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding">
          <div class="img-box">
             <img class="professional-img" src="../assets/m_img/m_climbing_professional.png" alt="">
          </div>
        </div>
      </div>
      <!--Professional end-->
      <!--Products start-->
      <div class="row products-box" @click="goSelect()">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
            <h2 class="title">Beyond Your Dream</h2>
         </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding" v-for="item in productLists">
          <div class="text-box">
             <img class="products-img" :src="item.imageUrl" alt="">
             <span class="goods-name">{{item.title}}</span>
          </div>
        </div>
      </div>
      <!--Products end-->
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
        otherVideos:[],
        focusLists:[],
        productLists:[]
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
    goSelect(){
      this.$router.push({
        path:'/MSelected'
      })
    },
      getData(){
          let that=this
          let obj={}
          obj.menu_type='Climb'
          obj.terminal_type=1
          obj.lanauage_type=2
          that.$axios({
              url:'/Adminapi/gethomeinfo',
              method:'post',
              data:obj
          }).then(res=>{
              console.log(res.data)
              if(res.data){
                  // that.bannerLists=res.data.bannerImgUrl.split(',')
                  that.otherVideos=res.data.otherVideos
                  that.productLists=res.data.productLists
                  that.focusLists=res.data.focusLists
              }
          })
      }
  }
}
</script>
<style lang="less" scoped>
.banner-box{
  padding-top:58px;
  .video-box{
    width:100%;
    height:auto;
    .shadow-video{
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
       text-align: left;
     }
     .box-shadow{
       box-sizing:border-box;
       box-shadow: -1px 13px 20px 0 #F0F2F4;
       margin:0 15px 30px;
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
        padding:0 13px;
      }
      .wonderful-text{
        font-size: 12px;
        color: #666666;
        margin:0 auto;
        padding:0 13px 10px;
      }
    }
 }
  .professional-box{
     margin:0 auto;
     background:#f2f2f2;
    .title{
      font-size: 22px;
      color: #000000;
      text-align:left;
      margin:0 0 10px;
      padding:10px 10px 0;
    }
    .img-box{
      padding:0 10px;
      .professional-img{
        width:100%;
        //height:300px;
      }
    }
  }
  .products-box{
     margin:0px;
     padding:20px 0;
     background:#f2f2f2;
     .title{
      font-size:18px;
      color: #000000;
      letter-spacing: 0;
      margin:20px 0;
      text-align:center;
     }
     .text-box{
        text-align:center;
        .products-img{
          width:100%;
        }
        .goods-name{
          display:inline-block;
          font-family: PingFangSC-Medium;
          font-size:12px;
          color: #6F6F6F;
          text-align: center;
          width:100%;
          padding:10px 0;
        }
     }
  }
}
</style>
