<style scoped rel='stylesheet/scss' lang='scss'>
 .content{
   h3{
     margin: 2rem;
     text-align: center;
   }
 }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <h3>{{ActContent.name}}</h3>
      <div class="detailContent"></div>
      <Button @click="joinConfirm" type="primary" long> 参加</Button>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default{
    data(){
      return{
        name:'',
        ActContent:{}
      }
    },
    methods:{
      /*获取内容*/
      getContent(){
        let self = this;
        self.$http.get('/activity/activityInfo?id='+this.$route.params.id).then(function (res) {
          self.ActContent =res.data
          document.querySelector('.detailContent').innerHTML = res.data.contentHtml
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
      this.getContent()
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>

