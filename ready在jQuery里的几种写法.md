# ready在jQuery里的几种写法

>引用自@jimzh
>https://www.douban.com/note/413622487/

1、最常用也是最标准的

``` javascript
$(document).ready(){

});
```

2、是上面的简写:

``` javascript
$(function(){

})
```

很奇怪？为什么能这样？不是判断`document`对象是否 `ready`然后才执行函数的么?`document`哪去了?我们看下`jQuery`的源代码:

 `jQuery`的构造函数；

    var jQuery = function( a, c ) {}

`$(document).ready()`的简写形式，只有在$(function(){...})下才会执行；

    if ( a && typeof a == "function" && jQuery.fn.ready ) return jQuery(document).ready(a);

确保参数a非空，默认值为document；

    a = a || ntext || document;

我们再看下$这个方法的参数

    $(selector,context)

第一个为选择器,第二个是容器
如果不填就默认为document。

3、
``` javascript
jQuery(document).ready(function(){

});
```

4、
``` javascript
jQuery(function($){
	alert($("#ready1");
});
```

第四种方式一般用在处理`jQuery`的`$`和别的库冲突的时候用的,通过`jQuery.noConflict()`这个方法,我们就可以直接在代码中通过`jQuery`来代替`$`来使用,但又习惯了使用`$`怎么办?看下面的代码:

``` javascript
jQuery.noConflict();
jQuery(function($){
	alert($("#ready1"l());   //我们又能用上$符号了
});
```