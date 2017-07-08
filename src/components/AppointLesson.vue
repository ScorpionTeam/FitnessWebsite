<template>
    <div>
      <mt-button size="small" class="btn-more" @click="showTemplate">{{word}}
        <Icon :type="btnType" slot="icon"></Icon></mt-button>
    </div>
</template>
<script>
  export default{
    data(){
      return{
          word:'选择',
          btnType:'ios-arrow-down'
      }
    },
    methods:{
        showTemplate(){
            this.word= this.word=='收集'?'选择':'收集';
            this.btnType= this.btnType=='ios-arrow-up'?'ios-arrow-down':'ios-arrow-up';
        }
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .btn-more{
    position: absolute;
    right: 0;
    bottom: 0;
    color:#00bfbf;
    border:1px solid #00bfbf;
  }
</style>
