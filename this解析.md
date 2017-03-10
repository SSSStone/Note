# this解析

- [this的作用](#this的作用)
    - [复用](#复用)
    - [继承](#继承)
- [关于this的误解](#关于this的误解)
    - [误解一](#误解一)
    - [误解二](#误解二)
- [this机制](#this机制)
    - [函数调用](#函数调用)
    - [隐式绑定](#隐式绑定)
    - [显式绑定](#显式绑定)
    - [构造函数绑定](#构造函数绑定)

## this的作用

### 复用

```javascript
function sayHello() {
    var greeting = "Hello, I'm " + this.name;
    console.log(greeting);
}
var person1= {
    name: "Kyle"
};
var person2= {
    name: "Reader"
};
sayHello.call(person1); // Hello, I'm Kyle
sayHello.call(person2); // Hello, I'm Reader
```

this传递一个隐式的对象引用。

相当于：

```javascript
function sayHello(context) {
    var greeting = "Hello, I'm " + context.name;
    console.log(greeting);
}
var person1= {
    name: "Kyle"
};
var person2= {
    name: "Reader"
};
sayHello(person1); // Hello, I'm Kyle
sayHello(person2); // Hello, I'm Reader
```

随着代码的增加，函数嵌套、各级调用等变得越来越复杂，那么传递一个对象的引用将变得越来越不明智，它会把你的代码弄得非常乱，甚至你自己都无法理解清楚。而`this`机制提供了一个更加优雅而灵便的方案，传递一个隐式的对象引用让代码变得更加简洁和复用。

### 继承

```javascript
var a = {
    name: 1,
    age: 2
};
function fn() {
    return this;
}
var b = fn.call(a);

// b { name: 1, age: 2 }
```

## 关于this的误解

### 误解一

this引用function本身？？？

```javascript
function fn() {
    this.name = "Hello";
}
fn.name = "World";
fn();
console.log(fn.name);
// World
```

说明`this`没有引用`function`本身，所以并没有改变`fn.name`的值。

### 误解二

`this`引用`function`的作用域？？？

```javascript
var a = 1;
function fn1() {
    var a = 2;
    this.fn2();//以为this引用的是fn1的词法作用域
}
function fn2() {
    console.log( this.a );
}
fn1(); // 1
```

这里`this` = `window`。

## this机制

### 函数调用

作为函数被调用时，`this`被绑定为全局对象，在浏览器环境下就是`window`对象。

```javascript
var name = "Hello";
function sayName() {
    console.log(this.name);
}
sayName();
// Hello
```

### 隐式绑定

隐式绑定的意思是：函数调用时拥有一个上下文对象，`this`绑定到该对象上。

```javascript
function fn() {
    console.log( this.a );
}
var obj = {
    a: 2,
    fn: fn
};
obj.fn(); // 2 -- this引用obj。
```

`this`绑定的是函数直接调用时的上下文对象。

```javascript
function fn() {
    console.log( this.a );
}
var obj2 = {
    a: 2,
    fn: fn
};
var obj1 = {
    a: 1,
    obj2: obj2
};
obj1.obj2.fn();
// 2
// this引用的是obj2.
```

```javascript
var a = 1;
function fn() {
    console.log( this.a );
}
var obj = {
    a: 2,
    fn: fn
};
var bar = obj.fn;   // 函数引用传递 相当于 bar = fn;
bar();              // 相当于 window.bar() 即 window.fn(), 所以this绑定window对象
// 1
```

```javascript
var a = 1;
function fn() {
    console.log( this.a );
}
var obj = {
    a: 2,
    fn: function() {
        fn();          // 相当于window.fun()
    }
};
obj.fn();
// 1

// 对于fun()来说，真正被调用的时候相当于window.fun()
```

### 显式绑定

bind()、apply()、call()

```javascript
var a = 1;
function fn() {
    console.log( this.a );
}
var obj = {
    a: 2
};
fn.call(obj); // 2
fn.apply(obj); // 2
fn.bind(obj)(); // 2
```

### 构造函数绑定

如果是一个构造函数，那么用new来调用，那么绑定的将是新创建的对象。

```javascript
function Fn(a) {
    this.a = a;
}
var bar = new Fn(1);
console.log(bar.a);// 1
```