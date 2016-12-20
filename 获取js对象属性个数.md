#判断js对象是否为空

```javascript
// jquery的isEmptyObject方法
function isEmptyObject(e) {  
    var t;  
    for (t in e)  
        return !1;  
    return !0  
} 

console.log($.isEmptyObject({"re": 2}));    //false  
console.log(isEmptyObject());           //true  
console.log(isEmptyObject({}));         //true  
console.log(isEmptyObject(null));       //true  
console.log(isEmptyObject(23));         //true  
console.log(isEmptyObject({"te": 2}));      //false  
```

```javascript
Object.getOwnPropertyNames(a).length === 0
```

#获取js对象属性个数

```javascript
Object.getOwnPropertyNames(a).length
```