<template>
  <div class="index">
    <header>
     <m-header></m-header>
    </header>
    <div class="container content-box-contact">
      <div class="contact-box">
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="title-box">Customer service</div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="title-name">Contact us</div>
                <div class="title-name-small">Questions, comments, contact us</div>
              </div>
          </div>
          <div class="row margin-top20">
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="input-box">
                  <input type="text" name="username" v-model="username" placeholder="*Name">
                </div>
             </div>
          </div>
          <div class="row margin-top20">
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
               <div class="input-box">
                  <input type="text" name="mobile" v-model="mobile" placeholder="*Phone">
               </div>
             </div>
          </div>
          <div class="row margin-top20">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
               <div class="input-box">
                  <input type="text" name="email" v-model="email" placeholder="*Mail">
               </div>
            </div>
          </div>
          <div class="row margin-top20">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
               <div class="input-box">
                  <textarea  class="message" v-model="content" placeholder="Please comment ..."></textarea>
               </div>
            </div>
          </div>

          <!--<div class="row margin-top20">
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="input-box">
                  <input class="submit" type="button" name=" " value="Submission">
                </div>
             </div>
          </div>-->
      </div>
      <div class="fixed-box clearfix">
         <div class="send-btn" @click="submit">
            Submission
         </div>
      </div>
    </div>
    <div class="right-alert-box" v-show="rightBoxShow" @click="goIndex">
       <div class="alert-box">
         <img class="alert-box-img" src="../assets/m_img/m_right_bg_all.png" alt="">
       </div>
    </div>
    <div class="wrong-alert-box" v-show="wrongBoxShow" @click="closeAlert">
      <div class="alert-box">
        <img class="alert-box-img" src="../assets/m_img/m_wrong_bg_all.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../components/MHeader'
 // import mFooter from '../components/MFooter'
  import axios from 'axios'
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
       mHeader
    },
    data(){
        return{
            homeList:[],
            wrongBoxShow:false,//是否显示错误弹框提示
            rightBoxShow:false,//是否显示成功弹框提示
            username:'',
            mobile:'',
            email:'',
            content:'',
        }
    },
    methods:{
      closeAlert:function(){
        this.wrongBoxShow = false;
      },
      goIndex:function(){
        this.rightBoxShow = false;
        this.$router.push("/MIndex");
      },
      submit:function(){
        let username = $.trim(this.username);
        let mobile = $.trim(this.mobile);
        let email = $.trim(this.email);
        let content = $.trim(this.content);
        if(username==""){
          alert("请输入您的名字！");
        }else if(mobile==""){
          alert("请输入您的联系方式！");
        }else if(email==""){
         alert("请输入您的电子邮箱！");
        }else{
          this.$axios.post('/Customerservice/createinfo',{
              username:username,
              mobile:mobile,
              email:email,
              content:content,
          }).then((res)=>{
            if(res.data.code=="1"){
             this.rightBoxShow = true;
             this.wrongBoxShow = false;
            }else{
              this.rightBoxShow = false;
              this.wrongBoxShow = true;
            }
          }).catch((err)=>{
            console.log(err);
          });
        }
      }
    },
    created() {
        this.canScroll();
      },
  }
</script>
<style lang="less" scoped>
.content-box-contact{
  padding-top:58px;
  .contact-box{
     margin:20px auto 70px;
    .title-box{
      font-size:22px;
      color:#000000;
      letter-spacing:0;
      margin-bottom:10px;
      text-align:center;
    }
    .title-name{
      font-size:14px;
      color:#000000;
      text-align:left;
    }
    .title-name-small{
      font-size:12px;
      color:#000000;
    }
    .input-box{
      width:100%;
      margin:0 auto;
      text-align:left;
      input{
        border:1px solid #c7c7c7;
        width:100%;
        height:40px;
        line-height:40px;
        padding:0 10px;
      }
      .submit{
        color:#ffffff;
        background:#000000;
      }
      .message{
        outline:none;
        width:100%;
        height:200px;
        padding:10px;
        border:1px solid #c7c7c7;
      }
    }
    .text-box{
      width:100%;
      text-align:left;
      margin:0 auto;
      .responsibility-text{
        font-size: 14px;
        color: #9AA8B6;
        margin:0 0 20px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        line-clamp: 6;
        -webkit-box-orient: vertical;
      }
    }
  }
  .fixed-box{
    position:fixed;
    height:70px;
    bottom:0;
    left:0;
    right:0;
    background:#ffffff;
    .send-btn{
      float:right;
      width:134px;
      margin:15px 15px 0 0;
      height:40px;
      line-height:40px;
      background:#000000;
      color:#ffffff;
      text-align:center;
    }
  }
}
.right-alert-box{
  position:fixed;
  top:58px;
  bottom:0;
  right:0;
  left:0;
  text-align:center;
  background:rgba(0,0,0,0.6);
  .alert-box{
     display:inline-block;
     position:absolute;
     top:50%;
     left:50%;
     width:100%;
     transform:translate(-50%,-50%);
     -webkit-transform:translate(-50%,-50%);
     -moz-transform:translate(-50%,-50%);
     -o-transform:translate(-50%,-50%);
    .alert-box-img{
      width:80%;
      height:auto;
    }
  }
}
.wrong-alert-box{
  position:fixed;
  top:100px;
  bottom:0;
  right:0;
  left:0;
  text-align:center;
  background:rgba(0,0,0,0.6);
  .alert-box{
     display:inline-block;
     position:absolute;
     width:100%;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     -webkit-transform:translate(-50%,-50%);
     -moz-transform:translate(-50%,-50%);
     -o-transform:translate(-50%,-50%);
    .alert-box-img{
      width:80%;
      height:auto;
    }
  }
}
</style>
