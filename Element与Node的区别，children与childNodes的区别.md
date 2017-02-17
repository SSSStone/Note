# Element与Node的区别，children与childNodes的区别

## 概念

Node(节点)是DOM层次结构中的任何类型的对象的通用名称，Node有很多类型，如元素节点，属性节点，文本节点，注释节点等，通过NodeType区分，常见的有：

|节点类型|nodeType|
|:--:|:--:|
|元素element|1|
|属性attr|2|
|文本text|3|
|注释comments|8|
|文档document|9|

更多节点类型参考：https://developer.mozilla.org/en-US/docs/DOM/Node.nodeType?redirectlocale=en-US&redirectslug=nodeType

Element继承了Node类，也就是说Element是Node多种类型中的一种，即当NodeType为1时Node即为ElementNode，另外Element扩展了Node，Element拥有id、class、children等属性。

## 应用

1. 用`document.getElementById("xxx")`取到的既是Element也是Node。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <div id="test">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
        var oDiv=document.getElementById("test");
        console.log(oDiv instanceof Node);          //true
        console.log(oDiv instanceof Element);       //true
    </script>
</body>
</html>
```

2. `children`是Element的属性，`childNodes`是Node的属性。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <div id="test">
        <p>One</p>
        <P>Two</p>
    </div>
    <script>
        var oDiv=document.getElementById("test");
        console.log(oDiv.children[0] instanceof Node);        //true
        console.log(oDiv.children[0] instanceof Element);    //true

        console.log(oDiv.childNodes[0] instanceof Node);    //true
        console.log(oDiv.childNodes[0] instanceof Element);    //false

        console.log(typeof oDiv.childNodes[0].children);    //undefined
        console.log(typeof oDiv.childNodes[0].childNodes);    //object
    </script>
</body>
</html>
```

Element的`children[0]`仍为Element，是Node和Element的实例，Node的`childNdoes[0]`为Node，只是Node的实例，不是Element的实例。