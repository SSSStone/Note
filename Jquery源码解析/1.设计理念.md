#Jquery源码解析--设计理念
[TOC]
##设计理念
jQuery是一个优秀的Javascript框架。它是轻量级的js库 ，它兼容CSS3，还兼容各种浏览器（IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+），jQuery2.0及后续版本将不再支持IE6/7/8浏览器。jQuery使用户能更方便地处理HTML（标准通用标记语言下的一个应用）、events、实现动画效果，并且方便地为网站提供AJAX交互。jQuery还有一个比较大的优势是，它的文档说明很全，而且各种应用也说得很详细，同时还有许多成熟的插件可供选择。jQuery能够使用户的html页面保持代码和html内容分离，也就是说，不用再在html里面插入一堆js来调用命令了，只需定义id即可。

`The Write Less,Do More`（写更少，做更多），无疑就是jQuery的核心理念，简洁的API、优雅的链式、强大的查询与便捷的操作。从而把jQuery打造成前端世界的一把利剑，所向披靡！

###简洁的API:
```
$.on
$.css
$.ajax
…. 
```
###优雅的链式:
```
var jqxhr = $.ajax( "example.php" )
    .done(function() { alert("success"); })
    .fail(function() { alert("error"); })
    .always(function() { alert("complete"); });
```
###强大的选择器
```
$("div, span, p.myClass" )
$("div span:first-child")
$("tr:visible")
…
```
###便捷的操作：
```
$("p").removeClass("myClass noClass").addClass("yourClass");
$("ul li:last").addClass(function(index) {
   return"item-" + index;
});
$('.container').append($('h2'));
…
```