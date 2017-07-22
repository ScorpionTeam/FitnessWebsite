<template>
  <div class="login">
    <Vheader></Vheader>
    <div class="loginForm">
      <Form ref='login' :model="loginItem" :label-width="0" :rules="rules">
        <Form-item prop="phone">
          <Input v-model="loginItem.phone" placeholder="请输入账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item  prop="password">
          <Input v-model="loginItem.password" type="password" placeholder="请输入密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
      </Form>
      <Row>
        <Col span="24">
        <Button type="primary" class="btn" @click="login">登录</Button>
        </Col>
      </Row>
      <span>忘记密码</span><span class="fr" @click="skipToPage('register')">注册账号</span>
    </div>
  </div>
</template>
<script>
  import VHeader from '../components/Header.vue'
  import Auth from '../common/Auth'
  import  Message from '../common/component'
  export default{
    data(){
      return{
        loginItem:{
        },
        rules:{
            phone:[{required:true,message:'填写用户名',trigger: 'blur'}],
            password: [
              { required: true, message: '请填写密码', trigger: 'blur' },
              {  min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
        }
      }
    },
    methods:{
        login(){
            let self=this;
            self.$refs['login'].validate(res=>{
                if(res){
                  self.$http.post('/member/login?phone='+self.loginItem.phone+'&password='+self.loginItem.password).then(function (res) {
                      if(res.result==1){
                        /*本地缓存信息*/
                        Auth.setToken(res.data.oath);
                        Auth.setAccount(res.data.member.phone)
                        Auth.setMemberId(res.data.member.id)
                        Auth.setMemberCardId(res.data.member.memberCardId)
                        localStorage.setItem('stadiumId',res.data.member.stadiumId)
                        self.$router.push('index')
                    }else {
                        Message.warnAlert(self,res.error.message)
                      }
                  })
                }else {
                  Message.warnAlert(self,'请将账号密码填写完整')
                }
            })
        },
        skipToPage(name){
            this.$router.push(name)
        }
    },
    components:{
      'Vheader':VHeader
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .login{
    height: 100%;
    background: #fff;
    .loginForm{
      padding: 3rem 2rem;
    }
    .btn{
      width: 100%;
    }
  }
</style>
