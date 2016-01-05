/*
* @Author: chengfubei
* @Date:   2016-01-05 13:36:12
* @Last Modified by:   chengfubei
* @Last Modified time: 2016-01-05 17:24:37
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
      if(aj.status ==200){
        success(aj.responseText)
      }
      else{
        if(faild)
        faild(aj.status)
      }
    }
  }
}
