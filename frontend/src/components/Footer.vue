<template>
  <div class="footer">
    <!--<div class="container">-->
      <ul class="footer-box clearfix">
          <li class="item">
              <h4 class="item-title">About us</h4>
              <router-link class="item-href" to="/BrandStory">Brand name</router-link>
              <router-link class="item-href" to="/Technology">Technology platform</router-link>
              <router-link class="item-href" to="/Responsibility">Social responsibility</router-link>
          </li>
          <li class="item">
            <h4 class="item-title">Business cooperation</h4>
            <router-link class="item-href" to="/Group">Group Purchase and Customization</router-link>
          </li>
          <li class="item">
            <h4 class="item-title">Keep in contact</h4>
            <a class="item-href hot-line" href="javascript:;">customer service hotline</a>
            <a class="item-href hot-tel" href="javascript:;">(86-10) 81784311</a>

          </li>
          <li class="item">
            <router-link class="concat-us" to="/ContactUs"></router-link>
              <!--<input class="mail" name="" placeholder="Enter email to stay in touch" type="email"/>
              <input class="submit" name="" value="SIGN UP" type="submit"/>-->
          </li>
      </ul>
    <!--</div>-->
  </div>
</template>
<script>
export default{
  name:"Footer"
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
.footer{
  width:100%;
  text-align:left;
  background:#343434;
  padding:60px 20px;
  color:#ffffff;
  .footer-box{
    width:95%;
    margin:0 auto;
    .item{
      float:left;
      padding-right:20px;
      .item-title{
        font-size:14px;
      }
      .item-href{
        display:block;
        color:#999999!important;
        padding-bottom:10px;
        font-size:12px;
      }
      .hot-tel{
       font-size:14px;
      }
      .mail{
        border: 1px solid #979797;
        background:#343434;
        width:200px;
        height:40px;
        text-align:left;
        padding:0 15px;
      }
      .submit{
        width:70px;
        height:40px;
        font-size:12px;
        position:relative;
        left:-5px;
        top:-2px;
        border:1px solid #8f9496;
        color:#000000;
      }
      .concat-us{
        display:inline-block;
        width: 250px;
        height: 50px;
        background: url('../assets/img/concatus.png') no-repeat 0 0;
        background-size:100% 100%;
      }
    }
    .item:nth-child(1){
      width:20%;
    }
    .item:nth-child(2){
      width:25%;
    }
    .item:nth-child(3){
      width:20%;
    }
    .item:nth-child(4){
      width:35%;
    }
  }
}
</style>
