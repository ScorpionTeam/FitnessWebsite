<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    background: #fff;
    .list{
      padding: 1rem 0;
      .item{
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
        width: 100%;
        .intro{
          float: left;
          font-family: "微软雅黑";
          font-size: 1.8rem;
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 50%;
        }
        .time{
          float: right;
          text-align: right;
          font-size: 1.4rem;
          color:#c1c1c1;
          font-weight: normal;
          width: 50%;
        }

      }
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <div class="list">
        <div class="item">
          <div class="intro">重要消息是的撒旦请问请问为去沙</div>
          <span class="time">2017-06-01 10:10</span>
        </div>
        <div class="item">
          <div class="intro">请问额请问请问企鹅</div>
          <span class="time">2017-06-01 10:10</span>
        </div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  export default{
    data(){
      return{

      }
    },
    methods:{

    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    },
    created:function () {

    }
  }
</script>
