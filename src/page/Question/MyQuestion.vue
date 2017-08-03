<style scoped rel='stylesheet/scss' lang='scss'>
  .questions{
    background: #fff;
    .item{
      margin-bottom: 1rem;
      padding: 1.5rem 2rem;
      line-height: 1.5;
      background-color: #fff;
      .question{
        color: #000;
        font-size: 1.6rem;
        font-weight: bold;
        i{
          display: inline-block;
          width: 2rem;
          height: 2rem;
          font-style: normal;
          margin-right: .5rem;
          line-height: 2rem;
          vertical-align: text-bottom;
          text-align: center;
          color: #fff;
          font-size: 1.2rem;
          font-weight: normal;
          background-color: #ff5000;
          background-image: linear-gradient(135deg, #fd8235, #ff5000);
        }
      }
      .answer{
        margin-top: 1.5rem;
        color: #000;
        font-size: 1.4rem;
        i{
          display: inline-block;
          width: 2rem;
          height: 2rem;
          font-style: normal;
          margin-right: .5rem;
          line-height: 2rem;
          vertical-align: text-bottom;
          text-align: center;
          color: #fff;
          font-size: 1.2rem;
          font-weight: normal;
          background-color: #00bfbf;
          background-image: linear-gradient(135deg, #00fdfd, #00bfbf);
        }
      }
      .info{
        margin-top: .5rem;
        color: #999;
        .name{
          padding-right: 2rem;
        }
      }

    }
  }
  .loadingMore{
    text-align: center;
    padding: 2rem 0;
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <div class="questions">
        <div class="item" v-for="que in list" :key="que.id">
          <div class="question">
            <i>问</i>
            {{que.question}}
          </div>
          <div class="info">
            <span class="name">{{que.memberName}}</span>
            <span> {{que.createDate}}</span>
          </div>
          <div class="answer">
            <i>答</i>
            {{que.answer}}
          </div>
          <div class="info">
            <span class="name">管理员</span>
            <span>{{que.answerDate}}</span>
          </div>
        </div>
        <div class="loadingMore" v-if='loadMoreFlag' @click="loadMore('more')">加载更多</div>
        <Spin fix style="position: relative" v-if="loadFlag">
          <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header  from  '../../components/Header.vue'
  import Footer  from  '../../components/Footer.vue'
  export default{
    data(){
        return{
          question:'',//问题,
          page:{
            pageNo:1,
            pageSize:5,
            total:0
          },
          list:[],//列表
          loadFlag:false,
          loadMoreFlag:true
        }
    },
    methods:{
      /*问答列表*/
      pageList(){
        let self = this
        let url = '/qa/myQuestion?pageNo=' + this.page.pageNo + '&pageSize=' + this.page.pageSize+'&memberId='+localStorage.getItem('fitId')
        this.$http.get(url).then(function(res) {
          console.log(res)
          if(res.result==1){
            self.list = res.data;
            self.page.total=res.total;
            self.loadFlag = false
            if(self.page.pageSize>res.total){
              self.loadMoreFlag=false
            }
          }else {
            self.$toast(res.error.message)
          }
        })
      },
      /*加载更多*/
      loadMore(){
        this.page.pageSize+=5
        this.loadFlag = true
        this.pageList()
      }
    },
    created:function () {
      this.pageList()
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>
