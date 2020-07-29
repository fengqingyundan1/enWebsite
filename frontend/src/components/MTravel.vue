<template>
  <div class="index">
    <div class="selectd-content-box">
      <!--xun huan start-->
      <div class="goods-box">
        <div class="goods-icon-box clearfix">
          <div class="goods-text-box">
            <h2 class="goods-text-title">Enjoy skiing</h2>
          </div>
          <div class="goods-img-box">
            <img class="goods-img" src="../assets/m_img/m_select_icon5.png" alt="">
          </div>
        </div>
        <div class="products-item-box clearfix">
            <!-- products start-->
            <div class="products-item" v-for="(item,index) in goodsList">
              <div class="img-box">
                <img class="goods-img" :src=item.imageUrl alt="">
              </div>
              <div class="text-box">
                <div class="text-box-up clearfix">
                  <span class="goods-name">{{item.title}}</span>
                </div>
                <div class="text-box-btn" @click="showMask(index)">Connect me</div>
              </div>
            </div>

            <!-- products end-->
        </div>
      </div>
      <!--xuanhuan  end-->
    </div>

    <!--mask start-->
      <div class="mask-box">
        <mMask :isMask="isMask" :goodsDetail="goodsDetail" @cancelMask="cancelMask"></mMask>
      </div>
    <!--mask end-->
  </div>
</template>

<script>
  import axios from 'axios'
  import mMask from './mMask'
  const ERR_OK = 0
  export default{
    name:"MTravel",
    components:{
      mMask
    },
    data(){
        return{
          isMask:false,
          goodsDetail:{},
          getList:[
            {id:'0',src:require('../assets/m_img/m_travel_products1.png'),text:'Fabric: 70D nylon and polyester Features: Parent-child bag, including 2 backpacks and 1 storage bag, the storage bag can be used alone Application: Daily commute, short trips Code: TEBH80814-H03X'},
            {id:'1',src:require('../assets/m_img/m_travel_products2.png'),text:'Fabric: Cotton felt plain fabric TiEF DRY technology: Fast DRY Application: Summer driving, camping, leisure vacation, photography, fishing and so on Code: TAJH8236 - G02X'},
           {id:'2',src:require('../assets/m_img/m_travel_products3.png'),text:'Fabric: Main body is made of ultralight 20D nylon fabric Process: Water proof Application: Daily life Code: TAZH82728 - H03X'},
            {id:'3',src:require('../assets/m_img/m_travel_products4.png'),text:'Fabric: Single layer net fabric with elastic sock Sole: Double density IP material, good resilience Application: Daily life Code: TFOH82701 - G22G'}
          ],
          goodsList:[
            // {
            //   src:require('../assets/m_img/m_travel_products1.png'),
            //   name:"ULTRALIGHT BACKPACK SET—"
            // },
            // {
            //   src:require('../assets/m_img/m_travel_products2.png'),
            //   name:"WOMEN’S SHORT SLEEVED T-SHIRT-"
            // },
            // {
            //   src:require('../assets/m_img/m_travel_products3.png'),
            //   name:"WOMEN'S LIGHTWEIGHT JACKET —"
            // },
            // {
            //   src:require('../assets/m_img/m_travel_products4.png'),
            //   name:"WOMEN'S WALKING KING SHOES—"
            // }
          ]
        }
    },
    methods:{
      showMask(index){
        this.isMask = true;
        this.noScroll();
        this.goodsDetail=this.goodsList[index]
      },
      cancelMask(){
        this.isMask = false;
      }
    },
    created() {
      let that=this
      let obj={}
      obj.menu_type='Select'
      obj.terminal_type=2
      obj.lanauage_type=2
      that.$axios({
        url:'/Adminapi/gethomeinfo',
        method:'post',
        data:obj
      }).then(res=>{
        console.log(res.data)
        if(res.data){
          that.goodsList=res.data.cateTabs[4].lists
        }
      })
    },
  }
</script>
<style lang="less" scoped>
.selectd-content-box{
   padding-bottom:30px;
  .goods-box{
      .goods-icon-box{
          //height:100px;
          vertical-align:middle;
          margin-bottom:0px;
          .goods-text-box{
            width:60%;
            float:left;
          }
          .goods-text-title{
            font-size:22px;
            text-align:left;
            margin:22px 0 0;
            height:100%;
          }
          .goods-img-box{
            width:40%;
            float:left;
            height:100%;
            text-align:right;
            .goods-img{
              height:75px;
            }
          }
      }
    .products-item-box{
      .products-item{
        box-sizing: border-box;
        font-size:16px;
        width:48%;
        float:left;
        margin-bottom:20px;
        .img-box{
          .goods-img{
            width:100%;
          }
        }
        .text-box{
          text-align:center;
          .text-box-up{
            text-align:left;
            padding:10px 0;
            font-family: PingFangSC-Semibold;
            font-size:12px;
            .goods-name{
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
            height:30px;
            width:90%;
            margin:0 auto;
            line-height:30px;
            text-align:center;
          }
        }
      }
      .products-item:nth-child(odd){
         box-sizing:border-box;
         margin-right:2%;
      }
       .products-item:nth-child(even){
          box-sizing:border-box;
          margin-left:2%;
       }
    }
  }
}
</style>
