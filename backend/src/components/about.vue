<template>
    <div >
        <el-form label-position="top" ref="aboutForm" :model="aboutForm" label-width="200px">
            <el-form-item>
                <el-tabs v-model="tabName" type="card" @tab-click="tabSelect">
                    <el-tab-pane label="社会责任" name="first">
                        <Banner @sendValue="getResValue" :pic-datas="imgFromBack" @removeValue="remove1"></Banner>
                        <!--toread模块，原型中显示，实际前台页面没有，故后台暂时隐藏，可能以后会有看产品-->
                        <!--<h3 style="text-align: left;" v-show="!isMobile">TOREAD</h3>-->
                        <!--<el-row :gutter="20" class="w_fpcus" v-show="!isMobile" style="margin:0">-->
                            <!--<el-col :span="8" v-for="(item,index) in aboutForm.publicLists">-->
                                <!--<div class="border">-->
                                    <!--<img :src="item.imageUrl" alt="" class="img"/>-->
                                    <!--<h4 class="title" style="margin:0">{{item.title}}</h4>-->
                                    <!--<p class="info">{{item.info}}</p>-->
                                <!--</div>-->
                                <!--<el-button type="primary" v-show="index!=0" name="publicList"  @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>-->
                                <!--<el-button type="primary" v-show="index<aboutForm.publicLists.length-1" name="publicList"  @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>-->
                                <!--<el-button type="danger" name="publicList" @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>-->
                            <!--</el-col>-->
                            <!--<el-col :span="8" class="plus">-->
                                <!--<img src="../assets/plus.jpg" name="publicList"  @click="toPlus($event)"  alt=""/>-->
                            <!--</el-col>-->
                        <!--</el-row>-->
                        <h3 style="text-align: left;">Public interest dynamics</h3>
                        <el-row  class="w_fpcus">
                            <el-col :span="24" v-for="(item,index) in aboutForm.interestLists" style="border-bottom:1px solid #ddd;margin-bottom:30px;">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <img :src="item.imageUrl" alt="" style="width:100%"/>
                                    </el-col>
                                    <el-col :span="12">
                                        <h4 class="title">{{item.title}}</h4>
                                        <p class="info">{{item.time}}</p>
                                        <p class="info">{{item.info}}</p>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-button type="primary" v-show="index!=0" name="interestList"  @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                        <el-button type="primary" v-show="index<aboutForm.interestLists.length-1" name="interestList"  @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                                        <el-button type="danger" name="interestList" @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="10" class="plus">
                                <img src="../assets/plus.jpg" name="interestList"  @click="toPlus($event)"  alt=""/>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="品牌故事" name="second">
                        <Banner @sendStoryValue="getStoryValue" :pic-datas="imgFromBack" @removeValue="remove2"></Banner>
                        <Banner @sendBrandValue="getBrandValue" :if-banner="isBanner"  :pic-datas="imgFromBack1" @removeValue="remove4"></Banner>
                    </el-tab-pane>
                    <el-tab-pane label="科技平台" name="third">
                        <Banner @sendTechValue="getTechValue" :pic-datas="imgFromBack" @removeValue="remove3"></Banner>
                        <h2 v-show="isMobile" style="text-align: left">PATHFINDER POLAR BIONICS TECHNOLOGY</h2>
                        <el-row  class="w_fpcus" v-show="isMobile">
                            <el-col :span="6" class="plus" v-if="!aboutForm.wonderfulImageUrl">
                                <img class="img" src="../assets/plus.jpg" name="pathFinger"  @click="toPlus($event)"  alt=""/>
                            </el-col>
                            <el-col :span="24" v-else>
                                <!--<img :src="aboutForm.PathImageUrl" alt="" style="width:100%;height:200px"/>-->
                                <img :src="aboutForm.wonderfulImageUrl" alt="" style="width:100%;height:200px"/>
                                <!--<p class="info">{{aboutForm.PathInfo}}</p>-->
                                <p class="info">{{aboutForm.wonderfulInfo}}</p>
                                <el-button type="danger" name="pathFinger" @click="toDel($event)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                        </el-row>
                        <h2 v-show="!isMobile" style="text-align: left">Wonderful Technology</h2>
                        <el-row  class="w_fpcus" v-show="!isMobile">
                            <el-col :span="6" class="plus" v-if="!aboutForm.wonderfulImageUrl">
                                <img class="img" src="../assets/plus.jpg" name="wonderful"  @click="toPlus($event)"  alt=""/>
                            </el-col>
                            <el-col :span="10" v-else>
                                <img :src="aboutForm.wonderfulImageUrl" alt="" style="width:100%;height:200px"/>
                                <p class="title">{{aboutForm.wonderfulTitle}}</p>
                                <p class="info">{{aboutForm.wonderfulInfo}}</p>
                                <el-button type="danger" name="wonderful" @click="toDel($event)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                        </el-row>
                        <h2  style="text-align: left">TIFF Technology</h2>
                        <!--PC-->
                        <el-row :gutter="20" class="w_fpcus" v-show="isMobile" style="margin:0">
                            <el-col :span="8" v-for="(item,index) in aboutForm.tiffMLists" style="border-bottom:1px solid #ddd">
                                <img :src="item.imageUrl" alt="" class="img"/>
                                <div style="overflow: hidden">
                                    <div style="float: left;width:100%;;line-height:20px;word-break:break-all;">
                                        <img :src="item.iconImageUrl" alt="" style="width:50px;height:50px" align="right"  hspace="5" vspace="5"/>
                                        <h4 style="margin:0" class="title">{{item.title}}</h4>
                                        <p class="info" style="height:100px;">{{item.info}}</p>
                                    </div>
                                </div>
                                <el-button type="primary" v-show="index != 0" name="tiff"   @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                <el-button type="primary" name="tiff"  v-show="index<aboutForm.tiffMLists.length-1" @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                                <el-button type="danger" name="tiff"  @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                            <el-col :span="8" class="plus">
                                <img src="../assets/plus.jpg" name="tiff"  @click="toPlus($event)"  alt=""/>
                            </el-col>
                        </el-row>
                        <!--MOBILE-->
                        <el-row :gutter="20" class="w_fpcus" v-show="!isMobile" style="margin:0">
                            <el-col :span="8" v-for="(item,index) in aboutForm.tiffMLists" >
                                <img :src="item.imageUrl" alt="" class="img"/>
                                <div style="line-height:20px;word-break:break-word;">
                                    <h4 class="title">{{item.title}}</h4>
                                    <p class="info" style="height:200px;overflow:hidden">{{item.info}}</p>
                                </div>
                                <el-button type="primary" v-show="index != 0" name="tiffm"   @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                <el-button type="primary" name="tiffm"  v-show="index<aboutForm.tiffMLists.length-1" @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                                <el-button type="danger" name="tiffm"  @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                            <el-col :span="8" class="plus">
                                <img src="../assets/plus.jpg" name="tiffm"  @click="toPlus($event)"  alt=""/>
                            </el-col>
                        </el-row>
                        <h2  style="text-align: left">SAFree Technology</h2>
                        <!--PC-->
                        <el-row :gutter="20" class="w_fpcus" v-show="isMobile" style="margin:0">
                            <el-col :span="12" v-for="(item,index) in aboutForm.SAFreeMLists" style="border-bottom:1px solid #ddd;">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <img :src="item.imageUrl" alt="" class="img"/>
                                    </el-col>
                                    <el-col :span="12" style="overflow: hidden">
                                        <img :src="item.iconImageUrl" alt="" style="width:50px;height:50px" align="right"  hspace="3" vspace="3"/>
                                        <h3 class="title">{{item.title}}</h3>
                                        <p class="info">{{item.info}}</p>
                                    </el-col>
                                </el-row>
                                <el-button type="primary" v-show="index != 0" name="safree"   @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                <el-button type="primary" name="safree" v-show="index<aboutForm.SAFreeMLists.length-1" @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                                <el-button type="danger" name="safree" @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                            <el-col :span="12" class="plus">
                                <img src="../assets/plus.jpg" name="safree"  @click="toPlus"  alt=""/>
                            </el-col>
                        </el-row>
                        <!--MOBILE-->
                        <el-row :gutter="20" class="w_fpcus" v-show="!isMobile" style="margin:0">
                            <el-col :span="8" v-for="(item,index) in aboutForm.SAFreeMLists" >
                                <img :src="item.imageUrl" alt="" class="img"/>
                                <div style="line-height:20px;word-break:break-word;height:200px;overflow:hidden;">
                                    <h4 class="title">{{item.title}}</h4>
                                    <p class="info">{{item.info}}</p>
                                </div>
                                <el-button type="primary" v-show="index != 0" name="safreeM"   @click="toLeft(index,$event)" ><i class="el-icon-arrow-left" ></i> </el-button>
                                <el-button type="primary" name="safreeM" v-show="index<aboutForm.SAFreeMLists.length-1" @click="toRight(index,$event)"><i class="el-icon-arrow-right" ></i> </el-button>
                                <el-button type="danger" name="safreeM" @click="toDel($event,index)"><i class="el-icon-delete"></i></el-button>
                            </el-col>
                            <el-col :span="8" class="plus">
                                <img src="../assets/plus.jpg" name="safreeM"  @click="toPlus"  alt=""/>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-form-item>
            <el-button type="success" style="margin-top:30px;" @click="onSubmit">保存</el-button>
        </el-form>
        <Dialog :is-visible="toPlusVisible"
                :valid-width="width"
                :valid-height="height"
                :is-video="isVideo"
                :if-title="hasTitle"
                :is-price="hasPrice"
                :is-info="hasInfo"
                :is-time="hasTime"
                :is-icon="hasIcon"
                @getFromChild="getIfVisible"
                @getData="getDatas"></Dialog>
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
                ifBanner:true,
                toPlusVisible:false,
                showConfirm:false,
                isBanner:true,
                isVideo:false,
                hasTitle:true,
                hasPrice:false,
                hasInfo:true,
                hasIcon:false,
                delIt:false,
                hasTime:true,
                dialog:'',
                width:'',
                height:'',
                imgFromBack:'',
                imgFromBack1:'',
                aboutForm:{
                    terminal_type:1,/* 1:pc,2:mobile */
                    lanauage_type:2,/* 2:english,1:chinese */
                    menu_type:'About',/*router*/
                    bannerImgUrl:'',
                    resImgUrl:'',
                    storyImgUrl:'',
                    techImgUrl:'',
                    publicLists:[],
                    interestLists:[],
                    brandImgUrl:'',
                    PathInfo:'',
                    PathImageUrl:'',
                    wonderfulInfo:'',
                    wonderfulTitle:'',
                    wonderfulImageUrl:'',
                    tiffLists:[],
                    tiffMLists:[],
                    SAFreeLists:[],
                    SAFreeMLists:[],
                    delIndex:'',
                    targetName:''
                },
                tabName:'first',
                currTab:'first'
            }
        },
        methods:{
            getDataLists:function(){
                let that=this
                that.aboutForm.bannerImgUrl=''
                that.aboutForm.resImgUrl=''
                that.aboutForm.storyImgUrl=''
                that.aboutForm.techImgUrl=''
                const obj3={}
                obj3.terminal_type=that.aboutForm.terminal_type
                obj3.lanauage_type=that.aboutForm.lanauage_type
                obj3.menu_type='About'
                that.$http({
                    url:'/api/gethomeinfo',
                    method:'post',
                    data:obj3,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(obj3)
                    }]
                }).then(function(res){
                   console.log(res.data)
                    that.aboutForm.resImgUrl=res.data.resImgUrl
                    that.aboutForm.storyImgUrl=res.data.storyImgUrl
                    that.aboutForm.techImgUrl=res.data.techImgUrl
                    if(res.data.brandImgUrl){
                        that.aboutForm.brandImgUrl=res.data.brandImgUrl
                    }
                    // that.aboutForm.brandImgUrl=res.data.brandImgUrl
                    that.imgFromBack=[]
                    that.aboutForm.bannerImgUrl=''
                    that.aboutForm.bannerImgUrl=that.aboutForm.resImgUrl
                    that.bannerSelect()
                    let imgArr1=that.aboutForm.brandImgUrl.split(',')
                    that.imgFromBack1=[]
                    for(var i=0;i<imgArr1.length;i++){
                        that.imgFromBack1.push(imgArr1[i])
                    }
                    that.aboutForm=res.data
                })
            },
            bannerSelect:function(){//局部更新banner
                let that=this
                let imgArr=that.aboutForm.bannerImgUrl.split(',')
                that.imgFromBack=[]
                for(var i=0;i<imgArr.length;i++){
                    that.imgFromBack.push(imgArr[i])
                }
            },
            tabSelect:function(tab,event){
                let that=this
                that.currTab=tab.name
                that.imgFromBack=[]
                that.aboutForm.bannerImgUrl=''
                switch(that.currTab){
                    case 'first':
                        that.aboutForm.bannerImgUrl=that.aboutForm.resImgUrl
                        break;
                    case 'second':
                        that.aboutForm.bannerImgUrl=that.aboutForm.storyImgUrl
                        break;
                    case 'third':
                        that.aboutForm.bannerImgUrl=that.aboutForm.techImgUrl
                        break;
                }
                that.bannerSelect()
            },
            getResValue:function(value){
                let that=this
                that.aboutForm.resImgUrl=value
            },
            getStoryValue:function(value){
                let that=this
                that.aboutForm.storyImgUrl=value
            },
            getTechValue:function(value){
                let that=this
                that.aboutForm.techImgUrl=value
            },
            getBrandValue:function(value){
                let that=this
                that.aboutForm.brandImgUrl=value
            },
            remove1:function(value){
                let that=this
                that.aboutForm.resImgUrl=value
            },
            remove2:function(value){
                let that=this
                that.aboutForm.storyImgUrl=value
            },
            remove3:function(value){
                let that=this
                that.aboutForm.techImgUrl=value
            },
            remove4:function(value){
                let that=this
                that.aboutForm.brandImgUrl=value
            },
            toPlus:function(e){
                let that=this
                that.toPlusVisible=true
                switch(e.target.name){
                    case "publicList":
                        that.width=1920
                        that.height=972
                        that.hasTime=false
                        that.hasTitle=true
                        that.dialog=1
                        break;
                    case "interestList":
                        if(that.isMobile===false){
                            that.width=345
                            that.height=168
                        }else{
                            that.width=342
                            that.height=198
                        }
                        that.hasTime=true
                        that.hasTitle=true
                        that.dialog=2
                        break;
                    case "pathFinger":
                        that.width=912
                        that.height=320
                        that.hasTime=false
                        that.hasTitle=false
                        that.dialog=3
                        break;
                    case "wonderful":
                        that.width=345
                        that.height=137
                        that.hasTime=false
                        that.hasTitle=true
                        that.dialog=4
                        break;
                    case "tiff":
                        that.width=577
                        that.height=401
                        that.hasTime=false
                        that.hasTitle=true
                        that.hasIcon=true
                        that.dialog=5
                        break;
                    case "safree":
                        that.width=557
                        that.height=459
                        that.hasTime=false
                        that.hasTitle=true
                        that.hasIcon=true
                        that.dialog=6
                        break;
                    case "tiffm":
                        that.width=345
                        that.height=199
                        that.hasTime=false
                        that.hasTitle=true
                        that.hasIcon=false
                        that.dialog=7
                        break;
                    case "safreeM":
                        that.width=345
                        that.height=199
                        that.hasTime=false
                        that.hasTitle=true
                        that.hasIcon=false
                        that.dialog=8
                        break;
                }
            },
            toLeft:function(index,e){
                let that=this
                let name=e.target.name
                let temp=''
                switch (name){
                    case 'tiff':
                         temp=that.aboutForm.tiffMLists[index]
                        that.$set(that.aboutForm.tiffMLists, index , that.aboutForm.tiffMLists[index-1]);
                        that.$set(that.aboutForm.tiffMLists, index-1, temp)
                        break;
                    case 'tiffm':
                         temp=that.aboutForm.tiffMLists[index]
                        that.$set(that.aboutForm.tiffMLists, index , that.aboutForm.tiffMLists[index-1]);
                        that.$set(that.aboutForm.tiffMLists, index-1, temp)
                        break;
                    case 'safree':
                         temp=that.aboutForm.SAFreeMLists[index]
                        that.$set(that.aboutForm.SAFreeMLists, index , that.aboutForm.SAFreeMLists[index-1]);
                        that.$set(that.aboutForm.SAFreeMLists, index-1, temp)
                        break;
                    case 'safreeM':
                         temp=that.aboutForm.SAFreeMLists[index]
                        that.$set(that.aboutForm.SAFreeMLists, index , that.aboutForm.SAFreeMLists[index-1]);
                        that.$set(that.aboutForm.SAFreeMLists, index-1, temp)
                        break;
                    case 'interestList':
                         temp=that.aboutForm.interestLists[index]
                        that.$set(that.aboutForm.interestLists, index , that.aboutForm.interestLists[index-1]);
                        that.$set(that.aboutForm.interestLists, index-1, temp)
                        break;
                    case 'publicList':
                         temp=that.aboutForm.publicLists[index]
                        that.$set(that.aboutForm.publicLists, index , that.aboutForm.publicLists[index-1]);
                        that.$set(that.aboutForm.publicLists, index-1, temp)
                        break;
                }
            },
            toRight:function(index,e){
                let that=this
                let name=e.target.name
                let temp=''
                switch (name){
                    case 'tiff':
                        temp=that.aboutForm.tiffMLists[index]
                        that.$set(that.aboutForm.tiffMLists, index , that.aboutForm.tiffMLists[index+1]);
                        that.$set(that.aboutForm.tiffMLists, index+1, temp)
                        break;
                    case 'tiffm':
                        temp=that.aboutForm.tiffMLists[index]
                        that.$set(that.aboutForm.tiffMLists, index , that.aboutForm.tiffMLists[index+1]);
                        that.$set(that.aboutForm.tiffMLists, index+1, temp)
                        break;
                    case 'safree':
                        temp=that.aboutForm.SAFreeMLists[index]
                        that.$set(that.aboutForm.SAFreeMLists, index , that.aboutForm.SAFreeMLists[index+1]);
                        that.$set(that.aboutForm.SAFreeMLists, index+1, temp)
                        break;
                    case 'safreeM':
                        temp=that.aboutForm.SAFreeMLists[index]
                        that.$set(that.aboutForm.SAFreeMLists, index , that.aboutForm.SAFreeMLists[index+1]);
                        that.$set(that.aboutForm.SAFreeMLists, index+1, temp)
                        break;
                    case 'interestList':
                        temp=that.aboutForm.interestLists[index]
                        that.$set(that.aboutForm.interestLists, index , that.aboutForm.interestLists[index+1]);
                        that.$set(that.aboutForm.interestLists, index+1, temp)
                        break;
                    case 'publicList':
                        temp=that.aboutForm.publicLists[index]
                        that.$set(that.aboutForm.publicLists, index , that.aboutForm.publicLists[index+1]);
                        that.$set(that.aboutForm.publicLists, index+1, temp)
                        break;

                }
            },
            toDel:function(e,index){
                let that=this
                that.showConfirm=true
                that.delIndex=index
                that.targetName=e.target.name
            },
            delConfirm:function(value){
                let that=this
                that.delIt=value
                that.showConfirm=false
                switch(that.targetName){
                    case "publicList":
                        that.aboutForm.publicLists.splice(that.delIndex,1)
                        break;
                    case "interestList":
                        that.aboutForm.interestLists.splice(that.delIndex,1)
                        break;
                    case "pathFinger":
                        that.aboutForm.wonderfulInfo=''
                        that.aboutForm.wonderfulTitle=''
                        break;
                    case "wonderful":
                        that.aboutForm.wonderfulInfo=''
                        that.aboutForm.wonderfulTitle=''
                        that.aboutForm.wonderfulImageUrl=''
                        break;
                    case "tiff":
                        that.aboutForm.tiffMLists.splice(that.delIndex,1)
                        break;
                    case "safree":
                        that.aboutForm.SAFreeMLists.splice(that.delIndex,1)
                        break;
                    case "tiffm":
                        that.aboutForm.tiffMLists.splice(that.delIndex,1)
                        break;
                    case "safreeM":
                        that.aboutForm.SAFreeMLists.splice(that.delIndex,1)
                        break;
                }
            },
            getIfVisible:function(value){
                const that=this
                that.toPlusVisible=value
            },
            getDatas:function(value){
                let that=this
                switch(that.dialog){
                    case 1:
                        that.aboutForm.publicLists.push(value)
                        break;
                    case 2:
                        that.aboutForm.interestLists.push(value)
                        break;
                    case 3:
                        that.aboutForm.wonderfulImageUrl=value.imageUrl
                        that.aboutForm.wonderfulInfo=value.info
                        break;
                    case 4:
                        that.aboutForm.wonderfulImageUrl=value.imageUrl
                        that.aboutForm.wonderfulInfo=value.info
                        that.aboutForm.wonderfulTitle=value.title
                        break;
                    case 5:
                        that.aboutForm.tiffMLists.push(value)
                        break;
                    case 6:
                        that.aboutForm.SAFreeMLists.push(value)
                        break;
                    case 7:
                        that.aboutForm.tiffMLists.push(value)
                        break;
                    case 8:
                        that.aboutForm.SAFreeMLists.push(value)
                        break;
                }

            },

            getFromChild:function(value){
                let that=this
                that.showConfirm=value
            },
            onSubmit:function(){
                let that=this
                console.log(that.aboutForm)
                that.$http({
                    url:'api/aboutussave',
                    method:'post',
                    data:that.aboutForm,
                    transformRequest:[function (data, headers) {
                        headers['Content-Type']='application/json'
                        return JSON.stringify(that.aboutForm)
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
                    that.aboutForm.terminal_type=1
                    that.aboutForm.lanauage_type=2
                }else if(plat===1){
                    that.aboutForm.terminal_type=2
                    that.aboutForm.lanauage_type=2
                }else if(plat===2){
                    that.aboutForm.terminal_type=1
                    that.aboutForm.lanauage_type=1
                }else if(plat===3){
                    that.aboutForm.terminal_type=2
                    that.aboutForm.lanauage_type=1
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
        margin-top:0;
        margin-bottom:5px;
        text-align: left;
        padding:0 5px;
    }
    .border{
        border:1px solid #ddd;
        margin-bottom:10px;
        box-shadow: 2px 2px 2px #ccc;
        height:400px;
        overflow: hidden;
    }
    .img{
        width:100%;
        height:200px;
        object-fit: contain;
        border:1px solid #ddd;
    }
    .el-col{
        margin-bottom:15px;
    }
    .el-col-12{
        margin-bottom:20px;
    }
    .el-button{
       margin-bottom:10px;
    }
</style>