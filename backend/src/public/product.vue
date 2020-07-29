<template>
    <div>
        <el-form-item style="text-align: left">
            <el-row :gutter="20" class="w_fpcus">
                <el-col :span="6" v-for="item in lists" >
                    <div style="position:relative;height:300px;margin-bottom:10px;">
                        <img :src="item.imgUrl" alt="" style="width:100%;height:100%"/>
                        <p style="width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.3)">{{item.summary}}</p>
                    </div>

                    <el-button type="primary"><i class="el-icon-arrow-left" @click="toLeft"></i> </el-button>
                    <el-button type="primary"><i class="el-icon-arrow-right" @click="toRight"></i> </el-button>
                    <el-button type="danger"><i class="el-icon-delete" @clikc="toDel"></i></el-button>
                </el-col>
                <el-col :span="6" class="plus">
                    <img src="../assets/plus.jpg"  @click="toPlus"  alt=""/>
                </el-col>
            </el-row>
        </el-form-item>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                toPlusVisible:false,
                plusContent:{
                    imageUrl:'',
                    info:''
                },
               lists:[
                   {
                       imgUrl:'http://img01.lvye.com.cn/lvyetopic/media/generic_upload/201810/1539136258.79.jpg',
                       title:'11',
                       summary:'2222222222'
                   },
                   {
                       imgUrl:'http://img01.lvye.com.cn/lvyetopic/media/generic_upload/201810/1539136258.79.jpg',
                       title:'22',
                       summary:'33333333'
                   }
               ]
            }
         },
        methods: {
            toPlus:function(){
                const that=this
                that.toPlusVisible=true
            },
            toLeft:function(){

            },
            toRight:function(){

            },
            toDel:function(){

            },
            handleAvatarSuccess:function(){

            },
            beforeAvatarUpload:function(){

            } ,
            handleClose:function(done){
                done();
            }
        }
    }
</script>
<style>
    .upload textarea{
        height:200px;
        resize:none;
    }
    .upload p{
        margin-bottom:20px;
    }
    .upload p span{
        display:inline-block;
        font-size:16px;
        padding:10px 0;
    }
    .upload em{
        color:#666;
        font-size:10px;
    }
    .upload  .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .upload  .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .upload .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .upload .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<style scoped>
    .w_fpcus img,.w_fpcus p,.w_fpcus h3{
        margin:0
    }
    .plus{
        width:200px;
        /*height:400px;*/
        border:1px solid #ddd;
    }
    .plus img{
        width:50px;
        height:50px ;
        margin:125px 65px;
    }
</style>
