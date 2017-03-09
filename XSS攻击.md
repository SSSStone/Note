# XSS攻击

- [基础知识](#基础知识)
- [XSS攻击分类](#xss攻击分类)
- [防御XSS攻击](#防御xss攻击)
    - [编码](#编码)
    - [输入验证](#输入验证)
    - [输出验证](#输出验证)
    - [保护Cookie](#保护cookie)

## 基础知识

http://netsecurity.51cto.com/art/201408/448305.htm

## XSS攻击分类

http://blog.csdn.net/ghsau/article/details/17027893

## 防御XSS攻击

### 编码

编码。即根据不可信数据将要被放置到的地方进行相应的编码，比如放到`<div>`标签之间的时候，需要进行`HTML`编码，放到`<div>`标签属性里的时候，需要进行`HTML`属性编码，等等。

具体如何编码

|不可信数据将被放置的地方|例子|应该采取的编码|编码格式|
|:---:|---|---|---|
|HTML标签之间|\<div>不可信数据\</div>|HTML Entity编码|&–>\&amp;<br><–>\&lt;<br>>–>\&gt;<br>”–>\&quot;<br>‘–>\&#x27;<br>/–>\&#x2f;|
|HTML标签的属性里|\<input type=”text” value=”不可信数据”/>|HTML Attribute编码|&#xHH;|
|JavaScript标签里|\<script> var msg=”不可信数据” \</script>|JavaScript编码|\xHH|
|HTML页面的URL里|\<a href=”/page?p= 不可信数据 ” >…\</a>|URL编码|%HH|
|CSS里|\<div style=” width: 不可信数据 ” > … \</div>|CSS编码|\HH|

### 输入验证

对用户输入进行数据合法性验证，例如输入`email`的文本框只允许输入格式正确的`email`，输入手机号码的文本框只允许填入数字且格式需要正确。

这类合法性验证至少需要在服务器端进行以防止浏览器端验证被绕过，而为了提高用户体验和减轻服务器压力，最好也在浏览器端进行同样的验证。

### 输出验证

参考[编码](#编码)

### 保护Cookie

为`Cookie`加上`HttpOnly`标记。浏览器将禁止页面的Javascript访问带有`HttpOnly`属性的`Cookie`。许多`XSS`攻击的目标就是窃取用户`Cookie`，这些`Cookie`里往往包含了用户身份认证信息（比如`SessionId`），一旦被盗，黑客就可以冒充用户身份盗取用户账号。窃取`Cookie`一般都会依赖JavaScript读取`Cookie`信息，而`HttpOnly`标记则会告诉浏览器，被标记上的`Cookie`是不允许任何脚本读取或修改的，这样即使Web应用产生了`XSS`漏洞，`Cookie`信息也能得到较好的保护，达到减轻损失的目的。