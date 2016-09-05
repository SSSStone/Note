#js从剪切板获取信息

>chrome环境下
>
>参考：https://segmentfault.com/a/1190000004288686#articleHeader0

##`paste`事件

可以用`js`给页面中的元素绑定`paste`事件的方法，当用户鼠标在该元素上或者该元素处于`focus`状态，绑定到`paste`事件的方法就运行了。

绑定的元素不一定是`input`，普通的`div`也是可以绑定的，如果是给`document`绑定了，就相当于全局了，任何时候的粘贴操作都会触发。

##事件对象

###获取事件对象

```
pasteEle.addEventListener("paste", function (e){
    if ( !(e.clipboardData && e.clipboardData.items) ) {
        return;
    }
});
```

粘贴事件提供了一个clipboardData的属性，如果该属性有items属性，那么就可以查看items中是否有图片类型的数据了。Chrome有该属性，Safari没有。

###`clipboardData`介绍

介绍一下clipboardData对象，它实际上是一个DataTransfer类型的对象，DataTransfer 是拖动产生的一个对象，但实际上粘贴事件也是它。

clipboardData的属性介绍

|属性|类型|说明|
|:---|:--|:--|
|dropEffect|String|	默认是 none|
|effectAllowed|String|	默认是 uninitialized
|files	|FileList	|粘贴操作为空List
|items	|DataTransferItemList	|剪切板中的各项数据
|types	|Array	|剪切板中的数据类型 该属性在Safari下比较混乱

###`items`介绍

`items`是一个`DataTransferItemList`对象，自然里面都是`DataTransferItem`类型的数据了。

items的属性介绍

|属性|说明|
|:---|:--|
|kind	|一般为string或者file
|type	|具体的数据类型，例如具体是哪种类型字符串或者哪种类型的文件，即MIME-Type

chrome环境下两种属性测试结果

|类型|kind|type|
|:---|:--|:--|
|复制的图片|string|text/html|
|复制的图片|file|image/XX|
|截图信息|file|image/XX|
|文字信息|string|text/plain|
|文字信息|string|text/html|

items的方法介绍

|方法	|参数	|说明|
|:---|:--|:--|
|getAsFile	|空	|如果kind是file，可以用该方法获取到文件
|getAsString	|回调函数	|如果`kind`是`string`，可以用该方法获取到字符串，字符串需要用回调函数得到，回调函数的第一个参数就是剪切板中的字符串

###`types`介绍

一般`types`中常见的值有`text/plain`、`text/html`、`Files`。

|值	|说明|
|:---|:--|
|text/plain	|普通字符串
|text/html	|带有样式的html
|Files	|文件(例如剪切板中的数据)

##用过的代码
```
<div id="fuck" onpaste="pasteImg(event)" contenteditable="true"></div>

/**
 * [pasteImg 获取剪切板图片文件]
 * @AuthorCuiYan
 * @DateTime     2016-09-01T15:22:54+0800
 * @param        {[type]} event [粘贴事件]
 */
function pasteImg( event ){
	var explorer = window.navigator.userAgent.toLowerCase();
	if( explorer.indexOf("Chrome") > -1 ){
		var clipboardData = event.clipboardData,
	        items;
	    for( var i=0; i < items.length; i++ ){
        	// 图片数据
            if( items[i].kind === 'file' && items[i].type.match(/^image\//i) ){
                // 读取图片数据并展示在输入框
            	imgReader( items[i] );
                break;
            }
            // 文字数据
            // 默认事件粘贴是带有格式的文本，此处获取纯文本
            if( items[i].kind === 'string' && items[i].type.match(/^text\/plain/i) ){
            	items[i].getAsString(function (textStr) {
		            // str 是获取到的字符串
            		$("#inputbox").append(textStr);
		        });
                break;
            }
	    }
	} else {
		alert("暂时只支持Chrome浏览器使用粘贴功能，请期待后续版本！");
	}
}

/**
 * [imgReader 图片文件读取为img标签]
 * @AuthorCuiYan
 * @DateTime     2016-09-01T15:22:48+0800
 * @param        {[type]} item [图片文件]
 */
function imgReader( item ){
    var file = item.getAsFile(),
        reader = new FileReader();
    // 读取文件后将其显示在网页中
    reader.onload = function( e ){
        // data:image/jpg;base64,
        var imgStr = '<img src="' + e.target.result + '"/>';
        // 输入框显示发送图片
        $("#inputbox").append(imgStr);
    };
    // 读取文件
    reader.readAsDataURL( file );
};
```

##