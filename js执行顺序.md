#js执行顺序
[toc]

##一、函数的声明和调用
JavaScript是一种描述型脚本语言，由浏览器进行动态的解析与执行。函数的定义方式大体有以下两种，浏览器对于不同的方式有不同的解析顺序。
``` javascript
//“定义式”函数定义 
function Fn1(){ 
	alert("Hello World!"); 
};
//“赋值式”函数定义 
var Fn2 = function(){ 
	alert("Hello wild!"); 
};
```
页面加载过程中，浏览器会对页面上或载入的每个js代码块(或文件)进行扫描。
1. 如果遇到定义式函数，则进行预处理(类似于C等的编译)，处理完成之后再开始由上至下执行；
2. 遇到赋值式函数，则只是将函数赋给一个变量，不进行预处理(类似1中变量必须先定义后引用的原则)，待调用到的时候才进行处理。

例子：
1. “定义式”函数定义

``` javascript
Fn1(); 
function Fn1(){ 
	alert("Hello World!"); 
} 
```
正常执行，弹出“Hello World!”，浏览器对Fn1进行了预处理，再从Fn1();开始执行。

2. “赋值式”函数定义

``` javascript
Fn2(); 
var Fn2 = function(){ 
	alert("Hello wild!"); 
} 
```
Firebug报错：Fn2 is not a function，浏览器未对Fn2进行预处理，依序执行，所以报错Fn2未定义。

##二、代码块及js文件的处理
“代码块”是指一对<script type=”text/javascript”></script>标签包裹着的js代码，文件就是指js文件。
浏览器对每个块或文件进行独立的扫描，然后对全局的代码进行顺序执行。

- 在一个块(文件)中，函数可以在调用之后进行“定义式”定义。
- 在两个块中，定义函数所在的块必须在函数被调用的块之前。 

例子：
``` javascript
<html>
<script type="text/javascript"> 
	Fn(); 
</script> 
<script type="text/javascript"> 
	function Fn(){ 
		alert("Hello World!"); 
	} 
</script> 
// 报错：Fn is notdefined，两个块换过来就对了
```
##三、重复定义函数会覆盖前面的定义
``` javascript
function fn(){ 
	alert(1); 
} 
function fn(){ 
	alert(2); 
} 
fn(); 
// 弹出：“2” 
```
``` javascript
fn(); 
function fn(){ 
	alert(1); 
} 
function fn(){ 
	alert(2); 
} 
// 弹出：“2” 
// 还是弹出“2”，为什么？
```
##四、body内部函数与body的onload函数的执行顺序
body内部的函数会先于onload的函数执行。
``` javascript
<html>
<script type="text/javascript"> 
	function fnOnLoad(){ 
		alert("I am outside the Wall!"); 
	} 
</script> 
<body onload="fnOnLoad();"> 
	<script type="text/javascript"> 
		alert("I am inside the Wall.."); 
	</script> 
</body> 
//先弹出“I am inside the Wall..”; 
//后弹出“I am outside the Wall!” 
```
##五、JavaScript是多线程or单线程
JavaScript是没有多线程概念的，所有的程序都是“单线程”依次执行的。
例子1：
``` javascript
function fn1(){ 
	var sum = 0; 
	for(var ind=0; ind<1000; ind++) { 
		sum += ind; 
	} 
	alert("答案是"+sum); 
} 
function fn2(){ 
	alert("早知道了，我就是不说"); 
} 
fn1(); 
fn2(); 
//先弹出：“答案是499500”， 
//后弹出：“早知道了，我就是不说” 
//执行fn1肯定要花费一定时间，此时，fn2等待fn1执行，而不是“多线程”。
```
例子2：
``` javascript
function fn1(){ 
	alert("fn1"); 
} 
function fn2(){ 
	console.log("fn2"); 
} 
fn1(); 
fn2(); 
//先弹出：“fn1”， 
//在不点击fn1弹框的确认按钮时，fn2不会执行，阻塞。
```

