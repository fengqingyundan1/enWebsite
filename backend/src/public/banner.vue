<template>
        <el-form-item  :label="labelValue" style="text-align: left">
        <!--<el-form-item  :label="agent%2===0?label1:label2" style="text-align: left">-->
            <el-upload
                    action="/api/uploadimage/"
                    :file-list="images"
                    list-type="picture-card"
                    :class="{disabled:uploadDisabled}"
                    :before-upload="beforeUploadPicture"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="uploadSuccess"
                    :on-error="uploadError">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>
</template>
<script>
    import Bus from './bus.js'
    export default{
        props:['picDatas','ifBanner'],
        data:function(){
            return{
                photo:'',
                dialogImageUrl: '',
                dialogVisible: false,
                images:[],
                removeEvent:false,
                copy_pic:[],
                counter:this.picDatas,
                agent:'',
                labelValue:'BANNER----最大尺寸：1920×949，最多上传5张。',
//                label1:'BANNER----最大尺寸：1920×949，最多上传5张。',
//                label2:'BANNER----最大尺寸：750×718，最多上传5张。',
                validWidth:'',
                validHeight:'',
                uploadDisabled:false
            }
        },
        methods: {
            handlePictureCardPreview: function (file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            // 上传图片前调用方法
            beforeUploadPicture: function (file) {
                let that=this
                //验证图片大小及尺寸
                const is2M=file.size/1024/1024<2
//                console.log(that.agent)
                if(that.agent%2===0){
                    if(this.ifBanner){
                        that.validWidth=1054
                        that.validHeight=1043
                    }else{
                        that.validWidth=1920
                        that.validHeight=949
                    }
                }else{
                    if(this.ifBanner){
                        that.validWidth=345
                        that.validHeight=581
                    }else{
                        that.validWidth=750
                        that.validHeight=718
                    }
                }
                return new Promise(function (resolve, reject) {
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
                if (!is2M) {
                    that.$message.error('图片大小不可超过2MB')
                }
            },

            // 上传图片时调用
            uploadProgress: function (event, file, fileList) {
                this.uploadComplete = false;
            },
            // 上传图片成功
            uploadSuccess: function (res, file, fileList) {
                let that=this
                that.uploadComplete = true;
                that.removeEvent=false;
                that.fileChange(fileList);
//                this.$message.success("上传成功");

                that.uploadDisabled = fileList.length>4?true:false
                that.$emit('sendValue',that.photo)
                that.$emit('sendResValue',that.photo)
                that.$emit('sendStoryValue',that.photo)
                that.$emit('sendTechValue',that.photo)
                that.$emit('sendBrandValue',that.photo)
            },
            // 上传图片出错
            uploadError: function (err, file, fileList) {
                this.$message.error("上传出错");
            },
            // 移除图片
            handleRemove: function (file, fileList) {
                let that=this
                that.removeEvent=true;
                that.fileChange(fileList);
                console.log(that.photo)
                that.uploadDisabled = fileList.length>4?true:false
                that.$emit('removeValue',that.photo)
            },
            // 设置photo值
            fileChange: function (fileList) {
                let temp_str = ''
                let that=this
                console.log(fileList)
                if (fileList.length > 0) {
                    for (let i = 0; i < fileList.length; i++) {
                        if (fileList[i].response) {
                            if (fileList[i].response) {
                                if (i === 0) {
                                    temp_str += fileList[i].response.image_url;
                                } else {
                                    // 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开）
                                    temp_str += ',' + fileList[i].response.image_url;
                                }
                            }
                        }else{
                            if (i === 0) {
                                temp_str += fileList[i].url;
                            } else {
                                // 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开）
                                temp_str += ',' + fileList[i].url;
                            }
                        }
                    }
//                    console.log(temp_str)
                }
                that.photo = temp_str;
            },
            checkValue:function(){
                let that=this
                if(that.ifBanner){
                    if(that.agent%2===0){
                        that.labelValue='BANNER----最大尺寸：1054×1043，最多上传5张。'
                    }else{
                        that.labelValue='BANNER----最大尺寸：345×581，最多上传5张。'
                    }
                }else{
                    if(that.agent%2===0){
                        that.labelValue='BANNER----最大尺寸：1920×949，最多上传5张。'
                    }else{
                        that.labelValue='BANNER----最大尺寸：750×718，最多上传5张。'
                    }
                }
            }
        },
        created:function(){
            let that=this
            that.agent=sessionStorage.getItem('platNum')
            that.checkValue()
            Bus.$on('platNum',function(e){
                that.agent=e
                that.checkValue()
            })
        },
        watch: {
            'picDatas': function (oldValue,newValue){
                let that=this
                that.images=[]
                that.copy_pic=[]
                for(var i=0;i<that.picDatas.length;i++){
                    /*后台加载需要格式化数据{name:''.url:''}*/
                    that.copy_pic.push({
                        name:i,
                        url:that.picDatas[i]
                    })
                }
                /*深拷贝*/
                that.images= JSON.parse(JSON.stringify(that.copy_pic))
            }
        }
    }
</script>
<style>
    .disabled .el-upload--picture-card {
        display: none;
    }
</style>