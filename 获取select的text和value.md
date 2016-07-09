#获取select的text和value

``` javascript
<!-- 获取显示的值 -->
<select onchange="change(this.options[this.selectedIndex].innerText);">
	<option value="value-a">text-a</option>
	<option value="value-b">text-b</option>
</select>

<!-- 获取value的值 -->
<select onchange="change(this.options[this.selectedIndex].value);">
	<option value="value-c">text-c</option>
	<option value="value-d">text-d</option>
</select>
```