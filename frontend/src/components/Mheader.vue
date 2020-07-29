<template>
  <div class="m-header">
     <div class="container">
        <div class="row">
           <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center" @click="showLeft">
             <span class="logo-link">
                <img class="logo" src="../assets/m_img/more.png" alt="logo">
             </span>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
              <router-link class="logo-link" to="/MIndex" >
                 <img class="logo" src="../assets/m_img/logo_m.png" alt="logo">
              </router-link>
           </div>
           <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center language">
              <a class="logo-link-language" @click="changeLanguageShow">
                <img class="logo-en current" src="../assets/m_img/language_en.png" alt="logo">
                <router-link to="/Index">
                  <img v-show="isLanguageShow" class="logo-cn" src="../assets/m_img/language_cn.png" alt="logo">
                </router-link>
              </a>
           </div>
        </div>
     </div>
     <!--左边侧边栏start-->
     <div class="left-box" @click="hidePanel" v-if="isShow">
        <div class="left-box-con" id="leftPanel">
          <router-link class="panel-logo" to="/MIndex">
            <img class="panel-logo-img" src="../assets/m_img/logo_m.png" alt="logo">
          </router-link>
          <ul class="item-box">
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MSkatingDetails">
                  <span class="item-text">SKIING</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MClimbingDetails">
                  <span class="item-text">MOUNTAINEERING</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MOutgoingDetails">
                  <span class="item-text">OUTDOOR</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MSelected">
                  <span class="item-text">SELECTED</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item" @click="showAbout">
                <a class="item-logo-link clearfix">
                  <span class="item-text">ABOUT US</span>
                  <img v-if="!isShowAbout" class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                  <img v-if="isShowAbout" class="item-right-img item-right-img-last" src="../assets/m_img/m_down.png" alt="logo">
                </a>
              </li>
          </ul>
          <ul class="about-me-box" v-if="isShowAbout">
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MBrandStory">
                  <span class="item-text">Brand story</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MTechnology">
                  <span class="item-text">Technology Platform</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MResponsibility">
                  <span class="item-text">Social Responsibility</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MGroup">
                  <span class="item-text">GROUP BUYING</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
              <li class="item">
                <router-link class="item-logo-link clearfix" to="/MContactUs">
                  <span class="item-text">Contact Us</span>
                  <img class="item-right-img" src="../assets/m_img/m_right.png" alt="logo">
                </router-link>
              </li>
          </ul>
        </div>
     </div>
     <!--左边侧边栏end-->
  </div>
</template>

<script>
  export default{
    name:"mHeader",
    data(){
      return{
        isShow:false,
        isShowAbout:false,
        isLanguageShow:false
      }
    },
    created(){
     // console.log(this.tabType);
    },
    methods:{
      hidePanel(e){
        var sp = document.getElementById("leftPanel");
        if(sp){
          if(!sp.contains(e.target)){
            this.isShow = false;
          }
        }
        this.canScroll();
      },
      showLeft(e){
        this.isShow = true;
        this.noScroll();
      },
      showAbout(e){
        this.isShowAbout = !this.isShowAbout;
      },
     changeLanguageShow(){
        //this.isLanguageShow=!this.isLanguageShow;
     }
    }
  }
</script>
<style lang="less" scoped>
.m-header{
  height:58px;
  line-height:58px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:17;
  background:#ffffff;
  box-shadow:0 2px 2px #d8d8d8;
  .logo-link{
    display:inline-block;
    height:100%;
    width:100%;
    text-align:left;
    .logo{
        height:20px;
      }
  }
  .language{
    height:58px;
    .logo-link-language{
      display:inline-block;
      height:100%;
      width:100%;
      position:relative;
      .logo-en{
        position:absolute;
        top:19px;
        right:0;
        //left:50%;
        //transform:translateX(-50%);
        //-webkit-transform:translateX(-50%);
        //-moz-transform:translateX(-50%);
        //-o-transform:translateX(-50%);
        height:20px;
      }
      .logo-cn{
        height:20px;
        position:absolute;
        top:50px;
        right:0;
        //left:50%;
        //transform:translateX(-50%);
        //-webkit-transform:translateX(-50%);
       // -moz-transform:translateX(-50%);
        //-o-transform:translateX(-50%);
      }
    }
  }
  .left-box{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    .left-box-con{
      width:70%;
      height:100%;
      background:#ffffff;
      overflow-y:scroll;
      .panel-logo{
        display:block;
        height:58px;
        padding:15px 15px 10px;
        .panel-logo-img{
          display:block;
          height:25px;
        }
      }
      .item-box{
        margin:0;
        .item{
          height:60px;
          line-height:60px;
          color:#000000;
          padding:0 15px;
          //border-bottom:1px solid #e1e1e1;
          .item-logo-link{
            display:block;
            .item-text{
              font-size:12px;
            }
            .item-right-img{
              height:10px;
              float:right;
              margin-top:25px;
            }
            .item-right-img-last{
              height:7px;
              float:right;
              margin-top:26px;
            }
          }
        }
      }
      .about-me-box{
        background:#f2f2f2;
        .item{
          height:60px;
          line-height:60px;
          color:#000000;
          padding:0 15px;
          //order-bottom:1px solid #e1e1e1;
          .item-logo-link{
            display:block;
            .item-text{
              font-size:12px;
            }
            .item-right-img{
              height:10px;
              float:right;
              margin-top:26px;
            }
          }
        }
      }
    }
  }
}
</style>
