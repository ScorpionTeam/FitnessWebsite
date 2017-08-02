<style scoped rel='stylesheet/scss' lang='scss'>
  .banner{
    height: 10rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
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
  .question-editor {
    margin-top: 2rem;
    padding: 1.5rem 2rem;
    background-color: #fff;
    .btns{
      margin-top: .5rem;
      text-align: right;
      .submit{
        color: #fff;
        background-color: #00bfbf;
        font-size: 1.4rem;
      }
    }
  }
  .loadingMore{
    padding: 1rem 0;
    text-align: center;
  }
</style>
<template>
  <div>
    <Vheader></Vheader>
    <div class="banner">
      <img  src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="">
    </div>
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
    <div class="question-editor">
      <Input type="textarea" placeholder="简单概括你的问题" :rows="5" v-model="question"> </Input>
      <div class="btns">
        <Button class="submit" @click="askQuestion">提交</Button>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import Footer  from '../../components/Footer.vue'
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
        let url = '/qa/list?pageNo=' + this.page.pageNo + '&pageSize=' + this.page.pageSize
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
      /*提问*/
      askQuestion(){
        let self = this;
        if(this.question==''||this.question==undefined){
          self.$toast('问题不能为空')
          return
        }
        let data ={}
        data.question = this.question
        data.memberId = localStorage.getItem('fitId')
        this.$http.post('/qa/publish',JSON.stringify(data)).then(function (res) {
          if(res.result==1){
            self.$toast('提问成功')
            self.question=''
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
        this.page.pageSize+=5
        this.loadFlag = true
        this.pageList()
      }
    },
    created(){
      this.pageList()
    },
    components:{
      'Vheader':Header,
      'Vfooter':Footer
    }
  }
</script>
