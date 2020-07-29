<template>
    <div>
        <el-dialog title="添加" :visible.sync="this.isVisible"  width="50" :before-close="handleClose" style="text-align: left" class="upload">
            <p><span>上传图片：</span>
                <el-upload
                        class="avatar-uploader"
                        action="/api/uploadimage/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        label="上传图片：">
                    <img v-if="imgUrl" :src="imgUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <em>最大尺寸：{{this.validWidth}}×{{this.validHeight}}以内，.jpg/.png，大小2M以内.</em>
            </p>
            <p v-if="this.ifTitle"><span>添加标题:</span> <em>1-50字以内，包含符号。</em><el-input @input="check(plusContent.title)" v-model="plusContent.title" label="添加标题: "></el-input></p>
            <p v-if="this.isPrice"><span>添加价格:</span> <em>1-50字以内，包含符号。</em><el-input :maxlength="50" v-model="plusContent.price" label="添加价格: "></el-input></p>
            <p v-if="this.isIcon"><span>添加icon:</span>
                <el-upload
                        class="avatar-uploader"
                        action="/api/uploadimage/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess1"
                        :before-upload="beforeAvatarUpload"
                        label="上传图片：">
                    <img v-if="iconImgUrl" :src="iconImgUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </p>
            <p v-if="this.isTime"><span>添加日期:</span> <em>1-50字以内，包含符号。</em><el-input :maxlength="50" v-model="plusContent.time" label="添加日期: " type="date"></el-input></p>
            <p v-if="this.isVideo"><span>添加视频链接:</span> <em>1-50字以内，包含符号。</em><el-input :maxlength="100" v-model="plusContent.videoSrc" label="添加视频: "></el-input></p>
            <p v-if="this.isInfo"><span>添加描述: </span><em>1-500字以内，包含符号。</em><el-input :maxlength="500" type="textarea" v-model="plusContent.info" label="添加描述:" ></el-input></p>
            <el-button type="primary" @click="saveData">提交</el-button>
        </el-dialog>
    </div>
</template>
<script>
    import {checkLength} from './char.js'
    export default{
        props:['isVisible','validWidth','validHeight','isVideo','ifTitle','isPrice','isInfo','isTime','isIcon'],
        data:function(){
            return{
                imgUrl:'',
                iconImgUrl:'',
                plusContent:{
                    title:'',
                    info:'',
                    imageUrl:'',
                    iconImageUrl:'',
                    videoSrc:'',
                    price:'',
                    time:''
                }
            }
        },
        methods:{
            check:function(){
                checkLength(this.plusContent.title)
            },
            saveData:function(){
                let that=this
//                that.obj=that.plusContent
//                console.log(that.obj)
                //chuandi
                that.$emit('getData',JSON.parse(JSON.stringify(that.plusContent)) )
                that.$emit('getFromChild',false)
                that.$emit('getVideo',false)

                that.toPlusVisible=false
                that.plusContent.info=''
                that.plusContent.title=''
                that.plusContent.imageUrl=''
                that.plusContent.iconImageUrl=''
                that.plusContent.videoSrc=''
                that.plusContent.price=''
                that.plusContent.time=''
                that.imgUrl=''
                that.iconImgUrl=''
            },
            handleAvatarSuccess:function(res, file) {
                let that=this
                console.log(res)
                that.imgUrl = URL.createObjectURL(file.raw);
                that.plusContent.imageUrl=res.image_url
            },
            handleAvatarSuccess1:function(res, file) {
                let that=this
                console.log(res)
                that.iconImgUrl = URL.createObjectURL(file.raw);
                that.plusContent.iconImageUrl=res.image_url
            },
            beforeAvatarUpload:function(file) {
                let that=this
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;
                return new Promise(function (resolve, reject) {
//                    that.validWidth=470
//                    that.validHeight=560

                    let _URL = window.URL || window.webkitURL;
                    let img = new Image();
                    img.onload = function () {
                        let valid = img.width <=that.validWidth && img.height <= that.validHeight;
                        valid ? resolve() : reject();
                    }
                    img.src = _URL.createObjectURL(file);
                }).then(()=>{
                    return file;
                }, ()=>{
                    that.$message.error('图片尺寸错误')
//                    return Promise.reject();
                    reject()
                })
                if (!isJPG&&!isPNG) {
                    this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return (isJPG||isPNG) && isLt2M;
            },
            handleClose:function(done){
                let that=this
                that.$emit('getFromChild',false)
                that.$emit('getVideo',false)
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