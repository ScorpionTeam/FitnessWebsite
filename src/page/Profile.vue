<template>
  <div>
    <Vheader></Vheader>
    <div class="profile">
      <div class="info">
        <div class="fl">
          <div class="avatar">
            <img src="../assets/1.jpg" alt="">
          </div>
        </div>
        <div class="rt">
          <div class="row">姓名 : WBB</div>
          <div class="row">性别 : 男</div>
          <div class="row">年龄 : 18岁</div>
          <div class="row">电话 : WBB</div>
          <div class="row">邮箱 : WBB</div>
          <div class="row">注册日期 : WBB</div>
          <div class="row">课程情况 : WBBAA</div>
          <a class="edit" @click="skipToPage('profile-edit')">
            <i class="i-edit"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="tc-data">
      <div class="hd">体测数据(最近一次)</div>
      <div class="bd">
        <div class="fl">
        </div>
        <div class="rt">
          <p class="p1">56KG</p>
          <p class="p1">111BMG</p>
          <p class="p2"><a class="link">申请体验</a></p>
          <p class="p2"><a  class="link">进阶之路</a></p>
          <p></p>
        </div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vheader from '../components/Header.vue'
  import Vfooter from '../components/Footer.vue'
  export default{
    data(){
      return{

      }
    },
    methods:{
      skipToPage(name){
          this.$router.push(name)
      }
    },
    components:{
      'Vheader':Vheader,
      'Vfooter':Vfooter
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .profile {
    .info {
      padding: 2rem;
      overflow: hidden;
      background-color: #fff;
      .avatar {
        width: 7.6rem;
        height: 7.6rem;
        overflow: hidden;
        border: 4px solid #eee;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }
      .rt {
        position: relative;
        padding-left: 1rem;
        overflow: hidden;
        .row {
          color: #888;
          margin-top: 0.8rem;
          &:first-child {
            margin-top: 0;
          }
        }
        .edit {
          position: absolute;
          top: 0;
          right: 0;
        }
        .i-edit {
          width: 2.4rem;
          height: 2.4rem;
          display: inline-block;
          background-size: 100% 100%;
          background-image: url(../assets/i-edit.png);
        }
      }
    }
  }
  .tc-data{
    margin-top: 1rem;
    padding: 2rem;
    overflow: hidden;
    background-color: #fff;
    .bd{
      margin-top: 2rem;
      .fl {
        width: 10rem;
        height: 10rem;
        background: url(../assets/avatar.png) no-repeat 0 0;
        background-size: 100% 100%;
      }
      .rt{
        padding-left: 2rem;
        overflow: hidden;
        .p1{
          margin-top: .1rem;
          color: #f60;
        }
        .p2{
          margin-top: 1rem;
          text-align: right;
          .link{
            color: #00bfbf;;
          }
        }
      }
    }
  }
</style>
