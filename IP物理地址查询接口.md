
##1、淘宝IP地址库 http://ip.taobao.com/

提供国家、省、市、县、运营商全方位信息，信息维度广，格式规范
提供完善的统计分析报表，省准确度超过99.8%，市准确度超过96.8%，数据质量有保障。
不好用！！！

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

```
// 返回格式
var returnCitySN = {"cip": "113.90.82.47", "cid": "440300", "cname": "广东省深圳市"};

// 使用方法
$.getScript('http://pv.sohu.com/cityjson?ie=utf-8', function(){console.log(returnCitySN)})
```



##3.  百度IP地址查询接口：http://apis.baidu.com/apistore/iplookupservice/iplookup

（暂时没测试）

接口说明地址：http://apistore.baidu.com/apiworks/servicedetail/114.html

- 需要key，很不方便

请求参数(apikey) :

|参数名|类型|必填|参数位置|描述|默认值|
|--|--|--|--|--|--|
|apikey|string|是|header|API密钥|您自己的apikey|

请求参数(urlParam) :

|参数名|类型|必填|参数位置|描述|默认值|
|--|--|--|--|--|--|
|ip|string|是|urlParam|ip地址|127.0.0.1|

返回格式如下：

```
{
    "errNum": 0,
    "errMsg": "success",
    "retData": {
        "ip": "117.89.35.58", //IP地址
        "country": "中国", //国家 
        "province": "江苏", //省份 国外的默认值为none
        "city": "南京", //城市  国外的默认值为none
        "district": "鼓楼",// 地区 国外的默认值为none
        "carrier": "中国电信" //运营商  特殊IP显示为未知
    }
}
```

##4、新浪IP地址查询接口：http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=[ip地址]

注：参数format可设置返回格式：js/json；参数ip可选查询IP；

返回格式如下：

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
$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip='+uip, function(){
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

|参数|含义	|格式|	说明|
|--|
|ip|IP地址|string|可选，IP不出现，或者出现且为空字符串的情况下，会使用当前访问者的IP地址作为定位参数。
|ak	|开发者密钥|string|必选，登录API控制台，申请AK，作为访问的依据。
|sn	|用户的权限签名|string	|可选，若用户所用AK的校验方式为SN校验时该参数必须。
|coor|输出的坐标格式|string|可选，coor不出现时，默认为百度墨卡托坐标；coor=bd09ll时，返回为百度经纬度坐标。

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

##6.太平洋IP地址库API接口

接口说明：http://whois.pconline.com.cn/

调用方法非常丰富，提供多种JS嵌入调用。

##7.126 IP解析接口

http://ip.ws.126.net/ipquery?ip=[59.37.164.179]

ip：可选参数

```
var lo="广东省", lc="江门市"; var localAddress={city:"江门市", province:"广东省"}
```