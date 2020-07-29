<template>
    <div>
        <el-button type="primary"><i class="el-icon-arrow-left" @click="toLeft(this.sendIndex)"></i> </el-button>
        <el-button type="primary"><i class="el-icon-arrow-right" @click="toRight()"></i> </el-button>
        <el-button type="danger"><i class="el-icon-delete" @clikc="toDel()"></i></el-button>
    </div>
</template>
<script>
    export default{
        props:['sendIndex'],
        data:function(){
            return{

            }
        },
        methods:{
           toLeft:function(){

           },
           toRight:function(){

           },
           toDel:function(){

           },
        }
    }
</script>
<style>
</style>