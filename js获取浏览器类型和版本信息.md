#js获取浏览器类型和版本信息
```
function getExplorerInfo() {
	var explorer = window.navigator.userAgent.toLowerCase() ;
	//ie 
	if (explorer.indexOf("msie") >= 0) {
		var ver=explorer.match(/msie ([\d.]+)/)[1];
		return {type:"IE",version:ver};
	}
	//firefox 
	else if (explorer.indexOf("firefox") >= 0) {
		var ver=explorer.match(/firefox\/([\d.]+)/)[1];
		return {type:"Firefox",version:ver};
	}
	//Chrome
	else if(explorer.indexOf("chrome") >= 0){
		var ver=explorer.match(/chrome\/([\d.]+)/)[1];
		return {type:"Chrome",version:ver};
	}
	//Opera
	else if(explorer.indexOf("opera") >= 0){
		var ver=explorer.match(/opera.([\d.]+)/)[1];
		return {type:"Opera",version:ver};
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){
		var ver=explorer.match(/version\/([\d.]+)/)[1];
		return {type:"Safari",version:ver};
	}
}
alert("type:"+getExplorerInfo().type+"\nversion:"+getExplorerInfo().version);
```

#Navigator 对象

Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。
Navigator 对象的实例是唯一的，可以用 Window 对象的 navigator 属性来引用它。

##Navigator 对象属性

|属性|描述|
|:--|:--|
|appCodeName	|返回浏览器的代码名。|
|appMinorVersion|	返回浏览器的次级版本。|
|appName|	返回浏览器的名称。|
|appVersion|	返回浏览器的平台和版本信息。|
|browserLanguage|	返回当前浏览器的语言。|
|cookieEnabled|	返回指明浏览器中是否启用 cookie 的布尔值。|
|cpuClass|	返回浏览器系统的 CPU 等级。|
|onLine|	返回指明系统是否处于脱机模式的布尔值。|
|platform|	返回运行浏览器的操作系统平台。|
|systemLanguage|	返回 OS 使用的默认语言。|
|userAgent|	返回由客户机发送服务器的 user-agent 头部的值。|
|userLanguage|	返回 OS 的自然语言设置。|

##Navigator 对象属性方法

|方法|描述|
|:--|:--|
|javaEnabled()|	规定浏览器是否启用 Java。|
|taintEnabled()|规定浏览器是否启用数据污点 (data tainting)。|

#收藏

```
//获取浏览器相关信息
function allinfo() {
    var appName = navigator.appName; //浏览器的正式名称
    var appVersion = navigator.appVersion; //浏览器的版本号
    var cookieEnabled = navigator.cookieEnabled; // 返回用户浏览器是否启用了cookie
    var cpuClass = navigator.cpuClass; //返回用户计算机的cpu的型号，通常intel芯片返回"x86"（火狐没有）

    var mimeType = navigator.mimeTypes; // 浏览器支持的所有MIME类型的数组
    var platform = navigator.platform; // 浏览器正在运行的操作系统平台，包括Win16(windows3.x)  
    //   Win32(windows98,Me,NT,2000,xp),Mac68K(Macintosh 680x0)
    //     和ＭacPPC(Macintosh PowerPC)
    var plugins = navigator.plugins; //  安装在浏览器上的所有插件的数组
    var userLanguage = navigator.userLanguage; // 用户在自己的操作系统上设置的语言（火狐没有）
    var userAgent = navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
    var systemLanguage = navigator.systemLanguage; // 用户操作系统支持的默认语言（火狐没有）

    var info = "<table border=1>";
    var type = "";
    if (isIe()) {
        type = "IE浏览器";
    } else if (isFireFox()) {
        type = "火狐浏览器";
    }
    info += "<tr><td>浏览器类型：</td><td>" + type + "</td></tr>";

    info += "<tr><td>浏览器属性信息：</td><td>" + userAgent + "</td></tr>";
    info += "<tr><td>浏览器的正式名称：</td><td>" + appName + "</td></tr>";
    info += "<tr><td>浏览器的版本号：</td><td>" + appVersion + "</td></tr>";
    info += "<tr><td>浏览器的是否启用了cookie：</td><td>" + cookieEnabled + "</td></tr>";
    info += "<tr><td>cpu等级：</td><td>" + cpuClass + "</td></tr>";
    info += "<tr><td>浏览器的MIME类型：</td><td>" + mimeType.length + "</td></tr>";
    info += "<tr><td>系统平台：</td><td>" + platform + "</td></tr>";
    info += "<tr><td>安装的插件：</td><td>" + plugins + "</td></tr>";
    info += "<tr><td>插件的数量：</td><td>" + plugins.length + "</td></tr>";
    info += "<tr><td>插件的名称：</td><td>" + getPluginName() + "</td></tr>";
    info += "<tr><td>用户设置的操作系统语言：</td><td>" + userLanguage + "</td></tr>";
    info += "<tr><td>操作系统支持的默认语言：</td><td>" + systemLanguage + "</td></tr>";
    info += "<tr><td>Director：</td><td>" + checkePlugs("Director") + "</td></tr>";
    info += "<tr><td>javaEnabled：</td><td>" + navigator.javaEnabled() + "</td></tr>";
    info += "<tr><td>是否有quickTime：</td><td>" + checkePlugs("QuickTime") + "</td></tr>";
    info += "<tr><td>flash插件情况：</td><td>" + checkePlugs('Shockwave Flash') + "</td></tr>";
    info += "<tr><td>是否有MediaPlayer：</td><td>" + checkePlugs("MediaPlayer") + "</td></tr>";
    info += "<tr><td>是否有realPlayer:</td><td>" + checkePlugs("RealPlayer") + "</td></tr>";
    info += "<tr><td>屏幕分辨率高度：</td><td>" + window.screen.height + "</td></tr>";
    info += "<tr><td>屏幕分辨率宽度：</td><td>" + window.screen.width + "</td></tr>";
    info += "<tr><td>颜色质量：</td><td>" + window.screen.colorDepth + "位</td></tr>";
    info += "<tr><td>像素：</td><td>" + window.screen.deviceXDPI + "像素/英寸</td></tr>";
    info += "<tr><td>字体是否平滑：</td><td>" + window.screen.fontSmoothingEnabled + "</td></tr>";
    //info += "<tr><td>规定浏览器是否启用数据污点：</td><td>" + navigator.taintEnabled() + "</td></tr>";
    info += "</table>";
    document.getElementById("elInfo").innerHTML = info;
    return info;

    //director

    var appCodeName = navigator.appCodeName; //与浏览器相关的内部代码名
    var appMinorVersion = navigator.appMinorVersion; //辅版本号（通常应用于浏览器的补丁或服务包)

    var language = navigator.language; //浏览器支持的语言 （IE没有）

    var onLine = navigator.onLine; //返回浏览器是否处于在线模式（IE4以上版本）

    var opsProfile = navigator.opsProfile; // 未定义   （IE、火狐没有）

    var oscpu = navigator.oscpu; //浏览器正在运行的操作系统，其中可能有CPU的信息（IE没有）

    var product = navigator.product; // 浏览器的产品名（IE没有）

    var productSub = navigator.productSub; //关于浏览器更多信息（IE没有）

    var securityPolicy = navigator.securityPolicy; // 浏览器支持的加密类型（IE没有）

    var userProfile = navigator.userProfile; //  返回一个UserProfile对象，它存储用户的个人信息（火狐没有）

    var vender = navigator.vender; // 浏览器厂商名称（IE、火狐没有）

    var vendorSub = navigator.vendorSub; // 关于浏览器厂商更多的信息  

}
//获取插件所有的名称
function getPluginName() {
    var info = "";
    var plugins = navigator.plugins;
    if (plugins.length > 0) {
        for (i = 0; i < navigator.plugins.length; i++) {
            info += navigator.plugins[i].name + ";";
        }
    }
    return info;
}
//检查是否安装了某插件，如果安装了返回版本号
function checkePlugs(pluginname) {
    var f = "-"
    var plugins = navigator.plugins;
    if (plugins.length > 0) {
        for (i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.indexOf(pluginname) >= 0) {
                f = navigator.plugins[i].description.split(pluginname)[1];
                return f;
                break;
            }
        }
    }
    return false;
}
//判断是否IE
function isIe() {
    var i = navigator.userAgent.toLowerCase().indexOf("msie");
    return i >= 0;
}
//判断是否firefox
function isFireFox() {
    var i = navigator.userAgent.toLowerCase().indexOf("firefox");
    return i >= 0;
}

//以上为浏览器信息，以下为pc信息
var locator = new ActiveXObject("WbemScripting.SWbemLocator");
var service = locator.ConnectServer(".");

function cpuInfo() { //CPU 信息  
    var properties = service.ExecQuery("SELECT * FROM Win32_Processor");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr  bgcolor='#CDEDED' style='font-weight: bold;' ><td width='450' >CPU 信息</td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr style='color: red'><td >CPU序列号:" + p.ProcessorID + "</td></tr>";
        info += "<tr><td >" + p.Caption + "</td></tr>";
        info += "<tr><td >CPU编号：" + p.DeviceID + "</td></tr>";
        info += "<tr><td >CPU型号：" + p.Name + "</td></tr>";
        info += "<tr><td >CPU状态：" + p.CpuStatus + "</td></tr>";
        info += "<tr><td >CPU可用性：" + p.Availability + "</td></tr>";
        info += "<tr><td >CUP Level：" + p.Level + "</td></tr>";
        info += "<tr><td >主机名称：" + p.SystemName + "</td></tr>";
        info += "<tr><td >Processor Type：" + p.ProcessorType + "</td></tr>";
    }
    info += "</table>";
    return info;
}

function softDisk() { //软盘信息 
    var properties = service.ExecQuery("SELECT * FROM Win32_FloppyDrive");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr  bgcolor='#CDEDED' style='font-weight: bold;' ><td width='450'>软盘信息</td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr><td >" + p.Description + "</td></tr>";
        info += "<tr><td >" + p.DeviceID + "</td></tr>";
        info += "<tr><td >" + p.Status + "</td></tr>";
        info += "<tr><td >" + p.Manufacuturer + "</td></tr>";
    }
    info += "</table>";
    return info;
}

function RomInfo() { //CD-ROM 信息 
    var properties = service.ExecQuery("SELECT * FROM Win32_CDROMDrive");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr bgcolor='#CDEDED' style='font-weight: bold;'><td width='450' >CD-ROM 信息 </td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr><td >驱动器名称：" + p.Caption + "</td></tr>";
        info += "<tr><td >描述：" + p.Description + "</td></tr>";
        info += "<tr><td >盘符：" + p.Drive + "</td></tr>";
        info += "<tr><td >驱动器状态：" + p.Status + "</td></tr>";
        info += "<tr><td >是否在使用：" + p.MediaLoaded + "</td></tr>";
    }
    info += "</table>";
    return info;
}

function keyBoardInfo() { //键盘信息 
    var properties = service.ExecQuery("SELECT * FROM Win32_Keyboard");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr  bgcolor='#CDEDED' style='font-weight: bold;'><td width='450'>键盘信息 </td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr><td >键盘描述：" + p.Description + "</td></tr>";
        info += "<tr><td >键盘名称：" + p.Name + "</td></tr>";
        info += "<tr><td >键盘状态：" + p.Status + "</td></tr>";
    }
    info += "</table>";
    return info;
}

function mainBoard() { //主板信息 
    var properties = service.ExecQuery("SELECT * FROM Win32_BaseBoard");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr bgcolor='#CDEDED' style='font-weight: bold;'><td width='450'>主板信息 </td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr style='color: red'><td >主板ID：" + p.SerialNumber + "</td></tr>";
        info += "<tr><td >" + p.HostingBoard + "</td></tr>";
        info += "<tr><td >制造商：" + p.Manufacturer + "</td></tr>";
        info += "<tr><td >是否开启：" + p.PoweredOn + "</td></tr>";
        info += "<tr><td >型号：" + p.Product + "</td></tr>";
        info += "<tr><td >版本：" + p.Version + "</td></tr>";
    }
    info += "</table>";
    return info;
}

function disk() { //硬盘序列号 信息
    var properties = service.ExecQuery("SELECT * FROM Win32_DiskDrive");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr bgcolor='#CDEDED' style='font-weight: bold;' ><td width='450'>硬盘信息 </td></tr>";
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr style='color: red'><td >硬盘序列号：" + p.signature + "</td></tr>";
    }
    info += "</table>";
    return info;
}
//获取Ram信息
function raminfo() {
    var system = new Enumerator(service.ExecQuery("SELECT * FROM Win32_ComputerSystem")).item();

    var physicMenCap = Math.ceil(system.TotalPhysicalMemory / 1024 / 1024);
    //内存信息 
    var memory = new Enumerator(service.ExecQuery("SELECT * FROM Win32_PhysicalMemory"));
    for (var mem = [], i = 0; !memory.atEnd(); memory.moveNext()) {
        mem[i++] = {
            cap: memory.item().Capacity / 1024 / 1024,
            speed: memory.item().Speed
        };
    }

    var info = "<table border=1>";
    info += "<tr bgcolor='#CDEDED' style='font-weight: bold;' ><td width='450'>内存信息 </td></tr>";
    info += "<tr style='color: red'><td >内存总量：" + (mem[0].cap + mem[1].cap) + "M</td></tr>";
    info += "<tr style='color: red'><td >可用物理内存：" + physicMenCap + "M</td></tr>";
    info += "</table>";
    return info;
}

//获取网络连接信息
function ipinfo() {

    var properties = service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration Where IPEnabled=TRUE");
    var e = new Enumerator(properties);
    var info = "<table border=1>";
    info += "<tr bgcolor='#CDEDED' style='font-weight: bold;' ><td width='450'>网络连接信息：</td></tr>";
    var i = 1;
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        info += "<tr style='color: red'><td >MAC地址" + i + "：" + p.MACAddress + "</td></tr>";
        info += "<tr style='color: red'><td >IP地址" + i + "：" + p.IPAddress(0) + "</td></tr>";
        i++;
    }
    info += "</table>";
    return info;
}

function pcInfo() { //所有信息 

    var info = cpuInfo();
    info += disk();
    info += raminfo();
    info += mainBoard();
    info += ipinfo();
    info += keyBoardInfo();
    info += RomInfo();
    info += softDisk();

    document.getElementById('elInfo').innerHTML = info;
    return info;
}
```