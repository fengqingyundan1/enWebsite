<template>
  <div class="index">
    <header>
      <my-header tabType="4"></my-header>
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
      <div class="first-box">
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="title-box">&nbsp&nbspToread Commonweal Foundation</div>
              </div>
          </div>
          <div class="row">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                <div class="img-box">
                  <img class="responsibility-img" src="../assets/img/pc_responsibility1.png" alt="">
                </div>
             </div>
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
               <div class="text-box">
                  <p class="responsibility-text">Beijing Toread Commonwealth Foundation is a local non-public fund established by Toread Holding Group Co., Ltd. On December 31, 2013, which was officially registered and established by Beijing Municipal Civil Affairs Bureau. The original fund is 2 million Yuan, donated by TOREAD Group. TOREAD has pledged to donate 1% of company’s net profit to the foundation every year.</p>
               </div>
             </div>
          </div>
          <div class="row"></div>
      </div>

      <div class="second-box">
          <div class="row padding-le-right15">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="title-box">Main Public Projects</div>
              </div>
          </div>
          <div class="row padding-le-right15">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
                <div class="img-box">
                  <img class="responsibility-img" src="../assets/img/pc_responsibility2.png" alt="">
                </div>
             </div>
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
               <div class="text-box">
                  <h2 class="responsibility-title">Protection of Hoh Xil Tibetan Antelopes</h2>
                  <p class="responsibility-text">In 2013, founder Mr. Sheng Faqiang donated equipment, vehicles and training funds for grassroots employees in Hoh Xil reserve, with a total value of 500,000 Yuan. For the next five years, he will donate 200,000 Yuan worth of outdoor equipment each year to support the frontline patrol members of the reserve.
</p>
               </div>
             </div>
          </div>
          <div class="row padding-le-right15">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
               <div class="text-box">
                   <h2 class="responsibility-title">Donation for Dunhang Middle School Education</h2>
                   <p class="responsibility-text">Mr. Sheng Faqiang, founder of Toread Holding Group Co., Ltd., personally donated 6 million Yuan to the foundation and set up the "Dunhuang Middle School Sheng Faqiang Education Development Fund" to reward excellent teachers and students and support disadvantaged students.</p>
               </div>
             </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
               <div class="img-box">
                 <img class="responsibility-img" src="../assets/img/pc_responsibility3.png" alt="">
               </div>
            </div>
          </div>
          <div class="row padding-le-right15">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
                <div class="img-box">
                  <img class="responsibility-img" src="../assets/img/pc_responsibility4.png" alt="">
                </div>
             </div>
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center no-padding">
               <div class="text-box">
                  <h2 class="responsibility-title">Natural Disaster Relief</h2>
                  <p class="responsibility-text">TOREAD has donated about 5 million Yuan worth of materials for disaster relief. The funds have been used to assist with the recovery of the following disasters: Wenchuan Earthquake, Yushu Earthquake, Ya 'an Earthquake, Tibet and Nepal Earthquake and others.</p>
               </div>
             </div>
          </div>
      </div>
      <div class="third-box">
          <div class="row padding-le-right15">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="title-box">Commonweal Activates</div>
              </div>
          </div>
          <div class="row  list-item" v-for="item in interestLists">
             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center no-padding">
                <div class="img-box">
                  <img class="responsibility-img" :src="item.imageUrl" alt="">
                </div>
             </div>
             <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center no-padding padding-left30">
               <div class="text-box">
                  <h2 class="responsibility-title">{{item.title}} </h2>
                  <p class="responsibility-time">{{item.time}}</p>
                  <p class="responsibility-text">{{item.info}}</p>
               </div>
             </div>
          </div>

          <!--<div class="row  list-item">-->
             <!--<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center no-padding">-->
                <!--<div class="img-box">-->
                  <!--<img class="responsibility-img" src="../assets/img/pc_responsibility6.png" alt="">-->
                <!--</div>-->
             <!--</div>-->
             <!--<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center no-padding padding-left30">-->
               <!--<div class="text-box">-->
                  <!--<h2 class="responsibility-title">Pathfinders rush to help Jiuzhaigou earthquake-stricken area</h2>-->
                  <!--<p class="responsibility-time">2017-08-18</p>-->
                  <!--<p class="responsibility-text">At 21:19, August 8th, 2017, an earthquake of M7.0 struck near Jiuzhai Gou County, Aba City, Si Chuan Province. TOREAD foundation quickly launched a disaster relief mechanism and donated 200,000 Yuan worth of tents to the quake-hit areas.</p>-->
               <!--</div>-->
             <!--</div>-->
          <!--</div>-->

          <!--<div class="row  list-item">-->
             <!--<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center no-padding">-->
                <!--<div class="img-box">-->
                  <!--<img class="responsibility-img" src="../assets/img/pc_responsibility7.png" alt="">-->
                <!--</div>-->
             <!--</div>-->
             <!--<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center no-padding padding-left30">-->
               <!--<div class="text-box">-->
                  <!--<h2 class="responsibility-title">TOREA warm "Cliff village" children for education</h2>-->
                  <!--<p class="responsibility-time">2016-07</p>-->
                  <!--<p class="responsibility-text">On June 7, 2016, the children in Altair village of Liangshan, Sichuan Province received the first batch of professional mountaineering shoes donated by TOREAD foundation. Thanks to the help of a reporter and volunteer team from The Beijing News. In the future, TOREAD foundation will continue to donate new shoes to 198 children in the four "Cliff villages" in the region until they go to university.</p>-->
               <!--</div>-->
             <!--</div>-->
          <!--</div>-->

      </div>


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
            bannerLists:[],
            interestLists:[]
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
                    that.bannerLists=res.data.resImgUrl.split(',')
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
        }
    },
    created() {
        this.getData()
    },
    mounted(){
        // var mySwiper1 = new Swiper('.swiper-container1',{
        //     autoplay:true,
        //     loop:true,
        //    // 如果需要分页器
        //     pagination: {
        //       el: '.swiper-pagination',
        //     }
        // });
        var mySwiper2 = new Swiper('.swiper-container2',{
              autoplay:true,
              loop:true,
             // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              }
        })
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
  .first-box{
     width:90%;
     margin:80px auto 20px;
    .title-box{
      font-weight:600;
      height:40px;
      line-height:40px;
      font-size: 28px;
      color: #000000;
      letter-spacing: 0;
      border-left:8px solid #E50113;
      margin-bottom:40px;
    }
    .img-box{
      width:90%;
      margin:0 auto;
      .responsibility-img{
        width:90%;
        //height:320px;
      }
    }
    .text-box{
      width:90%;
      text-align:left;
      margin:0 auto;
      .responsibility-title{
         font-weight:600;
         font-size: 26px;
         color: #A8A8A8;
         letter-spacing: 0;
         margin:0 0  60px;
      }
      .responsibility-text{
        font-size: 20px;
        color: #000000;
        margin:50px 0 20px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        line-clamp: 9;
        -webkit-box-orient: vertical;
      }
    }
  }
  .second-box{
    width:90%;
    margin:40px auto;
   .title-box{
     font-weight:600;
     height:50px;
     line-height:50px;
     font-size: 28px;
     color: #000000;
     letter-spacing: 0;
     margin-bottom:30px;
   }
   .img-box{
     width:90%;
     margin:0 auto;
     .responsibility-img{
       width:90%;
       //height:320px;
     }
   }
   .text-box{
     width:90%;
     text-align:left;
     margin:50px auto 0;
     .responsibility-title{
       font-weight:600;
       font-size: 26px;
       color: #A8A8A8;
       letter-spacing: 0;
       margin:0 0 50px;
     }
     .responsibility-text{
       font-size: 16px;
       color: #9AA8B6;
       margin:0 0 20px;
       text-overflow: -o-ellipsis-lastline;
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 6;
       line-clamp: 6;
       -webkit-box-orient: vertical;
     }
   }
  }
  .third-box{
     width:90%;
     margin:40px auto;
     .list-item{
        background: #FFFFFF;
        box-shadow: -1px 13px 20px 0 #F0F2F4;
        padding:15px;
        margin-bottom:30px;
     }
     .title-box{
        font-weight:600;
        height:50px;
        line-height:50px;
        font-size: 28px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom:30px;
     }
     .img-box{
        width:100%;
        //height:260px;
        margin:0 auto;
        text-align:center;
        .responsibility-img{
          width:100%;
          height:100%;
        }
     }
    .text-box{
      width:100%;
      text-align:left;
      margin:0 auto;
      .responsibility-title{
        font-size: 22px;
        color: #000000;
        line-height: 22px;
      }
      .responsibility-time{
        font-size: 12px;
        color: #353535;
      }
      .responsibility-text{
        font-size: 14px;
        color: #666666;
        line-height: 22px;
        margin:20px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        line-clamp: 6;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
