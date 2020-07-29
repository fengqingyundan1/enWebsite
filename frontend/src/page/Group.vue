<template>
  <div class="index">
    <header>
      <my-header></my-header>
    </header>
    <div class="content-box-group">
        <img class="content-box-group-img" src="../assets/img/pc_group.png" alt="">
    </div>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>
  import myHeader from '../components/Header'
  import myFooter from '../components/Footer'
  import axios from 'axios'
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
      myHeader,myFooter
    },
    data(){
        return{
            homeList:[]
        }
    },
    methods:{

    },
    created() {

    },
  }
</script>
<style lang="less" scoped>
.content-box-group{
  padding-top:100px;
  .content-box-group-img{
    width:100%;
  }
}
</style>
