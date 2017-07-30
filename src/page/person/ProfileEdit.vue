<template>
  <div>
    <Vheader></Vheader>
    <div class="profile-edit">
      <Upload :action="upBaseUrl+'/img/upload'" ref="header" :max-size="5120" :on-success="selectSuccess"
               :show-upload-list="false">
        <div class="edit-avatar">
          <div class="avatar">
            <img src="" alt="" ref="headerPic">
          </div>
        </div>
      </Upload>
      <div class="info-form">
        <Form ref="info" :model="personForm" :label-width="60" :rules="rules">
          <Form-item label="姓名" prop="name">
            <Input v-model="personForm.name"></Input>
          </Form-item>
          <Form-item label="性别" prop="sex">
            <Radio-group  v-model="personForm.sex" style="float:right">
              <Radio label="1">
                男
              </Radio>
              <Radio label="0">
                女
              </Radio>
            </Radio-group>
          </Form-item>
          <Form-item label="年龄" prop="age">
            <Input v-model="personForm.age" number></Input>
          </Form-item>
          <Form-item label="电话" prop="phone">
            <Input v-model="personForm.phone"></Input>
          </Form-item>
          <Form-item label="邮箱" prop="email">
            <Input v-model="personForm.email"></Input>
          </Form-item>
        </Form>
      </div>
      <div class="submit">
        <Button class="btn" @click="modify">保存</Button>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vheader from '../../components/Header.vue'
  import Vfooter from '../../components/Footer.vue'
  import MessageBox from '../../common/component'
  import {headerUrl} from '../../common/WebApi'
  export default{
    data(){
      return{
        upBaseUrl:'',
        personForm:{},
        rules:{
          name:[{required:true,message:' ',trigger: 'blur'}],
          sex:[{required:true,message:' ',trigger: 'blur'}],
          phone:[{required:true,message:' ',trigger: 'blur'}],
          email:[{required:true,message:' ',trigger: 'blur'}],
          age:[{type:'number',required:true,message:' ',trigger: 'blur'}],
        }
      }
    },
    methods:{
      skipToPage(name){
        this.$router.push(name)
      },
      init(){
        let self = this;
        self.upBaseUrl = this.$http.defaults.baseURL;
        self.$http.get('/member/memberInfo?id=' + localStorage.getItem('fitId')).then(function (res) {
          if (res.result == 1) {
              console.log(res)
            self.personForm = res.data
            self.$refs['headerPic'].src = headerUrl + res.data.imgUrl
          } else {
            MessageBox.warnAlert(self, res.error.message)
          }
        })
      },
      modify(){
        let self = this;
        console.log(this.personForm)
        self.$refs['info'].validate(function (valid) {
          if(valid){
            self.personForm.id = localStorage.getItem('fitId')
            self.$http.post('/member/update',JSON.stringify(self.personForm)).then(function (res) {
              if(res.result==1){
                self.$toast('修改成功')
              }else {
                MessageBox.warnAlert(self,res.error,message)
              }
            })
          }else {
            MessageBox.warnAlert(self,'请将表单填写完整');
          }
        })
      },
      selectSuccess(res,file,fileList){
        console.log(res)
        let baseUrl = headerUrl
        this.personForm.imgUrl = res.data.url;
        this.$refs['headerPic'].src=baseUrl+res.data.url;
      }
    },
    created:function () {
      this.init()
    },
    components:{
      'Vheader':Vheader,
      'Vfooter':Vfooter
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .profile-edit {
    .edit-avatar {
      padding:2rem;
      .avatar {
        width:8rem;
        height: 8rem;
        overflow: hidden;
        margin: 0 auto;
        border: 4px solid #eee;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }
    }
    .info-form{
      background: #fff;
      font-size: 1.6rem;
    }
    .submit{
      margin-top: 2rem;
      padding: 0 1.5rem;
      .btn{
        width: 100%;
        color:#fff;
        background: #00bfbf;
        height: 4rem;
        font-size: 1.6rem;
      }
    }

  }

</style>
