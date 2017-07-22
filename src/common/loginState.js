import router from '../router'
export  default {
  loginCheck(){
    let token = localStorage.getItem('fitOath')
    if(!token){
      this.loginOut()
      router.push('login');
    }
  },
  loginOut(){
    console.log('loginout')
    /*删除本地缓存*/
    localStorage.removeItem('fitOath')
    localStorage.removeItem('fitAccount')
    localStorage.removeItem('fitId')
    localStorage.removeItem('cardId')
    localStorage.removeItem('stadiumId')
  }
}
