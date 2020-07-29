<template>
  <div class="index">
    <div class="selectd-content-box">
      <!--xunhuan start-->
      <div class="goods-box clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center no-padding padding-bottom30">
          <div class="img-box">
            <img class="goods-img" :src="imgUrl" alt="">
          </div>
        </div>
        <!-- products start-->
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center products-item" v-for="(item,index) in goodsList">
          <div class="img-box">
            <div class="mask" v-html="item.info">
               {{item.info}}
            </div>
            <img class="goods-img" :src="item.imageUrl" alt="">
          </div>
          <div class="text-box">
            <div class="text-box-up clearfix">
              <span class="goods-name">{{item.title}}</span>
            </div>
            <div class="text-box-btn" @click="goConnect">Connect me</div>
          </div>
        </div>
        <!-- products end-->
      </div>
      <!--xuanhuan  end-->
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  const ERR_OK = 0
  export default{
    name:"Skating",
    data(){
        return{
          goodsList:[],
          imgUrl:''
        }
    },
    methods:{
      goConnect:function(){
        this.$router.push({
          path:'/ContactUs'
        })
      }
    },
    created() {
      let that=this
      let obj={}
      obj.menu_type='Select'
      obj.terminal_type=1
      obj.lanauage_type=2
      that.$axios({
        url:'/Adminapi/gethomeinfo',
        method:'post',
        data:obj
      }).then(res=>{
        console.log(res.data)
        if(res.data){
          that.goodsList=res.data.cateTabs[0].lists
          that.imgUrl=res.data.cateTabs[0].imgUrl
        }
      })
      },
  }
</script>
<style lang="less" scoped>
.selectd-content-box{

  .goods-box{
    .padding-bottom30{
      padding-bottom:30px!important;
      .img-box{
        .goods-img{
          width:100%;
          //height:260px;
        }
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
            font-size:13px;
            display:block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
          }
        }
        .text-box-btn{
          font-size:12px;
          display:inline-block;
          border: 1px solid #979797;
          padding:5px 30px;
        }
        .text-box-btn:hover{
            color:#ffffff;
            background: #010101;
            border:1px solid #010101;
        }
      }
    }
  }
}
</style>
