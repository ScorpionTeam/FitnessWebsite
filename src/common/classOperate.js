export default {
  addClass(cls,el){
    if (!this.hasClass(cls,el)) {
      el.className = el.className == '' ? cls : el.className + ' ' + cls;
    }
  },
  hasClass(cls,el){
    let classname = cls || '';
    if (classname.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + classname + ' ').test(' ' + el.className + ' ');
  },
  removerClass(cls,elem){
    if (this.hasClass(cls,elem)) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }
}
