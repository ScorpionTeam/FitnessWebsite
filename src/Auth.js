export default {
  setToken(val){
    localStorage.setItem('token',val);
  },
  getToken(){
    localStorage.getItem('token')
  }
}
