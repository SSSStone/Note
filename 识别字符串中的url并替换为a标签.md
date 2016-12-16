#识别字符串中的url并替换为a标签

>转自：[zhangxinxu](http://www.zhangxinxu.com)
>原文地址：http://www.zhangxinxu.com/wordpress/?p=749

##检测

**检测**就是检测文字（字符串）内部是否有符合http地址的内容。

验证HTTP地址的正则表达式如下：

```javascript
var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
```

前一部分匹配http或是https开头的URL字符串地址，后面一部分匹配一些字符，英文字符、下划线(_)、点号(.)、问号(?)以及等号(=)，连接短线(-)等。

##替换
说到JavaScript中的替换功能，首先想到的自然是replace属性了，replace属性强大之处在于其支持正则表达式，可以对符合正则的字符串进行替换。
例如，我们要替换掉字符串两端的空格就可以使用类似下面的语句：

``` javascript
var s = " blank ";
s = s.replace(/^\s+(.*?)\s+$/, "");
console.log(s);
// "blank"
```

同样的，这里只要将匹配的http地址替换成<a>标签嵌套的含有href属性的http地址就可以了。

现在有个问题是，如何高效的获取匹配的字符串呢。在正则表达式中，有个叫做分组及反向引用的概念。例如有个RegExp构造函数，在调用了`test()`方法后，所有的反向引用都被保存在这个RegExp构造函数中，从`RegExp.$1`（它保存了第一个反向引用）开始，如果还有第二个反向引用，就是`RegExp.$2`，如果还有第三个，就是`RegExp.$3`，依次类推。

反向引用也可以用在String对象的replace方法中，也就是本文用到的字符串替换的方法中，所以我们就可以使用`$1` `$2`来获取正则表达式的分组内容，实现高效的正则替换。参见如下代码：

``` javascript
var v = "欢迎访问我的个人网站：http://www.zhangxinxu.com/";
v = v.replace(reg, "<a href='$1$2'>$1$2</a>"); //这里的reg就是上面的正则表达式
console.log(v);
```