<template>
  <div class="m_mask" v-if="isMask">
    <div class="m_container-box">
      <div class="m_container">
        <div class="select-banner-box">
            <img class="select-banner-box-img" :src="goodsDetail.imageUrl" alt="">
        </div>

        <div class="text-box">
           <div class="text">
               {{goodsDetail.info}}
           </div>
        </div>

        <div class="btn-box">
           <div class="btn-con">
             <router-link class="btn-con-link" to="/MContactUs"> Connect  me </router-link>
           </div>
        </div>
        <div class="close-box">
            <div class="closed" @click="hideMask">X</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:"mMask",
  props:["isMask","goodsDetail"],
  data(){
      return{

      }
  },
  methods:{
   hideMask(){
     this.$emit('cancelMask');
     this.canScroll()
   }
  }
}
</script>
<style lang="less" scoped>
.m_mask{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:20;
  background-color:rgba(0,0,0,0.5);
  color:#ffffff;
  .m_container-box{
    position:absolute;
    top:50%;
    left:0;
    transform:translate(0,-50%);
    .m_container{
      position:relative;
      display:flex;
      display: -webkit-flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      margin:0 5%;
      background:#ffffff;
      color:#000000;
      .close-box{
        position:absolute;
        right:0;
        top:0;
        width:30px;
        height:30px;
        border-radius:50%;
        .closed{
          box-sizing:border-box;
          color:#ffffff;
          font-size:16px;
          height:30px;
          line-height:30px;
          border-radius:50%;
          text-align:center;
          background:rgba(0,0,0,0.64);
          position:relative;
          top:-10px;
          right:-10px;
        }
      }
      .select-banner-box{
         //height:60%;
        .select-banner-box-img{
         // height:100%;
          width:100%;
        }
      }
      .text-box{
          flex:1;
          align-self:center;
          width:100%;
          font-size:12px;
          color:#000000;
          text-align:center;
          overflow:hidden;
          //position:relative;
          .text{
              width:100%;
              padding:20px 10px 0;
          }
      }
      .btn-box{
        height:80px;
        width:100%;
        position:relative;
        .btn-con{
           box-sizing:border-box;
           width:90%;
           position: absolute;
           left: 10%;
           top: 50%;
           transform: translate(-5%,-50%);
           height:40px;
           line-height:40px;
           color:#ffffff;
           background:#000000;
           text-align:center;
           .btn-con-link{
              color:#ffffff!important;
           }
        }
      }
    }
  }
}
</style>
