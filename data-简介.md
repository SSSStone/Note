
`dataset`属性存取`data-*`自定义属性的值

```javascript
var test = document.getElementById('test');
```

## 两种方法存取

```javascript
test.dataset.me = "me";
// <p id="test" data-me="me"></p>
console.log(test.getAttribute("data-me"));
// me

test.setAttribute("data-my","my");
// <p id="test" data-my="my"></p>
console.log(test.dataset.my);
// my
```

## 复杂属性名

`data-`属性名如果包含了连字符，例如：`data-date-of-birth`，连字符将被去掉，并转换为驼峰式的命名，前面的属性名转换后应该是：`dateOfBirth`。

```javascript
test.dataset.testMe = "me";
// <p id="test" data-test-me="me"></p>
console.log(test.getAttribute("data-test-me"));
// me

test.setAttribute("data-test-my","my");
// <p id="test" data-test-my="my"></p>
console.log(test.dataset.testMy);
// my
```

不推荐写法

```javascript
test.dataset.Me = "me";
// <p id="test" data--me="me"></p>
```