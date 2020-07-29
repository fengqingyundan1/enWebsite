<template>
    <div class="container">
        <el-form ref="account" :model="account" class="login_container">
            <h2>探路者官网后台</h2>
            <el-form-item label="账号">
                <el-input v-model="account.username" placeholder="请输入..."></el-input>
                <span v-show="loginError==3?true:false" class="errormsg">账号或密码错误，请重试</span>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="account.password" placeholder="请输入..."></el-input>
            </el-form-item>
            <el-form-item label="验证">
                <!--<el-input></el-input>-->
                <Slider @sendCheckValue="sliderCheck" class="slider"></Slider>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :disabled="confirmSuccess==true?false:true" @click="handleLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Slider from '../public/slider.vue'
    export default{
        components:{Slider:Slider},
        data:function(){
            return{
                account:{
                    username:'',
                    password:''
                },
                confirmSuccess:false,
                loginError:3
            }
        },
        methods:{
            sliderCheck:function(val){
//                console.log(val)
                this.confirmSuccess=val
            },
            handleLogin:function(){
                let that=this
                if(that.account.username===""||that.account.password===''){
                    that.$message.error('账号密码不能为空')
                }else{
                    sessionStorage.setItem("login","true");
                    that.$router.push({path: '/nav'});
                }
            }
        }
    }
</script>
<style scoped>
    .container{
        background:rgba(81, 109, 255, 1);
        width:100%;
        height:100%;
        position:fixed;
    }
    .login_container{
        background-clip:padding-box;
        width:400px;
        padding:30px;
        background:#fff;
        margin:150px auto;
    }
    .slider{
        margin-top:40px;
    }
    .errormsg{
        color:#f00;
        position:absolute;
        right:0;
        top:0;
    }
</style>