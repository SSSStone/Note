#FormData对象的使用
[toc]

XMLHttpRequest Level 2 添加了一个新的接口——FormData。利用 FormData 对象，我们可以通过 JavaScript 用一些键值对来模拟一系列表单控件，我们还可以使用 XMLHttpRequest 的 send() 方法来异步的提交表单。与普通的 Ajax 相比，使用 FormData 的最大优点就是我们可以异步上传二进制文件。

> BLOB (binary large object)，二进制大对象，是一个可以存储二进制文件的容器。

> 在计算机中，BLOB常常是数据库中用来存储二进制文件的字段类型。

> BLOB是一个大文件，典型的BLOB是一张图片或一个声音文件，由于它们的尺寸，必须使用特殊的方式来处理（例如：上传、下载或者存放到一个数据库）。

> 根据Eric Raymond的说法，处理BLOB的主要思想就是让文件处理器（如数据库管理器）不去理会文件是什么，而是关心如何去处理它。

##1、创建一个FormData对象
你可以先创建一个空的 FormData 对象,然后使用 append() 方法向该对象里添加字段，如下：
``` javascript
var myForm = new FormData();
 
myForm.append("username", "Groucho");
myForm.append("accountnum", 123456); // 数字123456被立即转换成字符串"123456"
 
// fileInputElement中已经包含了用户所选择的文件
myForm.append("userfile", fileInputElement.files[0]);
 
var myFileBody = "<a id="a"><b id="b">hey!</b></a>"; // Blob对象包含的文件内容
var myBlob = new Blob([myFileBody], { type: "text/xml"});
 
myForm.append("webmasterfile", myBlob);
 
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://foo.com/submitform.php");
xhr.send(myForm);
```

注意：
- 字段 "userfile" 和 "webmasterfile" 的值都包含了一个文件。
- 通过 FormData.append() 方法赋给字段 "accountnum" 的数字被自动转换为字符。
- 字段的值可以是一个 Blob 对象，File对象或者字符串，剩下其他类型的值都会被自动转换成字符串

##2、使用HTML表单来初始化一个FormData对象
可以用一个已有的 form 元素来初始化 FormData 对象，只需要把这个 form 元素作为参数传入 FormData 构造函数即可.
还可以在已有表单数据的基础上，继续添加新的键值对，如下：
``` javascript
var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
//可以通过这种方式添加一些不想让用户编辑的固定字段,然后再发送
formData.append("serialnumber", serialNumber++);
oReq.send(formData);
```

##3、使用FormData对象发送文件
你还可以使用 FormData 来发送二进制文件.首先在 HTML 中要有一个包含了文件输入框的 form 元素：
注意form标签的`enctype`属性：`enctype="multipart/form-data"`。
``` 
<form enctype="multipart/form-data" method="post" name="fileinfo">
	<label>Your email address:</label>
	<input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
	
	<label>Custom file label:</label>
	<input type="text" name="filelabel" size="12" maxlength="32" /><br />
	
	<label>File to stash:</label>
	<input type="file" name="file" required />
</form>
<div id="output"></div>
<a href="javascript:sendForm()">Stash the file!</a>
```
然后你就可以使用下面的代码来异步的上传用户所选择的文件：
``` javascript
function sendForm() {
	var myData = new FormData(document.forms.namedItem("fileinfo"));

	myData.append("CustomField", "This is some extra data");

	var xhr = new XMLHttpRequest();

	xhr.open("POST", "stash.php", true);
	//请求成功后的回调函数
	xhr.onload = function(data) {
		if (xhr.status == 200) {
			alert('上传成功！');
		}
	};
	xhr.send(myData);
}
```
还可以不借助 HTML 表单，直接向 FormData 对象中添加一个 File 对象或者一个 Blob 对象：
``` javascript
data.append("myfile", myBlob);
```
注意：
如果 FormData 对象中的某个字段值是一个 Blob 对象，则在发送 HTTP 请求时，代表该 Blob 对象所包含文件的文件名的 "Content-Disposition" 请求头的值在不同的浏览器下有所不同，Firefox使用了固定的字符串"blob"，而 Chrome 使用了一个随机字符串。

你还可以使用 jQuery 来发送 FormData，但必须要正确的设置相关选项：
``` javascript
var fileddata = new FormData(document.getElementById("fileinfo"));
fileddata.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fileddata,
  
  processData: false,  // 告诉jQuery不要去处理发送的数据
  contentType: false   // 告诉jQuery不要去设置Content-Type请求头
  
});
```

