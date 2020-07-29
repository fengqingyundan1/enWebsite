<template>
  <div class="index">
    <header>
      <my-header tabType="4"></my-header>
      <!--<my-header ></my-header>-->
    </header>
    <div class="banner-box">
        <div class="swiper-container swiper-container1">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in techImgUrl">
                  <img :src="item" alt="">
              </div>
          </div>

          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
    </div>
    <div class="container content-box">

        <div class="first-box">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="title-box">&nbsp&nbspTOREAD "Polar Bionic Technology"</div>
                </div>
            </div>
            <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                  <div class="img-box">
                    <img class="responsibility-img" :src="PathImageUrl" alt="">
                  </div>
                  <div class="text-box">
                    <p class="text-box-text">
                     {{PathInfo}}
                    </p>
                  </div>
               </div>
            </div>
        </div>

        <!--TIEF title start-->
        <div class="row tief-box">
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  no-padding">
              <h2 class="title">TIEF Technology</h2>
           </div>
        </div>
        <!--TIEF title end-->
        <!--TIEF content start-->
        <div class="tief-content-box row">
            <div class="swiper-container swiper-container2">
                 <div class="swiper-wrapper">
                   <div class="swiper-slide" v-for="items in tiefLists1">
                     <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center" v-for="item in items">
                          <div class="text-box">
                             <img class="tief-img" :src="item.imageUrl" alt="">
                             <div class="text-content-box clearfix">
                                 <div class="text-content-box-text">
                                   <h3 class="text-content-box-text-name">{{item.title}}</h3>
                                   {{item.info}}
                                 </div>
                                 <div class="icon-box">
                                    <img class="icon-img" :src="item.iconImageUrl" alt="">
                                 </div>
                             </div>
                          </div>
                     </div>

                   </div>
                 </div>
                 <!-- 如果需要分页器 -->
                 <div class="swiper-pagination" id="swiper-pagination"></div>
            </div>
        </div>
        <!--TIEF content end-->

        <!-- SAFree部分start-->
        <div class="third-box">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center title">
                SAFree Technology
            </div>
          <div class="row margin-bottom80" v-for="(item,index) in saFreeLists">
            <div :class="index%2!==0 ?'col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center col-lg-push-6 col-md-push-6 col-sm-push-6 col-xs-push-6' : 'col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center'">
              <div class="img-box">
                <img class="third-img" :src="item.imageUrl" alt="">
              </div>
            </div>
            <div :class="index%2!==0?'col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center col-lg-pull-6 col-md-pull-6 col-sm-pull-6 col-xs-pull-6':'col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center'">
              <div class="text-box">
                 <div class="text-box-content clearfix">
                     <h2 class="third-name">{{item.title}}</h2>
                     <div class="third-img-icon-box">
                        <img class="third-img-icon" :src="item.iconImageUrl" alt="">
                     </div>
                 </div>
                 <div class="third-text">
                     <p>{{item.info}}</p>
                 </div>
              </div>
            </div>
          </div>
          <!--<div class="row margin-bottom80">-->
            <!--<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">-->
              <!--<div class="text-box">-->
                 <!--<div class="text-box-content clearfix">-->
                    <!--<h2 class="third-name">SAFree GripWet ® </h2>-->
                    <!--<div class="third-img-icon-box">-->
                       <!--<img class="third-img-icon" src="../assets/img/pc_safree_gripwet_icon.png" alt="">-->
                    <!--</div>-->
                 <!--</div>-->
                 <!--<div class="third-text">-->
                     <!--<p>1.Application: Stream trekking shoes/ Sandals shoes/ Trekking shoes<br>-->
                        <!--2.Bionic Element: Wood frogs</br>-->
                        <!--3. Function: Non slip&#45;&#45; Professional non-slip rubber, the friction coefficient is 30% more than normal rubber</p>-->
                 <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">-->
              <!--<div class="img-box">-->
                <!--<img class="third-img" src="../assets/img/pc_safree_gripwet.png" alt="">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <!-- SAFree部分end-->
    </div>
    <footer>
      <my-footer></my-footer>
    </footer>
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
            techImgUrl:[],
            PathInfo:'',
            PathImageUrl:'',
            tiefLists:[],
            tiefLists1:[],
            saFreeLists:[]
        }
    },
    methods:{
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
                    // that.bannerLists=res.data.resImgUrl.split(',')
                    that.techImgUrl=res.data.techImgUrl.split(',')
                        that.PathInfo=res.data.wonderfulInfo
                        that.PathImageUrl=res.data.wonderfulImageUrl
                        that.tiefLists=res.data.tiffMLists
                        that.saFreeLists=res.data.SAFreeMLists
                    let newArr = [],len=2;
                    for(let i=0;i<that.tiefLists.length/len;i++){
                        let tempArr=[]
                        if(that.tiefLists.length+1-i===that.tiefLists.length%len) {
                            tempArr = that.tiefLists.slice(i * len)
                        }else{
                            tempArr=that.tiefLists.slice(i*len,i*len+len)
                        }
                        newArr.push(tempArr.slice(0));
                    }
                    that.tiefLists1=newArr
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
         document.body.scrollTop = 0
         // firefox
         document.documentElement.scrollTop = 0
         // safari
         window.pageYOffset = 0
        this.getData()
    }
  }
</script>
<style lang="less" scoped type="text/less">
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
  .first-box{
     width:80%;
     margin:80px auto 20px;
    .title-box{
      height:40px;
      line-height:40px;
      font-size:28px;
      font-weight:600;
      color: #000000;
      letter-spacing: 0;
      border-left:8px solid #E50113;
      margin-bottom:40px;
    }
    .img-box{
      width:100%;
      margin:0 auto;
      .responsibility-img{
        width:100%;
        height:320px;
      }
    }
    .text-box{
      width:100%;
      text-align:left;
      margin:20px auto;
      .text-box-text{
        font-size: 22px;
        color: #000000;
        line-height: 34px;
        margin:0;
      }
    }
  }
    .tief-box{
       width:80%;
       margin:0 auto;
       .title{
        font-weight:600;
        text-align:center;
        font-size: 28px;
        color: #000000;
        letter-spacing: 0;
        margin:0 0 40px;
       }
    }
    .tief-content-box{
        width:80%;
        margin:0 auto;
        padding:0 0 80px;
        overflow:hidden;
        .swiper-container{
          overflow:visible;
          #swiper-pagination{
            bottom:-50px;
          }
        }
       .text-box{
          min-height:470px;
          text-align:left;
          position:relative;
          box-shadow: -1px 13px 20px 0 #F0F2F4;
          .tief-img{
            width:100%;
          }
       }
       .text-content-box{
          position:relative;
          padding:0 15px;
          .text-content-box-text{
              width:85%;
              float:left;
              .text{
                margin:0;
              }
              .text-content-box-text-name{
                font-size:20px;
              }
          }
          .icon-box{
            width:15%;
            float:right;
            text-align:center;
            margin-top:10px;
            .icon-img{
              width:50px;
            }
          }
       }
  }
   .third-box{
     width:80%;
     margin:0 auto;
     .title{
       font-weight:600;
       font-size: 28px;
       color: #000000;
       margin:40px 0 30px;
     }
     .img-box{
       width:100%;
       margin:0 auto;
       .third-img{
          //height:280px;
          width:100%;
       }
     }
     .text-box{
       width:100%;
       text-align:left;
       margin:70px auto 0;
       //height:280px;
       padding:0 10%;
       .text-box-content{
           position:relative;
          .third-name{
             display:inline-block;
             font-size: 24px;
             color: #333333;
             letter-spacing: 0;
             margin:0px 0 20px;
             max-width:83%;
             //float:left;
             position:relative;
             &::before{
                position:absolute;
                content:"";
                display:inline-block;
                width:20px;
                height:2px;
                background:#E50113;
                bottom:-10px;
                left:0;
             }
          }
          .third-img-icon-box{
              position:absolute;
              top:-20px;
              box-sizing:border-box;
              display:inline-block;
              //max-width:15%;
              text-align:left;
              padding:0 0 0 30px;
              .third-img-icon{
                  width:75px;
              }
          }
       }
       .third-text{
            margin:40px 0 0;
           font-size: 16px;
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
