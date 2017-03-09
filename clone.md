对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制

```javascript
Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}
```