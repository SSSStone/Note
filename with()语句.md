with语句主要用来临时扩展作用域链，将语句中的对象添加到作用域的头部。
with语句结束后，作用域链恢复正常。

``` javascript
name="1";
person={
	name:"2"
};
with(person){
	console.log(name);
};
console.log(name);
//结果
2
1
```