<template>
    <div class="footer">
        <div class="row" v-if="oathFlag">
          您还未登录,
          <a  class="fc1" @click="toLogin"> 立即登录</a>
        </div>
        <div class="weather">
          26℃ 34优 • 北京
        </div>
    </div>
</template>
<script>
  /*api接口地址*/
  import webapi from '../webApi'
  export default{
      data(){
          return{
            oathFlag:false
          }
      },
      methods:{
        toLogin(){
            this.$router.push('login')
        }
      },
      created:function () {
        this.oathFlag= localStorage.getItem('fitOath')?false:true
      }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .footer {
    background: #f8f8f8;
    padding: 5rem 0 1rem;
    text-align: center;
    font-size: 1.2rem;
    .row{
      margin-bottom: 0.3rem;
      .fc1{
        color: #00bfbf
      }
    }
    .weather{
      margin-top: 2rem;
      color: #999;
    }
  }
</style>
