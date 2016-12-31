
#undefined、not defined、null

- [undefined](#undefined)
- [not defined](#notdefined)
- [null](#null)

在 `Javascript` 中，有一种致命错误非常常见，即 `ReferenceError：xxx is not defined`。但是，有时候当一个值从未被赋值的时候，并不会出错，而是返回`undefined`，有必要对这两者进行梳理。

## undefined

- 它是一种数据类型，也是一种值。
- 有这种值的时候，要么它本身被赋值，要么本身存在，要么其所在对象存在。完全不存在的变量不会是 `undefined`。

`undefined`典型的用法：
（1）变量被声明了，但没有赋值时，就等于`undefined`。
（2) 调用函数时，应该提供的参数没有提供，该参数等于`undefined`。
（3）对象没有赋值的属性，该属性的值为`undefined`。
（4）函数没有返回值时，默认返回`undefined`。

``` javascript
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

``` javascript
var p = new Object();
alert(p.a); // undefined
```
如果`p`还有一个成员`b`，其值被手工赋值为 `undefined`，如何区分不存在的成员 `a` 和存在的成员 `b`？可以使用 `Object.prototype.HasOwnProperty()` 方法。

## notdefined

一个 未定义 (`not defined`) 的变量是完全没有任何声明的变量。这样的变量在使用时会直接抛出致命错误。
但是，如果使用 `typeof` 来判断这样的变量，不但不会出错，而且竟然会返回 `undefined`，这使得无法使用 `typeof` 来区分这两种情况。

``` javascript
console.log(a);
// Uncaught ReferenceError: a is not defined
```

``` javascript
typeof(a);// undefined
var b;
typeof(b);// undefined
```

### null

相似性：
`undefined`和`null`在`if`语句中，都会被自动转为`false`，相等运算符甚至直接报告两者相等。

``` javascript
if (!undefined) 
    console.log('undefined is false');
// undefined is false

if (!null) 
    console.log('null is false');
// null is false

undefined == null
// true
```

不同：

- `undefined`表示"缺少值"，就是此处应该有一个值，但是还没有定义。
- `null`表示"没有对象"，即该处不应该有值。

`null` 的典型用法是：
（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。

``` javascript
Object.getPrototypeOf(Object.prototype)
// null
```
