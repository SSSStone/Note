
##1、淘宝IP地址库 http://ip.taobao.com/

提供国家、省、市、县、运营商全方位信息，信息维度广，格式规范
提供完善的统计分析报表，省准确度超过99.8%，市准确度超过96.8%，数据质量有保障。

- 请求接口（GET）：http://ip.taobao.com/service/getIpInfo.php?ip=[ip地址]
- 返回数据格式：（json格式的）国家 、省（自治区或直辖市）、市（县）、运营商。例如：

```
{
	"code":0,
	"data":{
		"ip":"210.75.225.254",
		"country":"\u4e2d\u56fd",
		"area":"\u534e\u5317",
		"region":"\u5317\u4eac\u5e02",
		"city":"\u5317\u4eac\u5e02",
		"county":"",
		"isp":"\u7535\u4fe1",
		"country_id":"86",
		"area_id":"100000",
		"region_id":"110000",
		"city_id":"110000",
		"county_id":"-1",
		"isp_id":"100017"
	}
}
{
	"code": 0,
	"data": {
		"ip": "210.75.225.254",
		"country": "中国",
		"area": "华北",
		"region": "北京市",
		"city": "北京市",
		"county": "",
		"isp": "电信",
		"country_id": "86",
		"area_id": "100000",
		"region_id": "110000",
		"city_id": "110000",
		"county_id": "-1",
		"isp_id": "100017"
	}
}
// 注：其中code的值的含义为，0：成功，1：失败。
```

- 淘宝IP接口使用示例PHP版：

```
<?php
$ip=get_ip_data();
function get_ip_data(){
	$ip=file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=".get_client_ip());
	$ip = json_decode($ip);
	if($ip->code){
		return false;
	}
	$data = (array) $ip->data;
	print_r($data);//return $data;
}

//取客户端 ip
function get_client_ip(){
	if (isset($_SERVER['HTTP_CLIENT_IP']) and !empty($_SERVER['HTTP_CLIENT_IP'])){
		return $_SERVER['HTTP_CLIENT_IP'];
	}
	if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) and !empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
		return strtok($_SERVER['HTTP_X_FORWARDED_FOR'], ',');
	}
	if (isset($_SERVER['HTTP_PROXY_USER']) and !empty($_SERVER['HTTP_PROXY_USER'])){
		return $_SERVER['HTTP_PROXY_USER'];
	}
	if (isset($_SERVER['REMOTE_ADDR']) and !empty($_SERVER['REMOTE_ADDR'])){
		return $_SERVER['REMOTE_ADDR'];
	} else {
		return "0.0.0.0";
	}
}
?>
```

##2、搜狐IP地址查询接口（默认编码GBK）：http://pv.sohu.com/cityjson?ie=utf-8

##3.  百度IP地址查询接口： http://ip.taobao.com/service/getIpInfo.php?ip=[ip地址]

- 返回格式如下：

```
{
	"code":0,
	"data":{
		"country":"\u4e2d\u56fd",
		"country_id":"CN",
		"area":"\u4e1c\u5317",
		"area_id":"200000",
		"region":"\u5409\u6797\u7701",
		"region_id":"220000",
		"city":"\u957f\u6625\u5e02",
		"city_id":"220100",
		"county":"",
		"county_id":"-1",
		"isp":"\u6559\u80b2\u7f51",
		"isp_id":"100027",
		"ip":"202.198.16.3"
	}
}
```

##4、新浪IP地址查询接口：http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=[ip地址]

注：参数format可设置返回格式：js/json；参数ip可选查询IP；

- 返回格式如下：

```
var remote_ip_info ={
	"ret":1,
	"start":"125.40.0.0",
	"end":"125.40.111.255",
	"country":"\u4e2d\u56fd",
	"province":"\u6cb3\u5357",
	"city":"\u90d1\u5dde",
	"district":"",
	"isp":"\u8054\u901a",
	"type":"",
	"desc":""
};
```

下面的实例用到了JQuery下的getScript()方法：
```
var uip = '125.40.0.0';
$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip='+uip, function(_result){
	var ipData = "";
	if (remote_ip_info.ret == '1'){
		ipData += "IP 详细信息：<br>";
		ipData += "IP：" + uip + "<br>";
		ipData += "国家：" + remote_ip_info.country + "<br>";
		ipData += "省份：" + remote_ip_info.province + "<br>";
		ipData += "城市：" + remote_ip_info.city + "<br>";
		ipData += "区：" + remote_ip_info.district + "<br>";
		ipData += "ISP：" + remote_ip_info.isp + "<br>";
		ipData += "类型：" + remote_ip_info.type + "<br>";
		ipData += "其他：" + remote_ip_info.desc + "<br>";
		$("#sina_ip_info").html(ipData); //显示处理后的数据
	} else {
		alert('错误', '没有找到匹配的 IP 地址信息！');
	}
});
```

##5.百度的 LBS 服务 http://developer.baidu.com/map/ip-location-api.htm

百度的 LBS 服务。支持根据 IP 查找位置信息。以上地址是相关文档

示例：

http://api.map.baidu.com/location/ip?ak=F454f8a5efe5e577997931cc01de3974&ip=202.198.16.3

返回值：
```
{
	address: "CN|吉林|长春|None|CERNET|1|None",
	content: {
		address_detail: {
			province: "吉林省",
			city: "长春市",
			district: "",
			street: "",
			street_number: "",
			city_code: 53
		},
		address: "吉林省长春市",
		point: {
			y: "5419815.34",
			x: "13950002.65"
		}
	},
	status: 0
}
```

另外，也可以选择离线IP数据库：
http://code.google.com/p/sinaip/
有人说：价格便宜量又足～