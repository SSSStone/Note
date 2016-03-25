#js自定义sleep()方法

js中不存在自带的sleep方法，要想休眠要自己定义个方法。
``` javascript
function sleep(numberMillis) { 
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
		now = new Date(); 
		if (now.getTime() > exitTime) 
		return; 
	} 
}
```
