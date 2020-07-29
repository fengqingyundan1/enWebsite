<template>
  <div class="index">
    <header>
      <m-header></m-header>
    </header>
    <div class="content-box-group">
        <img class="content-box-group-img" src="../assets/m_img/m_group.png" alt="">
    </div>
    <footer>
      <m-footer></m-footer>
    </footer>
  </div>
</template>

<script>
  import mHeader from '../components/MHeader'
  import mFooter from '../components/MFooter'
  import axios from 'axios'
  const ERR_OK = 0
  export default{
    name:"Index",
    components:{
       mHeader,mFooter
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
   padding-top:58px;
  .content-box-group-img{
    width:100%;
  }
}
</style>
