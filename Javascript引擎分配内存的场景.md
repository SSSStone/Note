#Javascript引擎分配内存的场景

1. Object：
``` javascript
new Object();
new MyConstructor();
{ a: 4, b: 5 }
Object.create();
```
2. 数组：
``` javascript
new Array();
[ 1, 2, 3, 4 ];
```
3. 字符串：
``` javascript
new String(“hello”);
"hello"
```
随带一说，javascript的字符串和.Net一样，使用资源池和copy on write方式管理字符串。
4. 函数对象
``` javascript
var x = function () { ... }
new Function(code);
```
5. 闭包
``` javascript
function outer(name) {
	var x = name;
	return function inner() {
		return 'Hi,' + name;
	}
}
```
闭包和prototype不一样，以上函数为例，当调用outer时，会生成并返回一个对象（隐含变量x），每次调用都创建一个，而prototype则是每次都返回同一个而对象（即：无论多少次调用，只创建一个对象）。

