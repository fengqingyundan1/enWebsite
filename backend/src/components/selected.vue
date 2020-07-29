<template>
    <div >
        <el-form label-position="top" ref="selForm" :model="selForm" label-width="200px">
            <h2 style="text-align: left">Banner</h2>
            <Banner @sendValue="getValue" @removeValue="remove" :pic-datas="imgFromBack"></Banner>
            <el-form-item>
                <el-tabs v-model="tabName" type="card" @tab-click="tabSelect">
                    <el-tab-pane style="text-align: left"
                            v-for="(item, index) in selForm.cateTabs"
                            :key="item.name"
                            :label="item.label"
                            :name="item.name">
                        <div v-show="isMobile">
                            <div class="plus" @click="toPlus1(index)" v-if="!item.imgUrl">
                                <img style="margin:75px 75px" src="../assets/plus.jpg"  alt=""/>
                            </div>
                            <div v-else>
                                <img :src="item.imgUrl" class="main_img"  alt=""/>
                                <el-button  type="danger"  @click="toDel(index)" class="btn" ><i class="el-icon-delete"></i></el-button>
                            </div>
                        </div>
                        <el-row :gutter="20" class="w_fpcus" style="margin:20px 0 0 0">
                            <el-col :span="6" v-for="(item,index1) in selForm.cateTabs[index].lists">
                                <div class="father" style="">
                                    <img :src="item.imageUrl" alt="" class="img"/>
                                    <p class="info">{{item.info}}</p>
                                    <el-row :gutter="20">
                                        <el-col class="title" :span="16">{{item.title}}</el-col>
                                        <el-col :span="4" style="">￥{{item.price}}</el-col>
                                    </el-row>
                                </div>
                                <el-button type="primary" v-show="index1 != 0"   @click="toLeft(index,index1)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                <el-button type="primary" v-show="index1<selForm.cateTabs[index].lists.length-1" @click="toRight(index,index1)"><i class="el-icon-arrow-right" ></i> </el-button>
                                <el-button type="danger" @click="toDel(index,index1)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                            <el-col :span="6" class="plus"style="text-align: center;">
                                <img src="../assets/plus.jpg"   @click="toPlus(index)"  alt=""/>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="onSubmit" style="margin-top:30px;">保存</el-button>
            </el-form-item>
        </el-form>
        <Dialog :is-visible="toPlusVisible"
                :is-video="isVideo"
                :valid-width="width"
                :valid-height="height"
                :if-title="hasTitle"
                :is-price="hasPrice"
                :is-info="hasInfo"
                :is-icon="hasIcon"
                @getFromChild="getIfVisible"
                @getData="getDatas"
                @getVideo="getVideoValue"></Dialog>
        <DelDialog :is-visible="showConfirm" @getVisible="getFromChild" @ifDel="delConfirm"></DelDialog>
    </div>
</template>
<script>
    import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
    import Banner from '../public/banner.vue'
    import Dialog from '../public/dialog.vue'
    import DelDialog from '../public/delDialog.vue'
    import Bus from '../public/bus.js'
    export default{
        components: {ElFormItem:ElFormItem,Banner:Banner,Dialog:Dialog,DelDialog:DelDialog},
        data:function(){
            return{
                isMobile:false,
                toPlusVisible:false,
                dialogConfirm:false,
                isVideo:false,
                hasTitle:true,
                hasPrice:true,
                hasInfo:true,
                hasIcon:false,
                imageUrl:'',
                cateIndex:'',
                dialog:'',
                curIndex:'',
                showConfirm:false,
                width:'',
                height:'',
                imgFromBack:[],
                selForm:{
                    terminal_type:1,/* 0:pc,1:mobile */
                    lanauage_type:2,/* 0:english,1:chinese */
                    menu_type:'Selected',/*router*/
                    bannerImgUrl:'',
                    cateTabs:[
                        {
                            contentVisible:true,
                            name:'first',
                            label:'SKATING',
                            lists:[],
                            imgUrl:''
                        },
                        {
                            contentVisible:false,
                            name:'second',
                            label:'CLIMBING',
                            lists:[],
                            imgUrl:''
                        },
                        {
                            contentVisible:false,
                            name:'third',
                            label:'OUTGOING',
                            lists:[],
                            imgUrl:''
                        },
                        {
                            contentVisible:false,
                            name:'fourth',
                            label:'CHILD',
                            lists:[],
                            imgUrl:''
                        },
                        {
                            contentVisible:false,
                            name:'fifth',
                            label:'TRAVEL',
                            lists:[],
                            imgUrl:''
                        }
                    ]
                },
                tabName:'first',
                plusContent:{
                    title:'',
                    info:'',
                    imageUrl:''
                }
            }
        },
        methods:{
            getDataLists:function(){
                let that=this
                that.selForm.bannerImgUrl=''
                const obj2={}
                obj2.terminal_type=that.selForm.terminal_type
                obj2.lanauage_type=that.selForm.lanauage_type
                obj2.menu_type='Select'
                that.$http({
                    url:'/api/gethomeinfo',
                    method:'post',
                    data:obj2,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(obj2)
                    }]
                }).then(function(res){
                   console.log(res.data)
                    that.selForm.bannerImgUrl=res.data.bannerImgUrl
                    let imgArr=res.data.bannerImgUrl.split(',')
                    that.imgFromBack=[]
                    for(var i=0;i<imgArr.length;i++){
                        that.imgFromBack.push(imgArr[i])
                    }
                    that.selForm=res.data
                })
            },
            tabSelect:function(tab,event){
                console.log(tab)
            },
            getValue:function(value){
                let that=this
                that.selForm.bannerImgUrl=value
            },
            remove:function(value){
                console.log(value)
                let that=this
                that.selForm.bannerImgUrl=value
            },
            getIfVisible:function(value){
                const that=this
                that.toPlusVisible=value
            },
            getVideoValue:function(value){
                const that=this
                that.isVideo=value
            },
            getFromChild:function(value){
                let that=this
                that.showConfirm=value
            },
            getDatas:function(value){
                let that=this
                if(that.dialog===0){
                    that.selForm.cateTabs[that.curIndex].lists.push(value)
                }else if(that.dialog===1){
                    that.$set(that.selForm.cateTabs[that.curIndex],'imgUrl',value.imageUrl)
                }

            },
            toLeft:function(index,index1){
                let that=this
                let temp=that.selForm.cateTabs[index].lists[index1]
                that.$set(that.selForm.cateTabs[index].lists, index1 , that.selForm.cateTabs[index].lists[index1-1]);
                that.$set(that.selForm.cateTabs[index].lists, index1-1, temp)
            },
            toRight:function(index,index1){
                let that=this
                let temp=that.selForm.cateTabs[index].lists[index1]
                that.$set(that.selForm.cateTabs[index].lists, index1 ,that.selForm.cateTabs[index].lists[index1+1]);
                that.$set(that.selForm.cateTabs[index].lists, index1+1, temp)
            },
            toPlus:function(index){
                const that=this
                if(that.isMobile===false){
                    that.width=726
                    that.height=726
                }else{
                    that.width=227
                    that.height=227
                }
                that.curIndex=index
                that.hasTitle=true
                that.hasTitle=true
                that.hasPrice=true
                that.hasInfo=true
                that.toPlusVisible=true
                that.dialog=0
            },
            toPlus1:function(index){
                const that=this
                that.width=1026
                that.height=303
                that.hasTitle=false
                that.hasTitle=false
                that.hasPrice=false
                that.hasInfo=false
                that.curIndex=index
                that.dialog=1
                that.toPlusVisible=true
            },
            toDel:function(index,index1){
                let that=this
                if(index1){
                    that.showConfirm=true
                    that.curIndex=index1
                    that.cateIndex=index
                }else{
                    that.selForm.cateTabs[index].imgUrl=''
                }
            },
            delConfirm:function(value){
                let that=this
                that.delIt=value
                that.selForm.cateTabs[that.cateIndex].lists.splice(that.curIndex,1)
                that.showConfirm=false
            },
            onSubmit:function(){
                let that=this
               console.log(that.selForm)
                that.$http({
                    url:'api/selectedinfosave',
                    method:'post',
                    data:that.selForm,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(that.selForm)
                    }]
                }).then(function(res){
//                    console.log(res)
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
//                console.log(plat)
                if(plat===0){
                    that.selForm.terminal_type=1
                    that.selForm.lanauage_type=2
                }else if(plat===1){
                    that.selForm.terminal_type=2
                    that.selForm.lanauage_type=2
                }else if(plat===2){
                    that.selForm.terminal_type=1
                    that.selForm.lanauage_type=1
                }else if(plat===3){
                    that.selForm.terminal_type=2
                    that.selForm.lanauage_type=1
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
    .el-col-6{
        margin-bottom:30px;
    }
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
    .title{
        height:40px;line-height:20px;overflow:hidden;overflow-wrap: break-word;text-align: left;
    }
    .info{
        width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.3);margin:0;text-align: left;line-height:20px;
    }
    .img{
        width:100%;
        height:100%;
        object-fit: contain;
        border:1px solid #ddd;
    }
    .main_img{
        width:300px;height:178px;object-fit: contain;
    }
    .btn{
        vertical-align: top;margin:70px 0 0 10px;
    }
    .father{
        position:relative;height:300px;margin-bottom:10px;
    }
    .el-col-4{
        height:40px;line-height:20px;text-align: right;
    }
</style>