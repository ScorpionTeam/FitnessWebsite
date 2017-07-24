<style scoped rel='stylesheet/scss' lang='scss'>
  .content{

  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <Table title="进阶之路" :columns="columns()" :data="data" border ></Table>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vheader from '../../components/Header.vue'
  import Vfooter from '../../components/Footer.vue'
  import MessageBox from '../../common/component'
  import LoginState from '../../common/loginState'
  export default{
    data(){
      return {
        member: {},
        data:[
          {
            month:'一月份',
            weight:10,
            fat:10,
            muscle:10,
            all:1000
          },
          {
            month:'二月份',
            weight:20,
            fat:10,
            muscle:30,
            all:1000
          },
          {
            month:'三月份',
            weight:20,
            fat:10,
            muscle:30,
            all:1000
          }
        ]
      }
    },
    methods:{
      columns(){
        let column=[];
        column.push({
          title:'月份',
          key:'month',
          align:'center',
          width:80
        })
        column.push({
          title:'体重',
          key:'weight',
          align:'center',
          width:70
        })
        column.push({
          title:'体脂',
          key:'fat',
          align:'center',
          width:70
        })
        column.push({
          title:'肌肉',
          key:'muscle',
          align:'center',
          width:70
        })
        column.push({
          title:'综合',
          key:'all',
          align:'center',
          width:85
        })
        return column
      }
    },
    created:function () {
    },
    components:{
      'Vheader':Vheader,
      'Vfooter':Vfooter
    }  }
</script>
