<title>说说你对闭包的理解</title><meta charset="utf-8"><link href="https://dn-maxiang.qbox.me/res-min/themes/marxico.css" rel="stylesheet"><style></style><div id="preview-contents" class="note-content"><div id="wmd-preview" class="preview-content"></div><div id="wmd-preview-section-712" class="wmd-preview-section preview-content"><div><div class="toc"><div class="toc">*   *   [说说你对闭包的理解](#说说你对闭包的理解)
    *   [Talk about your understanding of closures](#talk-about-your-understanding-of-closures)
    *   [You talk about the shortcomings of Cookie](#you-talk-about-the-shortcomings-of-cookie)*   [优点：极高的扩展性和可用性](#优点极高的扩展性和可用性)
        *   [Advantages: high scalability and availability](#advantages-high-scalability-and-availability)
        *   [缺点：](#缺点)
        *   [Disadvantages:](#disadvantages)
    *   [浏览器本地存储](#浏览器本地存储)*   [web storage和cookie的区别](#web-storage和cookie的区别)
        *   [the difference between web storage and a cookie](#the-difference-between-web-storage-and-a-cookie)
        *   [cookie 和session 的区别：](#cookie-和session-的区别)
        *   [cookie and session distinction:](#cookie-and-session-distinction)
    *   [CSS-related issues](#css-related-issues)*   [display:none和visibility:hidden的区别？](#displaynone和visibilityhidden的区别)
        *   [display: none and visibility: hidden difference?](#display-none-and-visibility-hidden-difference)
        *   [CSS中 link 和@import 的区别是？](#css中-link-和import-的区别是)
        *   [The difference in the link andimport CSS is?](#the-difference-in-the-link-andimport-css-is)
        *   [position:absolute和float属性的异同](#positionabsolute和float属性的异同)
        *   [Similarities and Differences between absolute and float attributes: position](#similarities-and-differences-between-absolute-and-float-attributes-position)
        *   [介绍一下box-sizing属性？](#介绍一下box-sizing属性)
        *   [Introduce the box-sizing property?](#introduce-the-box-sizing-property)
        *   [CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？](#css-选择符有哪些哪些属性可以继承优先级算法如何计算-css3新增伪类有那些)
        *   [CSS selectors are there? Which attributes can be inherited? Priority algorithm calculated? Added CSS3 pseudo-classes are those?](#css-selectors-are-there-which-attributes-can-be-inherited-priority-algorithm-calculated-added-css3-pseudo-classes-are-those)
        *   [position的值， relative和absolute分别是相对于谁进行定位的？](#position的值-relative和absolute分别是相对于谁进行定位的)
        *   [position values, relative and absolute are positioned with respect to whom?](#position-values-relative-and-absolute-are-positioned-with-respect-to-whom)
        *   [CSS3有哪些新特性？](#css3有哪些新特性)
        *   [CSS3 What’s new?](#css3-whats-new)
        *   [XML和JSON的区别？](#xml和json的区别)
        *   [XML and JSON difference?](#xml-and-json-difference)
        *   [对BFC规范的理解？](#对bfc规范的理解)
        *   [BFC norms of understanding?](#bfc-norms-of-understanding)
        *   [解释下 CSS sprites，以及你要如何在页面或网站中使用它。](#解释下-css-sprites以及你要如何在页面或网站中使用它)
        *   [Talk about your understanding of the semantic?](#talk-about-your-understanding-of-the-semantic)
    *   [html部分](#html部分)
    *   [html part](#html-part)*   [说说你对语义化的理解？](#说说你对语义化的理解)
        *   [Talk about your understanding of the semantic?](#talk-about-your-understanding-of-the-semantic-1)
        *   [Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?](#doctype作用-严格模式与混杂模式如何区分它们有何意义)
        *   [Doctype role? Strict mode and mixed mode how to distinguish? They mean?](#doctype-role-strict-mode-and-mixed-mode-how-to-distinguish-they-mean)
        *   [你知道多少种Doctype文档类型？](#你知道多少种doctype文档类型)
        *   [Do you know how many document types Doctype?](#do-you-know-how-many-document-types-doctype)
    *   [HTML与XHTML——二者有什么区别](#html与xhtml二者有什么区别)
    *   [HTML and XHTML– What is the difference](#html-and-xhtml-what-is-the-difference)
    *   [常见兼容性问题？](#常见兼容性问题)
    *   [Common compatibility problems?](#common-compatibility-problems)*   [解释下浮动和它的工作原理？清除浮动的技巧](#解释下浮动和它的工作原理清除浮动的技巧)
        *   [Floating and explain how it works? Clear float tips](#floating-and-explain-how-it-works-clear-float-tips)
        *   [浮动元素引起的问题和解决办法？](#浮动元素引起的问题和解决办法)
        *   [Problems caused by floating elements and solutions?](#problems-caused-by-floating-elements-and-solutions)
        *   [IE 8以下版本的浏览器中的盒模型有什么不同](#ie-8以下版本的浏览器中的盒模型有什么不同)
        *   [IE 8 the following versions of the browser box model What is the difference](#ie-8-the-following-versions-of-the-browser-box-model-what-is-the-difference)
        *   [DOM操作——怎样添加、移除、移动、复制、创建和查找节点。](#dom操作怎样添加移除移动复制创建和查找节点)
        *   [DOM manipulation - how to add, remove, move, copy, create, and find nodes.](#dom-manipulation-how-to-add-remove-move-copy-create-and-find-nodes)
        *   [html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？](#html5有哪些新特性移除了那些元素如何处理html5新标签的浏览器兼容问题如何区分-html-和-html5)
        *   [What’s new html5, removing those elements? How to deal with a new label HTML5 browser compatibility problems? How to distinguish between HTML and HTML5?](#whats-new-html5-removing-those-elements-how-to-deal-with-a-new-label-html5-browser-compatibility-problems-how-to-distinguish-between-html-and-html5)
    *   [iframe的优缺点？](#iframe的优缺点)
    *   [如何实现浏览器内多个标签页之间的通信?](#如何实现浏览器内多个标签页之间的通信)
    *   [How to communicate within the browser between multiple tabs?](#how-to-communicate-within-the-browser-between-multiple-tabs)
    *   [线程与进程的区别](#线程与进程的区别)
    *   [The difference between threads and processes](#the-difference-between-threads-and-processes)
    *   [你如何对网站的文件和资源进行优化？](#你如何对网站的文件和资源进行优化)
    *   [How do you document and optimize resource site?](#how-do-you-document-and-optimize-resource-site)
    *   [请说出三种减少页面加载时间的方法。](#请说出三种减少页面加载时间的方法)
    *   [Please name three reduce page load time.](#please-name-three-reduce-page-load-time)
    *   [你都使用哪些工具来测试代码的性能？](#你都使用哪些工具来测试代码的性能)
    *   [Which tools you use to test the performance of the code?](#which-tools-you-use-to-test-the-performance-of-the-code)
    *   [什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？](#什么是-fouc无样式内容闪烁你如何来避免-fouc)
    *   [What is FOUC (free style content flicker)? How do you avoid FOUC?](#what-is-fouc-free-style-content-flicker-how-do-you-avoid-fouc)
    *   [null和undefined的区别？](#null和undefined的区别)
    *   [null and undefined difference?](#null-and-undefined-difference)
    *   [new操作符具体干了什么呢?](#new操作符具体干了什么呢)
    *   [What specific new operator did it?](#what-specific-new-operator-did-it)
    *   [js延迟加载的方式有哪些？](#js延迟加载的方式有哪些)
    *   [如何解决跨域问题?](#如何解决跨域问题)
    *   [How to solve cross-border issues?](#how-to-solve-cross-border-issues)
    *   [documen.write和 innerHTML的区别](#documenwrite和-innerhtml的区别)
    *   [.call() 和 .apply() 的区别和作用？](#call-和-apply-的区别和作用)
    *   [哪些操作会造成内存泄漏？](#哪些操作会造成内存泄漏)
    *   [JavaScript中的作用域与变量声明提升？](#javascript中的作用域与变量声明提升)
    *   [如何判断当前脚本运行在浏览器还是node环境中？](#如何判断当前脚本运行在浏览器还是node环境中)
    *   [其他问题？](#其他问题)*   [你遇到过比较难的技术问题是？你是如何解决的？](#你遇到过比较难的技术问题是你是如何解决的)
        *   [列举IE 与其他浏览器不一样的特性？](#列举ie-与其他浏览器不一样的特性)
        *   [什么叫优雅降级和渐进增强？](#什么叫优雅降级和渐进增强)
        *   [WEB应用从服务器主动推送Data到客户端有那些方式？](#web应用从服务器主动推送data到客户端有那些方式)
        *   [对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？](#对前端界面工程师这个职位是怎么样理解的它的前景会怎么样)
    *   [你有哪些性能优化的方法？](#你有哪些性能优化的方法)
    *   [一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？](#一个页面从输入-url-到页面加载显示完成这个过程中都发生了什么)
    *   [平时如何管理你的项目？](#平时如何管理你的项目)
    *   [说说最近最流行的一些东西吧？常去哪些网站？](#说说最近最流行的一些东西吧常去哪些网站)
    *   [javascript对象的几种创建方式](#javascript对象的几种创建方式)
    *   [javascript继承的6种方法](#javascript继承的6种方法)
    *   [ajax过程](#ajax过程)
    *   [异步加载和延迟加载](#异步加载和延迟加载)
    *   [前端安全问题？](#前端安全问题)*   [sql注入原理](#sql注入原理)
        *   [XSS原理及防范](#xss原理及防范)
        *   [XSS防范方法](#xss防范方法)
        *   [XSS与CSRF有什么区别吗？](#xss与csrf有什么区别吗)
        *   [CSRF的防御](#csrf的防御)
    *   [ie各版本和chrome可以并行下载多少个资源](#ie各版本和chrome可以并行下载多少个资源)
    *   [javascript里面的继承怎么实现，如何避免原型链上面的对象共享](#javascript里面的继承怎么实现如何避免原型链上面的对象共享)
    *   [grunt， YUI compressor 和 google clojure用来进行代码压缩的用法。](#grunt-yui-compressor-和-google-clojure用来进行代码压缩的用法)
    *   [Flash、Ajax各自的优缺点，在使用中如何取舍？](#flashajax各自的优缺点在使用中如何取舍)
    *   [请解释一下 JavaScript 的同源策略。](#请解释一下-javascript-的同源策略)*   [为什么要有同源限制？](#为什么要有同源限制)
    *   [什么是 “use strict”; ? 使用它的好处和坏处分别是什么？](#什么是-use-strict-使用它的好处和坏处分别是什么)
    *   [GET和POST的区别，何时使用POST？](#get和post的区别何时使用post)
    *   [哪些地方会出现css阻塞，哪些地方会出现js阻塞？](#哪些地方会出现css阻塞哪些地方会出现js阻塞)*   [Javascript无阻塞加载具体方式](#javascript无阻塞加载具体方式)
    *   [闭包相关问题？](#闭包相关问题)
    *   [js事件处理程序问题？](#js事件处理程序问题)
    *   [eval是做什么的？](#eval是做什么的)
    *   [JavaScript原型，原型链 ? 有什么特点？](#javascript原型原型链-有什么特点)
    *   [事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？](#事件ie与火狐的事件机制有什么区别-如何阻止冒泡)
    *   [ajax 是什么?ajax 的交互模型?同步和异步的区别?如何解决跨域问题?](#ajax-是什么ajax-的交互模型同步和异步的区别如何解决跨域问题)
    *   [js对象的深度克隆](#js对象的深度克隆)
    *   [AMD和CMD 规范的区别？](#amd和cmd-规范的区别)
    *   [网站重构的理解？](#网站重构的理解)
    *   [如何获取UA？](#如何获取ua)
    *   [js数组去重](#js数组去重)
    *   [HTTP状态码](#http状态码)
    *   [js操作获取和设置cookie](#js操作获取和设置cookie)*   [说说TCP传输的三次握手策略](#说说tcp传输的三次握手策略)
        *   [说说你对Promise的理解](#说说你对promise的理解)
    *   [Javascript垃圾回收方法](#javascript垃圾回收方法)*   [标记清除（mark and sweep）](#标记清除mark-and-sweep)
        *   [引用计数(reference counting)](#引用计数reference-counting)
        *   [谈谈性能优化问题](#谈谈性能优化问题)
        *   [移动端性能优化](#移动端性能优化)
    *   [什么是Etag？](#什么是etag)*   [Expires和Cache-Control](#expires和cache-control)
        *   [栈和队列的区别?](#栈和队列的区别)
        *   [栈和堆的区别？](#栈和堆的区别)
        *   [关于Http 2.0 你知道多少？](#关于http-20-你知道多少)

</div></div></div></div><div id="wmd-preview-section-28" class="wmd-preview-section preview-content">

## 说说你对闭包的理解

</div><div id="wmd-preview-section-29" class="wmd-preview-section preview-content">

## Talk about your understanding of closures

使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

Using closures designed primarily to private methods and variables. Closure advantage of global variables are avoided contamination, the disadvantage is the closure will be permanent memory, the memory usage increases, improper use is likely to cause a memory leak.

闭包有三个特性:

Closures have three characteristics:

> 1.函数嵌套函数 
> 
>   2.函数内部可以引用外部的参数和变量 
> 
>   3.参数和变量不会被垃圾回收机制回收1.  Function
2.  The internal function nested function can refer to external parameters and variables
3.  The parameters and variables will not be garbage collection mechanism Recycling

请你谈谈Cookie的弊端

</div><div id="wmd-preview-section-30" class="wmd-preview-section preview-content">

## You talk about the shortcomings of Cookie

`cookie`虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。 

第一：每个特定的域名下最多生成20个`cookie`

    <span class="hljs-number">1.</span>IE6或更低版本最多<span class="hljs-number">20</span>个cookie
    <span class="hljs-number">2.</span>IE7和之后的版本最后可以有<span class="hljs-number">50</span>个cookie。
    <span class="hljs-number">3.F</span>irefox最多<span class="hljs-number">50</span>个cookie
    <span class="hljs-number">4.</span>chrome和Safari没有做硬性限制

    <span class="hljs-number">1.</span>IE6 or earlier up to <span class="hljs-number">20</span> cookie 
    <span class="hljs-number">2.</span>IE7 later version and last may have <span class="hljs-number">50</span> cookie. 
    <span class="hljs-number">3.F</span>irefox up to <span class="hljs-number">50</span> cookie 
    <span class="hljs-number">4.</span>chrome and Safari does not <span class="hljs-keyword">do</span> hard limit. IE and Opera will clean up the least recently used cookie , Firefox will randomly to clean cookie .

`IE`和`Opera` 会清理近期最少使用的`cookie`，`Firefox`会随机清理`cookie`。

`cookie`的最大大约为`4096`字节，为了兼容性，一般不能超过`4095`字节。

IE 提供了一种存储可以持久化用户数据，叫做`userdata`，从`IE5.0`就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

IE can provide a way to store persistent user data, called UserData , from IE5.0 has supported. Each data up to 128K, under each domain up to 1M. The persistent data in the cache, if not cleaned the cache, it will always exist.

</div><div id="wmd-preview-section-31" class="wmd-preview-section preview-content">

### 优点：极高的扩展性和可用性

</div><div id="wmd-preview-section-32" class="wmd-preview-section preview-content">

### Advantages: high scalability and availability

    <span class="hljs-number">1.</span>通过良好的编程，控制保存在cookie中的session对象的大小。
    <span class="hljs-number">2.</span>通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
    <span class="hljs-number">3.</span>只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
    <span class="hljs-number">4.</span>控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

    <span class="hljs-number">1.</span> Good programming, control <span class="hljs-operator">the</span> size <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> session cookie stored <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> object. 
    <span class="hljs-number">2.</span> encryption <span class="hljs-operator">and</span> secure transmission technology (SSL), <span class="hljs-built_in">to</span> reduce <span class="hljs-operator">the</span> possibility <span class="hljs-operator">of</span> cookie <span class="hljs-built_in">to</span> crack. 
    <span class="hljs-number">3.</span> Only non-sensitive data is stored <span class="hljs-operator">in</span> <span class="hljs-operator">a</span> cookie, even <span class="hljs-keyword">if</span> stolen will <span class="hljs-operator">not</span> have significant losses. 
    <span class="hljs-number">4.</span> Control cookie lifetime, so <span class="hljs-keyword">it</span> will <span class="hljs-operator">not</span> always be <span class="hljs-keyword">effective</span>. Theft are likely <span class="hljs-built_in">to</span> <span class="hljs-built_in">get</span> <span class="hljs-operator">an</span> expired cookie.</div><div id="wmd-preview-section-33" class="wmd-preview-section preview-content">

### 缺点：

</div><div id="wmd-preview-section-34" class="wmd-preview-section preview-content">

### Disadvantages:

    <span class="hljs-number">1.</span>Cookie数量和长度的限制。每个domain最多只能有<span class="hljs-number">20</span>条cookie，每个cookie长度不能超过<span class="hljs-number">4</span>KB，否则会被截掉。

    <span class="hljs-number">2.</span>安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

    <span class="hljs-number">3.</span>有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

    <span class="hljs-number">1.</span>Cookie limit <span class="hljs-keyword">the</span> <span class="hljs-type">number</span> <span class="hljs-keyword">and</span> <span class="hljs-property">length</span>. Each domain can have a maximum <span class="hljs-keyword">of</span> <span class="hljs-number">20</span> cookie, each cookie <span class="hljs-property">length</span> can <span class="hljs-keyword">not</span> exceed <span class="hljs-number">4</span>KB, otherwise <span class="hljs-keyword">it</span> will be truncated. 

    <span class="hljs-number">2.</span> The security issues. If <span class="hljs-keyword">the</span> cookie <span class="hljs-keyword">is</span> intercepted, <span class="hljs-keyword">that</span> person can <span class="hljs-keyword">get</span> all <span class="hljs-keyword">the</span> session information. Even <span class="hljs-keyword">if</span> encryption <span class="hljs-keyword">is</span> also unhelpful, because Interceptor <span class="hljs-keyword">does</span> <span class="hljs-keyword">not</span> need <span class="hljs-keyword">to</span> know <span class="hljs-keyword">the</span> meaning <span class="hljs-keyword">of</span> <span class="hljs-keyword">the</span> cookie, cookie forwarding <span class="hljs-keyword">as</span> long <span class="hljs-keyword">as</span> he can achieve their goals. 

    <span class="hljs-number">3.</span> Some state can <span class="hljs-keyword">not</span> be stored <span class="hljs-keyword">in</span> <span class="hljs-keyword">the</span> client. For example, <span class="hljs-keyword">in</span> order <span class="hljs-keyword">to</span> prevent duplicate submission form, we need <span class="hljs-keyword">to</span> save a counter <span class="hljs-function_start"><span class="hljs-keyword">on</span></span> <span class="hljs-keyword">the</span> server side. If we <span class="hljs-keyword">put</span> this counter <span class="hljs-keyword">is</span> stored <span class="hljs-keyword">in</span> <span class="hljs-keyword">the</span> client, <span class="hljs-keyword">then</span> <span class="hljs-keyword">it</span> will <span class="hljs-keyword">not</span> achieve any effect.

Browser local storage

</div><div id="wmd-preview-section-35" class="wmd-preview-section preview-content">

## 浏览器本地存储

在较高版本的浏览器中，`js`提供了`sessionStorage`和`globalStorage`。在`HTML5`中提供了`localStorage`来取代`globalStorage`。

In later versions of the browser, JS provides sessionStorage and globalStorage . In HTML5 provides in localStorage to replace globalStorage.

`html5`中的`Web Storage`包括了两种存储方式：`sessionStorage`和`localStorage`。

html5 The Web Storage includes two storage methods: sessionStorage and localStorage .

`sessionStorage`用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此`sessionStorage`不是一种持久化的本地存储，仅仅是会话级别的存储。

sessionStorage data stored locally for a session (session) in which the data only in the same session of the page to access data, and when the end of the session also will be destroyed. So sessionStorage not a persistent local storage, just session-level storage.

而`localStorage`用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

And localStorage for persistent local storage, unless the initiative to remove the data, or the data is never out of date.

</div><div id="wmd-preview-section-36" class="wmd-preview-section preview-content">

### web storage和cookie的区别

</div><div id="wmd-preview-section-37" class="wmd-preview-section preview-content">

### the difference between web storage and a cookie

`Web Storage`的概念和`cookie`相似，区别是它是为了更大容量存储设计的。`Cookie`的大小是受限的，并且每次你请求一个新的页面的时候`Cookie`都会被发送过去，这样无形中浪费了带宽，另外`cookie`还需要指定作用域，不可以跨域调用。

Web Storage concept and cookie similar, except that it is designed for higher-capacity storage. Cookie size is limited, and every time you request a new page when the Cookie will be sent in the past, so that virtually waste bandwidth, another cookie also need to specify the scope, not cross-domain calls.

除此之外，`Web Storage`拥有`setItem,getItem,removeItem,clear`等方法，不像`cookie`需要前端开发者自己封装`setCookie，getCookie`。

In addition, Web Storage has setItem, getItem, removeItem, clear methods, unlike the cookie front-end developers need their own package setCookie, getCookie.

但是`cookie`也是不可以或缺的：`cookie`的作用是与服务器进行交互，作为`HTTP`规范的一部分而存在 ，而`Web Storage`仅仅是为了在本地“存储”数据而生

But the cookie is not indispensable: cookie ‘s role is to interact with the server as HTTP part of the specification exists, and Web Storage simply to the local “store” raw data

浏览器的支持除了`IE７`及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的`userData`其实就是`javascript`本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持`web storage`。

Browser support in addition to IE7 and below are not supported, other standard browsers fully support (ie and FF need to run a web server in), it is worth mentioning that IE always good things, such as IE7, IE6 in the userData fact is javascript local storage solutions. By simple code package can be unified to all the browsers support Web storage.

`localStorage`和`sessionStorage`都具有相同的操作方法，例如`setItem、getItem`和`removeItem`等

localStorage and sessionStorage have the same method of operation, for example setItem, getItem and removeItem etc.

</div><div id="wmd-preview-section-38" class="wmd-preview-section preview-content">

### cookie 和session 的区别：

</div><div id="wmd-preview-section-39" class="wmd-preview-section preview-content">

### cookie and session distinction:

     <span class="hljs-number">1</span>、cookie数据存放在客户的浏览器上，session数据放在服务器上。
     <span class="hljs-number">2</span>、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
        考虑到安全应当使用session。
     <span class="hljs-number">3</span>、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
         考虑到减轻服务器性能方面，应当使用COOKIE。
     <span class="hljs-number">4</span>、单个cookie保存的数据不能超过<span class="hljs-number">4</span>K，很多浏览器都限制一个站点最多保存<span class="hljs-number">20</span>个cookie。
     <span class="hljs-number">5</span>、所以个人建议：
        将登陆信息等重要信息存放为SESSION
        其他信息如果需要保留，可以放在COOKIE中

     <span class="hljs-number">1</span>, cookie data <span class="hljs-keyword">is</span> stored <span class="hljs-function_start"><span class="hljs-keyword">on</span></span> <span class="hljs-keyword">the</span> customer's browser, session data <span class="hljs-function_start"><span class="hljs-keyword">on</span></span> <span class="hljs-keyword">the</span> server. 
     <span class="hljs-number">2</span>, cookie <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> very safe, others can be analyzed <span class="hljs-keyword">at</span> a <span class="hljs-keyword">local</span> store <span class="hljs-keyword">and</span> COOKIE COOKIE cheat should be used taking <span class="hljs-keyword">into</span> account <span class="hljs-keyword">the</span> security session. 
     <span class="hljs-number">3</span>, session will be within a certain <span class="hljs-property">time</span> saved <span class="hljs-function_start"><span class="hljs-keyword">on</span></span> <span class="hljs-keyword">the</span> server. When accessing <span class="hljs-keyword">the</span> increase, <span class="hljs-keyword">it</span> would be more occupy <span class="hljs-keyword">the</span> performance <span class="hljs-keyword">of</span> your server consider <span class="hljs-keyword">to</span> reduce server performance, you should use COOKIE. 
     <span class="hljs-number">4</span>, <span class="hljs-keyword">the</span> data stored <span class="hljs-keyword">in</span> a single cookie can <span class="hljs-keyword">not</span> exceed <span class="hljs-number">4</span>K, many browsers are limited <span class="hljs-keyword">to</span> a maximum <span class="hljs-keyword">of</span> one site <span class="hljs-keyword">to</span> save <span class="hljs-number">20</span> cookie. 
     <span class="hljs-number">5</span>, so personal recommendations: <span class="hljs-keyword">the</span> login information <span class="hljs-keyword">and</span> other important information <span class="hljs-keyword">is</span> stored <span class="hljs-keyword">as</span> SESSION additional information, <span class="hljs-keyword">if</span> necessary, <span class="hljs-keyword">it</span> can be placed <span class="hljs-keyword">in</span> COOKIE

CSS 相关问题

</div><div id="wmd-preview-section-40" class="wmd-preview-section preview-content">

## CSS-related issues

</div><div id="wmd-preview-section-41" class="wmd-preview-section preview-content">

### display:none和visibility:hidden的区别？

</div><div id="wmd-preview-section-42" class="wmd-preview-section preview-content">

### display: none and visibility: hidden difference?

    display:<span class="hljs-constant">none</span>  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，
    就当他从来不存在。

    visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。

    display: <span class="hljs-constant">none</span> <span class="hljs-built_in">to</span> hide <span class="hljs-operator">the</span> corresponding elements <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> document layout is no longer <span class="hljs-constant">space</span> allocated <span class="hljs-built_in">to</span> <span class="hljs-keyword">it</span>, <span class="hljs-keyword">it</span> is <span class="hljs-operator">the</span> <span class="hljs-keyword">element</span> <span class="hljs-operator">of</span> <span class="hljs-keyword">each</span> side will be closed, <span class="hljs-command"><span class="hljs-keyword">on</span><span class="hljs-title">when</span><span class="hljs-title">he</span><span class="hljs-title">never</span><span class="hljs-title">existed</span>. </span>

    visibility: hidden hides <span class="hljs-operator">the</span> corresponding elements, but still retain <span class="hljs-operator">the</span> original layout <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> <span class="hljs-constant">space</span> <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> document. The difference <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> link andimport CSS is?</div><div id="wmd-preview-section-43" class="wmd-preview-section preview-content">

### CSS中 link 和@import 的区别是？

</div><div id="wmd-preview-section-44" class="wmd-preview-section preview-content">

### The difference in the link andimport CSS is?

    (<span class="hljs-number">1</span>) link属于HTML标签，而<span class="hljs-property">@import</span>是CSS提供的; 
    (<span class="hljs-number">2</span>) 页面被加载的时，link会同时被加载，而<span class="hljs-property">@import</span>引用的CSS会等到页面被加载完再加载;
    (<span class="hljs-number">3</span>) <span class="hljs-keyword">import</span>只在IE5以上才能识别，而link是HTML标签，无兼容问题; 
    (<span class="hljs-number">4</span>) link方式的样式的权重 高于<span class="hljs-property">@import</span>的权重.

    (<span class="hljs-number">1</span>) link belong <span class="hljs-keyword">to</span> HTML tags, <span class="hljs-keyword">and</span> CSSimport <span class="hljs-keyword">is</span> provided; 
    (<span class="hljs-number">2</span>) the page <span class="hljs-keyword">is</span> loaded, link will also be loaded, but referencesimport CSS will wait <span class="hljs-keyword">until</span> the page <span class="hljs-keyword">is</span> finished loading reloading; 
    (<span class="hljs-number">3</span>) Import only <span class="hljs-keyword">to</span> recognize <span class="hljs-keyword">in</span> IE5 <span class="hljs-keyword">or</span> more, <span class="hljs-keyword">while</span> link <span class="hljs-keyword">is</span> HTML tag, <span class="hljs-literal">no</span> compatibility issues; style right 
    (<span class="hljs-number">4</span>) linkimport way <span class="hljs-keyword">of</span> weight above the weight <span class="hljs-keyword">of</span> heavy. Similarities <span class="hljs-keyword">and</span> Differences between absolute <span class="hljs-keyword">and</span> float <span class="hljs-attribute">attributes</span>: position</div><div id="wmd-preview-section-45" class="wmd-preview-section preview-content">

### position:absolute和float属性的异同

</div><div id="wmd-preview-section-46" class="wmd-preview-section preview-content">

### Similarities and Differences between absolute and float attributes: position

    A：共同点：
    对内联元素设置float和absolute属性，可以让元素脱离文档流，并且可以设置其宽高。

    B：不同点：
    float仍会占据位置，position会覆盖文档流中的其他元素。

    A: common: 
    inline element <span class="hljs-operator"><span class="hljs-keyword">set</span><span class="hljs-string">float</span><span class="hljs-keyword">and</span><span class="hljs-string"> absolute</span> property allows elements <span class="hljs-keyword">from</span> the <span class="hljs-keyword">document</span> flow, <span class="hljs-keyword">and</span> can <span class="hljs-keyword">set</span> its width <span class="hljs-keyword">and</span> height. 

    B: Different point: 
    <span class="hljs-built_in">float</span> will still occupy the <span class="hljs-keyword">position</span>, <span class="hljs-keyword">position</span> overrides other elements <span class="hljs-keyword">in</span> the <span class="hljs-keyword">document</span> flow.</span></div><div id="wmd-preview-section-47" class="wmd-preview-section preview-content">

### 介绍一下box-sizing属性？

</div><div id="wmd-preview-section-48" class="wmd-preview-section preview-content">

### Introduce the box-sizing property?

`box-sizing`属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。 

 box-sizing property is primarily used to control element analytical model box model. The default value is content-Box.

*   `content-box`：让元素维持W3C的标准盒模型。元素的宽度/高度由border + padding + content的宽度/高度决定，设置width/height属性指的是content部分的宽/高
*   content-Box : Let element to maintain the standard W3C box model. Width / height of the element / height is determined by the border + padding + content width, set width / height attribute refers to the content portion of the width / height

*   `border-box`：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置width/height属性指的是border + padding + content

*   border-Box : Let element to maintain the traditional box model IE (IE6 and IE6 ~ 7 the following versions of quirks mode). Set width / height attribute refers to the border + padding + content

标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。

Under standard browser, according to W3C box model specification analysis, once the border or modify the elements within distance, it will affect the size of the box element, you have to recalculate the box the size of the elements, thus affecting the layout of the entire page.

</div><div id="wmd-preview-section-49" class="wmd-preview-section preview-content">

### CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

</div><div id="wmd-preview-section-50" class="wmd-preview-section preview-content">

### CSS selectors are there? Which attributes can be inherited? Priority algorithm calculated? Added CSS3 pseudo-classes are those?

    <span class="hljs-number">1.</span>id选择器（ <span class="hljs-comment"># myid）</span>
    <span class="hljs-number">2.</span>类选择器（.myclassname）
    <span class="hljs-number">3.</span>标签选择器（<span class="hljs-operator">div</span>, h1, p）
    <span class="hljs-number">4.</span>相邻选择器（h1 + p）
    <span class="hljs-number">5.</span>子选择器（ul > li）
    <span class="hljs-number">6.</span>后代选择器（li <span class="hljs-operator">a</span>）
    <span class="hljs-number">7.</span>通配符选择器（ * ）
    <span class="hljs-number">8.</span>属性选择器（<span class="hljs-operator">a</span>[<span class="hljs-built_in">rel</span> = <span class="hljs-string">"external"</span>]）
    <span class="hljs-number">9.</span>伪类选择器（<span class="hljs-operator">a</span>: hover, li:nth-child）

    <span class="hljs-number">1.</span>id selector (<span class="hljs-comment"># myid) </span>
    <span class="hljs-number">2.</span> Class selector (.myclassname) 
    <span class="hljs-number">3.</span> Tag selectors (<span class="hljs-operator">div</span>, h1, P) 
    <span class="hljs-number">4.</span> adjacent selector (h1 + P) 
    <span class="hljs-number">5.</span> child selector (ul> li ) 
    <span class="hljs-number">6.</span> descendant selectors (li <span class="hljs-operator">a</span>) 
    <span class="hljs-number">7.</span> wildcard selector (*) 
    <span class="hljs-number">8.</span> attribute selector (<span class="hljs-operator">a</span> [<span class="hljs-built_in">rel</span> = <span class="hljs-string">"external"</span>]) 
    <span class="hljs-number">9.</span> pseudo-class selectors (<span class="hljs-operator">a</span>: hover, li: nth-child)*   可继承的样式： font-size font-family color, text-indent;

*   不可继承的样式：border padding margin width height ;

*   优先级就近原则，同权重情况下样式定义最近者为准;

*   载入样式以最后载入的定位为准;

*   Inheritable style: font-size font-family color, text-indent;

*   Non Inherited Styles: border padding margin width height;

*   Priority under the principle of proximity, with weights whichever the case recently defined style;

*   Loading last loaded positioning styles to prevail;

> 优先级为:

Priority:

    !important >  <span class="hljs-property">id</span> > <span class="hljs-type">class</span> > tag  

    important 比 内联优先级高,但内联比 <span class="hljs-property">id</span> 要高> CSS3新增伪类举例：    p:first-<span class="hljs-keyword">of</span>-<span class="hljs-class"><span class="hljs-keyword">type</span> 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。</span>
    p:last-<span class="hljs-keyword">of</span>-<span class="hljs-class"><span class="hljs-keyword">type</span>  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。</span>
    p:only-<span class="hljs-keyword">of</span>-<span class="hljs-class"><span class="hljs-keyword">type</span>  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。</span>
    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
    p:nth-child(<span class="hljs-number">2</span>)  选择属于其父元素的第二个子元素的每个 <p> 元素。
    :enabled  :disabled 控制表单控件的禁用状态。
    :checked        单选框或复选框被选中。</div><div id="wmd-preview-section-51" class="wmd-preview-section preview-content">

### position的值， relative和absolute分别是相对于谁进行定位的？

</div><div id="wmd-preview-section-52" class="wmd-preview-section preview-content">

### position values, relative and absolute are positioned with respect to whom?

    absolute 
            生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。

    fixed （老IE不支持）
        生成绝对定位的元素，相对于浏览器窗口进行定位。 

    <span class="hljs-built_in">relative</span> 
        生成相对定位的元素，相对于其在普通流中的位置进行定位。 

    static  默认值。没有定位，元素出现在正常的流中

    absolute 
        generate absolute <span class="hljs-keyword">element</span> positioned <span class="hljs-built_in">relative</span> <span class="hljs-built_in">to</span> <span class="hljs-operator">the</span> recent level is <span class="hljs-operator">not</span> static positioned parent <span class="hljs-keyword">element</span> <span class="hljs-built_in">to</span> be positioned. 

    fixed (old IE does <span class="hljs-operator">not</span> support) 
        <span class="hljs-built_in">to</span> generate absolute <span class="hljs-keyword">element</span> positioned <span class="hljs-built_in">relative</span> <span class="hljs-built_in">to</span> <span class="hljs-operator">the</span> browser window positioning. 

    <span class="hljs-built_in">relative</span> 
        generating <span class="hljs-keyword">element</span> <span class="hljs-built_in">relative</span> positioning, <span class="hljs-built_in">relative</span> <span class="hljs-built_in">to</span> its position <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> general stream positioning. 

    static default. No positioning <span class="hljs-keyword">element</span> occurs <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> <span class="hljs-keyword">normal</span> stream</div><div id="wmd-preview-section-53" class="wmd-preview-section preview-content">

### CSS3有哪些新特性？

</div><div id="wmd-preview-section-54" class="wmd-preview-section preview-content">

### CSS3 What’s new?

    CSS3实现圆角（<span class="hljs-attribute">border-radius</span>），阴影（<span class="hljs-attribute">box-shadow</span>），
    对文字加特效（<span class="hljs-attribute">text-shadow</span>、），线性渐变（gradient），旋转（<span class="hljs-attribute">transform</span>）
    <span class="hljs-attribute">transform</span><span class="hljs-value">:<span class="hljs-function">rotate</span>(<span class="hljs-number">9deg</span>) <span class="hljs-function">scale</span>(<span class="hljs-number">0.85</span>,<span class="hljs-number">0.90</span>) <span class="hljs-function">translate</span>(<span class="hljs-number">0px</span>,-<span class="hljs-number">30px</span>) <span class="hljs-function">skew</span>(-<span class="hljs-number">9deg</span>,<span class="hljs-number">0deg</span>);</span><span class="hljs-comment">//旋转,缩放,定位,倾斜</span>
    增加了更多的CSS选择器  多背景 rgba 
    在CSS3中唯一引入的伪元素是<span class="hljs-pseudo">::selection</span>.
    媒体查询，多栏布局
    <span class="hljs-attribute">border-image</span>

    CSS3 rounded corners (<span class="hljs-attribute">border-radius</span>), shadow (<span class="hljs-attribute">box-shadow</span>), 
    add special effects to the <span class="hljs-value">text</span> (<span class="hljs-attribute">text-shadow</span>,), <span class="hljs-tag">a</span> linear gradient (gradient), rotation (<span class="hljs-attribute">transform</span>) 
    <span class="hljs-attribute">transform</span><span class="hljs-value">: Rotate (<span class="hljs-number">9deg</span>) Scale (<span class="hljs-number">0.85</span>,<span class="hljs-number">0.90</span>) translate (<span class="hljs-number">0px</span>, -<span class="hljs-number">30px</span>) skew (-<span class="hljs-number">9deg</span>, <span class="hljs-number">0deg</span>);</span> <span class="hljs-comment">// rotation, scaling, positioning, tilt </span>
    adds more CSS selectors more <span class="hljs-attribute">background</span> rgba 
    unique introduced in CSS3 pseudo-elements <span class="hljs-value">:: selection. 
    Media queries , multi-column layout 
    border-image</span></div><div id="wmd-preview-section-55" class="wmd-preview-section preview-content">

### XML和JSON的区别？

</div><div id="wmd-preview-section-56" class="wmd-preview-section preview-content">

### XML and JSON difference?

    (<span class="hljs-number">1</span>).数据体积方面。
    <span class="hljs-type">JSON</span>相对于<span class="hljs-type">XML</span>来讲，数据的体积小，传递的速度更快些。
    (<span class="hljs-number">2</span>).数据交互方面。
    <span class="hljs-type">JSON</span>与<span class="hljs-type">JavaScript</span>的交互更加方便，更容易解析处理，更好的数据交互。
    (<span class="hljs-number">3</span>).数据描述方面。
    <span class="hljs-type">JSON</span>对数据的描述性比<span class="hljs-type">XML</span>较差。
    (<span class="hljs-number">4</span>).传输速度方面。
    <span class="hljs-type">JSON</span>的速度要远远快于<span class="hljs-type">XML</span>。

    (<span class="hljs-number">1</span>) <span class="hljs-type">The</span> <span class="hljs-typedef"><span class="hljs-keyword">data</span> volume terms. </span>
    <span class="hljs-type">XML</span> <span class="hljs-type">JSON</span> relative terms, the volume <span class="hljs-keyword">of</span> <span class="hljs-typedef"><span class="hljs-keyword">data</span> is small, the speed of delivery faster. </span>
    (<span class="hljs-number">2</span>) aspects <span class="hljs-keyword">of</span> <span class="hljs-typedef"><span class="hljs-keyword">data</span> exchange. </span>
    <span class="hljs-type">JSON</span> and <span class="hljs-type">JavaScript</span> interaction more convenient and easier to parse processing, better <span class="hljs-typedef"><span class="hljs-keyword">data</span> interaction. </span>
    (<span class="hljs-number">3</span>) <span class="hljs-type">The</span> <span class="hljs-typedef"><span class="hljs-keyword">data</span> described aspects. </span>
    <span class="hljs-type">JSON</span> description <span class="hljs-keyword">of</span> <span class="hljs-typedef"><span class="hljs-keyword">data</span> than <span class="hljs-type">XML</span> poor. </span>
    (<span class="hljs-number">4</span>) <span class="hljs-type">The</span> transmission speed. 
    <span class="hljs-type">JSON's</span> speed is much faster than <span class="hljs-type">XML</span>.</div><div id="wmd-preview-section-57" class="wmd-preview-section preview-content">

### 对BFC规范的理解？

</div><div id="wmd-preview-section-58" class="wmd-preview-section preview-content">

### BFC norms of understanding?

          BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。
        （W3C CSS <span class="hljs-number">2.1</span> 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）
        BFC, block-level formatting context, <span class="hljs-operator">a</span> BFC created <span class="hljs-operator">a</span> <span class="hljs-built_in">new</span> box is <span class="hljs-operator">an</span> independent layout, style, child elements inside <span class="hljs-operator">the</span> box will <span class="hljs-operator">not</span> affect <span class="hljs-operator">the</span> outside elements. In <span class="hljs-operator">the</span> same BFC <span class="hljs-constant">two</span> adjoining block-level box <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> vertical direction (<span class="hljs-operator">the</span> direction <span class="hljs-operator">of</span> <span class="hljs-operator">a</span> relationship <span class="hljs-operator">and</span> layout) <span class="hljs-operator">of</span> margin will collapse <span class="hljs-built_in">from</span> happening. 
        (A concept W3C CSS <span class="hljs-number">2.1</span> specification, which determines how <span class="hljs-operator">the</span> elements <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> layout <span class="hljs-operator">of</span> its contents, <span class="hljs-operator">and</span> its relationship <span class="hljs-operator">with</span> other elements <span class="hljs-operator">and</span> interactions.)</div><div id="wmd-preview-section-59" class="wmd-preview-section preview-content">

### 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

</div><div id="wmd-preview-section-60" class="wmd-preview-section preview-content">

### Talk about your understanding of the semantic?

    CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- <span class="hljs-keyword">repeat</span>”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是<span class="hljs-number">6</span>个。对于未来而言，就不需要这样做了，因为有了http2。
    CSS Sprites <span class="hljs-operator">in</span> fact, <span class="hljs-operator">the</span> <span class="hljs-built_in">number</span> <span class="hljs-operator">of</span> pages <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> background image <span class="hljs-keyword">into</span> <span class="hljs-operator">an</span> image <span class="hljs-built_in">file</span>, <span class="hljs-operator">and</span> <span class="hljs-keyword">then</span> use <span class="hljs-operator">the</span> CSS <span class="hljs-string">"background-image"</span>, <span class="hljs-string">"background- repeat"</span>, <span class="hljs-string">"background-position"</span> <span class="hljs-operator">a</span> combination <span class="hljs-operator">of</span> background positioning, background-position can be used Digital can accurately locate <span class="hljs-operator">the</span> position <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> background image. This can reduce <span class="hljs-operator">the</span> cost <span class="hljs-operator">of</span> many pictures request because <span class="hljs-operator">the</span> request takes <span class="hljs-operator">a</span> relatively <span class="hljs-keyword">long</span>; although requests can be complicated, but there are limits, are <span class="hljs-constant">six</span> general browser. For <span class="hljs-operator">the</span> future, there is no need <span class="hljs-built_in">to</span> <span class="hljs-built_in">do</span> so, <span class="hljs-operator">and</span> because <span class="hljs-operator">of</span> http2.</div><div id="wmd-preview-section-61" class="wmd-preview-section preview-content">

## html部分

</div><div id="wmd-preview-section-62" class="wmd-preview-section preview-content">

## html part

</div><div id="wmd-preview-section-63" class="wmd-preview-section preview-content">

### 说说你对语义化的理解？

</div><div id="wmd-preview-section-64" class="wmd-preview-section preview-content">

### Talk about your understanding of the semantic?

    <span class="hljs-number">1</span>，去掉或者丢失样式的时候能够让页面呈现出清晰的结构
    <span class="hljs-number">2</span>，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
    <span class="hljs-number">3</span>，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
    <span class="hljs-number">4</span>，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

    <span class="hljs-number">1</span>, removed <span class="hljs-operator">or</span> lost when allowing page style showing <span class="hljs-built_in">clear</span> structure 
    <span class="hljs-number">2</span>, is conducive <span class="hljs-built_in">to</span> SEO: search engines <span class="hljs-operator">and</span> <span class="hljs-built_in">to</span> establish good communication helps crawlers <span class="hljs-built_in">to</span> crawl more useful information: reptiles rely <span class="hljs-command"><span class="hljs-keyword">on</span><span class="hljs-title">labels</span><span class="hljs-title">to</span><span class="hljs-title">determine</span><span class="hljs-title">the</span><span class="hljs-title">context</span><span class="hljs-title">and</span><span class="hljs-title">the</span><span class="hljs-title">individual</span><span class="hljs-title">right</span><span class="hljs-title">keyword</span><span class="hljs-title">weight</span>; </span>
    <span class="hljs-number">3</span>, easy <span class="hljs-built_in">to</span> <span class="hljs-built_in">resolve</span> other devices (such <span class="hljs-keyword">as</span> <span class="hljs-operator">a</span> screen reader, blind readers, mobile devices) <span class="hljs-operator">in</span> meaningful ways <span class="hljs-built_in">to</span> render web pages;     <span class="hljs-number">4</span>, easy <span class="hljs-built_in">to</span> team development <span class="hljs-operator">and</span> maintenance, more readable semantic, is under Important Trends step <span class="hljs-constant">right</span> <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> page, follow <span class="hljs-operator">the</span> W3C standards team follow this standard, <span class="hljs-operator">the</span> difference can be reduced.</div><div id="wmd-preview-section-65" class="wmd-preview-section preview-content">

### Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

</div><div id="wmd-preview-section-66" class="wmd-preview-section preview-content">

### Doctype role? Strict mode and mixed mode how to distinguish? They mean?

    （<span class="hljs-number">1</span>）、<!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。 

    （<span class="hljs-number">2</span>）、严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。

    （<span class="hljs-number">3</span>）、在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

    （<span class="hljs-number">4</span>）、DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。  

    (<span class="hljs-number">1</span>), <! DOCTYPE> declaration <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> document <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> front, <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> <html> tag <span class="hljs-keyword">before</span>. Tells <span class="hljs-operator">the</span> browser <span class="hljs-built_in">to</span> render <span class="hljs-operator">the</span> document <span class="hljs-operator">in</span> which mode. 

    (<span class="hljs-number">2</span>) strict mode layout <span class="hljs-operator">and</span> JS mode <span class="hljs-operator">of</span> operation is based <span class="hljs-command"><span class="hljs-keyword">on</span><span class="hljs-title">the</span><span class="hljs-title">highest</span><span class="hljs-title">standards</span><span class="hljs-title">of</span><span class="hljs-title">the</span><span class="hljs-title">browser</span><span class="hljs-title">supports</span><span class="hljs-title">running</span>. </span>

    (<span class="hljs-number">3</span>), <span class="hljs-operator">in</span> promiscuous mode, page backward compatible <span class="hljs-operator">with</span> liberal display. Simulate <span class="hljs-operator">the</span> behavior <span class="hljs-operator">of</span> older browsers <span class="hljs-built_in">do</span> <span class="hljs-operator">not</span> work <span class="hljs-built_in">to</span> prevent <span class="hljs-operator">the</span> site. 

    (<span class="hljs-number">4</span>), DOCTYPE does <span class="hljs-operator">not</span> exist <span class="hljs-operator">or</span> incorrectly formatted document will lead <span class="hljs-built_in">to</span> promiscuous mode rendering.   </div><div id="wmd-preview-section-67" class="wmd-preview-section preview-content">

### 你知道多少种Doctype文档类型？

</div><div id="wmd-preview-section-68" class="wmd-preview-section preview-content">

### Do you know how many document types Doctype?

     该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
     HTML <span class="hljs-number">4.01</span> 规定了三种文档类型：Strict、Transitional 以及 Frameset。
     XHTML <span class="hljs-number">1.0</span> 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
    Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks
     （包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

     The label can <span class="hljs-keyword">be</span> declared DTD three types, respectively strict <span class="hljs-keyword">version</span>, interim <span class="hljs-keyword">version</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">an</span> HTML-based documentation framework. 
     HTML <span class="hljs-number">4.01</span> specifies three document <span class="hljs-built_in">type</span><span class="hljs-variable">s:</span> Strict, Transitional, <span class="hljs-built_in">and</span> Frameset. 
     XHTML <span class="hljs-number">1.0</span> specifies three XML document <span class="hljs-built_in">type</span><span class="hljs-variable">s:</span> Strict, Transitional, <span class="hljs-built_in">and</span> Frameset. 
     Standards (standard) <span class="hljs-built_in">mode</span> (that <span class="hljs-keyword">is</span>, in strict rendering <span class="hljs-built_in">mode</span>) complies with the latest standards <span class="hljs-keyword">for</span> rendering Web pages, <span class="hljs-keyword">while</span> Quirks 

(inclusive) mode (that is, loose rendering mode or compatibility mode) is used to render conventional web browser designed.

</div><div id="wmd-preview-section-69" class="wmd-preview-section preview-content">

## HTML与XHTML——二者有什么区别

</div><div id="wmd-preview-section-70" class="wmd-preview-section preview-content">

## HTML and XHTML– What is the difference

    区别：
    <span class="hljs-number">1.</span>所有的标记都必须要有一个相应的结束标记
    <span class="hljs-number">2.</span>所有标签的元素和属性的名字都必须使用小写
    <span class="hljs-number">3.</span>所有的XML标记都必须合理嵌套
    <span class="hljs-number">4.</span>所有的属性必须用引号<span class="hljs-string">""</span>括起来
    <span class="hljs-number">5.</span>把所有<和&特殊符号用编码表示
    <span class="hljs-number">6.</span>给所有属性赋一个值
    <span class="hljs-number">7.</span>不要在注释内容中使“<span class="hljs-comment">--”</span>
    <span class="hljs-number">8.</span>图片必须有说明文字

    Difference: 
    <span class="hljs-number">1.</span> All tags must have <span class="hljs-operator">a</span> corresponding <span class="hljs-function"><span class="hljs-keyword">end</span><span class="hljs-title">tag</span><span class="hljs-title">element</span><span class="hljs-title">and</span><span class="hljs-title">attribute</span><span class="hljs-title">names</span></span>
    <span class="hljs-number">2.</span> All tags must be lowercase 
    <span class="hljs-number">3.</span> All <span class="hljs-operator">the</span> XML tags must be properly nested 
    <span class="hljs-number">4.</span> All attributes must be quoted. <span class="hljs-string">" "</span>enclosed 
    <span class="hljs-number">5.</span> Put all <span class="hljs-operator">the</span> <<span class="hljs-operator">and</span> & special symbols <span class="hljs-operator">with</span> <span class="hljs-operator">the</span> coded representation 
    <span class="hljs-number">6.</span> assign <span class="hljs-operator">a</span> <span class="hljs-built_in">value</span> <span class="hljs-built_in">to</span> all <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> properties <span class="hljs-operator">in</span> <span class="hljs-operator">the</span> comment <span class="hljs-number">7.</span> Do <span class="hljs-operator">not</span> manipulation <span class="hljs-string">"-"</span> 
    <span class="hljs-number">8.</span> The image must have caption</div><div id="wmd-preview-section-71" class="wmd-preview-section preview-content">

## 常见兼容性问题？

</div><div id="wmd-preview-section-72" class="wmd-preview-section preview-content">

## Common compatibility problems?

    * png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.

    * 浏览器默认的<span class="hljs-keyword">margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
    </span>
    * IE6双边距<span class="hljs-keyword">bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。 </span>

    * 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了<span class="hljs-keyword">margin-left或margin-right，margin值会加倍。）
    </span>  <span class="hljs-label">#box</span>{ float:left<span class="hljs-comment">; width:10px; margin:0 0 0 100px;} </span>

     这种情况之下IE会产生<span class="hljs-number">20</span>px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline<span class="hljs-comment">;将其转化为行内属性。(_这个符号只有ie6会识别)</span>

    *  渐进识别的方式，从总体中逐渐排除局部。 

    * Png24 <span class="hljs-keyword">bit </span>image appears on iE6 <span class="hljs-keyword">browser </span><span class="hljs-keyword">background, </span>the solution is made ​​PNG8\. <span class="hljs-keyword">It </span>can refer to a script processing. 

    * The <span class="hljs-keyword">browser's </span>default <span class="hljs-keyword">margin </span><span class="hljs-keyword">and </span>padding. The solution is to <span class="hljs-keyword">add </span>a <span class="hljs-preprocessor">global</span> * {<span class="hljs-keyword">margin: </span><span class="hljs-number">0</span><span class="hljs-comment">; padding: 0;} to unify. </span>

    * IE6 <span class="hljs-keyword">bilateral </span>Distance <span class="hljs-keyword">bug: </span>After the <span class="hljs-keyword">block </span>attribute labels float, there are rampant <span class="hljs-keyword">margin </span>circumstances, in ie6 show larger <span class="hljs-keyword">margin </span>than the settings. 

    * Double ie generated from the float (IE6 <span class="hljs-keyword">bilateral </span>distance problem: In IE6, <span class="hljs-preprocessor">if</span> the element is set to float, <span class="hljs-preprocessor">while</span> setting the <span class="hljs-keyword">margin-left </span>or <span class="hljs-keyword">margin-right, </span><span class="hljs-keyword">margin </span>value will double.) 

#box {float: left; width: 10px; margin: 0 0 0 100px;}

Under such circumstances IE will produce 20px distance, the solution is to add –_ display in the label style float control: inline; be converted to inline property. (_ This symbol identifies only ie6)

    * gradual recognition <span class="hljs-keyword">of</span> the way <span class="hljs-keyword">from</span> the local population gradually excluded. 

      首先，巧妙的使用“\<span class="hljs-number">9</span>”这一标记，将<span class="hljs-type">IE</span>游览器从所有情况中分离出来。 
      接着，再次使用“+”将<span class="hljs-type">IE8</span>和<span class="hljs-type">IE7</span>、<span class="hljs-type">IE6</span>分离开来，这样<span class="hljs-type">IE8</span>已经独立识别。

      <span class="hljs-type">First</span>, the clever use <span class="hljs-keyword">of</span> <span class="hljs-string">"\ 9"</span> <span class="hljs-type">This</span> marks the <span class="hljs-type">IE</span>'s browser separated <span class="hljs-keyword">out</span> <span class="hljs-keyword">from</span> all the circumstances. 
      <span class="hljs-type">Then</span>, again <span class="hljs-keyword">using</span> the <span class="hljs-string">"+"</span> to <span class="hljs-type">IE8</span> <span class="hljs-keyword">and</span> <span class="hljs-type">IE7</span>, <span class="hljs-type">IE6</span> separated, so that <span class="hljs-type">IE8</span> has been independently identified. 

      css
          .bb{
           background-color:<span class="hljs-comment">#f1ee18;/*所有识别*/</span>
          .background-color:<span class="hljs-comment">#00deff\9; /*IE6、7、8识别*/</span>
          +background-color:<span class="hljs-comment">#a200ff;/*IE6、7识别*/</span>
          _background-color:<span class="hljs-comment">#1e0bd1;/*IE6识别*/ </span>
          } 

    *  <span class="hljs-type">IE</span>下,可以使用获取常规属性的方法来获取自定义属性,
       也可以使用getAttribute()获取自定义属性;
       <span class="hljs-type">Firefox</span>下,只能使用getAttribute()获取自定义属性. 
       解决方法:统一通过getAttribute()获取自定义属性.

    * <span class="hljs-type">IE</span>下,event对象有x,y属性,但是没有pageX,pageY属性; 
      <span class="hljs-type">Firefox</span>下,event对象有pageX,pageY属性,但是没有x,y属性.

    * 解决方法：（条件注释）缺点是在<span class="hljs-type">IE</span>浏览器下可能会增加额外的<span class="hljs-type">HTTP</span>请求数。

    * <span class="hljs-type">Chrome</span> 中文界面下默认会将小于 <span class="hljs-number">12</span>px 的文本强制按照 <span class="hljs-number">12</span>px 显示, 
      可通过加入 <span class="hljs-type">CSS</span> 属性 -webkit-text-size-adjust: none; 解决.

    * 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变<span class="hljs-type">CSS</span>属性的排列顺序:
    L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}

    * 怪异模式问题：漏写<span class="hljs-type">DTD</span>声明，<span class="hljs-type">Firefox</span>仍然会按照标准模式来解析网页，但在<span class="hljs-type">IE</span>中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写<span class="hljs-type">DTD</span>声明的好习惯。现在可以使用[html5](http://www.w3.org/<span class="hljs-type">TR</span>/html5/single-page.html)推荐的写法：<doctype html>

    * 上下margin重合问题
    ie和ff都存在，相邻的两个<span class="hljs-keyword">div</span>的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
    解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
    * ie6对png图片格式支持不好(引用一段脚本处理)

    * under <span class="hljs-type">IE</span>, you can use the <span class="hljs-keyword">method</span> to get the general properties <span class="hljs-keyword">for</span> custom properties, 

you can also use getAttribute () Gets the custom attributes;  

   under Firefox, only Use getAttribute () Gets custom attributes.  

   Workaround: Uniform for custom properties through getAttribute ().

    * Under IE, event object has x, y <span class="hljs-keyword">attributes</span>, but no pageX, pageY <span class="hljs-keyword">property</span><span class="hljs-title"></span>; 

under Firefox, event object has pageX, pageY property, but there is no x, y properties.

    * Solution :( conditional comments) drawback <span class="hljs-keyword">is</span> that <span class="hljs-keyword">in</span> IE browser may <span class="hljs-keyword">add</span> additional HTTP requests. 

    * Under Chrome Chinese <span class="hljs-keyword">interface</span> will be smaller than <span class="hljs-keyword">default</span> <span class="hljs-keyword">to</span> force the <span class="hljs-number">12</span>px <span class="hljs-number">12</span>px text display, 

by the addition of CSS properties -webkit-text-size-adjust: none; resolved.

    * After hover style <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> accessible <span class="hljs-keyword">by</span> hyperlink <span class="hljs-keyword">is</span> clicked appears visited The Hyperlink style <span class="hljs-keyword">does</span> <span class="hljs-keyword">not</span> have hover <span class="hljs-keyword">and</span> active <span class="hljs-keyword">the</span> solution <span class="hljs-keyword">is</span> <span class="hljs-keyword">to</span> change <span class="hljs-keyword">the</span> order <span class="hljs-keyword">of</span> CSS properties: 

LVHA: a: link {} a: visited {} a: hover {} a: Active {}

    * weird modalities: Leakage <span class="hljs-built_in">write</span> DTD statement, Firefox will still be <span class="hljs-operator">in</span> accordance <span class="hljs-operator">with</span> <span class="hljs-operator">the</span> standard model <span class="hljs-built_in">to</span> <span class="hljs-built_in">resolve</span> <span class="hljs-operator">the</span> page, but IE will trigger quirks mode. To avoid quirks mode gives us unnecessary trouble, <span class="hljs-keyword">it</span> is best <span class="hljs-built_in">to</span> develop <span class="hljs-operator">the</span> good habit <span class="hljs-operator">of</span> writing DTD declaration. You can now use [html5] (<span class="hljs-keyword">http</span>://www.w3.org/TR/html5/single-page.html) recommended notation: <DOCTYPE html> 

    * top <span class="hljs-operator">and</span> bottom margin overlap problem 

ie and ff are present, adjacent both margin-left and margin-right does not coincide div, but margin-top and margin-bottom but it will coincide occur.  

Solution, to develop good coding habits, while using margin-top or while using margin-bottom.  

    * Ie6 png image format support is not good for (quote a script processing)

</div><div id="wmd-preview-section-73" class="wmd-preview-section preview-content">

### 解释下浮动和它的工作原理？清除浮动的技巧

</div><div id="wmd-preview-section-74" class="wmd-preview-section preview-content">

### Floating and explain how it works? Clear float tips

    浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
    <span class="hljs-type">Floating</span> elements <span class="hljs-keyword">from</span> the document flow, does <span class="hljs-keyword">not</span> occupy space. <span class="hljs-type">Floats</span> across the border to stay its borders contain <span class="hljs-keyword">or</span> floating elements. 

    <span class="hljs-number">1</span>.使用空标签清除浮动。
       这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。
    <span class="hljs-number">2</span>.使用overflow。
       给包含浮动元素的父标签添加css属性 overflow:<span class="hljs-type">auto</span>; zoom:<span class="hljs-number">1</span>; zoom:<span class="hljs-number">1</span>用于兼容<span class="hljs-type">IE6</span>。
    <span class="hljs-number">3</span>.使用after伪对象清除浮动。
       该方法只适用于非<span class="hljs-type">IE</span>浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:<span class="hljs-number">0</span>，否则该元素会比实际高出若干像素；

    <span class="hljs-number">1</span>. <span class="hljs-type">Clear</span> <span class="hljs-type">float</span> <span class="hljs-keyword">with</span> an empty label. <span class="hljs-type">This</span> <span class="hljs-keyword">method</span> <span class="hljs-keyword">is</span> to add an empty label definition css clear <span class="hljs-keyword">in</span> all floating behind the label: both the disadvantages <span class="hljs-keyword">is</span> to increase the meaningless labels. 
    <span class="hljs-number">2</span>. <span class="hljs-type">Use</span> the overflow. <span class="hljs-type">To</span> a parent tag contains floating elements add css property overflow: <span class="hljs-type">auto</span>; zoom: <span class="hljs-number">1</span>; zoom: <span class="hljs-number">1</span> <span class="hljs-keyword">for</span> compatibility <span class="hljs-keyword">with</span> <span class="hljs-type">IE6</span>. 
    <span class="hljs-number">3</span>. <span class="hljs-type">Use</span> after pseudo remove floating objects. <span class="hljs-type">This</span> <span class="hljs-keyword">method</span> applies only to non-<span class="hljs-type">IE</span> browsers. <span class="hljs-type">Specific</span> wording may refer to the following examples. <span class="hljs-type">Use</span> should pay attention to the following points. <span class="hljs-type">First</span>, the <span class="hljs-keyword">method</span> must be <span class="hljs-type">set</span> to clear the height <span class="hljs-keyword">of</span> the floating element's pseudo-objects: <span class="hljs-number">0</span>, otherwise the element will be much higher than the actual number <span class="hljs-keyword">of</span> pixels;</div><div id="wmd-preview-section-75" class="wmd-preview-section preview-content">

### 浮动元素引起的问题和解决办法？

</div><div id="wmd-preview-section-76" class="wmd-preview-section preview-content">

### Problems caused by floating elements and solutions?

    浮动元素引起的问题：

    Problems caused <span class="hljs-keyword">by</span> <span class="hljs-operator">the</span> floating elements: 

    （<span class="hljs-number">1</span>）父元素的高度无法被撑开，影响与父元素同级的元素
    （<span class="hljs-number">2</span>）与浮动元素同级的非浮动元素（内联元素）会跟随其后
    （<span class="hljs-number">3</span>）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

    (<span class="hljs-number">1</span>) height <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> parent <span class="hljs-keyword">element</span> can <span class="hljs-operator">not</span> be softened, peer influence <span class="hljs-operator">and</span> elements <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> parent <span class="hljs-keyword">element</span> 
    (<span class="hljs-number">2</span>) <span class="hljs-operator">and</span> non-floating elements floating <span class="hljs-keyword">element</span> siblings (inline elements) will follow thereafter 
    (<span class="hljs-number">3</span>) <span class="hljs-keyword">if</span> <span class="hljs-operator">not</span> <span class="hljs-operator">the</span> <span class="hljs-keyword">first</span> <span class="hljs-keyword">element</span> <span class="hljs-operator">of</span> float, <span class="hljs-keyword">then</span> that <span class="hljs-keyword">element</span> is also required <span class="hljs-keyword">before</span> <span class="hljs-operator">the</span> float, otherwise <span class="hljs-keyword">it</span> will affect <span class="hljs-operator">the</span> structure <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> page displayed

解决方法： 

使用`CSS`中的`clear:both`;属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加`clearfix`样式：

Workaround: use CSS in Clear: Both ; attribute to clear floating elements 2,3 resolve the problem, the problem 1, add the following styles to parent element Add clearfix style:

    <span class="hljs-class">.clearfix</span><span class="hljs-pseudo">:after</span><span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">content</span>:<span class="hljs-value"><span class="hljs-string">"."</span></span></span>;<span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> block</span></span>;<span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"><span class="hljs-number">0</span></span></span>;<span class="hljs-rule"><span class="hljs-attribute">clear</span>:<span class="hljs-value"> both</span></span>;<span class="hljs-rule"><span class="hljs-attribute">visibility</span>:<span class="hljs-value"> hidden</span></span>;}</span>
    <span class="hljs-class">.clearfix</span><span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> inline-block</span></span>;}</span> <span class="hljs-comment">/* for IE/Mac */</span>

**清除浮动的几种方法：**

    <span class="hljs-number">1</span>，额外标签法，<<span class="hljs-keyword">div</span> style=<span class="hljs-string">"clear:both;"</span>></<span class="hljs-keyword">div</span>>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
    <span class="hljs-number">2</span>，使用<span class="hljs-keyword">after</span>伪类

Clear float several ways:

    <span class="hljs-number">1</span>, additional labeling, <div style = <span class="hljs-string">"clear: both;"</span>> </ div> (<span class="hljs-attribute">disadvantage</span>: But <span class="hljs-keyword">this</span> approach would cause additional HTML tag structure looks simple enough) 
    <span class="hljs-number">2</span>, use after pseudo-<span class="hljs-class"><span class="hljs-keyword">class</span></span>

    <span class="hljs-comment">#parent:after{</span>
        <span class="hljs-attribute">content</span>:<span class="hljs-string">"."</span>;
        <span class="hljs-attribute">height</span>:<span class="hljs-number">0</span>;
        <span class="hljs-attribute">visibility</span>:hidden;
        <span class="hljs-attribute">display</span>:block;
        <span class="hljs-attribute">clear</span>:both;
        }

    <span class="hljs-number">3</span>,浮动外部元素
    <span class="hljs-number">4</span>,设置<span class="javascript">overflow</span>为<span class="javascript">hidden</span>或者auto

    <span class="hljs-number">3</span>, floating external element 
    <span class="hljs-number">4</span>, <span class="hljs-keyword">is</span> set to <span class="javascript">hidden</span><span class="javascript"> overflow</span> <span class="hljs-keyword">or</span> auto</div><div id="wmd-preview-section-77" class="wmd-preview-section preview-content">

### IE 8以下版本的浏览器中的盒模型有什么不同

</div><div id="wmd-preview-section-78" class="wmd-preview-section preview-content">

### IE 8 the following versions of the browser box model What is the difference

    <span class="hljs-label">IE8</span>以下浏览器的盒模型中定义的元素的宽高不包括内边距和边框

    <span class="hljs-label">The</span> following <span class="hljs-keyword">box </span>model IE8 <span class="hljs-keyword">browser's </span>width <span class="hljs-keyword">and </span>height defined elements does not <span class="hljs-preprocessor">include</span> padding <span class="hljs-keyword">and </span><span class="hljs-keyword">border</span></div><div id="wmd-preview-section-79" class="wmd-preview-section preview-content">

### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。

</div><div id="wmd-preview-section-80" class="wmd-preview-section preview-content">

### DOM manipulation - how to add, remove, move, copy, create, and find nodes.

    （<span class="hljs-number">1</span>）创建新节点

          <span class="hljs-function"><span class="hljs-title">createDocumentFragment</span><span class="hljs-params">()</span></span>    <span class="hljs-comment">//创建一个DOM片段</span>

          <span class="hljs-function"><span class="hljs-title">createElement</span><span class="hljs-params">()</span></span>   <span class="hljs-comment">//创建一个具体的元素</span>

          <span class="hljs-function"><span class="hljs-title">createTextNode</span><span class="hljs-params">()</span></span>   <span class="hljs-comment">//创建一个文本节点</span>

    （<span class="hljs-number">2</span>）添加、移除、替换、插入

          <span class="hljs-function"><span class="hljs-title">appendChild</span><span class="hljs-params">()</span></span>

          <span class="hljs-function"><span class="hljs-title">removeChild</span><span class="hljs-params">()</span></span>

          <span class="hljs-function"><span class="hljs-title">replaceChild</span><span class="hljs-params">()</span></span>

          <span class="hljs-function"><span class="hljs-title">insertBefore</span><span class="hljs-params">()</span></span> <span class="hljs-comment">//在已有的子节点前插入一个新的子节点</span>

    （<span class="hljs-number">3</span>）查找

          <span class="hljs-function"><span class="hljs-title">getElementsByTagName</span><span class="hljs-params">()</span></span>    <span class="hljs-comment">//通过标签名称</span>

          <span class="hljs-function"><span class="hljs-title">getElementsByName</span><span class="hljs-params">()</span></span>    <span class="hljs-comment">//通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)</span>

          <span class="hljs-function"><span class="hljs-title">getElementById</span><span class="hljs-params">()</span></span>    <span class="hljs-comment">//通过元素Id，唯一性</span>

     (<span class="hljs-number">1</span>) Create <span class="hljs-tag">a</span> new node 

          createDocumentFragment () <span class="hljs-comment">// Create a DOM fragment </span>

          createElement () <span class="hljs-comment">// create a specific element </span>

          createTextNode () <span class="hljs-comment">// Create a text node </span>

     (<span class="hljs-number">2</span>) to add, remove, replace, insert 

          appendChild () 

          removeChild ( ) 

          replaceChild () 

          insertBefore () <span class="hljs-comment">// before the existing child node into a new child node </span>

(3) Find

          getElementsByTagName () // <span class="hljs-keyword">by</span> tag name 

          getElementsByName () // <span class="hljs-keyword">by</span> the <span class="hljs-keyword">value</span> <span class="hljs-keyword">of</span> the Name property <span class="hljs-keyword">of</span> the <span class="hljs-literal">element</span> (IE fault tolerance Strong, will be an <span class="hljs-keyword">array</span>, including name id equal <span class="hljs-keyword">value</span>) 

          getElementById () // <span class="hljs-keyword">by</span> elemental Id, uniqueness</div><div id="wmd-preview-section-81" class="wmd-preview-section preview-content">

### html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

</div><div id="wmd-preview-section-82" class="wmd-preview-section preview-content">

### What’s new html5, removing those elements? How to deal with a new label HTML5 browser compatibility problems? How to distinguish between HTML and HTML5?

    * HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

    * 拖拽释放(Drag <span class="hljs-operator">and</span> drop) API 
      语义化更好的内容标签（header,nav,footer,aside,article,section）
      音频、视频API(audio,video)
      画布(Canvas) API
      地理(Geolocation) API
      本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
      sessionStorage 的数据在浏览器关闭后自动删除

      表单控件，calendar、<span class="hljs-built_in">date</span>、<span class="hljs-built_in">time</span>、email、url、search  
      新的技术webworker, websocket, Geolocation

    * 移除的元素

    纯表现的元素：basefont，big，center，font, s，strike，tt，u；

    对可用性产生负面影响的元素：frame，frameset，noframes；

    支持HTML5新标签：

    * IE8/IE7/IE6支持通过document.createElement方法产生的标签，
      可以利用这一特性让这些浏览器支持HTML5新标签，

      浏览器支持新标签后，还需要添加标签默认的样式：

    * 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
       <!<span class="hljs-comment">--[if lt IE 9]> </span>
       <script> src=<span class="hljs-string">"http://html5shim.googlecode.com/svn/trunk/html5.js"</span></script> 
       <![endif]<span class="hljs-comment">--> </span>

    * HTML5 now is <span class="hljs-operator">not</span> <span class="hljs-operator">a</span> subset <span class="hljs-operator">of</span> SGML, mainly <span class="hljs-built_in">to</span> increase <span class="hljs-operator">with</span> respect <span class="hljs-built_in">to</span> <span class="hljs-operator">the</span> image, location, storage, multi-tasking <span class="hljs-operator">and</span> other        features. 

    * Drag release (Drag <span class="hljs-operator">and</span> drop) API 
    semantic content better label (header, nav, footer, aside, article, section) 
    audio, video, API (audio, video) 
    canvas (Canvas) API 
    geography (Geolocation) API 
    Local localStorage offline storage <span class="hljs-keyword">for</span> <span class="hljs-keyword">long</span> term storage <span class="hljs-operator">of</span> data, <span class="hljs-operator">the</span> browser is closed <span class="hljs-keyword">after</span> data is <span class="hljs-operator">not</span> lost; 
    sessionStorage <span class="hljs-operator">of</span> data <span class="hljs-keyword">after</span> <span class="hljs-operator">the</span> browser is closed automatically <span class="hljs-built_in">delete</span> 

    form controls, calendar, <span class="hljs-built_in">date</span>, <span class="hljs-built_in">time</span>, email, url, search   
    WebWorker <span class="hljs-built_in">new</span> technologies, websocket, Geolocation 

    * Remove The elements <span class="hljs-operator">of</span> 

the element of pure performance: basefont, big, center, font, s, strike, tt, u;

adversely affect the availability of the elements of: frame, frameset, noframes;

support HTML5 new label:

    * <span class="hljs-type">IE8</span> / <span class="hljs-type">IE7</span> / <span class="hljs-type">IE6</span> support through document.createElement <span class="hljs-keyword">method</span> <span class="hljs-keyword">of</span> producing labels, 

can use this feature to allow these browsers support HTML5 new label,

after the browser to support the new label, you also need to add tags default style:

    * Of course, the best way <span class="hljs-keyword">is</span> the direct use <span class="hljs-keyword">of</span> mature framework, use the most <span class="hljs-keyword">is</span> html5shim framework 

    如何区分： DOCTYPE声明<span class="hljs-string">\新增的结构元素\功能元素</span>

    How <span class="hljs-keyword">to</span> <span class="hljs-attribute">distinguish</span>: DOCTYPE declaration <span class="hljs-string">\</span> <span class="hljs-keyword">new</span> structural elements <span class="hljs-string">\</span> functional elements iframe advantages <span class="hljs-keyword">and</span> disadvantages?</div><div id="wmd-preview-section-83" class="wmd-preview-section preview-content">

## iframe的优缺点？

    <span class="hljs-number">1.</span><iframe>优点：

        解决加载缓慢的第三方内容如图标和广告等的加载问题
        Security sandbox
        并行加载脚本

        solve slow <span class="hljs-built_in">to</span> <span class="hljs-built_in">load</span> <span class="hljs-keyword">third</span>-party content such <span class="hljs-keyword">as</span> icons <span class="hljs-operator">and</span> advertisements <span class="hljs-operator">of</span> loading problems 
        Security sandbox 
        parallel <span class="hljs-built_in">load</span> script 

    <span class="hljs-number">2.</span><iframe>的缺点：

        *iframe会阻塞主页面的Onload事件；

        *即时内容为空，加载也需要时间
        *没有语意 

        * iframes clog Onload event <span class="hljs-operator">of</span> <span class="hljs-operator">the</span> main page; 

        * Instant content is <span class="hljs-constant">empty</span>, <span class="hljs-keyword">it</span> takes <span class="hljs-built_in">time</span> <span class="hljs-built_in">to</span> <span class="hljs-built_in">load</span> 
        * no semantics</div></div>