<template>
    <div>
        <el-form label-position="top" ref="techForm" :model="techForm" label-width="200px">
            <el-form-item>
                <h2>Banner</h2>
            </el-form-item>
            <Banner @sendPchomeValue="getValue"></Banner>

        </el-form>
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
                isMobile:true,
                ifTitle:false,
                techForm:{
                    bannerImgUrl:'',
                    imageUrl:'',

                },
            }
        },
        methods:{
            getValue:function(){

            },
            onSubmit:function(){

            }
        },
        created:function(){
            const that=this
            let plat=sessionStorage.getItem('platNum')
            if(plat%2===0){
                that.isMobile=true
            }else{
                that.isMobile=false
            }
            Bus.$on('platNum',function(e){
                plat=e
                if(plat%2===0){
                    that.isMobile=true
                }else{
                    that.isMobile=false
                }
                console.log(plat)
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
    h2{
        text-align: left;
    }
</style>