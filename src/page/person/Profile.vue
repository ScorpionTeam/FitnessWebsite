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
          background-image: url(../../assets/i-edit.png);
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
        /* background: url(../assets/avatar.png) no-repeat 0 0;*/
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
<template>
  <div>
    <Vheader></Vheader>
    <div class="profile">
      <div class="info">
        <div class="fl">
          <div class="avatar">
            <img src="../../assets/1.jpg" alt="">
          </div>
        </div>
        <div class="rt">
          <div class="row">姓名 : {{member.name}}</div>
          <div class="row">性别 : {{member.sex}}</div>
          <div class="row">年龄 : {{member.age}}岁</div>
          <div class="row">电话 : {{member.phone}}</div>
          <div class="row">邮箱 : {{member.email}}</div>
          <div class="row">注册日期 : {{member.createDate}}</div>
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
          <Icon type="ios-body" style="font-size: 10rem"></Icon>
        </div>
        <div class="rt">
          <p class="p1"><span style="color:#888">体重: </span>56KG</p>
          <p class="p1"><span style="color:#888">体脂: </span>111BMG</p>
          <p class="p1"><span style="color:#888">肌肉: </span>111BMG</p>
          <p class="p1"><span style="color:#888">综合:</span><span class="p1"><span style="color:green">仰卧起坐: </span>10</span></p>
          <p class="p1" style="margin-left: 4.6rem"><span style="color:green">俯卧撑: </span>20</p>
          <p class="p2"><a class="link" @click="skipToPage('experience')">申请体验</a></p>
          <p class="p2"><a  class="link" @click="skipToPage('progress')">进阶之路</a></p>
          <p></p>
        </div>
      </div>
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
      return{
        member:{
        }
      }
    },
    methods:{
      skipToPage(name){
        this.$router.push(name)
      },
      init(){
        let self = this;
        self.$http.get('/member/memberInfo?id=' + localStorage.getItem('fitId')).then(function (res) {
          if (res.result == 1) {
            self.member = res.data
            self.member.sex = self.member.sex == '1' ? '男' : '女'
          } else {
            MessageBox.warnAlert(self, res.error.message)
          }
        })
      }
    },
    created:function () {
      this.init()
      LoginState.loginCheck()
  },
  components:{
    'Vheader':Vheader,
      'Vfooter':Vfooter
  }
  }
</script>
