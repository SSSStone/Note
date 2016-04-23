##JavaScript的组成—ECMAScript、BOM和DOM

JavaScript 是一种基于 ECMAScript 规范的脚本语言，并在此基础上进行了自己的封装。ECMAScript 不是一种编程语言，仅仅是一种脚本语言规范，由欧洲计算机协会制定和发布，任何基于此规范实现的脚本语言都要遵守它的约定。

除了JavaScript，微软发布的 JScript 和 Flash 开发中的 ActionScript 也是基于 ECMAScript 规范的。

在JavaScript，JScript 和 ActionScript 中声明变量，操作数组等语法完全一样，因为它们都是基于 ECMAScript 规范的。

JavaScript 的内容，包含以下三部分：
1. ECMAScript（核心）：JavaScript 语言基础；
2. DOM（文档对象模型）：规定了访问HTML和XML的接口；
3. BOM（浏览器对象模型）：提供了独立于内容而在浏览器窗口之间进行交互的对象和方法。

###一. ECMAScript

ECMAScript 规定了 JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等，它不属于任何浏览器。

ECMAScript 标准定义了 JavaScript 脚本中最为核心的内容，是 JavaScript 脚本的“骨架”，有了“骨架”，就可以在它上面进行扩展，如 DOM（文档对象模型）和 BOM（浏览器对象模型）。

###二. DOM

DOM 是“ Document Object Model ”的缩写，简称“ 文件对象模型 ”，由W3C制定规范。

DOM 定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及操作方法。

浏览器载入 HTML 文档后，将整个文档规划成由节点构成的节点树，文档中每个部分都是一个节点。例如：
```<div id="div1" class="div1">DOM示例</div>```
`div`标签是元素节点，`id`和`class`是属性节点，`DOM示例`是文本节点。

###三. BOM

BOM 是“ Browser Object Model ”的缩写，简称“ 浏览器对象模型 ”。

BOM 定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法。

遗憾的是，BOM 只是 ECMAScript 的一个扩展，没有任何相关标准，W3C也没有对该部分作出规范，每个浏览器厂商都有自己的 BOM 实现，这可以说是 BOM 的软肋所在。

通常情况下，浏览器特定的（即非 W3C 标准规定的）JavaScript 扩展都被看作 BOM 的一部分，主要包括：
- 关闭、移动浏览器及调整浏览器窗口大小；
- 弹出新的浏览器窗口；
- 提供浏览器详细信息的定位对象；
- 提供载入到浏览器窗口的文档详细信息的定位对象；
- 提供用户屏幕分辨率详细信息的屏幕对象；
- 提供对cookie的支持；
- 加入ActiveXObject类扩展BOM，通过JavaScript实例化ActiveX对象。

注意：BOM 有一些“事实上的标准”，如操作浏览器窗口、获取浏览器版本信息等，在不同浏览器中，对它们的实现方法是一样的。