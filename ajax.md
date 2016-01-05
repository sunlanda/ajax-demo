# ajax简单封装-20分钟学会@_@

###ajax是前端开发者必会的技能之一 ,下面贴上简易ajax的方法
##关键词
    function ajax(1,2,3)//1我要读取的文件名字内容,2调取成功执行的动作,3失败执行的动作
    XMLHttpRequest  标准浏览器(firefox chrome 等主流)传输方法
    ActiveXObject   IE浏览器(IE6)
    open() 指连接服务器
    send() 从服务器要数据
    onreadystatechange 服务器产生数据传输 此方法就执行
    readyState 到达状态(0-4  4表示数据传输成功,其他数值可搜此关键字了解)
    status  代表结果 (200代表执行成功 , 404  503 等其他数值都代表执行未成功)

##建立文件 
[ajax.html](#)
      [ajax.js](#)
           [ajax.txt](#)
##html文件中包含内容
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ajax封装</title>
</head>
<body>
   <button>提交</button>
</body>
<script src="ajax.js"></script>
<script>
window.onload = function(){
var btn = document.getElementById("btn")
    btn.onclick = function(){
        ajax('data.txt',function(str){
            alert(str)
        })
    }
</script>
</html>
```


##js文件中包含内容
```

window.onload = function(){


    function ajax(url,success,faild){
    //1.创建一个ajax对象
        if(window.XMLHttpRequest){
           var aj = new XMLHttpRequest()
        }
        else{
           var aj = new ActiveXObject("Microsoft.XMLHTTP")
        };
    //2.连接服务器
    aj.open('get',url,true);//此处的true如果改成false 就会变成同步 失去无刷新取数据的意义
    //3.从服务器要数据
    aj.send();
    //4.接收返回数据
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
}
```

##txt文件中包含内容
Success!