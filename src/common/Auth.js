export default {
  setToken(val){
    localStorage.setItem('fitOath',val);
  },
  getToken(){
    localStorage.getItem('fitOath')
  },
  setAccount(val){
    localStorage.setItem('fitAccount',val);
  },
  setMemberId(val){
    localStorage.setItem('fitId',val)
  },
  setMemberCardId(val){
    localStorage.setItem('cardId',val)
  }
}
