#JS闭包
[toc]

##JS中的作用域(scope)。

每个函数在创建完成时，他有3个重要的内置属性（property）也同时被创建。

``` javascript
{
	AO //记录function内的变量，参数等信息
	this // 就是在调用this.xx的时候的this
	scope // 指向外层函数AO的一个链(在实现的时候，可能通过数组来实现).
}
```

JS中，大家经常讲的Scope其实是这样：SCOPE=AO+scope.

##常见的一个闭包问题(循环绑定事件)

###方法一

如果我们这样写这个程序：

``` javascript
for(var i =0; i<link.length; i++){             //window scope
	link[i].onclick = function(){ alert(i); }; // inner function 
}
```

可以得到inner function的SCOPE是这样的:

``` javascript
{
	AO 
	this // 等于link[i]
	scope // 指向window的记录，包括我们需要的变量i
}
```

这个for循环会立即执行完毕，那么当`onclick`触发时，inner function查找变量`i` 时，会在AO+scope中找，AO中没有，scope中的变量`i`已经成为了`link.length`.

>函数的本意是给每个事件处理器不同的` i `。但它未能达到目的，因为事件处理器函数绑定了` i本身`，而不是函数在构造时的`变量 i 的值`。

###解决该问题

利用大家所说的闭包写这个程序：

``` javascript
//here is the window scope
for(var i =0; i<link.length; i++){ 
	link[i].onclick = (function(i){  // outer function 
		return function(){           // inner function 
			alert(i);
		};
	})(i);
}
```

分析inner function的SCOPE：

``` javascript
{
	AO // no important infomation 
	this // we don't care it.
	scope //outer function and window scope
}
```

outer function的SCOPE

``` javascript
{
	AO // 包含参数i
	this // don't care it .
	scope // window scope.
} 
```

这时，如果inner function被触发，他会从自己的AO以及scope（outer function的AO 和 window scope)中找寻变量`i`. 可以看到outer function的AO中已经包含了`i`，而且对于这个for循环，会有对应有N个`(function(){})() `被创建执行。所以每个inner function都有一个特定的包含了变量` i `的outer function。

这样就可以顺利输出0，1，2，3。。。。。。。。。

>自执行的函数表达式也可以传参，因为闭包直接可以引用传入的这些参数，利用这些被`lock`住的传入参数，自执行函数表达式可以有效地保存状态。

结论： 我们可以看到，闭包其实就是因为Scope产生的，所以，广义上来讲，所有函数都是闭包。

###方法二

利用 dom onclick事件的bubble特性。

1. 在link dom节点的父节点上定义onclick事件监听。参数为e（其他的名字也可以，但要有参数）。这样我们通过e.target就可以知道是那个子节点被click了，也可以做相应的处理。
2. 循环添加每个节点的attribute，然后在外层elem绑一个事件。

##闭包的特性

1. 函数嵌套函数   
2. 函数内部可以引用外部的参数和变量   
3. 参数和变量不会被垃圾回收机制回收

使用闭包主要是为了**设计私有的方法和变量**。

- 优点：是可以避免全局变量的污染。
- 缺点：是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

``` javascript
//局部变量实现累加，私有方法
var aaa = (function(){
		var a = 1;
		function bbb(){
		        a++;
		        alert(a);
		}
		function ccc(){
		        a++;
		        alert(a);
		}
		return {
		        b:bbb,             //json结构
		        c:ccc
		}
})();
aaa.b();     //2
aaa.c()      //3
```

