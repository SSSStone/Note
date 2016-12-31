# JS实现数字千位符格式化

- [千位符格式化方法介绍](#千位符格式化方法介绍)
  - [方法一](#方法一)
  - [方法二](#方法二)
  - [方法三](#方法三)
  - [方法四](#方法四)
  - [方法五](#方法五)
  - [方法六](#方法六)
- [性能比较](#性能比较)

## 千位符格式化方法介绍

### 方法一

``` javascript
function toThousands(num) {
    var result = [ ], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('');
}
```

方法说明：
把数字转换成字符串后，打散为数组，再从末尾开始，逐个把数组中的元素插入到新数组（`result`）的开头。每插入一个元素，`counter`就计一次数（加1），当`counter`为3的倍数时，就插入一个逗号，但是要注意开头（`i`为0时）不需要逗号。最后通过调用新数组的`join`方法得出结果。

### 方法二

方法一的字符串版

``` javascript
function toThousands(num) {
    var result = '', counter = 0;
    num = (num || 0).toString();
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) { result = ',' + result; }
    }
    return result;
}
```

方法说明：
是方法一的改良版，不把字符串打散为数组，始终对字符串操作。

### 方法三

循环匹配末尾的三个数字

``` javascript
function toThousands(num) {
    var num = (num || 0).toString(), re = /\d{3}$/, result = '';
    while ( re.test(num) ) {
        result = RegExp.lastMatch + result;
        if (num !== RegExp.lastMatch) {
            result = ',' + result;
            num = RegExp.leftContext;
        } else {
            num = '';
            break;
        }
    }
    if (num) { result = num + result; }
    return result;
}
```

方法说明：
完全不同的算法，通过正则表达式循环匹配末尾的三个数字，每匹配一次，就把逗号和匹配到的内容插入到结果字符串的开头，然后把匹配目标（`num`）赋值为还没匹配的内容（`RegExp.leftContext`）。

此外，还要注意：

1. 如果数字的位数是3的倍数时，最后一次匹配到的内容肯定是三个数字，但是最前面的三个数字前不需要加逗号；
2. 如果数字的位数不是3的倍数，那`num`变量最后肯定会剩下1到2个数字，循环过后，要把剩余的数字插入到结果字符串的开头。

虽然方法三减少了循环次数（一次循环处理三个字符），但由于用到了正则表达式，一定程度上增加了消耗。

### 方法四

方法三的字符串版

``` javascript
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}
```

方法说明：
截取末尾三个字符的功能可以通过字符串类型的`slice`、`substr`或`substring`方法做到。这样就可以避免使用正则表达式。

### 方法五

分组合并法

``` javascript
function toThousands(num) {
    var num = (num || 0).toString(), temp = num.length % 3;
    switch (temp) {
        case 1:
            num = '00' + num;
            break;
        case 2:
            num = '0' + num;
            break;
    }
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');
}
```

方法说明：
先把数字的位数补足为3的倍数，通过正则表达式，将其切割成每三个数字一个分组，再通过`join`方法添加逗号，最后还要把补的0移除。

### 方法六

正则匹配法

``` javascript
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
```

## 性能比较

六种方法执行1000000次消耗时间比较

|数字|方法一|方法二|方法三|方法四|方法五|方法六|
|:--|:--|:--|:--|:--|:--|:--|
|1|347.119ms|34.312ms|91.626ms|29.645ms|624.654ms|263.790ms|
|11|662.753ms|52.707ms|94.613ms|29.914ms|621.511ms|265.505ms|
|111|794.231ms|68.957ms|155.943ms|30.110ms|512.239ms|267.307ms|
|111111|1290.570ms|145.532ms|370.984ms|115.306ms|850.664ms|491.625ms|
|111111111111|2369.255ms|305.364ms|837.340ms|305.350ms|1151.305ms|805.528ms|
