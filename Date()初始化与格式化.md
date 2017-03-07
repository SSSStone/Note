# Date()

- [初始化Date()](#初始化date)
    - [参数形式](#参数形式)
    - [标记的含义](#标记的含义)
- [格式化Date()](#格式化date)
    - [方法一](#方法一)
    - [方法二](#方法二)
- [获取周次](#获取周次)

## 初始化Date()

### 参数形式

```
new Date("month dd, yyyy hh:mm:ss");
new Date("month dd, yyyy");
new Date("2017/2/28")
new Date(yyyy, mth, dd, hh, mm, ss);
new Date(yyyy, mth, dd);
new Date(ms);
```

### 标记的含义

**month**：用英文 表示月份名称，从January到December

January February March April May June July August September October December

**mth**：用整数表示月份，从0（1月）到11（12月） 

**dd**：表示一个 月中的第几天，从1到31 

**yyyy**：四位数表示的年份 

**hh**：小时数，从0（午夜）到23（晚11点） 

**mm**： 分钟数，从0到59的整数 

**ss**：秒数，从0到59的整数 

**ms**：毫秒数，为大于等于0的整数;需要创建的时间和 GMT时间1970年1月1日之间相差的毫秒数

## 格式化Date()

### 方法一

```javascript
// 对Date的扩展，将 Date 转化为指定格式的String  
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，  
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)  
// 例子：  
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423  
// (new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18  

Date.prototype.Format = function(format) { 
    var o = {  
        "M+" : this.getMonth()+1,         //月份  
        "d+" : this.getDate(),            //日  
        "h+" : this.getHours(),           //小时  
        "m+" : this.getMinutes(),         //分  
        "s+" : this.getSeconds(),         //秒  
        "q+" : Math.floor((this.getMonth()+3)/3), //季度  
        "S" : this.getMilliseconds()       //毫秒  
    };  
    if(/(y+)/.test(format))  
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));  
    for(var k in o)  
        if(new RegExp("("+ k +")").test(format))  
            format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    return format;  
};

// 调用方法
var time = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
```
## 方法二

```javascript
/**   
 * 对Date的扩展，将 Date 转化为指定格式的String   
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符   
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
 * eg:   
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04   
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04   
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04   
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18   
 */   
Date.prototype.pattern=function(fmt) {     
    var o = {     
        "M+" : this.getMonth()+1, //月份     
        "d+" : this.getDate(), //日     
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时     
        "H+" : this.getHours(), //小时     
        "m+" : this.getMinutes(), //分     
        "s+" : this.getSeconds(), //秒     
        "q+" : Math.floor((this.getMonth()+3)/3), //季度     
        "S" : this.getMilliseconds() //毫秒    
    };     
    var week = {     
        "0" : "\u65e5",     
        "1" : "\u4e00",     
        "2" : "\u4e8c",     
        "3" : "\u4e09",     
        "4" : "\u56db",     
        "5" : "\u4e94",     
        "6" : "\u516d"
    };     
    if(/(y+)/.test(fmt)){     
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));     
    }     
    if(/(E+)/.test(fmt)){     
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);     
    }     
    for(var k in o){     
        if(new RegExp("("+ k +")").test(fmt)){     
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));     
        }
    }
    return fmt;
};
```

## 获取周次
```javascript
function isSameWeek(old,now){  
    var oneDayTime = 1000*60*60*24;  
    var old_count =parseInt(old.getTime()/oneDayTime);  
    var now_other =parseInt(now.getTime()/oneDayTime);  
        return parseInt((old_count+4)/7) == parseInt((now_other+4)/7);  
}
```
思路: 因为1970年1月1日是周四，所以`（天数+4）/7`取整，就是周数。

如果相同就是同一周反之就不是。

ps：是以星期一作为每周的第一天的。如果星期日作为每周第一天，则`（天数+5）/7`