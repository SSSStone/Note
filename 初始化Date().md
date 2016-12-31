#初始化Date()

##参数形式：

```
new Date("month dd, yyyy hh:mm:ss"); 
new Date("month dd, yyyy"); 
new Date(yyyy, mth, dd, hh, mm, ss); 
new Date(yyyy, mth, dd); 
new Date(ms); 
```

##各种函数的含义如下： 

**month**：用英文 表示月份名称，从January到December 

**mth**：用整数表示月份，从（１月）到１１（１２月） 

**dd**：表示一个 月中的第几天，从1到31 

**yyyy**：四位数表示的年份 

**hh**：小时数，从0（午夜）到23（晚11点） 

**mm**： 分钟数，从0到59的整数 

**ss**：秒数，从0到59的整数 

**ms**：毫秒数，为大于等于0的整数;需要创建的时间和 GMT时间1970年1月1日之间相差的毫秒数