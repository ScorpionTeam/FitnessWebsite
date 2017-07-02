<template>
    <div class="footer">
        <div class="row">
          您还未登录,
          <a href="" class="fc1">立即登录</a>
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

          }
      },
      created:function () {
      }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .footer {
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
