<template>
  <div class="m_top" v-show="isTopShow">
    <div class="m_container" @click="goTop()">
        <img class="m-top-img" src="../assets/m_img/m_top.png" alt="">
    </div>
  </div>
</template>
<script>
export default{
  name:"mTop",
  data(){
      return{
        isTopShow:false
      }
  },
  methods:{
   goTop(){
      $("html,body").stop().animate({ scrollTop: 0 }, 600);
   },
   scrollToTop() {
   　　var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       if(scrollTop>200){
          this.isTopShow = true;
       }else{
          this.isTopShow = false;
       }
   }
  },
  created(){
      //console.log(this.isTopShow)
  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed(){
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>
<style lang="less" scoped>
.m_top{
  .m_container{
    position:fixed;
    bottom:10%;
    right:0;
    width:36px;
    height:36px;
    z-index:9;
    .m-top-img{
       width:100%;
       height:100%;
    }
  }
}
</style>
