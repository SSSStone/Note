转自：http://www.cnblogs.com/ider/p/js-slice-vs-substr-vs-substring-table.html

- 三个方法的参数1都代表子串开始位置，参数2在slice和substring中表示结束位置，而在substr中代表的则是子串长度；

- 对于负数态度，当出现在参数1的位置时，slice和substr从末尾开始计算，而substring不支持末尾计数法直接视为0；当出现在参数2位置时，slice和substring的处理同参数1：前者从末尾开始计算，后者转换成0，而substr则视负数长度为0返回空串；

- 对于参数1小于参数2的情况，substring最大的不同在于它会交换两个参数再截取子串，substr因第二参数表示的是长度因此并无异常，slice曽依然正常搜寻子串始末位置，若开始位置在结尾后边则返回空串。