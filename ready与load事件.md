# ready与load事件

jQuery有3种针对文档加载的方法

```javascript
$(document).ready(function() {
    // ...代码...
})
//document ready 简写
$(function() {
    // ...代码...
})
$(document).load(function() {
    // ...代码...
})
```

ready先执行，load后执行。

## DOM文档加载的步骤

1. 解析HTML结构。
2. 加载外部脚本和样式表文件。
3. 解析并执行脚本代码。
4. 构造HTML DOM模型。//ready
5. 加载图片等外部文件。
6. 页面加载完毕。//load

## jQuery如何处理加载时机

```javascript
jQuery.ready.promise = function( obj ) {
    if ( !readyList ) {
        readyList = jQuery.Deferred();
        if ( document.readyState === "complete" ) {
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            // 如果ready在页面加载完毕后
            setTimeout( jQuery.ready );
        } else {
            document.addEventListener( "DOMContentLoaded", completed, false );
            window.addEventListener( "load", completed, false );
        }
    }
    return readyList.promise( obj );
};
```