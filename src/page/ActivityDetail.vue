<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    min-height: 100vh;
    background: #fff;
    h3{
      text-align: center;
      padding: 2rem;
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
        <h3>{{content.name}}</h3>
        <div class="detailContent">
        </div>
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
        content:{}
      }
    },
    methods:{
      /*获取内容*/
      getContent(){
        let self = this;
        self.$http.get('/activity/activityInfo?id='+this.$route.params.id).then(function (res) {
          console.log(res)
          self.content = res.data
          document.querySelector('.detailContent').innerHTML = res.data.contentHtml
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
