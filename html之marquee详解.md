#html之marquee详解 

语法： 
`<marquee></marquee>`

下面这两个事件经常用到：
`onMouseOut="this.start()"` ：用来设置鼠标移出该区域时继续滚动
`onMouseOver="this.stop()"`：用来设置鼠标移入该区域时停止滚动

代码如下:
```
// onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动 // onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动
<marquee onMouseOut="this.start()" onMouseOver="this.stop()"></marquee>
```


代码如下:
```
<marquee id="affiche" align="left" behavior="scroll" bgcolor="#FF0000" direction="up" height="300" width="200" hspace="50" vspace="20" loop="-1" scrollamount="10" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">
这是一个完整的例子
</marquee>
```

###align
设定<marquee>标签内容的对齐方式

代码如下:
```
// align="absbottom"：绝对底部对齐（与g、p等字母的最下端对齐）。 
<marquee align="absbottom"></marquee>

// align="absmiddle"： 绝对中央对齐。 
<marquee align="absmiddle"></marquee>

// align="baseline"： 底线对齐。 
<marquee align="baseline"></marquee>

// align="bottom"： 底部对齐（默认）。 
<marquee align="bottom"></marquee>

// align="left"： 左对齐。 
<marquee align="left"></marquee>

// align="middle"： 中间对齐。 
<marquee align="middle"></marquee>

// align="right"： 右对齐。 
<marquee align="right"></marquee>

// align="texttop"： 顶线对齐。 
<marquee align="texttop"></marquee>

// align="top"： 顶部对齐。 
<marquee align="top"></marquee>
```
 
###behavior
设定滚动的方式

代码如下:
```
<marquee behavior="alternate">alternate：表示在两端之间来回滚动。 </marquee>
<marquee behavior="scroll">scroll：表示由一端滚动到另一端，会重复。</marquee>
<marquee behavior="slide">slide：  表示由一端滚动到另一端，不会重复。</marquee>
```

###bgcolor
设定活动字幕的背景颜色，背景颜色可用RGB、16进制值的格式或颜色名称来设定。

代码如下:
```
<marquee bgcolor="#006699">设定活动字幕的背景颜色 bgcolor="#006699"</marquee>
<marquee bgcolor="RGB(10%,50%,100%,)">设定活动字幕的背景颜色 bgcolor="rgb(10%,50%,100%,)"</marquee>
<marquee bgcolor="red">设定活动字幕的背景颜色 bgcolor="red"</marquee>
```
 
###direction
设定活动字幕的滚动方向

代码如下:
```
// 设定活动字幕的滚动方向direction="down"：向下
<marquee direction="down"></marquee>
// 设定活动字幕的滚动方向direction="left"：向左
<marquee direction="left"></marquee>
// 设定活动字幕的滚动方向direction="right"：向右
<marquee direction="right"></marquee>
// 设定活动字幕的滚动方向direction="up"：向上
<marquee direction="up"></marquee>
```

###height
设定活动字幕的高度

代码如下:
```
<marquee height="500" direction="down" bgcolor="#CCCCCC">设定活动字幕的高度height="500"</marquee>
```

###width
设定活动字幕的宽度

代码如下:
```
<marquee width="500" bgcolor="#CCCCCC">设定活动字幕的宽度width="500"</marquee>
```
 
###hspace
设定活动字幕里所在的位置距离父容器水平边框的距离

代码如下:
```
<table width="500" border="1" align="center" cellpadding="0" cellspacing="0">
    <tr>
		<td>
			<marquee hspace="100" bgcolor="#CCCCCC">hspace="100"</marquee>
		</td>
    </tr>
</table>
```
 
###vspace
设定活动字幕里所在的位置距离父容器垂直边框的距离

代码如下:
```
<marquee vspace="100" bgcolor="#CCCCCC">hspace="100"</marquee>
```
 

###loop
设定滚动的次数，当loop=-1表示一直滚动下去，默认为-1

代码如下:
```
<marquee loop="-1" bgcolor="#CCCCCC">我会不停地走。</marquee>
<p>&nbsp;</p>
<marquee loop="2" bgcolor="#CCCCCC">我只走两次哦</marquee>
```

###scrollamount

设定活动字幕的滚动速度，单位pixels

代码如下:
```
<marquee scrollamount="10" >scrollamount="10" </marquee>
<marquee scrollamount="20" >scrollamount="20" </marquee>
<marquee scrollamount="30" >scrollamount="30" </marquee>
```
 
###scrolldelay
设定活动字幕滚动两次之间的延迟时间，单位millisecond（毫秒）
值大了会有一步一停顿的效果

代码如下:
```
<marquee scrolldelay="10" >scrolldelay="10" </marquee>
<marquee scrolldelay="100" > scrolldelay="100"</marquee>
<marquee scrolldelay="1000">scrolldelay="1000" </marquee>
```