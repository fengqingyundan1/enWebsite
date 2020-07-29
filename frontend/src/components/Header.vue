<template>
  <div class="header">
     <div class="container">
        <div class="row">
           <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
             <router-link class="logo-link" to="/Index" >
              <img class="logo" src="../assets/img/logo.png" alt="logo">
             </router-link>
           </div>
           <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
              <!--<a class="series" :class="[tabType==0?'active':'']" href="javascript:;" data-num='0'  data-isShow='false' @click="sendTab">SKIING</a>-->
              <!--<a class="series" :class="[tabType==1?'active':'']" href="javascript:;" data-num='1'  data-isShow='false' @click="sendTab">CLIMBING</a>-->
              <!--<a class="series" :class="[tabType==2?'active':'']" href="javascript:;" data-num='2'  data-isShow='false' @click="sendTab">OUTDOOR</a>-->
              <!--<a class="series" :class="[tabType==3?'active':'']" href="javascript:;" data-num='3'  data-isShow='false' @click="sendTab">SELECTED</a>-->
              <!--<a class="series" :class="[tabType==4?'active':'']" href="javascript:;" data-num='4'  data-isShow='true'  @click="sendTab">ABOUT US</a>-->
              <a class="series" :class="tabType==index?'active':''" href="javascript:;" :data-num='index'   @click="sendTab" v-for="(tab,index) in tabs">{{tab}}</a>
           </div>
           <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center language">
              ENGLISH
           </div>
        </div>
         <!-- 遮罩层 start-->
         <div class="mask" v-if="isShow">
             <div class="mask-content">
                 <div class="mask-con">
                     <div class="container">
                         <div class="row text-center">
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                 <router-link class="logo-link active" to="/BrandStory" >
                                     Brand story
                                 </router-link>
                             </div>
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                 <router-link class="logo-link" to="/Technology" >
                                     Technology Platform
                                 </router-link>
                             </div>
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                 <router-link class="logo-link" to="/Responsibility" >
                                     Social Responsibility
                                 </router-link>
                             </div>
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                 <router-link class="logo-link" to="/Group" >
                                     Global Cooperation
                                 </router-link>
                             </div>
                         </div>
                     </div>
                 </div>
                 <!--<div class="mask-bg" @click="changeIsShow"></div>-->
             </div>
         </div>
         <!--遮罩层  end-->
     </div>
  </div>
</template>

<script>
  export default{
    name:"Header",
    props:["tabType"],
    data(){
      return{
        num: '',
        isShow:false,
          tabs:['SKIING','CLIMBING','OUTDOOR','SELECTED','ABOUT US']
//          tabType:''
      }
    },
    created(){
      console.log(this.tabType);
    },
    methods:{
      sendTab(e){
           this.num = e.target.getAttribute('data-num');
           // this.isShow = e.target.getAttribute('data-isShow');
           console.log(this.num+ this.isShow);
           //func: 是父组件指定的传数据绑定的函数，this.num:子组件给父组件传递的数据
           // this.$emit('func',this.num,this.isShow);
           this.$emit('func',this.num);
           if(this.num==0){
             this.$router.push({
              path:'/SkatingDetails'
             })
           }if(this.num==1){
            this.$router.push({
             path:'/ClimbingDetails'
            })
           }if(this.num==2){
            this.$router.push({
             path:'/OutgoingDetails'
            })
           }if(this.num==3){
            this.$router.push({
             path:'/Selected'
            })
           }if(this.num==4){
            // this.$router.push({
            //  path:'/BrandStory'
            // })
              this.isShow=true
           }
      }
    }
  }
</script>
<style lang="less" scoped>
/*@media screen and (max-width: 992px){
  .container{
    width:992px!important;
  }
}*/
.container{
  width:1170px!important;
}
.mask{
    position:absolute;
    top:100px;
    left:0;
    right:0;
    bottom:0;
    z-index:16;
    .mask-content{
        //position:relative;
        height:100%;
        .mask-con{
            position:fixed;
            top:100px;
            left:0;
            right:0;
            height:80px;
            line-height:80px;
            background:#231916;
            color:#ffffff;
            z-index:1;
            .logo-link{
                display:inline-block;
                width:76%;
                height:100%;
                color:#ffffff!important;
            }
            .active{
                background:#000000;
            }
        }
        .mask-bg{
            position:absolute;
            top:80px;
            left:0;
            right:0;
            bottom:0;
            background:#000000;
            opacity:0.6;
        }
    }
}
.header{
  height:100px;
  line-height:100px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:17;
  background:#ffffff;
  box-shadow:0 2px 2px #d8d8d8;
  .row{
    .text-center{
      .active{
        border-bottom:3px solid red;
      }
    }
  }
  .logo-link{
    display:inline-block;
    height:100%;
    width:100%;
    .logo{
        height:24px;
      }
  }
}
.series{
  padding-bottom:5px;
  margin-right:2%;
  font-size:16px;
  font-family:Montserrat;
}
.series:hover{
  color:red;
  border-bottom:3px solid red;
}
.language{
  font-size:16px;
  font-family:Montserrat;
}
</style>
