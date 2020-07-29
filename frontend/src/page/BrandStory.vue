<template>
  <div class="all-box">
    <header>
      <my-header @func="getNumFormSon" tabType="4"></my-header>
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
    <div class="container content-box-brand">

        <div class="first-box">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="title-box">TOREAD HOLDING GROUP CO., LTD.</div>
                </div>
            </div>
            <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                  <div class="text-box">
                    <p class="text-box-text">
                      TOREAD HOLDING GROUP CO., LTD. was established in 1999 by founders Mr. Sheng Faqiang and Ms. Wang Jing. Faqiang and Jing have invested their hearts and souls for the development of the company. On Oct. 30, 2009, TOREAD became part of the ChiNext Board (Stock Code: 300005), which became a foundation for further development of the company. Currently, the main business lines of TOREAD include TOREAD outdoor, TOREAD Kids, American outdoor brand Discovery Expedition and outdoor sports community Greenfield Network.
                    </p>
                  </div>
               </div>
            </div>
        </div>
        <!--TIEF start-->
        <div class="second-box">

            <div class="row">
               <div class="text-center">

                    <div class="swiper-container swiper-container2">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide" v-for="item in brandImgUrl">
                            <img :src="item" alt="">
                          </div>
                        </div>

                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination" id="swiper-pagination"></div>
                    </div>

               </div>
            </div>
        </div>
        <!--TIEF end-->
        <!-- SAFree部分start-->
        <div class="third-box">
          <div class="row margin-bottom80">
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
               News information
             </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
              <div class="img-box">
                <div class="mask">
                 <div class="mask-text-box">
                   <div class="mask-text">

                   </div>
                 </div>
                </div>
                <img class="third-img" src="../assets/img/pc_brand3.png" alt="">
              </div>
              <p class="brand-text">vision</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
              <div class="img-box">
                <div class="mask">
                   <div class="mask-text-box">
                     <div class="mask-text">
                       Let everyone have a healthy lifestyle, let life beyond and wonderful
                     </div>
                   </div>
                </div>
                <img class="third-img" src="../assets/img/pc_brand4.png" alt="">
              </div>
              <p class="brand-text">Mission</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
              <div class="img-box">
                <div class="mask">
                  <div class="mask-text-box">
                    <div class="mask-text">
                      Exploration, responsibility, cooperation, growth and trustworthiness
                    </div>
                  </div>
                </div>
                <img class="third-img" src="../assets/img/pc_brand5.png" alt="">
              </div>
              <p class="brand-text">Values</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
              <div class="img-box">
                <div class="mask">
                  <div class="mask-text-box">
                    <div class="mask-text">

                    </div>
                  </div>
                </div>
                <img class="third-img" src="../assets/img/pc_brand6.png" alt="">
              </div>
              <p class="brand-text">Culture</p>
            </div>
          </div>
        </div>
        <!-- SAFree部分end-->
    </div>
    <footer>
      <my-footer></my-footer>
    </footer>
    <!-- 遮罩层 start-->
    <!--<div class="mask" v-if="isShow">-->
      <!--<div class="mask-content">-->
        <!--<div class="mask-con">-->
          <!--<div class="container">-->
             <!--<div class="row text-center">-->
               <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">-->
                 <!--<router-link class="logo-link active" to="/BrandStory" >-->
                   <!--Brand story-->
                 <!--</router-link>-->
               <!--</div>-->
               <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">-->
                 <!--<router-link class="logo-link" to="/Technology" >-->
                   <!--Technology Platform-->
                 <!--</router-link>-->
               <!--</div>-->
               <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">-->
                 <!--<router-link class="logo-link" to="/Responsibility" >-->
                   <!--Social Responsibility-->
                 <!--</router-link>-->
               <!--</div>-->
               <!--<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">-->
                 <!--<router-link class="logo-link" to="/Group" >-->
                   <!--Global Cooperation-->
                 <!--</router-link>-->
               <!--</div>-->
             <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="mask-bg" @click="changeIsShow"></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--遮罩层  end-->
  </div>
</template>

<script>
  import myHeader from '../components/Header'
  import myFooter from '../components/Footer'
  import axios from 'axios'
  import Swiper from 'swiper'
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
      myHeader,myFooter
    },
    data(){
        return{
            homeList:[],
            num: "0",
            isShow:true,
            bannerLists:[],
            brandImgUrl:[]
        }
    },
    methods:{
       getNumFormSon(data,isShow){
          this.num = data;
          this.isShow = isShow;
          //console.log(this.num)
       },
       changeIsShow(){
          this.isShow = !this.isShow;
       },
        getData(){
            let that=this
            let obj={}
            obj.menu_type='About'
            obj.terminal_type=1
            obj.lanauage_type=2
            that.$axios({
                url:'/Adminapi/gethomeinfo',
                method:'post',
                data:obj
            }).then(res=>{
                console.log(res.data)
                if(res.data){
                    that.bannerLists=res.data.storyImgUrl.split(',')
                    that.brandImgUrl=res.data.brandImgUrl.split(',')
                    that.interestLists=res.data.interestLists
                    setTimeout(()=>{
                        that.initSwiper()
                    },0)
                }
            })
        },
        initSwiper(){
            var mySwiper1 = new Swiper('.swiper-container1',{
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
            var mySwiper2 = new Swiper('.swiper-container2',{
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
          this.getData()
      }
  }
</script>
<style lang="less" scoped>
.container{
  width:1170px!important;
}
.all-box{
  position:relative;
  z-index:1;
 .mask{
    position:absolute;
    top:100px;
    left:0;
    right:0;
    bottom:0;
    z-index:16;
    .mask-content{
      //position:relative;
      height:100%;
      .mask-con{
        position:fixed;
        top:100px;
        left:0;
        right:0;
        height:80px;
        line-height:80px;
        background:#231916;
        color:#ffffff;
        z-index:1;
        .logo-link{
          display:inline-block;
          width:76%;
          height:100%;
          color:#ffffff!important;
        }
        .active{
          background:#000000;
        }
      }
      .mask-bg{
        position:absolute;
        top:80px;
        left:0;
        right:0;
        bottom:0;
        background:#000000;
        opacity:0.6;
      }
    }
 }
}
.banner-box{
  padding-top:100px;
  img{
    width:100%;
  }
}
.content-box-brand{
  .first-box{
     width:90%;
     margin:80px auto 20px;
    .title-box{
      font-size:28px;
      color: #000000;
      font-weight:600;
      letter-spacing: 0;
      margin-bottom:30px;
      text-align:center;
    }
    .text-box{
      width:100%;
      text-align:left;
      margin:20px auto;
      .text-box-text{
        font-size: 16px;
        color: #929292;
        letter-spacing: 0;
        text-align: center;
        line-height: 25px;
      }
    }
  }
  .second-box{
     width:90%;
     margin:40px auto 0;
     padding:0 0 60px;
     overflow:hidden;
     .text-center{
        .swiper-container{
           overflow:visible;
           #swiper-pagination{
              bottom:-60px;
           }
        }
        img{
              width:100%;
        }
     }
  }
   .third-box{
     width:90%;
     margin:0 auto;
     .title{
       font-weight:600;
       font-size: 28px;
       color: #000000;
       margin:40px 0 30px;
     }
     .brand-text{
       font-size: 22px;
       color: #000000;
       margin:20px 0;
     }
     .img-box{
       width:100%;
       margin:0 auto;
       position:relative;
       /*.mask{*/
         /*position:absolute;*/
         /*top:0;*/
         /*left:0;*/
         /*bottom:0;*/
         /*right:0;*/
         /*background:#E50113;*/
         /*color:#ffffff;*/
         /*opacity:0;*/
         /*padding:0 10px;*/
         /*font-size: 24px;*/
         /*.mask-text-box{*/
            /*display:block;*/
            /*position:relative;*/
            /*width:100%;*/
            /*height:100%;*/
            /*.mask-text{*/
              /*font-size:20px;*/
              /*position:absolute;*/
              /*top:50%;*/
              /*padding:20px 10px;*/
              /*!* 这里有兼容性问题 *!*/
              /*-webkit-transform: translateY(-50%);*/
              /*-ms-transform: translateY(-50%);*/
              /*-o-transform: translateY(-50%);*/
              /*transform: translateY(-50%);*/
            /*}*/
         /*}*/
       /*}*/
       .mask:hover{
         opacity:1;
       }
       .third-img{
          width:100%;
       }
     }
     .text-box{
       width:100%;
       text-align:left;
       margin:0 auto;
       //height:280px;
       padding:0 10%;
       .third-name{
         font-size: 26px;
         color: #333333;
         letter-spacing: 0;
         margin:0 0 20px;
       }
       .third-text{
           font-size: 14px;
           color: #9C9C9C;
           //text-overflow: -o-ellipsis-lastline;
           //overflow: hidden;
           //text-overflow: ellipsis;
           //display: -webkit-box;
           //-webkit-line-clamp: 5;
           //line-clamp: 5;
           //-webkit-box-orient: vertical;
           p{
               margin:0 0 6px;
           }
       }
     }
   }
}
</style>
