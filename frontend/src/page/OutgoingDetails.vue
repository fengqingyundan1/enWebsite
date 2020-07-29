<template>
  <div>
    <header>
       <my-header @func="getNumFormSon"  tabType="2"></my-header>
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
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            Wonderful Spotlight
         </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center shadow-little"  v-for="item in wonderfulLists">
          <div class="text-box">
              <img class="wonderful-img" :src="item.imageUrl" alt="">
              <h2 class="wonderful-name">{{item.title}}</h2>
              <p class="wonderful-text"> {{item.info}}</p>
          </div>
        </div>
      </div>
      <!-- Wonderful focus部分end-->
      <!--Extreme light and shadow start-->
      <div class="row shadow-box" v-for="item in video">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
           Videos
         </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <div class="img-box">
              <video class="shadow-video" autoplay="autoplay" v-if="showVideo" style="object-fit: fill" :src="item.srcUrl" controls  :poster="item.poster">
                  your browser does not support the video tag
              </video>
              <img class="shadow-img" v-if="!showVideo" @click="isShowVideo" :src="item.poster" alt="">
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <div class="text-box flex">
              <h2 class="shadow-name top">{{item.title}}</h2>
              <div class="shadow-text center">
                  <p class="shadow-text-p">{{item.summary}}</p>
              </div>
             <div class="shadow-down">
                <img class="shadow-down-icon-img" src="../assets/img/pc_outgoing_icon.png" alt="">
                <span class="shadow-down-icon-name">Dana Galicia</span>
             </div>
          </div>
        </div>
      </div>
      <!--Extreme light and shadow end-->
      <!--Extreme light and shadow 222 start-->
      <div class="row shadow-box2">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <div class="text-box flex">
             <h2 class="shadow-name top">FEATURED STORIES</h2>
             <div class="shadow-text center">
                 <div class="row">
                     <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center" @click="changeVideoUrl('item.src')" v-for="item in videoLists">
                         <img class="shadow-video-img" :src="item.poster" alt="">
                     </div>
                 </div>
             </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <div class="img-box">
            <video class="shadow-video" :autoplay="videoAutoPlay" ref="video"  style="object-fit: fill" src="https://video.toread.com.cn/%E5%AE%98%E7%BD%91/pc_outgoing5_s.mp4" controls  poster="../assets/img/pc_outgoing8.png">
              your browser does not support the video tag
            </video>
          </div>
        </div>


      </div>
      <!--Extreme light and shadow 222 end-->
      <!--Professional start-->
      <div class="row professional-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
            Stars
         </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
             <div class="mask">

             </div>
             <img class="professional-img" src="../assets/img/tiyan_pic1.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
             <div class="mask">

             </div>
             <img class="professional-img" src="../assets/img/tiyan_pic2.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
            <div class="mask">

            </div>
             <img class="professional-img" src="../assets/img/tiyan_pic3.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
            <div class="mask">

            </div>
             <img class="professional-img" src="../assets/img/tiyan_pic4.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
             <div class="mask">

             </div>
             <img class="professional-img" src="../assets/img/tiyan_pic5.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center no-padding">
          <div class="text-box">
             <div class="mask">

             </div>
             <img class="professional-img" src="../assets/img/tiyan_pic6.png" alt="">
          </div>
        </div>
      </div>
      <!--Professional end-->
      <!--Products title start-->
      <div class="row products-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 class="title">Why did you choose us?</h2>
         </div>
      </div>
      <!--Products title end-->
      <!--Products content start-->
      <div class="products-content-box">
        <div class="swiper-container swiper-container2">
             <div class="swiper-wrapper">
                 <div class="swiper-slide" v-for="items in productLists1">
                     <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center products-item" v-for="item in items">
                         <div class="img-box">
                             <div class="mask">
                                 {{item.info}}
                             </div>
                             <img class="goods-img" :src="item.imageUrl" alt="">
                         </div>
                         <div class="text-box">
                             <div class="text-box-up clearfix">
                                 <span class="goods-name">{{item.title}}</span>
                             </div>
                             <div class="text-box-btn">
                                 <router-link class="concat-us" to="/ContactUs">
                                     Connect me
                                 </router-link>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <!-- 如果需要分页器 -->
             <div class="swiper-pagination" id="swiper-pagination"></div>
        </div>
    </div>
    <!--Products content end-->
    </div>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import myHeader from '../components/Header'
import myFooter from '../components/Footer'
import Swiper from 'swiper'
const ERR_OK = 0
export default{
  name:"ContentList",
  components:{
     myHeader,myFooter
  },
  data(){
    return {
      contentList:{},
      num: "0",
      showVideo:false,
      videoAutoPlay:false,
        bannerLists:[],
        wonderfulLists:[],
        video:[{
            poster:'',
            srcUrl:'',
            summary:'',
            title:''
        }],
        videoLists:[],
        productLists:[],
        productLists1:[]
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
    changeVideoUrl(e){
      this.$refs.video.src=e;
      this.videoAutoPlay=true
    },
    isShowVideo(){
      this.showVideo=true;
    },
      getData(){
          let that=this
          let obj={}
          obj.menu_type='Outgoing'
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
                  that.wonderfulLists=res.data.focusLists
                  that.video=res.data.video
                  that.videoLists=res.data.videoLists
                  that.productLists=res.data.productLists
                  let newArr = [],len=4;
                  for(let i=0;i<that.productLists.length/len;i++){
                      let tempArr=[]
                      if(that.productLists.length+1-i===that.productLists.length%len) {
                          tempArr = that.productLists.slice(i * len)
                      }else{
                          tempArr=that.productLists.slice(i*len,i*len+len)
                      }
                      newArr.push(tempArr.slice(0));
                  }
                  that.productLists1=newArr
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
              observer:true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents:true,//修改swiper的父元素时，自动初始化swiper
              // 如果需要分页器
              pagination: {
                  el: '.swiper-pagination',
              }
          });
          var mySwiper2 = new Swiper('.swiper-container2',{
              autoplay:true,
              loop:false,
              // 如果需要分页器
              pagination: {
                  el: '.swiper-pagination',
              },
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
 .wonderful-box{
    width:90%;
    margin:0 auto;
    .title{
       font-size: 28px;
       color: #000000;
       margin:80px 0 40px;
       font-weight:600;
    }
    .shadow-little{
      box-sizing:border-box;
      .text-box{
        box-shadow: -1px 13px 20px 0 #F0F2F4;
        text-align:left;
        height:300px;
        overflow:hidden;
        .wonderful-img{
          width:100%;
          height:auto;
        }
        .wonderful-name{
          font-size:20px;
          color: #000000;
          width:90%;
          margin:12px auto;
        }
        .wonderful-text{
          font-size: 12px;
          color: #666666;
          width:90%;
          margin:0 auto;
          margin-bottom:30px;
        }
      }
    }
 }
 .shadow-box{
   width:90%;
   margin:0 auto;
   .title{
     font-size: 28px;
     color: #000000;
     margin:40px 0 30px;
     font-weight:600;
   }
   .img-box{
     width:100%;
     margin:0 auto;
     //margin-bottom:20px;
     .shadow-video{
       width:100%;
       height:290px;
     }
     .shadow-img{
        height:auto;
        width:100%;
     }
   }
   .text-box{
     width:100%;
     text-align:left;
     margin:0 auto;
     height:290px;
     padding:0 10%;
     display:flex;
     display: -webkit-flex;
     display: -moz-flex;
     flex-direction: column;
     box-sizing: border-box;
     .shadow-name{
       font-size:26px;
       color: #333333;
       letter-spacing:0;
       margin:30px 0;
     }
     .shadow-text{
       flex:1;
       .shadow-text-p{
         //margin-right:10%;
         font-size:16px;
         color: #9C9C9C;
         padding-left:15px;
         border-left:2px solid #DFDFDF;
         text-overflow: -o-ellipsis-lastline;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 5;
         line-clamp: 5;
         -webkit-box-orient: vertical;
       }
     }
     .shadow-down{
       .shadow-down-icon-img{
          width:50px;
          height:50px;
          border-radius:50%;
       }
       .shadow-down-icon-name{
          font-size: 15px;
          color: #9C9C9C;
          text-align: left;
       }
     }
   }
 }
  .shadow-box2{
    width:90%;
    margin:40px auto 80px;
    .shadow-video{
      // margin:56px 0;
    }
    .title{
      font-size: 28px;
      color: #000000;
      margin:40px 0 30px;
      font-weight:600;
    }
    .img-box{
      width:100%;
      margin:0 auto;
      //margin-bottom:20px;
      .shadow-video{
        width:100%;
        height:272px;
      }
     .shadow-img{
        height:272px;
        width:100%;
     }
    }
    .text-box{
      width:100%;
      text-align:left;
      margin:0 auto;
      height:273px;
      padding-right:6%;
      display:flex;
      display: -webkit-flex;
      display: -moz-flex;
      flex-direction: column;
      box-sizing: border-box;
      .shadow-name{
        font-size: 22px;
        color: #333333;
        letter-spacing: 0;
        margin:30px 0;
        text-align:center;
      }
      .shadow-text{
        flex:1;
        .shadow-video-img{
          width:100%;
          max-height:200px;
        }
      }
    }
  }
  .professional-box{
     width:87%;
     margin:40px auto;
    .title{
      font-size:28px;
      color: #000000;
      margin:0 0 30px;
      font-weight:600;
    }
    .text-box{
      position:relative;
      .mask{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:#000000;
        color:#ffffff;
        opacity:0;
      }
      .mask:hover{
        opacity:0.3;
      }
      .professional-img{
        width:100%;
        height:auto;
        max-height:336px;
      }
    }
  }
  .products-box{
      width:90%;
      margin:0 auto;
      background: url(../assets/img/pc_why_goods_bg.png) no-repeat 0 0;
      background-size:100% 100%;
      .title{
       font-size:28px;
       font-weight:600;
       color: #000000;
       letter-spacing: 0;
       margin:0 0 40px;
      }
   }
   .products-content-box{
       width:90%;
       margin:0 auto;
       padding:0 0 80px;
       overflow:hidden;
       .swiper-container{
         overflow:visible;
         #swiper-pagination{
           bottom:-50px;
         }
       }
      .products-item{
        padding:0 15px 30px;
        .img-box{
          position:relative;
          .mask{
           position:absolute;
           top:0;
           left:0;
           bottom:0;
           right:0;
           background:#000000;
           color:#ffffff;
           opacity:0;
           padding:30px 20px;
           text-align:left;
           font-size:12px;
           overflow:scroll;
          }
          .mask:hover{
            opacity:0.6;
          }
          .goods-img{
            width:100%;
          }
        }
        .text-box{
          .text-box-up{
            text-align:left;
            padding:15px 0 20px;
            .goods-name{
              display:block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow:ellipsis;
            }
          }
          .text-box-btn{
            display:inline-block;
            border: 1px solid #979797;
            padding:5px 30px;
          }
          .text-box-btn:hover{
              color:#ffffff;
              background: #010101;
              border:1px solid #010101;
              a{
                color:#ffffff!important;
              }
          }
        }
      }
    }
 }
</style>
