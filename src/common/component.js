import MessageBox from 'mint-ui'
export default {
  warnAlert(ts,message){
    ts.$messagebox({
      title:'错误提示',
      message:message
    })
  }
}
