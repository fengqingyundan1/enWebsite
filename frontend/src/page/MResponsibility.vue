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
            Toread Commonweal Foundation
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_responsibility1.png" alt="">
             <p class="wonderful-text">Beijing Toread Commonwealth Foundation is a local non-public fund established by Toread Holding Group Co., Ltd. On December 31, 2013, which was officially registered and established by Beijing Municipal Civil Affairs Bureau. The original fund is 2 million Yuan, donated by TOREAD Group. TOREAD has pledged to donate 1% of company’s net profit to the foundation every year.</p>
          </div>
        </div>

      </div>
      <!-- Wonderful focus部分end-->
      <!-- second部分start-->
      <div class="row second-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
           Main Public Projects
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_responsibility2.png" alt="">
             <h2 class="wonderful-name">Protection of Hoh Xil Tibetan Antelopes</h2>
             <p class="wonderful-text">In 2013, founder Mr. Sheng Faqiang donated equipment, vehicles and training funds for grassroots employees in Hoh Xil reserve, with a total value of 500,000 Yuan. For the next five years, he will donate 200,000 Yuan worth of outdoor equipment each year to support the frontline patrol members of the reserve.</p>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_responsibility3.png" alt="">
             <h2 class="wonderful-name">Donation for Dunhang Middle School Education</h2>
             <p class="wonderful-text">Mr. Sheng Faqiang, founder of Toread Holding Group Co., Ltd., personally donated 6 million Yuan to the foundation and set up the "Dunhuang Middle School Sheng Faqiang Education Development Fund" to reward excellent teachers and students and support disadvantaged students. </p>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_responsibility4.png" alt="">
             <h2 class="wonderful-name">Natural Disaster Relief</h2>
             <p class="wonderful-text">TOREAD has donated about 5 million Yuan worth of materials for disaster relief. The funds have been used to assist with the recovery of the following disasters: Wenchuan Earthquake, Yushu Earthquake, Ya 'an Earthquake, Tibet and Nepal Earthquake and others.</p>
          </div>
        </div>
      </div>
      <!--second部分end-->
      <!-- third部分start-->
      <div class="row third-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            Commonweal Activates
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" v-for="item in interestLists">
          <div class="text-box">
             <img class="wonderful-img" :src="item.imageUrl" alt="">
             <h2 class="wonderful-name">{{item.title}}</h2>
             <p class="wonderful-text">{{item.info}}</p>
             <p class="wonderful-time">{{item.time}}</p>
          </div>
        </div>

        <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">-->
          <!--<div class="text-box">-->
            <!--<img class="wonderful-img" src="../assets/m_img/m_responsibility6.png" alt="">-->
            <!--<h2 class="wonderful-name">Pathfinders rush to help Jiuzhaigou earthquake-stricken area</h2>-->
            <!--<p class="wonderful-text">At 21:19, August 8th, 2017, an earthquake of M7.0 struck near Jiuzhai Gou County, Aba City, Si Chuan Province. TOREAD foundation quickly launched a disaster relief mechanism and donated 200,000 Yuan worth of tents to the quake-hit areas. </p>-->
            <!--<p class="wonderful-time">2017-08-18</p>-->
          <!--</div>-->
        <!--</div>-->

      </div>
      <!--third部分end-->
      <!--Professional start-->
      <div class="row professional-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title no-padding">
            More about us
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding">
          <div class="img-box">
             <router-link class="link" to="/MTechnology">
                <img class="professional-img" src="../assets/m_img/m_responsibility8.png" alt="">
             </router-link>
          </div>
          <div class="text-box">
             <h2 class="text-box-des">Our Science and Technology</h2>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding">
          <div class="img-box">
            <router-link class="link" to="/MBrandStory">
               <img class="professional-img" src="../assets/m_img/m_responsibility9.png" alt="">
            </router-link>
          </div>
          <div class="text-box">
             <h2 class="text-box-des">Brand story</h2>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding">
          <div class="img-box">
            <router-link class="link" to="/MGroup">
               <img class="professional-img" src="../assets/m_img/m_responsibility10.png" alt="">
            </router-link>
          </div>
          <div class="text-box">
             <h2 class="text-box-des">Group Purchase and Customization</h2>
          </div>
        </div>

      </div>
      <!--Professional end-->
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
        interestLists:[]
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
                  that.bannerLists=res.data.resImgUrl.split(',')
                  that.bannerImage=that.bannerLists[0]
                  that.interestLists=res.data.interestLists
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
       padding-left:30px;
       text-align: left;
       position:relative;
       &::before{
        position:absolute;
        content:'';
        top:4px;
        left:10px;
        width:4px;
        height:24px;
        background:red;
       }
     }
    .text-box{
      text-align:center;
      .wonderful-img{
        width:60%;
        height:auto;
      }
      .wonderful-text{
        font-size: 14px;
        color: #000000;
        margin:20px auto 0;
        text-align:left;
      }
    }
 }
  .second-box{
     .title{
        font-size:20px;
        color: #000000;
        margin:20px 0;
        text-align:center;
      }
     .text-box{
       text-align:center;
       .wonderful-img{
         width:60%;
         height:auto;
       }
       .wonderful-name{
         font-size: 18px;
         color: #000000;
         margin:10px auto;
         line-height:26px;
       }
       .wonderful-text{
         font-size: 14px;
         color: #000000;
         margin:0 auto 30px;
         text-align:left;
       }
     }
  }
  .third-box{
     .title{
        font-size:20px;
        color: #000000;
        margin:0 0 20px;
        text-align:center;
      }
     .text-box{
       text-align:left;
       box-shadow: -1px 13px 20px 0 #F0F2F4;
       .wonderful-img{
         width:100%;
         height:auto;
       }
       .wonderful-name{
         font-size:18px;
         color:#000000;
         margin:10px auto;
         line-height:26px;
         padding:0 10px;
       }
       .wonderful-text{
         font-size: 14px;
         color: #666666;
         margin:0 auto 10px;
         text-align:left;
         padding:0 10px;
       }
       .wonderful-time{
          font-family: Helvetica;
          font-size: 12px;
          color: #666666;
          text-align:right;
          padding:0 10px 20px;
       }
     }
  }
  .professional-box{
     margin:0 auto 20px;
    .title{
      font-size:22px;
      color: #000000;
      margin:20px 0;
    }
    .img-box{
      .link{
        display:inline-block;
        .professional-img{
          width:100%;
        }
      }
    }
    .text-box{
      .text-box-des{
        font-size:18px;
        margin:20px 0;
      }
    }
  }
}
</style>
