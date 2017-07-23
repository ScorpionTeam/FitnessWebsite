<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    .pic{
      width: 100%;
      height: 10rem;
      background: #000;
      color:#fff;
    }
  }
</style>
<template>
    <div>
      <Vheader></Vheader>
      <div class="content">
        <div class="pic">图片</div>
        <Button long type="primary">申请体验</Button>
      </div>
      <Vfooter></Vfooter>
    </div>
</template>
<script>
  import Vheader from '../../components/Header.vue'
  import Vfooter from '../../components/Footer.vue'
  import MessageBox from '../../common/component'
  import LoginState from '../../common/loginState'
  export default{
    data(){
      return {
        member: {}
      }
    },
    components:{
      'Vheader':Vheader,
      'Vfooter':Vfooter
    }  }
</script>
