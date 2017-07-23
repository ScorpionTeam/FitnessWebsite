<style scoped rel='stylesheet/scss' lang='scss'>
  .content{

  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
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
