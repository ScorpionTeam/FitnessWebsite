export default {
  getYear(){
    /*获取最近三年时间*/
    let date = new Date();
    let nowYear = date.getFullYear();
    let yearList=[]
    for(let i = 0;i<3;i++){
      yearList.push({value:nowYear-i,label:nowYear-i+'年'})
    }
    return yearList
  },
  getMonth(){
     let monthList = []
    for (let i=1;i<=12;i++){
        monthList.push({value:i,label:i+'月'})
    }
    return monthList
  }
}
