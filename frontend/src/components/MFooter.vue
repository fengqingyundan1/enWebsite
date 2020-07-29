<template>
  <div class="m_footer">
    <!--<div class="container">-->
      <ul class="footer-box">
          <li class="item">
              <router-link class="concat-us" to="/MContactUs"></router-link>
              <!--<input class="mail" name="" placeholder="Enter email to stay in touch" type="email"/>
              <input class="submit" name="" value="SIGN UP" type="submit"/>-->
          </li>
          <li class="item">
              <h4 class="item-title">About us</h4>
              <router-link class="item-href" to="/MBrandStory">Brand name</router-link>
              <router-link class="item-href" to="/MTechnology">Technology platform</router-link>
              <router-link class="item-href" to="/MResponsibility">Social responsibility</router-link>
          </li>
          <li class="item">
            <h4 class="item-title">Business cooperation</h4>
            <router-link class="item-href"to="/MGroup">Group Purchase and Customization</router-link>
          </li>
          <li class="item">
            <h4 class="item-title">Keep in contact</h4>
            <a class="item-href hot-line" href="javascript:;">customer service hotline</a>
            <a class="item-href hot-tel" href="javascript:;">(86-10) 81784311</a>
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
.m_footer{
  width:100%;
  text-align:left;
  background:#343434;
  padding:20px;
  color:#ffffff;
  .footer-box{
    width:95%;
    margin:0 auto;
    .item{
      box-sizing:border-box;
      text-align:center;
      margin:20px 0;
      .item-title{
        font-size:14px;
        margin:0 0 10px;
      }
      .item-href{
        display:block;
        color:#999999!important;
        margin-bottom:10px;
        font-size:12px;
      }
      .hot-tel{
       font-size:14px;
      }
      .mail{
        box-sizing:border-box;
        border: 1px solid #979797;
        background:#343434;
        width:70%;
        min-width:190px;
        height:40px;
        text-align:left;
        padding:0 8px;
        text-align:center;
      }
      .submit{
        box-sizing:border-box;
        min-width:60px;
        width:20%;
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
        width:260px;
        height:45px;
        background: url('../assets/m_img/m_concatus.png') no-repeat 0 0;
        background-size:100% 100%;
      }
    }
  }
}
</style>
