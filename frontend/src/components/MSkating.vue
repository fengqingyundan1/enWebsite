<template>
  <div class="index">
    <div class="selectd-content-box">
      <!--xun huan start-->
      <div class="goods-box">
        <div class="goods-icon-box clearfix">
          <div class="goods-text-box">
            <h2 class="goods-text-title">Free Your Mind</h2>
          </div>
          <div class="goods-img-box">
            <img class="goods-img" src="../assets/m_img/m_select_icon1.png" alt="">
          </div>
        </div>
        <div class="products-item-box clearfix">
            <!-- products start-->
            <div class="products-item" v-for="(item,index) in goodsList">
              <div class="img-box">
                <img class="goods-img" :src="item.imageUrl" alt="">
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
            {id:'0',src:require('../assets/m_img/m_skating_products1.png'),text:'Process: Waterproof and moisture permeable coating  Fabric: Polyester two-way taslon Oxford fabric, cloth with a high sense of imitation cotton Moisture penetration: 3K/3K Application: Ski resort, ski holiday, etc Code: KAHG92612 - H02X'},
            {id:'1',src:require('../assets/m_img/m_skating_products2.png'),text:'Fabric: Cationic dyeable polyester yarn plain fabric Process:Fast dry Application: Trail running training, daily life and other outdoor activities Code:KAJG91401-A15G'},
           {id:'2',src:require('../assets/m_img/m_skating_products4.png'),text:'Process: Waterproof and moisture permeable coating Fabric: Polyester two-way taslon Oxford fabric, cloth with a high sense of imitation cotton Moisture penetration: 3K/3K Features: Patented strap design, no need to remove  strap on the toilet Application: Ski resort, ski holiday, etc Code: KAPG92606 - G31X'},
            {id:'3',src:require('../assets/m_img/m_skating_products5.png'),text:'Materials: Special materials, facial microcirculation Features: Air holes in mouth and nose, ventilation in ears, keeping ears fresh Style number: ZELG90517 - H06X'},
          ],
          goodsList:[
            // {
            //   src:require('../assets/m_img/m_skating_products1.png'),
            //   name:"WOMEN’S SNOWBOARDING SUIT -"
            // },
            // {
            //   src:require('../assets/m_img/m_skating_products2.png'),
            //   name:"MEN'S RUNNING T-SHIRT —"
            // },
            // {
            //   src:require('../assets/m_img/m_skating_products4.png'),
            //   name:"WOMEN’S SKI PANT -"
            // },
            // {
            //   src:require('../assets/m_img/m_skating_products5.png'),
            //   name:"SKI MASK --"
            // }
          ]
        }
    },
    methods:{
      showMask(index){
        this.isMask = true;
        this.noScroll();
        this.goodsDetail=this.goodsList[index]
        // this.getList.forEach((obj)=>{
        //   if(index == obj.id){
        //     this.goodsDetail = obj;
        //   }
        // })
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
          that.goodsList=res.data.cateTabs[0].lists
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
