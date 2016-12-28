# 遍历javascript数组

>引用自@JamesShih 
>https://hyjk2000.github.io/2011/06/09/optimizing-javascript-array-traversing/

我们一般用循环来遍历数组，而循环一直是 JavaScript 性能问题的常见来源，有时循环用得不好会严重降低代码的运行速度。例如，遍历数组时，我们会很自然地写出下面这种代码：

``` javaccript
// 未优化的代码1
var array = [0,1,2,3,4,5,6,7,8,9];

// for-in 循环
for (var val in array) {
    fn(val);
}
```

还有这一种常见写法：

``` javaccript
// 未优化的代码2
var array = [0,1,2,3,4,5,6,7,8,9];

// for 循环
for (var i=0; i < array.length; i++) {
    fn(array[i]);
}
```

这两个方法看上去似乎不错，而且语义上也很容易理解。但是这两个方法都有性能问题：

“未优化的代码1”中，for-in 需要分析出 array 的每个属性，这个操作的性能开销很大，用在 key 已知的数组上是非常不划算的。所以尽量不要用 for-in，除非你不清楚要处理哪些属性，例如 JSON 对象这样的情况。

“未优化的代码2”中，循环每执行一次，都要检查一次 array.length 的值，读属性要比读局部变量慢，尤其是当 array 里存放的都是 DOM 元素（像 array = document.getElementByClassName(“class”);），因为每次读 array.length 都要扫描一遍页面上 class=”class” 的元素，速度更是慢得抓狂。

假如你的任务是从页面上 100 个复选框中，找出选中的复选框的 value，并把它们放入一个数组的话，在 IE 上可能得花上半秒才能完成。结果就是，用户在列表里选择了自己要的项目，点击提交后起码要过半秒才会有反应，直观感觉就是很卡。

我们绝不能接受这样的结果，所以我们需要加快循环终止条件的计算速度。先把数组的长度先查出来，存进一个局部变量，那么循环的速度将会大大提高：

``` javaccript
// 快速的代码
var array = [0,1,2,3,4,5,6,7,8,9];

// for 循环
var length = array.length;
for (var i=0; i < length; i++) {
    fn(array[i]);
}
```

现在只需要读取一次 array.length 的值，遍历数组的过程大大加快了。

不过我们还可以让它更快。如果循环终止条件不需要进行比较运算，那么循环的速度还可以更快：

``` javaccript
// 最快的代码
var array = [0,1,2,3,4,5,6,7,8,9];

// for 循环
for (var i = array.length; i–-;) {
    fn(array[i]);
}
```

把数组下标改成向 0 递减，循环终止条件只需要判断 i 是否为 0 就行了。因为循环增量和循环终止条件结合在一起，所以可以写成更简单的 while 循环：

``` javaccript
// 最快且优雅的代码
var array = [0,1,2,3,4,5,6,7,8,9];

// while 循环
var i = array.length;
while (i–-) {
    fn(array[i]);
}
```