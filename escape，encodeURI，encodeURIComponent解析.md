# escape，encodeURI，encodeURIComponent解析

- [escape](#escape)
- [encodeURI](#encodeuri)
- [encodeURIComponent](#encodeuricomponent)
- [总结](#总结)
- [示例](#示例)

JavaScript中有三个可以对字符串编码的函数，分别是：`escape`,`encodeURI`,`encodeURIComponent`，相应3个解码函数：`unescape`,`decodeURI`,`decodeURIComponent`。

## escape

**定义和用法**

`escape()`函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

**语法**

`escape(string)`

**参数**

`string`  必需。要被转义或编码的字符串。 

**返回值**

已编码的`string`的副本。其中某些字符被替换成了十六进制的转义序列。

**说明**

该方法不会对`ASCII`字母和数字进行编码，也不会对下面这些`ASCII`标点符号进行编码： `- _ . ! ~ * ' ( )` 。其他所有的字符都会被转义序列替换。

## encodeURI

**定义和用法**

`encodeURI()` 函数可把字符串作为 URI 进行编码。

**语法**

`encodeURI(URIstring)`

**参数**

`URIstring`  必需。一个字符串，含有 URI 或其他要编码的文本。 

**返回值**

`URIstring` 的副本，其中的某些字符将被十六进制的转义序列进行替换。

**说明**

该方法不会对`ASCII`字母和数字进行编码，也不会对这些`ASCII`标点符号进行编码： `- _ . ! ~ * ' ( )` 。

该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 `ASCII` 标点符号，`encodeURI()` 函数是不会进行转义的：`; / ? : @ & = + $ , #`

## encodeURIComponent

**定义和用法**

`encodeURIComponent()` 函数可把字符串作为 URI 组件进行编码。

**语法**

`encodeURIComponent(URIstring)`

**参数**

`URIstring`  必需。一个字符串，含有 URI 组件或其他要编码的文本。 

**返回值**

`URIstring` 的副本，其中的某些字符将被十六进制的转义序列进行替换。

**说明**

该方法不会对 `ASCII` 字母和数字进行编码，也不会对这些 `ASCII` 标点符号进行编码： `- _ . ! ~ * ' ( )` 。

其他字符（比如 ：`; / ? : @ & = + $ , #` 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

## 总结

- `escape()`除了 `ASCII` 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。
- `encodeURI()` 用于编码整个URI,因为URI中的合法字符都不会被编码转换。
- `encodeURIComponent`方法在编码单个`URIComponent`（请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。

## 示例

escape()

```javascript
escape("http://www.w3school.com.cn/");
// "http%3A//www.w3school.com.cn/"

escape("?!=()#%&");
// "%3F%21%3D%28%29%23%25%26"
```

encodeURI()

```javascript
encodeURI("http://www.w3school.com.cn/");
// "http://www.w3school.com.cn/"
encodeURI("http://www.w3school.com.cn/My first page/");
// "http://www.w3school.com.cn/My%20first%20page/"\
encodeURI(",/?:@&=+$#");
// ",/?:@&=+$#"
```
encodeURIComponent()

```javascript
encodeURIComponent("http://www.w3school.com.cn/");
// "http%3A%2F%2Fwww.w3school.com.cn%2F"
encodeURIComponent("http://www.w3school.com.cn/My first page/");
// "http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%20page%2F"
encodeURIComponent(",/?:@&=+$#");
// "%2C%2F%3F%3A%40%26%3D%2B%24%23"
```

```javascript
// 对URL中的参数进行编码，因为参数也是一个URL，如果不编码会影响整个URL的跳转。
<a href="http://www.w3school.com.cn/?name=name&url='+encodeURIComponent(\"http://www.w3school.com.cn/My first page/\")'">退出</a>
```