<template>
    <div>
        <el-form label-position="top" ref="skatForm" :model="skatForm" label-width="200px">
            <h2 style="text-align: left" v-show="isMobile">Banner</h2>
            <Banner @sendValue="getValue" @removeValue="remove" v-show="isMobile" :pic-datas="imgFromBack"></Banner>
            <!--移动端-->
            <h2 style="text-align: left"  v-show="!isMobile">Other videoes</h2>
            <el-form-item v-show="!isMobile" style="text-align: left">
                <el-row :gutter="20" class="w_fpcus">
                    <el-col :span="6" v-for="(item,index) in skatForm.otherVideos" >
                        <video  controls="controls" :poster="item.imageUrl" >
                            <source :src="item.videoSrc" >
                            Your browser does not support the video tag.
                        </video>
                        <h3 class="title">{{item.title}}</h3>
                        <p class="info">{{item.info}}</p>
                        <el-button type="primary" v-show="index!=0" name="otherVideo" @click.native="toLeft(index,$event)"><i class="el-icon-arrow-left " ></i> </el-button>
                        <el-button type="primary" v-show="index<skatForm.otherVideos.length-1" name="otherVideo"  @click.native="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                        <el-button type="danger" name="otherVideo" @click.native="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                    </el-col>
                    <el-col :span="6" class="plus">
                        <!--plus4-->
                        <img src="../assets/plus.jpg" name="otherVideo"   @click="toPlus($event)"  alt=""/>
                    </el-col>
                </el-row>
            </el-form-item>
            <h2 style="text-align: left">Wonderful Focus</h2>
            <el-form-item style="text-align: left">
                <el-row :gutter="20" class="w_fpcus">
                    <el-col :span="6" v-for="(item,index) in skatForm.focusLists" name="focusList" >
                        <img :src="item.imageUrl" alt="" class="img"/>
                        <h3 class="title">{{item.title}}</h3>
                        <p class="info">{{item.info}}</p>
                        <el-button type="primary" v-show="index!=0" name="focusList" @click.native="toLeft(index,$event)"><i class="el-icon-arrow-left " ></i> </el-button>
                        <el-button type="primary" v-show="index<skatForm.focusLists.length-1" name="focusList"  @click.native="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                        <el-button type="danger" name="focusList" @click.native="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                    </el-col>
                    <el-col :span="6" class="plus">
                        <img src="../assets/plus.jpg" name="focusList"   @click="toPlus($event)"  alt=""/>
                    </el-col>
                </el-row>
            </el-form-item>

            <h2 style="text-align: left" v-show="isMobile">EXtreme light and shadow</h2>
            <el-form-item style="text-align: left" v-show="isMobile">
                <el-row :gutter="20"  class="w_fpcus">
                    <el-col :span="10" v-if="skatForm.video[0].srcUrl">
                        <video  controls="controls" :poster="skatForm.video[0].poster" >
                            <source :src="skatForm.video[0].srcUrl" >
                            Your browser does not support the video tag.
                        </video>
                    </el-col>
                    <el-col :span="10" v-if="skatForm.video[0].srcUrl">
                        <h3 class="title">{{skatForm.video[0].title}}</h3>
                        <p class="info">{{skatForm.video[0].summary}}</p>
                    </el-col>
                    <el-col :span="2" v-if="skatForm.video[0].srcUrl">
                        <!--/*toDel2*/-->
                        <el-button type="danger" name="EXtreme"  @click.native="toDel($event)"><i class="el-icon-delete" ></i></el-button>
                    </el-col>
                    <el-col :span="2" class="plus" v-else>
                        <!--plus1-->
                        <img src="../assets/plus.jpg"  name="EXtreme"  @click="toPlus($event)"  alt=""/>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item style="text-align: left" v-show="isMobile">
                <el-row :gutter="20"  class="w_fpcus">
                    <el-col :span="8" v-for="(item,index) in skatForm.videoLists" >
                        <video  controls="controls" :poster="item.poster" >
                            <source :src="item.src" >
                            Your browser does not support the video tag.
                        </video>
                        <el-button type="primary" v-show="index!=0" name="videoList"  @click.native="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                        <el-button type="primary" v-show="index<skatForm.videoLists.length-1" name="videoList"  @click.native="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                        <!--del3-->
                        <el-button type="danger" name="videoList" @click.native="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                    </el-col>
                    <el-col :span="6" class="plus">
                        <!--plus2-->
                        <img src="../assets/plus.jpg" name="videoList"   @click="toPlus($event)"  alt=""/>
                    </el-col>
                </el-row>
            </el-form-item>
            <h2 style="text-align: left" v-show="isMobile" >Why did you choose  us ?  "Skiing Products  Serries"</h2>
            <!--移动端-->
            <h2 style="text-align: left" v-show="!isMobile">As light as acloud</h2>
            <el-form-item style="text-align: left">
                <el-row :gutter="20" class="w_fpcus">
                    <el-col :span="6" v-for="(item,index) in skatForm.productLists" >
                        <div class="hasmask" style="">
                            <img :src="item.imageUrl" alt="" style="width:100%;height:100%;object-fit: contain"/>
                            <p class="mask" style="">{{item.info}}</p>
                        </div>
                        <p >{{item.title}}</p>

                        <el-button type="primary" v-show="index!=0" name="productList"  @click.native="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                        <el-button type="primary" v-show="index<skatForm.productLists.length-1" name="productList"  @click.native="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                        <!--del4-->
                        <el-button type="danger" name="productList" @click.native="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                    </el-col>
                    <el-col :span="6" class="plus">
                        <!--plus3-->
                        <img src="../assets/plus.jpg" name="productList"  @click="toPlus($event)"  alt=""/>
                    </el-col>
                </el-row>
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
                :is-time="hasTime"
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
                isMobile:true,
                isVideo:false,
                toPlusVisible:false,
                showConfirm:false,
                delIt:false,
                state:'',
                hasTitle:true,
                hasPrice:false,
                hasInfo:true,
                hasIcon:false,
                hasTime:false,
                focusListIndex:'',
                videoListIndex:'',
                productIndex:'',
                otherVideoIndex:'',
                width:'',
                height:'',
                dialog:'',
                imgFromBack:[],
                skatForm:{
                    terminal_type:1,/* 0:pc,1:mobile */
                    lanauage_type:2,/* 0:english,1:chinese */
                    menu_type:'Skating',/*router*/
                    bannerImgUrl:'',
                    focusLists:[],
                    video:[{
                        poster:'',
                        srcUrl:'',
                        summary:'',
                        title:''
                    }],
                    videoLists:[],
                    productLists:[],
                    otherVideos:[]
                }
            }
        },
        methods:{
            getDataLists:function(){
                let that=this
                that.skatForm.bannerImgUrl=''
                const obj1={}
                obj1.terminal_type=that.skatForm.terminal_type
                obj1.lanauage_type=that.skatForm.lanauage_type
                obj1.menu_type='Skating'
                that.$http({
                    url:'/api/gethomeinfo',
                    method:'post',
                    data:obj1,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(obj1)
                    }]
                }).then(function(res){
                    if(res.data.bannerImgUrl){
                        that.skatForm.bannerImgUrl=res.data.bannerImgUrl
                        let imgArr=res.data.bannerImgUrl.split(',')
                        that.imgFromBack=[]
                        for(var i=0;i<imgArr.length;i++){
                            that.imgFromBack.push(imgArr[i])
                        }
                    }
                    if(res.data.video){
                        that.skatForm.video=res.data.video
                    }
                    that.skatForm=res.data
                })
            },
            getValue:function(value){
                let that=this
                that.skatForm.bannerImgUrl=value
            },
            remove:function(value){
                let that=this
//                console.log(value)
                that.skatForm.bannerImgUrl=value
            },
            getIfVisible:function(value){
                const that=this
                that.toPlusVisible=value
            },
            getDatas:function(value){
                const that=this
                if(that.dialog===0){
                    that.skatForm.focusLists.push(value)
                }else if(that.dialog===1){
                    that.skatForm.video[0].title=value.title
                    that.skatForm.video[0].summary=value.info
                    that.skatForm.video[0].srcUrl=value.videoSrc
                    that.skatForm.video[0].poster=value.imageUrl
                }else if(that.dialog===2){
                    that.skatForm.videoLists.push({
                        poster: value.imageUrl,
                        src:value.videoSrc
                    })
                }else if(that.dialog===3){
                    that.skatForm.productLists.push(value)
                }else if(that.dialog===4){
                    that.skatForm.otherVideos.push(value)
                }
                that.hasTitle=true
//                console.log(that.skatForm)
            },
            getVideoValue:function(value){
                const that=this
                that.isVideo=value
            },
            getFromChild:function(value){
                let that=this
                that.showConfirm=value
            },
            delConfirm:function(value){
                let that=this
                that.delIt=value
                console.log(that.state)
                if(that.delIt===true){
                    switch(that.state){
                        case 1:
                            that.skatForm.focusLists.splice(that.focusListIndex,1)
                            break;
                        case 2:
                            that.skatForm.video[0].summary=''
                            that.skatForm.video[0].title=''
                            that.skatForm.video[0].srcUrl=''
                            that.skatForm.video[0].poster=''
                            break;
                        case 3:
                            that.skatForm.videoLists.splice(that.videoListIndex,1)
                            break;
                        case 4:
                            that.skatForm.productLists.splice(that.productIndex,1)
                            break;
                        case 5:
                            that.skatForm.otherVideos.splice(that.otherVideoIndex,1)
                            break;
                    }
                }
                that.showConfirm=false
            },
            onSubmit:function(){
                let that=this
                console.log(that.skatForm)
                that.$http({
                    url:'api/lineinfosave',
                    method:'post',
                    data:that.skatForm,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(that.skatForm)
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
            },
            toLeft:function(index,e){
                let that=this
                let name=e.target.getAttribute('name')
                if(name==='focusList'){
                    let temp=that.skatForm.focusLists[index]
                    that.$set(that.skatForm.focusLists, index , that.skatForm.focusLists[index-1]);
                    that.$set(that.skatForm.focusLists, index-1, temp)
                }else if(name==='videoList'){
                    let temp=that.skatForm.videoLists[index]
                    that.$set(that.skatForm.videoLists, index , that.skatForm.videoLists[index-1]);
                    that.$set(that.skatForm.videoLists, index-1, temp)
                }else if(name==='productList'){
                    let temp=that.skatForm.productLists[index]
                    that.$set(that.skatForm.productLists, index , that.skatForm.productLists[index-1]);
                    that.$set(that.skatForm.productLists, index-1, temp)
                }else if(name==='otherVideo'){
                    let temp=that.skatForm.otherVideos[index]
                    that.$set(that.skatForm.otherVideos, index , that.skatForm.otherVideos[index-1]);
                    that.$set(that.skatForm.otherVideos, index-1, temp)
                }
            },
            toRight:function(index,e){
                let that=this
                let name=e.target.getAttribute('name')
                if(name==='focusList'){
                    let temp=that.skatForm.focusLists[index]
                    that.$set(that.skatForm.focusLists, index , that.skatForm.focusLists[index+1]);
                    that.$set(that.skatForm.focusLists, index+1, temp)
                }else if(name==='videoList'){
                    let temp=that.skatForm.videoLists[index]
                    that.$set(that.skatForm.videoLists, index , that.skatForm.videoLists[index+1]);
                    that.$set(that.skatForm.videoLists, index+1, temp)
                }else if(name==='productList'){
                    let temp=that.skatForm.productLists[index]
                    that.$set(that.skatForm.productLists, index , that.skatForm.productLists[index+1]);
                    that.$set(that.skatForm.productLists, index+1, temp)
                }else if(name==='otherVideo'){
                    let temp=that.skatForm.otherVideos[index]
                    that.$set(that.skatForm.otherVideos, index , that.skatForm.otherVideos[index+1]);
                    that.$set(that.skatForm.otherVideos, index+1, temp)
                }
            },
            toDel:function(e,index){
                let that=this
                that.showConfirm=true
                switch(e.target.name){
                    case 'focusList':
                        that.focusListIndex=index
                        that.state=1
                        break;
                    case 'EXtreme':
                        that.state=2
                        break;
                    case 'videoList':
                        that.videoListIndex=index
                        that.state=3
                        break;
                    case 'productList':
                        that.productIndex=index
                        that.state=4
                        break;
                    case 'otherVideo':
                        that.otherVideoIndex=index
                        that.state=5
                        break;
                }
            },
            toPlus:function(e){
                const that=this
                that.toPlusVisible=true
                switch(e.target.name){
                    case 'focusList':
                        that.dialog=0
                            if(that.isMobile===false){
                                that.width=1380
                                that.height=670
                            }else{
                                that.width=312
                                that.height=151
                            }
                        break;
                    case 'EXtreme':
                        that.isVideo=true
                        that.dialog=1
                        that.width=483
                        that.height=289
                        break;
                    case 'videoList':
                        that.isVideo=true
                        that.dialog=2
                        that.width=154
                        that.height=222
                        break;
                    case 'productList':
                        that.dialog=3
                        // that.hasTitle=false
                        that.hasTitle=true
                        if(that.isMobile===false){
                            that.width=726
                            that.height=726
                        }else{
                            that.width=726
                            that.height=726
                        }
                        break;
                    case 'otherVideo':
                        that.dialog=4
                        that.isVideo=true
                        that.width=478
                        that.height=478
                        break;
                }
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
                    that.skatForm.terminal_type=1
                    that.skatForm.lanauage_type=2
                }else if(plat===1){
                    that.skatForm.terminal_type=2
                    that.skatForm.lanauage_type=2
                }else if(plat===2){
                    that.skatForm.terminal_type=1
                    that.skatForm.lanauage_type=1
                }else if(plat===3){
                    that.skatForm.terminal_type=2
                    that.skatForm.lanauage_type=1
                }
                that.getDataLists();
            })
        }

    }
</script>
<style scoped>
    .el-form--label-top{
        background:#fff;
        margin-top:20px;
        padding:30px;
    }
    .el-col-6{
        margin-bottom:30px;
    }
    .el-col-8{
        margin-bottom:20px;
    }
    .plus{
        width:200px;
        height:200px;
        border:1px solid #ddd;
    }
    .plus img{
        width:50px;
        height:50px ;
        margin:74px 64px;
    }
    .title,.info{
        line-height:20px;
        margin-top:0;
        margin-bottom:5px;
        padding:0 5px;
    }
    .img{
        width:100%;
        height:200px;
        object-fit: contain;
        border:1px solid #ddd;
    }
    .w_fpcus{
        /*margin-bottom:30px;*/
    }
    video{
        width:100%;
        height:auto;
        object-fit: cover;
    }
    .hasmask{
        position:relative;height:300px;margin-bottom:10px;
    }
    .mask{
        width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.3);margin:0;line-height:20px;overflow: hidden;
    }
</style>