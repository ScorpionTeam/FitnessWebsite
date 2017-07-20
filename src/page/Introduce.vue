<template>
  <div>
    <Vheader :stadiumName="name"></Vheader>
    <div style="background: #fff" class="content">
      {{detail.content}}
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
        detail:{},
        name:''
      }
    },
    methods:{
      init(){
        let self = this;
        self.$http.get('stadium/stadiumInfo?id='+localStorage.getItem('stadiumId')).then(function (res) {
          if(res.result==1){
              self.detail = res.data
              self.name = res.data.name
              document.querySelector('.content').innerHTML = res.data.content
          }
        })
      }
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    },
    created:function () {
      this.init();
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
</style>
