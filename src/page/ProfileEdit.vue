<template>
  <div>
    <Vheader></Vheader>
    <div class="profile-edit">
      <div class="edit-avatar">
        <div class="avatar">
          <img src="../assets/1.jpg" alt="">
        </div>
      </div>
      <div class="info-form">
        <Form ref="info" :model="personForm" :label-width="60">
          <Form-item label="姓名">
            <Input v-model="personForm.name"></Input>
          </Form-item>
          <Form-item label="性别">
            <Input v-model="personForm.name"></Input>
          </Form-item>
          <Form-item label="年龄">
            <Input v-model="personForm.name"></Input>
          </Form-item>
          <Form-item label="电话">
            <Input v-model="personForm.name"></Input>
          </Form-item>
          <Form-item label="邮箱">
            <Input v-model="personForm.name"></Input>
          </Form-item>
        </Form>
      </div>
      <div class="submit">
        <Button class="btn">保存</Button>
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
        personForm:{}
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
