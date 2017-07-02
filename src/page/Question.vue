<template>
    <div>
      <Vheader></Vheader>
      <div class="banner">
        <img  src="http://zoneke-img.b0.upaiyun.com/78405808ce6060961a05cdd660d6d08d.jpg!120x120" alt="">
      </div>
      <div class="questions">
        <div class="item">
          <div class="question">
            <i>问</i>
            这里是问题这里是问题这里是问题这里是问题这里是问题这里是问题这里是问题
          </div>
          <div class="info">
            <span class="name">张三</span>
            <span>2017年6月18日 18:19</span>
          </div>
          <div class="answer">
            <i>答</i>
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
          </div>
          <div class="info">
            <span class="name">管理员</span>
            <span>2017年6月18日 18:19</span>
          </div>
        </div>
      </div>
      <Vfooter></Vfooter>
    </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import Footer  from '../components/Footer.vue'
  export default{
      components:{
          'Vheader':Header,
           'Vfooter':Footer
      }
  }
</script>
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
</style>
