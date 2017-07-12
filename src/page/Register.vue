<template>
  <div>
    <Vheader></Vheader>
    <div class="register">
      <Form ref='registerItem' :model="registerItem" :rules="rule" >
        <Form-item prop="phone">
          <Input v-model="registerItem.phone" placeholder="请填写手机号">
          <Icon type="iphone" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input v-model="registerItem.password" type='password' placeholder="请填写密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="passwordTwo">
          <Input v-model="registerItem.passwordTwo" type='password' placeholder="请确认密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
      </Form>
      <Button class="register_btn"  @click="register" long>注册</Button>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import {Toast}from'mint-ui'
  export default{
    data(){
      return{
        registerItem:{
        },
        rule:{
          phone:[{required:true,message:"手机号必填"}, {len: 11, message: '请填写11位手机号', trigger: 'blur'}],
          password:[{required:true,message:"密码必填"}],
          passwordTwo:[{required:true,message:"确认密码必填"}]
        }
      }
    },
    methods:{
      register(){
            let self =this;
            self.$refs['registerItem'].validate(function (val) {
                if(val){
                  self.$http.post('/member/register',JSON.stringify(self.registerItem)).then(function (res) {
                      console.log(res)
                    if(res.result==1){
                          Toast('注册成功');
                          self.refs['registerItem'].resetField();
                    }else {
                        console.log(res)
                    }
                  })
                }
            })
        }
    },
    components:{
      'Vheader':Header
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .register{
    padding: 5rem 2rem;
    .register_btn{
      height: 4rem;
      color:#fff;
      background: #0db14b!important;
    }
  }
</style>
