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
            <img class="goods-img" src="../assets/m_img/m_select_icon2.png" alt="">
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
    name:"MClimbing",
    components:{
      mMask
    },
    data(){
        return{
          isMask:false,
          goodsDetail:{},
          getList:[
            {id:'0',src:require('../assets/m_img/m_climbing_products1.png'),text:'Process: Toray ultralight three-layer composite fabric,Fabric: 20D nylon high elastic silk fabric Weight: 80g Waterproof: Waterproof index 10000MM water column Application: Professional exploration, mountaineering, crossing, etc Code: HABH81501 - AB8X'},
            {id:'1',src:require('../assets/m_img/m_climbing_products4.png'),text:'Process: Toray ultralight three-layer composite fabric,Fabric: 20D nylon high elastic silk fabric Weight: 80g Waterproof: Waterproof index 10000MM water column Application: Professional exploration, mountaineering, crossing, etc Code: HANH81503 – G59X'},
            {id:'2',src:require('../assets/m_img/m_climbing_products5.png'),text:'Process: GORE-TEX waterproof and moisture permeable Fabric: 1.68mm first layer cowhide Sole: VIBRAM (XSTREK) wear resistant outsole Application: Professional mountain training, hiking, etc Code: KFBH81001 - C01G'},
            {id:'3',src:require('../assets/m_img/m_climbing_products6.png'),text:'Process: GORE-TEX waterproof and moisture permeable Fabric: 1.68mm first layer cowhide Sole: VIBRAM (XSTREK) wear resistant outsole Application: Professional mountain training, hiking, etc Code: KFBH81001 - C03G'},
            {id:'4',src:require('../assets/m_img/m_climbing_products7.png'),text:'Fabric: CORDURA wear-resistant material is used for the bottom and other wear-resistant parts FVS technology: Maintains stability while increasing ventilation during movement Capacity: 70L Application: Professional mountaineering, climbing carrying with equipment Code: KEBH80161-G58G'},
          {id:'5',src:require('../assets/m_img/m_climbing_products8.png'),text:'Fabric: CORDURA wear-resistant material is used for the bottom and other wear-resistant parts FVS technology: Maintains stability while increasing ventilation during movement Capacity: 40L Application: Professional mountaineering, climbing carrying with equipment Code: KEBH80163-AB8X'}
          ],
          goodsList:[
            // {
            //   src:require('../assets/m_img/m_climbing_products1.png'),
            //   name:"MEN’S OUTDOOR JACKET---- -"
            // },
            // {
            //   src:require('../assets/m_img/m_climbing_products4.png'),
            //   name:"MEN’S COMBAT TROUSERS ---- -"
            // },
            // {
            //   src:require('../assets/m_img/m_climbing_products5.png'),
            //   name:"MEN’S GORE-TEX WATERPROOF HIKING SHOES -"
            // },
            // {
            //   src:require('../assets/m_img/m_climbing_products6.png'),
            //   name:"MEN’S GORE-TEX WATERPROOF HIKING SHOES -"
            // },
            // {
            //   src:require('../assets/m_img/m_climbing_products7.png'),
            //   name:"SNOWY 70L BACKPACK"
            // },
            // {
            //   src:require('../assets/m_img/m_climbing_products8.png'),
            //   name:"SNOWY 40L BACKPACK"
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
          that.goodsList=res.data.cateTabs[1].lists
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
