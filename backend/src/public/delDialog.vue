<template>
    <div>
        <el-dialog title="" :visible.sync="this.isVisible"    width="50" :before-close="handleClose">
            <span>确定要删除吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="delItem()">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        props:['isVisible'],
        data:function(){
            return{

            }
        },
        methods:{
            handleClose:function(done){
                let that=this
                that.$emit('getVisible',false)
            },
            delItem:function(){
                let that=this
                that.$emit('ifDel',true)
            }
        }
    }
</script>
<style>
</style>