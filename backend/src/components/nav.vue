<template>
    <el-container class="container nav">
        <el-aside class="aside" style="width:240px;">
            <img src="" alt=""/>
            <h2 class="title">探路者官网后台</h2>
            <el-select v-model="platValue" placeholder="请选择" @change="platChange">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-radio-group v-model="agentValue"  id="agentSel" @change="handleSelect">
                <el-radio-button label="PC端"><i class="el-icon-menu">PC端</i> </el-radio-button>
                <el-radio-button label="移动端"><i class="el-icon-mobile-phone">移动端</i></el-radio-button>
            </el-radio-group>

        </el-aside>
        <el-container>
            <el-header style="text-align: right;line-height:60px;">
                <el-dropdown @command="handleCommand">
                      <span class="el-dropdown-link">
                        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="editPass">修改密码</el-dropdown-item>
                        <el-dropdown-item command="exit">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main>
                <el-menu
                        :default-active="$route.path"
                        class="el-menu-demo useragent"
                        mode="horizontal"
                        @select="handleRoute"
                        background-color="rgba(62, 43, 231, 1)"
                        text-color="#999"
                        active-text-color="#fff" router>
                    <el-menu-item index="/home">
                        <i class="el-icon-menu"></i>
                        <span slot="title">home</span>
                    </el-menu-item>
                    <el-menu-item index="/skat">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">skating</span>
                    </el-menu-item>
                    <el-menu-item index="/climb">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">climbing</span>
                    </el-menu-item>
                    <el-menu-item index="/outgoing">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">outgoing</span>
                    </el-menu-item>
                    <el-menu-item index="/selected">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">selected</span>
                    </el-menu-item>
                    <el-menu-item index="/about">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">about us</span>
                    </el-menu-item>
                </el-menu>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>

            </el-main>
        </el-container>
        <el-dialog
                title="修改密码"
                :visible.sync="dialogVisible"
                width="30%">
            <el-input v-model="newPass" placeholder="请输入新密码"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import Bus from '../public/bus.js'
    export default{
        data:function(){
            return{
                isMobile:true,
                activeName:'top',
                platValue:'英文官网',
                agentValue:'PC端',
                platNum:'',
                username:'admin',
                dialogVisible:false,
                newPass:'',
                options:[
                    {
                        value:'英文官网',
                        label:'英文官网'
                    }   ,{
                        value:'中文官网',
                        label:'中文官网'
                    }
                ]
            }
        },
        methods:{
            handleCommand:function(command){
                this.$message('click on item ' + command);
            },
            handleSelect:function(key){
                let that=this
                that.dataRequire()
            },
            handleRoute:function(key,keyPath){
                let that=this
                that.platNum=0
            },
            platChange:function(){
                let that=this
                that.dataRequire()
            },
            dataRequire:function(){
                let that=this
                if(that.platValue=='英文官网'&&that.agentValue=='PC端'){
                    that.platNum=0
                }else if(that.platValue=='英文官网'&&that.agentValue=='移动端'){
                    that.platNum=1
                }else if(that.platValue=='中文官网'&&that.agentValue=='PC端'){
                    that.platNum=2
                }else if(that.platValue=='中文官网'&&that.agentValue=='移动端'){
                    that.platNum=3
                }
                Bus.$emit('platNum',that.platNum)
                sessionStorage.setItem('platNum',that.platNum)
            },
            handleCommand:function(command) {
                const that=this
                that.dialogVisible=true
            }
        }
    }
</script>
<style>
    .nav .el-radio-button__inner{
        display:block;
        width:100%;
    }
</style>
<style scoped>
    .container{
        background:#ddd;
        width:100%;
        height:100%;
        position:absolute;
    }
    .aside{
        width:150px;
        height:100%;
        background:rgba(62, 43, 231, 1);
    }
    .title{
        color:#fff;
    }
    header{
        height:80px;
        background:#fff;
    }
    .el-tabs__item{
        margin:0 5px;
    }
    .useragent{
        border-right:none;
        border-top:1px solid #fff;
    }
    .el-menu-item{
        height:50px;
        line-height:50px;
        border-bottom:1px solid #fff;
        color:#ddd;
        margin-bottom:1px;
    }
    .el-radio-group{
        width:100%;
        margin-top:100px;
    }
    .el-radio-button{
        width:100%;
    }

</style>
