<template>
    <div >
        <el-form label-position="top" ref="homeForm" :model="homeForm" label-width="200px">
            <Banner @sendValue="getValue" @removeValue="remove" :pic-datas="imgFromBack"></Banner>
            <el-form-item v-show="isMobile">
                <el-tabs v-model="tabName" type="card" @tab-click="tabSelect">
                    <el-tab-pane
                            v-for="(item, index) in homeForm.cateTabs"
                            :key="item.name"
                            :label="item.label"
                            :name="item.name">
                        <div class="plus" @click="toPlus1(item,index)" v-if="item.contentVisible">
                            <img src="../assets/plus.jpg"  alt=""/>
                        </div>
                        <div v-else>
                            <el-row :gutter="20" style="border-bottom:1px solid #ddd;">
                                <el-col :span="8">
                                    <div class="grid-content">
                                        <img :src="item.imgUrl" alt="" style="width:235px;height:280px;object-fit: contain;border:1px solid #ddd;"/>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="grid-content">
                                        <p class="title">{{item.title}}</p>
                                        <p class="info">{{item.info}}</p>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <el-button type="danger" icon="el-icon-delete" name="cateTab" @click="showDel(index,$event)"></el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-form-item>
            <el-form-item>
                <h2 style="text-align: left">SCIENCE AND TECHNOLOGY</h2>
                    <el-row :gutter="20">
                        <el-col :span="8"
                               v-for="(item, index) in homeForm.techs" >
                            <div class="grid-content">
                                <img :src="item.imgUrl" alt="" style="width:100%;height:300px;object-fit:contain ;border:1px solid #ddd"/>
                                <p class="info">{{item.text}}</p>
                                <p class="info">{{item.title}}</p>
                                <p class="info">{{item.info}}</p>
                            </div>
                            <el-button v-show="index!=0" type="primary"  @click="toLeft(index)"><i class="el-icon-arrow-left"></i> </el-button>
                            <el-button v-show="index<homeForm.techs.length-1" type="primary" @click="toRight(index)"><i class="el-icon-arrow-right" ></i> </el-button>
                            <el-button type="danger" name="science" @click="showDel(index,$event)" ><i class="el-icon-delete" ></i></el-button>
                        </el-col>
                        <el-col class="plus" :span="8">
                            <img src="../assets/plus.jpg" @click="toPlus2()"  alt=""/>
                        </el-col>
                    </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="onSubmit" style="margin-top:30px;">保存</el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="添加" :visible.sync="toPlusVisible" width="50" :before-close="handleClose" style="text-align: left" class="upload">
            <p><span>上传图片：</span>
                <el-upload
                    class="avatar-uploader"
                    action="/api/uploadimage/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    label="上传图片：">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <em>最大尺寸：{{validWidth}}×{{validHeight}}以内，.jpg.png，大小2M以内.</em>
            </p>
            <p v-show="isTitle"><span>添加标题:</span> <em>1-50字以内，包含符号。</em><el-input :maxlength="50" v-model="plusContent.text" label="添加标题: "></el-input></p>
            <p v-show="isTitle"><span>添加文本:</span> <em>1-50字以内，包含符号。</em><el-input :maxlength="50" v-model="plusContent.title" label="添加标题: "></el-input></p>
            <p><span>添加描述: </span><em>1-500字以内，包含符号。</em> <el-input :maxlength="500" type="textarea" v-model="plusContent.info" label="添加描述:" ></el-input></p>
            <el-button type="primary" @click="saveData">提交</el-button>
        </el-dialog>
        <el-dialog title="" :visible.sync="dialogConfirm" width="50" :before-close="handleClose">
            <span>确定要删除吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogConfirm = false">取 消</el-button>
            <el-button type="primary" @click="delItem()">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
    import Banner from '../public/banner.vue'
    import Bus from '../public/bus.js'
    export default{
        components: {ElFormItem:ElFormItem,Banner:Banner},
        data:function(){
            return{
                isMobile:false,
                toPlusVisible:false,
                dialogConfirm:false,
                isTitle:true,
                imgFromBack:[],
                dialog:'',
                validWidth:'',
                validHeight:'',
                imageUrl:'',
                menu_type:'Home',
                homeForm:{
                    terminal_type:1,/* 0:pc,1:mobile */
                    lanauage_type:2,/* 0:english,1:chinese */
                    menu_type:'',/*router*/
                    bannerImgUrl:'',
                    cateTabs:[
                        {
                            contentVisible:true,
                            title:'',
                            info:'',
                            imgUrl:'',
                            name:'first',
                            label:'SKATING'
                        },
                        {
                            contentVisible:true,
                            title:'',
                            info:'',
                            imgUrl:'',
                            name:'second',
                            label:'CLIMBING'
                        },
                        {
                            contentVisible:true,
                            title:'',
                            info:'',
                            imgUrl:'',
                            name:'third',
                            label:'OUTGOING'
                        }
                    ],
                    techs:[]
                },
                tabName:'first',
                cateIndex:'',
                techIndex:'',
                plusContent:{
                    title:'',
                    info:'',
                    text:'',
                    imageUrl:''
                }
            }
        },
        methods:{
            getDataLists:function(){
                let that=this
                that.homeForm.bannerImgUrl=''
                const obj={}
                obj.terminal_type=that.homeForm.terminal_type
                obj.lanauage_type=that.homeForm.lanauage_type
                obj.menu_type='Home'
                that.$http({
                    url:'/api/gethomeinfo',
                    method:'post',
                    data:obj,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(obj)
                    }]
                }).then(function(res){
                    console.log(res.data)
                    that.homeForm.bannerImgUrl=res.data.bannerImgUrl
                    that.homeForm.techs=res.data.techs
                    that.homeForm.cateTabs=res.data.cateTabs
                    let imgArr=res.data.bannerImgUrl.split(',')
                    that.imgFromBack=[]
                   for(var i=0;i<imgArr.length;i++){
                        that.imgFromBack.push(imgArr[i])
                   }
                   // that.homeForm=res.data
                })
            },
            tabSelect:function(tab,event){
                console.log(tab)
            },
            getValue:function(value){
                console.log(value)
                let that=this
                that.homeForm.bannerImgUrl=value
            },
            remove:function(value){
                let that=this
                that.homeForm.bannerImgUrl=value
            },
            toPlus1:function(item,index){
                const that=this
                that.toPlusVisible=true
//                console.log(item)
                console.log(index)
                that.cateIndex=index
                item.contentVisible=false
                that.dialog=1
                if(that.isMobile===false){
                    that.validWidth=470
                    that.validHeight=560
                }else{
                    // that.validWidth=276
                    // that.validHeight=118
                    that.validWidth=470
                    that.validHeight=560
                }
            },
            toPlus2:function(){
                const that=this
                that.toPlusVisible=true
                // that.isTitle=false
                that.dialog=2
                if(that.isMobile===false){
                    that.validWidth=617
                    that.validHeight=282
                }else{
                    that.validWidth=327
                    that.validHeight=149
                }
            },
            showDel:function(index,e){
                let that=this
                that.dialogConfirm=true
                if(e.target.name==='cateTab'){
                    that.cateIndex=index
                    that.dialog=1
                }else if(e.target.name==='science'){
                    that.techIndex=index
                    that.dialog=2
                }

            },
            delItem:function(){
                let that=this
                if(that.dialog===1){
                    that.homeForm.cateTabs[that.cateIndex].info=''
                    that.homeForm.cateTabs[that.cateIndex].title=''
                    that.homeForm.cateTabs[that.cateIndex].imgUrl=''
                    that.homeForm.cateTabs[that.cateIndex].contentVisible=true
                }else if(that.dialog===2){
                    that.homeForm.techs.splice(that.techIndex,1)
                }
                that.dialogConfirm=false
                console.log(that.homeForm)
            },
            saveData:function(){
                let that=this
                if(that.dialog===1){
                    that.homeForm.cateTabs[that.cateIndex].info=that.plusContent.info
                    that.homeForm.cateTabs[that.cateIndex].title=that.plusContent.title
                    that.homeForm.cateTabs[that.cateIndex].imgUrl=that.plusContent.imageUrl
                }else if(that.dialog===2){
                    that.homeForm.techs.push({
                        info:that.plusContent.info,
                        title:that.plusContent.title,
                        text:that.plusContent.text,
                        imgUrl:that.plusContent.imageUrl
                    })
                }
                that.toPlusVisible=false
                that.plusContent.info=''
                that.plusContent.title=''
                that.plusContent.imageUrl=''
                that.plusContent.text=''
                that.imageUrl=''
                that.isTitle=true
                console.log(that.homeForm)
            },
            handleAvatarSuccess:function(res, file) {
                let that=this
                that.imageUrl = URL.createObjectURL(file.raw);
                that.plusContent.imageUrl = res.image_url
            },
            beforeAvatarUpload:function(file) {
                let that=this
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;
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
                if (!isJPG&&!isPNG) {
                    this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return (isJPG||isPNG) && isLt2M;
            },
            toLeft:function(index){
                let that=this
                let temp=that.homeForm.techs[index]
                that.$set(that.homeForm.techs, index , that.homeForm.techs[index-1]);
                that.$set(that.homeForm.techs, index-1, temp)
            },
            toRight:function(index){
                let that=this
                let temp=that.homeForm.techs[index]
                that.$set(that.homeForm.techs, index , that.homeForm.techs[index+1]);
                that.$set(that.homeForm.techs, index+1, temp)
            },
            handleClose:function(done){
                done();
            },
            onSubmit:function(){
                let that=this
                that.homeForm.menu_type=that.menu_type
                console.log(that.homeForm)
                that.$http({
                    url:'api/homeinfosave',
                    method:'post',
                    data:that.homeForm,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(that.homeForm)
                    }]
                }).then(function(res){
                    if(res.data.code === 1){
                        that.$notify({
                            title: '成功',
                            message: '保存成功',
                            type: 'success'
                        });
                        that.getDataLists();
                    }
                })
            }
        },
        created:function(){
            const that=this
            that.getDataLists();
        },
        mounted:function(){
            const that=this
            let plat=sessionStorage.getItem('platNum')
            Bus.$on('platNum',function(e){
                plat=e
                if(plat%2===0){
                    that.isMobile=true
                }else{
                    that.isMobile=false
                }
                if(plat===0){
                    that.homeForm.terminal_type=1
                    that.homeForm.lanauage_type=2
                }else if(plat===1){
                    that.homeForm.terminal_type=2
                    that.homeForm.lanauage_type=2
                }else if(plat===2){
                    that.homeForm.terminal_type=1
                    that.homeForm.lanauage_type=1
                }else if(plat===3){
                    that.homeForm.terminal_type=2
                    that.homeForm.lanauage_type=1
                }
                that.getDataLists();
            })
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
    .el-form--label-top{
        background:#fff;
        margin-top:20px;
        padding:30px;
    }
    .plus{
        width:200px;
        height:200px;
        border:1px solid #ddd;
    }
    .plus img{
        width:50px;
        height:50px ;
        margin:75px auto;
    }
    .title,.info{
        line-height:20px;
        margin:0;
        text-align: left;
    }
    .title{
        font-size: 16px;
        font-weight:700;
    }
    .grid-content{
        margin-bottom:30px;
    }
    .el-col{
        margin-bottom:30px;
    }
</style>