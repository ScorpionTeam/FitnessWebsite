<template>
  <div>
    <Vheader :stadiumName="name"></Vheader>
    <div style="background: #fff">
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
        name:'',
        detail:{}
      }
    },
    methods:{
      init(){
        let self = this;
        self.$http.get('stadium/stadiumInfo?id='+localStorage.getItem('stadiumId')).then(function (res) {
          console.log(res);
          if(res.result==1){
              self.name = res.data.name;
              self.detail = res.data
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
