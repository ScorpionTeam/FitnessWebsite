<style scoped rel='stylesheet/scss' lang='scss'>
  .content{
    background: #fff;
    .list{
      padding-top: 1rem ;
      .item{
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
        width: 100%;
        .intro{
          float: left;
          font-family: "微软雅黑";
          font-size: 1.8rem;
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 50%;
        }
        .time{
          float: right;
          text-align: right;
          font-size: 1.4rem;
          color:#c1c1c1;
          font-weight: normal;
          width: 50%;
        }

      }
    }
  }
  .loadingMore{
    text-align: center;
    padding: 1rem 0;
  }
  /*动画样式*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  /*加载动画*/
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="content">
      <div class="list">
        <div class="item" v-for="(news,index) in newsList" :key="index" @click="skipToPage(news.id)">
          <div class="intro">{{news.name}}</div>
          <span class="time">{{news.createDate}}</span>
        </div>
      </div>
      <div class="loadingMore" @click="loadMore" v-if="loadMoreFlag">加载更多</div>
      <Spin fix style="position: relative" v-if="loading">
        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  import  FommateDate from '../../common/formatterDate'
  export default{
    data(){
      return{
        pageSize:5,
        loading:false,
        /*加载更多标志*/
        loadMoreFlag:true,
        /*新闻列表*/
        newsList:[]
      }
    },
    methods:{
      /*初始化消息列表*/
      pageList(){
        let self  = this;
        self.$http.get('/message/list?pageNo=1&pageSize='+this.pageSize).then(function (res) {
          if(res.result==1){
            self.loading = false
            if(res.data.length == self.newsList.length){
              self.$toast('没有更多啦')
              self.loadMoreFlag = false
              return
            }
            self.newsList = res.data
            /*格式化时间*/
            for(let i = 0;i<res.data.length;i++){
              let date = new Date(res.data[i].createDate)
              self.newsList[i].createDate= FommateDate.formatterDate(date)
            }
          }else {
            self.$messagebox({
              title:'错误提示',
              message:res.error.message
            })
          }
        })
      },
      /*加载更多*/
      loadMore(){
        this.loading = true
        this.pageSize= this.pageSize+5;
        this.pageList()
      },
      /*跳转详情*/
      skipToPage(id){
        this.$router.push({name:'消息详情',params:{id:id}})
      }
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    },
    created:function () {
      this.pageList()
    }
  }
</script>
