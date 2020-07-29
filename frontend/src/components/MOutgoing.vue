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
            <img class="goods-img" src="../assets/m_img/m_select_icon3.png" alt="">
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
    name:"MOutgoing",
    components:{
      mMask
    },
    data(){
        return{
          isMask:false,
          goodsDetail:{},
          getList:[
            {id:'0',src:require('../assets/m_img/m_outgoing_products1.png'),text:'Fabric:Nylon elastic fabric Process: Water proof, fast dry Application: Hiking, camping, daily life and other outdoor activities Code: KAEH82110-A42X'},
            {id:'1',src:require('../assets/m_img/m_outgoing_products2.png'),text:'Fabric:Nylon elastic fabric Process: Water proof, fast dry Application: Hiking, camping, daily life and other outdoor activities Code: KAEH81109-C26X'},
           {id:'2',src:require('../assets/m_img/m_outgoing_products3.png'),text:'Fabric: 900 imitation cotton plain Process: Double color dot size for front chest printing and 927 mesh under armpit TiEF DRY technology: Fast DRY Application: Hiking, camping, crossing, daily life Code: KAJH81239 - D34X'},
            {id:'3',src:require('../assets/m_img/m_outgoing_products5.png'),text:'Fabric:Breathable mesh fuse material Sole:SAFree Grip ® slippery wear-resisting rubber and SAFree TCS ® reverse proof Application: Professional mountain cross-country, etc Code:KFFH81031 - G01D'},
            {id:'4',src:require('../assets/m_img/m_outgoing_products6.png'),text:'Fabric: 190T anti-fracture fabric for external account, high-density mesh for internal account, high-toughness aviation aluminum for bracket and connector Craft: Waterproof coating and glue pressing craft, can prevent light rain to moderate rain Specification: Internal account 210*140*100 (cm),External account 400*150*100 (cm)Application: Professional reloading, hiking and camping, etc Code: KEDH80185 - D08X'}
          ],
          goodsList:[
            // {
            //   src:require('../assets/m_img/m_outgoing_products1.png'),
            //   name:"WOMEN'S TREKKING JACKET —"
            // },
            // {
            //   src:require('../assets/m_img/m_outgoing_products2.png'),
            //   name:"MEN'S TREKKING JACKET —"
            // },
            // {
            //   src:require('../assets/m_img/m_outgoing_products3.png'),
            //   name:"MEN’S RUNNING T-SHIRT --"
            // },
            // {
            //   src:require('../assets/m_img/m_outgoing_products5.png'),
            //   name:"MEN’S RUNNING SHOES -"
            // },
            // {
            //   src:require('../assets/m_img/m_outgoing_products6.png'),
            //   name:"ADVENTRUE CAMP (THREE SEASONS) --"
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
          that.goodsList=res.data.cateTabs[2].lists
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
