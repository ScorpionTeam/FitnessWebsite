<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    background: #fff;
    padding-bottom: 2rem;
    h3{
      margin: 2rem;
      text-align: center;
    }
    /*参加人员列表*/
    .join-list{
      padding-left: 2rem;
      overflow: hidden;
      background-color: #fff;
      li{
        list-style: none;
        float: left;
        width: 5rem;
        height: 5rem;
        margin: 2rem 2rem 0 0;
        img{
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
    /*报名按钮*/
    .btn{
      display: block;
      width: 15rem;
      height: 4rem;
      margin: 2rem auto 0;
      line-height: 4rem;
      text-align: center;
      color: #fff;
      font-size: 1.6rem;
      background-color: #00bfbf;
      border-radius: .5rem;
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <h3>{{ActContent.name}}</h3>
      <div class="detailContent"></div>
      <div class="join-list">
        <li v-for="(member,index) in memberList" :key="index">
          <img :src="headerUrl+member.imgUrl" alt="">
        </li>
      </div>
      <Button @click="joinConfirm" type="primary" class="btn"> 参加</Button>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  import {headerUrl} from '../../common/WebApi'
  export default{
    data(){
      return{
        name:'',
        ActContent:{},
        headerUrl:'',
        memberList:[]
      }
    },
    methods:{
      /*获取内容*/
      getContent(){
        let self = this;
        self.$http.get('/activity/activityInfo?id='+this.$route.params.id).then(function (res) {
          if(res.result==1){
            self.ActContent =res.data
            self.memberList = res.data.memberList
            document.querySelector('.detailContent').innerHTML = res.data.contentHtml
          }
        })
      },
      joinConfirm(){
        let self =this
        this.$Modal.confirm({
          title:'参加确认',
          content:"确认参加活动么",
          onOk:function () {
            self.join()
          }
        })
      },
      join(){
        let self =this;
        self.$http.post('/activity/apply?memberId='+localStorage.getItem('fitId')+'&activityId='+self.$route.params.id).then(function (res) {
          console.log(res)
          if(res.result==1){
            self.$Message.success('成功参加')
          }else {
            self.$Message.error(res.error.message)
          }
        })
      }
    },
    created:function () {
      this.headerUrl = headerUrl
      this.getContent()
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>

