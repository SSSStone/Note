#设置和移除disabled属性

```
//两种方法设置disabled属性 
$('#areaSelect').attr("disabled",true); 
$('#areaSelect').attr("disabled","disabled"); 

//三种方法移除disabled属性 
$('#areaSelect').attr("disabled",false); 
$('#areaSelect').removeAttr("disabled"); 
$('#areaSelect').attr("disabled",""); 
```