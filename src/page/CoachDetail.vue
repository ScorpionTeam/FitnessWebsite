<template>
  <div>
    <Vheader></Vheader>
    <div class="coach-detail">
      <div class="hd">
        <div class="inner">
          <div class="avatar">
            <img src="../assets/1.jpg" alt="">
          </div>
          <div class="name">呵呵</div>
          <div class="describe">12321213</div>
        </div>
      </div>
      <div class="bd">
        <div class="evaluation"></div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>
<script>
  import Vhedaer from '../components/Header.vue'
  import  Vfooter from'../components/Footer.vue'
  export default{
    data(){
      return{
        valueDisabled:5
      }
    },
    components:{
      'Vheader':Vhedaer,
      'Vfooter':Vfooter,
    }
  }
</script>
<style scoped rel='stylesheet/scss' lang='scss'>
  .coach-detail{
    .hd{
      padding-top: 6.6rem;
      background: #0db14b;
      .inner{
        position: relative;
        padding: 1px 2rem 2rem;
        background-color: #fff;
        .avatar {
          width: 8rem;
          height: 8rem;
          margin: -4rem auto 0;
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: cover;
          }
        }
        .name{
          margin: 1rem 0;
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
        }
        .describe{
          text-align: center;
          line-height: 1.6;
        }
        &:after {
          position: absolute;
          right: 0;
          top: 100%;
          left: 0;
          height: 1.3rem;
          background: url(../assets/border-arrow.png) repeat-x 0 0;
          background-size: auto 100%;
          content: '';
        }
      }
    }
    .bd{
      margin-top: 1rem;
      background-color: #fff;
      .evaluation{
        padding: 1.8rem 0;
        overflow: hidden;
        .item{
          float: left;
          width:33.33%;
          text-align: center;
          .score{
            color: #fea500;
            font-size: 4.2rem;
          }
        }
      }
      .impressions{
        .hd{
          padding: 2rem 2rem 1rem;
          border: 1px solid #eee;
        }
        .bd{
          padding: 0 2rem;
          margin-top: 1rem;
          background-color: #fff;
          .tag{
            margin: 0 1.5rem 1rem 0;
          }
        }
      }
      .introduce{
        padding: 2rem;
        border-top: 1rem solid #f8f8f8;
      }
    }
  }
</style>
