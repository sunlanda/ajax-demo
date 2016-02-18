/*
* @Author: chengfubei
* @Date:   2016-01-05 13:36:12
* @Last Modified by:   fubei cheng
* @Last Modified time: 2016-02-18 23:17:26
*/

'use strict';


function ajax(url,success,faild){
  //1.creat
    if(window.XMLHttpRequest){
       var aj = new XMLHttpRequest()
    }
    else{
       var aj = new ActiveXObject("Microsoft.XMLHTTP")
    };
//2.acress
aj.open('get',url,true);
//3.say
aj.send();
//4.listen
aj.onreadystatechange = function(){
    if(aj.readyState ==4){
      //成功状态执行
      if(aj.status ==200){
        success(aj.responseText)
      }
      //失败状态执行
      else{
        if(faild)
        faild(aj.status)
      }
    }
  }
}
