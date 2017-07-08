export default {
  formatterDate(date){
    let  year = date.getFullYear();
    let  month = date.getMonth()+1
    let day =date.getDate()
     month = month<10?'0'+month:month;
     day = day<10?'0'+day:day;
     return year+'-'+month+'-'+day
  },
  formtterDay(date){
    let val = date.getDate()<10?'0'+date.getDate():date.getDate();
    return val
  },
  formatterMonth(date){
    let val = date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
    return val;
  }
}
