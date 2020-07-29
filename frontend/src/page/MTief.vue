<template>
  <div>
    <header>
       <m-header></m-header>
    </header>
    <div class="container m-content-box">
      <!--SecondTechnology 部分 start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 title">
            TIEF Technology
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_tief1.png" alt="">
             <h2 class="wonderful-name">TiEF PRO ®</h2>
             <p class="wonderful-text">
               1.Application: Outdoor Jackets/ Outdoor Trousers </br>
               2.Bionic Element: China-hemp</br>
               3.Function: Waterproof  /Moisture permeable/Washable</p>
           </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_tief2.png" alt="">
              <h2 class="wonderful-name">TiEF SKIN ®</h2>
              <p class="wonderful-text">
                 1. Application: Light Jackets</br>
                 2. Bionic Element: Sunset Butterflies</br>
                 3. Function: Ultralightblock- UPF ＞40，uva＜5%, block 99% of UV
              </p>
            </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             <div class="text-box">
               <img class="wonderful-img" src="../assets/m_img/m_tief5.png" alt="">
               <h2 class="wonderful-name">TiEF SHELL ®</h2>
               <p class="wonderful-text">
                  1.Application: Soft Shell Clothing and Trousers</br>
                  2.Bionic Element: Seals</br>
                  3. Function: Windproof and warm---Air permeation range 2 mm/s to 20mm/s, Warmth rate＞30%
               </p>
             </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             <div class="text-box">
               <img class="wonderful-img" src="../assets/m_img/m_tief4.png" alt="">
               <h2 class="wonderful-name">TiEF DRY ®</h2>
               <p class="wonderful-text">
                  1. Application: T-Shirts/Fast-dry clothing and trousers</br>
                  2. Bionic Element: Honey Nests</br>
                  3. Function: Single leading and dry in seconds—3 time water absorption , 5 times dry
               </p>
             </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             <div class="text-box">
               <img class="wonderful-img" src="../assets/m_img/m_tief3.png" alt="">
               <h2 class="wonderful-name">TiEF DOWN ®</h2>
               <p class="wonderful-text">
                 1. Application: Down Jackets</br>
                 2. Bionic Element: Penguins</br>
                 3. Function: Moisture proof and warm---- Down fluff is 7% higher than normal down jack of same specification
               </p>
             </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             <div class="text-box">
               <img class="wonderful-img" src="../assets/m_img/m_tief6.png" alt="">
               <h2 class="wonderful-name">TiEF WARM ®</h2>
               <p class="wonderful-text">
                  1.Application: Ski Jacket/Cotton Jacket</br>
                  2.Bionic Element: White bears</br>
                  3. Function: Heat-retaining and warm—Energy storage is 30% more than normal filler
               </p>
             </div>
         </div>

      </div>
      <!--SecondTechnology 部分 end-->
    </div>
    <footer>
      <m-footer></m-footer>
    </footer>
    <div class="top-box">
        <m-top></m-top>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import mTop from '../components/MTop'
import mHeader from '../components/MHeader'
import mFooter from '../components/MFooter'
const ERR_OK = 0
export default{
  name:"ContentList",
  components:{
     mHeader,mFooter,mTop
  },
  data(){
    return {
      contentList:{},
      num: "0"
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
    getData(){

    }
  }
}
</script>
<style lang="less" scoped>
.m-content-box{
  overflow:hidden;
  padding-top:58px;
 .wonderful-box{
    .title{
       font-size:22px;
       color:#000000;
       margin:10px 0;
       text-align:left;
     }
    .text-box{
      text-align:left;
      .wonderful-img{
        width:100%;
        height:auto;
      }
      .wonderful-name{
        font-size: 16px;
        color: #000000;
        margin:10px auto;
        line-height:20px;
      }
      .wonderful-text{
        font-size: 12px;
        color: #000000;
        margin:0 auto 20px;
      }
    }
 }
}
</style>
