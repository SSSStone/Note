# margin塌陷问题

- [垂直并列塌陷](#垂直并列塌陷)
- [嵌套关系塌陷](#嵌套关系塌陷)
    - [解决方法](#解决方法)
- [模块自身塌陷](#模块自身塌陷)

## 垂直并列塌陷

设置两个DIV,并为其制定宽高。
对box1我们为其设置margin-bottom：50px;
对box2我们为其设置margin-top：30px;

```html
<style>
    *{
        margin:0;
        padding:0;
    }
    .box1{
        width:200px;
        height:200px;
        background: yellowgreen;
        margin-bottom: 50px;
    }
    .box2{
        width:200px;
        height:200px;
        background: gray;
        margin-top: 30px;
    }
</style>

<body>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
</body>
```
我们肯定会很理所当然的认定这两个盒子之间的距离为80px，事实上并非如此。

![margin demo](http://images.cuiyan-me.cn/images/blog/979950-20160923182705668-1224958822.png)

两盒子之间的距离仅是50px，也就是说两盒子之间的`margin`出现了重叠部分，故而我们可以得出：**垂直之间塌陷的原则是以两盒子最大的外边距为准**。

对于上下两个并列的div块而言，上面`div`的`margin-bottom`和下面`div`的`margin-top`会塌陷，也就是会取上下两者`margin`里最大值作为显示值，所以从这个意义上说：CSS及浏览器的设计者们希望我们在布局时，如果遇到上下两个并排内容块的安排，最好只设置其中每个块上或下`margin`的一处即可。
## 嵌套关系塌陷

```html
<style>
.box1{
    width:400px;
    height:400px;
    background: pink;
}
.box2{
    width:200px;
    height:200px;
    background: lightblue;
    margin-top：10px;
}
</style>

<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
```
![](http://images.cuiyan-me.cn/images/blog/微信截图_20170220163747.png)

子盒子和父盒子之间并没出现期望的10px间隙，而是父盒子与子盒子一起与页面顶端产生了10px间隙。

### 解决方法

- 为父盒子设置`border`，为外层添加`border`后父子盒子就不是真正意义上的贴合。
- 为父盒子添加`overflow：hidden;`
- 为父盒子设定`padding`值，替代子盒子的`margin`。

## 模块自身塌陷

块级框自身发生`collapce`现象：即当垂直`border`、`padding`、`height`为零时，上下外边距会发生塌陷。