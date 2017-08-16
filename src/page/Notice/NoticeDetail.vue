<style scoped rel='stylesheet/scss' lang='scss'>
</style>
<template>
    <div class="content">

    </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  export default{
    data(){
        return{

        }
    },
    methods:{
        init(){
            let self = this;
            self.$http.get('/message/messageInfo?id='+this.$route.params.id).then(function(res){
                let content = document.querySelector('.content')
                if(res.result==1){
                    console.log(res.data)
                    content.innerHTML = res.data.content
                }
            })
        }
    },
    created:function () {
        this.init()
    }
  }
</script>
