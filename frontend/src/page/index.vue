<template>
  <div class="index">
    <header>
      <my-header @func="getNumFormSon"></my-header>
    </header>
    <div class="banner-box" >

        <div class="swiper-container">
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
        <!-- 系列部分start-->
        <div class="row series-box" v-for="item in seriesLists">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
            <div class="img-box">
              <img class="series-img" :src="item.imgUrl" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
            <div class="text-box">
               <h5 class="series-type">{{item.label}}</h5>
               <h2 class="series-name">{{item.title}}</h2>
               <p class="series-text">{{item.info}}</p>
                <router-link class="learn-link" to="/SkatingDetails">learn more</router-link>
            </div>
          </div>
        </div>

        <!-- 系列部分end-->
        <!--SELECTED start-->
        <div class="row selected-box">
          <div class="text-center selected-img-box">
             <h2 class="selected-title">SELECTED</h2>
            <img class="selected-img" src="../assets/img/selected.png" alt="">
          </div>
        </div>
        <!--SELECTED end-->
        <!--科技部分展示start-->
        <div class="row technology-box">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
            <h2 class="technology-box-title">science and technology</h2>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left" v-for="item in techLists">
            <div class="technology-box-con">
              <h2 class="text-left">{{item.text}} <br> Technology</h2>
              <!--<p class="technology-box-con-time">SAFE+FREE Independently developed outdoor safety protection function series technical outsole</p>-->
              <p class="technology-box-con-time">{{item.title}}</p>
              <div class="technology-img-box">
                <img class="technology-img" :src="item.imgUrl" alt="">
                <p class="technology-box-con-text">
                {{item.info}}
                </p>
              </div>
            </div>
          </div>


          <!--<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left">-->
            <!--<div class="technology-box-con">-->
              <!--<h2 class="text-left">TIEF <br> Technology</h2>-->
              <!--<p class="technology-box-con-time">Independently developed and innovated fabric with environmental protection function</p>-->
              <!--<div class="technology-img-box">-->
                <!--<img class="technology-img" src="../assets/img/pc_index5.png" alt="">-->
                <!--<p class="technology-box-con-text">-->
                <!--TiEF is the general name for innovative and environmentally friendly technical fabrics independently researched and developed by TOREAD. TiEF technology is committed to providing outdoor enthusiasts with superior performance and increased comfort in a more environmentally friendly way.-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center technology-learn-box">
            <router-link class="learn-link" to="/Technology">learn more</router-link>
          </div>
        </div>
        <!--科技部分展示end-->
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
            // indexList:{
            //   topBanner:[
            //     {id:'0',src:require('../assets/m_img/m_outgoing_products1.png'),text:'Fabric: Chinlon elastic fabric Process: Water proof, fast dry Application: Hiking, camping, daily life and other outdoor activities Code: KAEH82110-A42X'},
            //     {id:'1',src:require('../assets/m_img/m_outgoing_products2.png'),text:'Fabric: Nylon elastic fabric Process: Water proof, fast dry Application: Hiking, camping, daily life and other outdoor activities Code: KAEH81109-C26X'}
            //   ]
            // },
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
<style lang="less" scoped type="text/less">
.container{
  width:1170px!important;
}
.banner-box{
  padding-top:100px;
  img{
    width:100%;
  }
  .swiper-container{
   .swiper-pagination{

   }
  }
}
.content-box{
  .series-box{
    width:90%;
    margin:80px auto;
    .img-box{
      width:70%;
      margin:0 auto;
      //margin-bottom:20px;
      .series-img{
        width:100%;

      }
    }
    .text-box{
      width:70%;
      text-align:left;
      margin:0 auto;
     // margin-bottom:20px;
      height:402px;
      display:flex;
      display: -webkit-flex;
      display: -moz-flex;
      flex-direction: column;
      box-sizing: border-box;
      .series-type{
        font-size: 1.3em;
        color: #3E4C5B;
        letter-spacing: 0;
        margin:0 0 30px;
      }
      .series-name{
        font-size: 2em;
        color: #3E4C5B;
        letter-spacing: 0;
        margin:0 0 30px;
      }
      .series-text{
        box-sizing:border-box;
        flex:1;
        font-size: 1em;
        color: #9AA8B6;
        margin:0 0 35px;
        overflow:auto;
        //text-overflow: -o-ellipsis-lastline;
        //overflow: hidden;
       // text-overflow: ellipsis;
        //display: -webkit-box;
        //-webkit-line-clamp: 6;
        //line-clamp: 6;
       // -webkit-box-orient: vertical;
      }
      .series-text::-webkit-scrollbar{
        display:none;
      }
      .learn-link{
        display:inline-block;
        width:230px;
        height:50px;
        line-height:50px;
        border:1px solid #000000;
        font-size: 1.1em;
        color: #343434;
        text-align: center;
      }
    }
  }
  .selected-box{
    width:83%;
    margin:80px auto;
    .selected-img-box{
    width:90%;
    margin:0 auto;
      .selected-title{
        text-align:left;
        opacity: 0.38;
        font-size:6em;
        color:#3E4C5B;
        letter-spacing:0;
        font-weight:bold;
      }
      .selected-img{
        width:100%;
      }
    }
  }
  .technology-box{
    width:83%;
    margin:0 auto;
    text-align:center;
    .technology-learn-box{
      .learn-link{
        display:inline-block;
        width:250px;
        height:50px;
        line-height:50px;
        border:1px solid #000000;
        font-size: 1.1em;
        color: #343434;
        text-align: center;
        margin:60px 0 100px;
      }
    }
    .technology-box-title{
      width:93%;
      margin:20px auto 30px;
      font-size: 1.7em;
      color: #3E4C5B;
      letter-spacing: 0;
    }
    .technology-box-con{
       width:85%;
       margin:0 auto;
       .text-left{
        margin:0;
        font-family: PingFangSC-Semibold;
        font-size: 2em;
        color: #3E4C5B;
        letter-spacing: 0;
       }
       .technology-box-con-time{
         font-size: 1em;
         color: #9AA8B6;
         letter-spacing: 0;
         margin:15px 0;
       }
       .technology-img-box{
        .technology-img{
          width:100%;
        }
        .technology-box-con-text{
          font-size: 1.1em;
          color: #9AA8B6;
          letter-spacing: 0;
          margin:30px 0;
        }
       }
    }
  }
}
</style>
