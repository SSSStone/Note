
# JSON.stringify

- [语法](#语法)
- [第二个参数](#第二个参数)
  - [array](#array)
  - [function](#function)
- [第三个参数](#第三个参数)
  - [number](#number)
  - [string](#string)

## 语法

``` javascript 
JSON.stringify(value [, replacer] [, space]);

// value：是必须要的字段。就是你输入的对象，比如数组啊，类啊等等。 
// replacer：这个是可选的。它又分为2种方式，一种是方法，第二种是数组。 
```

## 第二个参数

### array

对象或者说JSON字符串都可以看成是由多个key-value键值对组成，而第二个参数为数组的时候过滤掉所有key不在数组中的键值对。

``` javascript
var obj = {
	a:1,
	b:2,
	c:3
}
JSON.stringify(obj,["a","b"]);
// "{"a":1,"b":2}"
```

### function

当然，第二个参数也可以是一个Function，其有两个参数，当前遍历的key和value，如果没有返回值则过滤掉当前key值，否则当前遍历的key值对应的value值为返回值。

``` javascript
var obj = {
	a:1,
	b:2,
	c:3
}
JSON.stringify(obj,function(key, value){
	if (key == "a") {
		return "男女"[value];
	} else {
		return value;
	}
});
// "{"a":"女","b":2,"c":3}"
```

## 第三个参数

格式化参数。

``` javascript
var obj = {
	a:1,
	b:2,
	c:3
}
```

调试中会发现`console.log(JSON.stringify(obj))` 是完全没有格式，第三个参数就是这里的格式化补齐的符号。

### number
如果是数字则表示缩进量：

``` javascript
JSON.stringify(obj,null,4);
// "{
//     "a": 1,
//     "b": 2,
//     "c": 3
// }"
```

### string
如果是字符则表示填充字符

``` javascript
JSON.stringify(obj,null,"****");
// "{
// ****"a": 1,
// ****"b": 2,
// ****"c": 3
// }"
```