#JS原型链

看了不少文章，个人感觉这一篇写的很好，转之，记录学习+分享。

> 作者：小米粒
链接：https://zhuanlan.zhihu.com/p/22787302
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

##要清楚原型链,首先要弄清楚对象：

- 普通对象
	- 最普通的对象：有__proto__属性（指向其原型链），没有prototype属性。
	- 原型对象(person.prototype 原型对象还有constructor属性（指向构造函数对象）)
- 函数对象：
凡是通过new Function()创建的都是函数对象。
拥有__proto__、prototype属性（指向原型对象）。
Function、Object、Array、Date、String、自定义函数

特例： Function.prototype(是原型对象，却是函数对象，下面会有解释)

```
//函数对象  
function f1(){};  
var f2 = function(){};  
var f3 = function("n1","n2","return n1+n2");  
  
console.log(typeof f1);  //function  
console.log(typeof f2);  //function  
console.log(typeof f3);   //function  
console.log(typeof Object);   //function  
console.log(typeof Array);   //function  
console.log(typeof String);   //function  
console.log(typeof Date);   //function  
console.log(typeof Function);   //function  
```

![function](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-261209138284cee7af75fd5bd4d98eea_b.png)

Array是函数对象，是Function的实例对象，Array是通过newFunction创建出来的。因为Array是Function的实例，所以Array.__proto__ === Function.prototype

```
//普通对象  
var o1 = new f1();   
var o2 = {};         
var o3 = new Object();   
  
console.log(typeof o1);  //Object  
console.log(typeof o2);   //Object  
console.log(typeof o3);   //Object  
```

原型对象

每创建一个函数都会有一个prototype属性，这个属性是一个指针，指向一个对象（通过该构造函数创建实例对象的原型对象）。原型对象是包含特定类型的所有实例共享的属性和方法。原型对象的好处是，可以让所有实例对象共享它所包含的属性和方法。

第一块中有提到，原型对象属于普通对象。Function.prototype是个例外，它是原型对象，却又是函数对象，作为一个函数对象，它又没有prototype属性。

```
function person(){};  
  
console.log(typeof person.prototype) //Object  
console.log(typeof Object.prototype) // Object  
console.log(typeof Function.prototype) // 特殊 Function  
console.log(typeof Function.prototype.prototype) //undefined 函数对象却没有prototype属性 
```

解释：
其实原型对象就是构造函数的一个实例对象。person.prototype就是person的一个实例对象。相当于在person创建的时候，自动创建了一个它的实例，并且把这个实例赋值给了prototype。

```
function person(){};  
var temp = new person();  
person.prototype = temp;  
  
function Function(){};  
var temp = new Function();  
Function.prototype = temp; //由new Function()产生的对象都是函数对象  
```

从一张图看懂原型对象、构造函数、实例对象之间的关系

![enter image description here](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-830f96ed4a5765089776e9702120d484_b.png)

```
function Dog(){};  
  
Dog.prototype.name = "小黄";  
Dog.prototype.age =  13;  
Dog.prototype.getAge = function(){  
    return this.age;  
}  
  
var dog1 = new Dog();  
var dog2 = new Dog();  
  
dog2.name = "小黑";  
console.log(dog1.name); // 小黄 来自原型  
console.log(dog2.name); // 小黑 来自实例  
```

![enter image description here](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-5d7fc42b450728c6a5b72a903ee3fc36_b.png)

```
//图中的一些关系  
dog1.__proto__ === Dog.prototype  
  
Dog.prototype.__proto__ === Object.prototype //继承Object 下面原型链说  
  
dog1.__proto__.__proto__ === Object.prototype  
  
Dog.prototype.constructor === Dog   
  
Dog.prototype.isPrototypeOf(dog1)  
  
//获取对象的原型  
dog1.__proto__  //不推荐  
Object.getPrototypeOf(dog1) === Dog.prototype   //推荐  
```

##原型链

原型链是实现继承的主要方法。

先说一下继承，许多OO语言都支持两张继承方式：接口继承、实现继承。

- 接口继承：只继承方法签名

- 实现继承：继承实际的方法

由于函数没有签名，在ECMAScript中无法实现接口继承，只支持实现继承，而实现继承主要是依靠原型链来实现。

原型链基本思路：

利用原型让一个引用类型继承另一个引用类型的属性和方法。

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数想指针(constructor)，而实例对象都包含一个指向原型对象的内部指针(__proto__)。如果让原型对象等于另一个类型的实例，此时的原型对象将包含一个指向另一个原型的指针(__proto__)，另一个原型也包含着一个指向另一个构造函数的指针(constructor)。假如另一个原型又是另一个类型的实例……这就构成了实例与原型的链条。

原型链基本思路（图解）：

![enter image description here](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-901202a60d3f6e9fcc90a69d06fe0282_b.png)


举例说明：

```
function animal(){  
    this.type = "animal";  
}  
animal.prototype.getType = function(){  
    return this.type;  
}  
  
function dog(){  
    this.name = "dog";  
}  
dog.prototype = new animal();  
  
dog.prototype.getName = function(){  
    return this.name;  
}  
  
var xiaohuang = new dog();  
//原型链关系  
xiaohuang.__proto__ === dog.prototype  
dog.prototype.__proto__ === animal.prototype  
animal.prototype.__proto__ === Object.prototype  
Object.prototype.__proto__ === null  
```

图解:

![enter image description here](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-b47a3e4984d49bec824db6217cf03ea7_b.png)

详细图

![xiaohuang](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-2087bd26483d9aafccbb0e83904f4d1b_b.png)

从xiaohuang这个实例，看出整个链条

![enter image description here](https://raw.githubusercontent.com/SSSStone/Note/master/images/v2-58d80f6a14ef493efe6c255b4991a670_b.png)

总结：

Xiaohuang这个Dog的实例对象继承了Animal，Animal继承了Object。

