<template>
  <div>
    <header>
       <m-header></m-header>
    </header>
    <div class="container m-content-box">
      <!--SecondTechnology 部分 start-->
      <div class="row wonderful-box">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 title">
            SAFree Technology
         </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
           <div class="text-box">
             <img class="wonderful-img" src="../assets/m_img/m_safree1.png" alt="">
             <h2 class="wonderful-name">SAFree Rock ®</h2>
             <p class="wonderful-text">
               1.Application: Mountaineering shoes/ Trekking shoes/ Trail running shoes</br>
               2.Bionic Element: Rocks</br>
               3. Function: Rub wear resistance---- Wear resistance is 30% more than normal rubber
             </p>
           </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_safree6.png" alt="">
              <h2 class="wonderful-name">SAFree Rock ∙ AIR ®</h2>
              <p class="wonderful-text">
                1.Application: Mountaineering shoes/ Trekking shoes/ Trail running shoes</br>
                2.Bionic Element: Rocks</br>
                3. Function: Rub wear resistance---- Weight is 25% less than normal shoes. Wear resistance is 30% more than normal rubber
              </p>
            </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_safree3.png" alt="">
              <h2 class="wonderful-name">SAFree Cushion ®</h2>
              <p class="wonderful-text">
                  1.Application: Trekking shoes</br>
                  2.Bionic Element: Leopard</br>
                  3. Function: Dynamic cushioning—Mid sole is strongly cushioned, and outsole is firm and wear resistant
              </p>
            </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_safree4.png" alt="">
              <h2 class="wonderful-name">SAFree GripWet ®</h2>
              <p class="wonderful-text">
                1.Application: Stream trekking shoes/ Sandals shoes/ Trekking shoes</br>
                2.Bionic Element: Wood frogs</br>
                3. Function: Non slip-- Professional non-slip rubber, the friction coefficient is 30% more than normal rubber
              </p>
            </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_safree5.png" alt="">
              <h2 class="wonderful-name">SAFree TCS ®</h2>
              <p class="wonderful-text">
                1.Application: Mountaineering shoes/ Trekking shoes/ Trail running shoes</br>
                2.Bionic Element: Blue sheep</br>
                3. Function: High toughness TPU materials support and protect your feet keep steady
              </p>
            </div>
         </div>

         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="text-box">
              <img class="wonderful-img" src="../assets/m_img/m_safree2.png" alt="">
              <h2 class="wonderful-name">SAFree Grip ®</h2>
              <p class="wonderful-text">
                1.Application: Trekking shoes/ Trail running shoes</br>
                2.Bionic Element: Wood frogs</br>
                3. Function: Non slip-- Professional non-slip rubber, the friction coefficient is 30% more than normal rubber
              </p>
            </div>
         </div>

      </div>
      <!--SecondTechnology 部分 end-->
    </div>
    <div class="top-box">
        <m-top></m-top>
    </div>
    <footer>
      <m-footer></m-footer>
    </footer>
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
        font-size:16px;
        color:#000000;
        margin:10px auto;
        line-height:20px;
      }
      .wonderful-text{
        font-size:12px;
        color:#000000;
        margin:0 auto 20px;
      }
    }
 }
}
</style>
