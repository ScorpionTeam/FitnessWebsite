<template>
  <div>
    <Vheader></Vheader>
    <div class="content"></div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default{
    data(){
      return{
        name:''
      }
    },
    created:function () {
      console.log(this.$route.params)
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
</style>
