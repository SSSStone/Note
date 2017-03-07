# JS中对变量和函数声明的hoist

- [变量声明提前](#变量声明提前)
- [函数声明提前](#函数声明提前)
    - [函数声明](#函数声明)
    - [函数作为值赋值给变量](#函数作为值赋值给变量)
- [总结](#总结)

>```text
>vt.升起，提起;
>vi.被举起或抬高;
>n.起重机，升降机; 升起;
><俚>推，托，举;
>```

## 变量声明提前

```javascript
(function() {
    //ReferenceError: noSuchVariable is not defined
    console.log(noSuchVariable);
})();
```

运行上面代码立马就报错，不过，这也正是我们期望的，因为 noSuchVariable 变量根本就没有定义过嘛！再来看看下面的代码：

```javascript
(function() {
  // Outputs: undefined
  console.log(declaredLater);

  var declaredLater = "Now it's defined!";

  // Outputs: "Now it's defined!"
  console.log(declaredLater);
})();
```

首先，上面这段代码是正确的，没有任何问题。但是，为什么不报错了？`declaredLater`变量是在调用语句后面定义的啊？为什么居然输出的是`undefined`？

这其实是JavaScript解析器搞的鬼，解析器将当前作用域内声明的所有变量和函数都会放到作用域的开始处，但是，只有变量的声明被提前到作用域的开始处了，而赋值操作被保留在原处。

对于解析器来说是这个样子：

```javascript
(function() {
  var declaredLater; //声明被提前到作用域开始处了！

  // Outputs: undefined
  console.log(declaredLater);

  declaredLater = "Now it's defined!"; //赋值操作还在原地!

  // Outputs: "Now it's defined!"
  console.log(declaredLater);
})();
```

这就是为什么上述代码不报异常的原因！变量和函数经过“被提前”之后，`declaredLater`变量其实就被放在了调用函数的前面，根据JavaScript语法的定义，已声明而未被赋值的变量会被自动赋值为`undefined`，所以，第一次打印`declaredLater`变量的值就是`undefined`，后面我们对`declaredLater`变量进行了赋值操作，所以，第二次再打印变量就会输出`Now it's defined!`。

再来看一个例子：

```javascript
var name = "Baggins";

(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();
```

上述代码中，我们先声明了一个变量 `name` ，我们的本意是希望在第一次打印 `name` 变量时能够输出全局范围内定义的 `name` 变量，然后再在函数中定义一个局部 `name` 变量覆盖全局变量，最后输出局部变量的值。可是第一次输出的结果和我们的预期完全不一致，原因就是我们定义的局部变量在其作用域内被“提前”了，也就是变成了如下形式：

```javascript
var name = "Baggins";

(function () {
    var name;  //注意：name 变量被提前了！

    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();
```

## 函数声明提前

函数的“被提前”还要分两种情况

- 函数声明
- 函数作为值赋值给变量

### 函数声明
```javascript
// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {  
    console.log("Yes!");
}
```

如上所示，JavaScript 解释器允许你在函数声明之前使用，也就是说，函数声明并不仅仅是函数名“被提前”了，整个函数的定义也“被提前”了！所以上述代码能够正确执行。

### 函数作为值赋值给变量

```javascript
// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {  
    console.log("Definition hoisted!");
}

var definitionNotHoisted = function () {  
    console.log("Definition not hoisted!");
};
```

我们做了一个对比，`definitionHoisted` 函数被妥妥的执行了，符合第一种类型；`definitionNotHoisted` 变量“被提前”了，但是他的赋值（也就是函数）并没有被提前，从这一点上来说，和前面我们所讲的变量“被提前”是完全一致的，并且，由于“被提前”的变量的默认值是 `undefined` ，所以报的错误属于“类型不匹配”，因为 `undefined` 不是函数，当然不能被调用。

## 总结

- 变量的声明被提前到作用域顶部，赋值保留在原地
- 函数声明整个“被提前”
- 函数作为值赋给变量时只有变量“被提前”了，函数没有“被提前”