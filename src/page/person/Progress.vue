<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    background: #fff;
    padding-top: 2rem;
    table{
      margin-top: 2rem;
      width: 100%;
      border-collapse: collapse;
      tr{
        border: 1px solid;
        td{
          border: 1px solid;
          text-align: center;
          padding: 5px;
        }
      }
    }
    #weight{
      width: 95%;
      margin: 0 auto;
      height: 20rem;
    }
    #fat{
      width: 95%;
      margin: 0 auto;
      height: 20rem;
    }
    #muscle{
      width: 95%;
      margin: 0 auto;
      height: 20rem;
    }
    #all{
      width: 95%;
      margin: 0 auto;
      height: 20rem;
    }
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <!--  <table>
          <tr>
            <td rowspan="2">月份</td>
            <td rowspan="2">体重(kg)</td>
            <td rowspan="2">体脂(kg)</td>
            <td rowspan="2">肌肉(%)</td>
            <td colspan="2">综合</td>
          </tr>
          <tr>
            <td>俯卧撑(个)</td>
            <td>仰卧起坐(个)</td>
          </tr>
          <tr>
            <td>1</td>
            <td>50</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>50</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>21</td>
          </tr>
          <tr>
            <td>3</td>
            <td>50</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>21</td>
          </tr>
        </table>-->
      <div id="weight"></div>
      <div id="fat"></div>
      <div id="muscle"></div>
      <div id="all"></div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vheader from '../../components/Header.vue'
  import Vfooter from '../../components/Footer.vue'
  import Echart from  'echarts'
  import MessageBox from '../../common/component'
  import LoginState from '../../common/loginState'
  export default{
    data(){
      return {
        member: {},
      }
    },
    methods:{
      /*体重*/
      weightChart(){
        let weight = Echart.init(document.getElementById('weight'))
        let option = {
          title: {
            text: '体重'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['体重']
          },
          xAxis: {
            name:'月份',
            nameGap:5,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            axisTick:{
              alignWithLabel:true
            }
          },
          yAxis: {},
          series: [{
            name: '体重',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        weight.setOption(option);

      },
      /*体脂*/
      fatChart(){
        let fat = Echart.init(document.getElementById('fat'))
        let option = {
          title: {
            text: '体脂'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['体脂']
          },
          xAxis: {
            name:'月份',
            nameGap:5,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            axisTick:{
              alignWithLabel:true
            }
          },
          yAxis: {},
          series: [{
            name: '体脂',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        fat.setOption(option);

      },
     /*肌肉*/
      muscleChart(){
        let muscle = Echart.init(document.getElementById('muscle'))
        let option = {
          title: {
            text: '肌肉'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['肌肉']
          },
          xAxis: {
            name:'月份',
            nameGap:5,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            axisTick:{
              alignWithLabel:true
            }
          },
          yAxis: {},
          series: [{
            name: '肌肉',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        muscle.setOption(option);

      },
      /*综合*/
      allChart(){
        let all = Echart.init(document.getElementById('all'))
        let option = {
          title: {
            text: '综合'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['俯卧撑','仰卧起坐']
          },
          xAxis: {
            name:'月份',
            nameGap:5,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            axisTick:{
              alignWithLabel:true
            }
          },
          yAxis: {},
          series: [{
            name: '俯卧撑',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          },
            {
              name: '仰卧起坐',
              type: 'line',
              data: [15, 10, 26, 39, 50, 60]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        all.setOption(option);

      },
      initChart(){
        this.weightChart();
        this.fatChart();
        this.muscleChart();
        this. allChart()
      }
    },
    mounted:function () {
      this.initChart()
    },
    components:{
      'Vheader':Vheader,
      'Vfooter':Vfooter,
      'charts':Echart
    }  }
</script>
<!--<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart">
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      className: {
        type: String,
        default: 'yourClassName'
      },
      id: {
        type: String,
        default: 'yourID'
      },
      width: {
        type: String,
        default: '500px'
      },
      height: {
        type: String,
        default: '500px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart);
        // 把配置和数据放这里
        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        })
      }
    }
  }
</script>-->
