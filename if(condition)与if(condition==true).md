问题：
``` javascript
if([0])console.log(1)		// ture

if([0]==true)console.log(1) // false

if("0")console.log(1)		// ture

if("0"==true)console.log(1) // false
```

解答：

1. `if(condition)`
`javascript`在做`if(condition)`判断的时候会把`condition`转换成`boolean`然后做判断，`[0]`是一个有值的list，所以转成`boolean`是`true`。

	``` javascript
	[0] -> true; 
	```

2. 比较操作
`javascript`在做 `A == B`的比较时，如果`A`和`B`的`type`不一样，会先把`A`和`B`转化成相同的`type`，通常是`number`，然后再作比较。
	
	``` javascript
	[0] == true; 
	//会分成以下步骤进行
	
	//把true转化成number，true变成1
	[0]==true -> [0]==1
	
	//list是object
	//先看[0].valueOf()，结果还是[0]
	//再看[0].toString()，结果是“0” type是string
	[0]==1 -> "0" == 1
	
	//把"0"转化成number，"0"变成0，0不等于1
	0 == 1
	
	//结果是false
	```

其它例子

```javascript
if("0")console.log(1)		// true

if("0"==true)console.log(1) // false

if("1"==true)console.log(1) // true
```
