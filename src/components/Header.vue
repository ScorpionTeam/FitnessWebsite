<template>
    <div class="header">
      <div class="lf" @click="back">
        <a class="i-left">
            <i></i>
        </a>
      </div>
      <div class="rg" v-if="myAnswer">
        <a class="btn">我的问答</a>
      </div>
      <div class="mid">
         {{title}}
      </div>
    </div>
</template>
<script>
  export default{
      data(){
          return{
              title:'',
              myAnswer:false
          }
      },
      methods:{
          back(){
            /*this.$router.push('/index')*/
            this.$router.go(-1);
          }
      },
      created:function () {
        this.title=this.$route.name;
        /*判断是否展示我的问答按钮*/
        this.$route.name=='问答'?this.myAnswer=true:this.myAnswer=false;
      }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .header{
    height: 4.8rem;
    line-height: 4.8rem;
    background: #fff;
    border-bottom: 1px solid #d1d1d1;
    .lf .rg{
      height: 100%
    }
    .lf{
      float: left;
      &:active{
        background: #f1f1f1;
      }
      .i-left{
        padding: 1.5rem;
        display: inline;
        i{
          width: 1.1rem;
          height: 36px;
          vertical-align: middle;
          display: inline-block;
          background:url("../assets/i-arrow-left.png");
        }
      }
    }
    .mid{
      text-align: center;
      margin: 0 6rem;
      font-size: 1.8rem;
    }
    .rg{
      float: right;
      padding-right: 1rem;
      .btn{
        color: #00bfbf;
        font-size: 1.2rem;
      }
    }
  }
</style>
