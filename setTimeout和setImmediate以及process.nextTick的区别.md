# setTimeout和setImmediate以及process.nextTick的区别

## 观察者优先级

idle观察者 > IO观察者 > check观察者

- `process.nextTick()`属于idle观察者
- `setTimeout()`属于IO观察者
- `setImmediate()`属于check观察者

## 猜想

每次`event loop`执行完成一个观察者的对象后，会重新进行`event loop`，而不是把所有观察者都执行完成后再循环。

```javascript
process.nextTick(function () {
    console.log("nextTick延迟执行1");
    process.nextTick(function () {
        console.log("nextTick延迟执行3");
    });
});
process.nextTick(function () {
    console.log("nextTick延迟执行2");
    process.nextTick(function () {
        console.log("nextTick延迟执行4");
    });
});
setImmediate(function () {
    console.log("setImmediate延迟执行1");
    process.nextTick(function () {
        console.log("nextTick延迟执行5");
    });
});
setImmediate(function () {
    console.log("setImmediate延迟执行2");
    process.nextTick(function () {
        console.log("nextTick延迟执行6");
    });
});

// 执行结果

nextTick延迟执行1
nextTick延迟执行2
nextTick延迟执行3
nextTick延迟执行4
setImmediate延迟执行1
setImmediate延迟执行2
nextTick延迟执行5
nextTick延迟执行6
```

从实例中发现，`process.nextTick()`执行完成后，并没有继续执行`setImmediate()`，而是再次进行`event loop`事件循环，按照观察者优先级执行`process.nextTick()`输出`nextTick延迟执行3 nextTick延迟执行4`。

## 实例

想不通了就写一写，跑一跑

```javascript
process.nextTick(function () {
    console.log("nextTick延迟执行1");
    process.nextTick(function () {
        console.log("nextTick延迟执行5");
        setImmediate(function () {
            console.log("setImmediate延迟执行3");
            process.nextTick(function () {
                console.log("nextTick延迟执行11");
            });
        });
    });
});
process.nextTick(function () {
    console.log("nextTick延迟执行2");
    process.nextTick(function () {
        console.log("nextTick延迟执行6");
    });
});
setImmediate(function () {
    console.log("setImmediate延迟执行1");
    process.nextTick(function () {
        console.log("nextTick延迟执行4");
        process.nextTick(function () {
            console.log("nextTick延迟执行7");
        });
    });
});
setImmediate(function () {
    console.log("setImmediate延迟执行2");
    process.nextTick(function () {
        console.log("nextTick延迟执行8");
    });
});
setTimeout(function () {
    console.log("setTimeout延迟执行1");
    process.nextTick(function () {
        console.log("nextTick延迟执行9");
    });
}, 0);
setTimeout(function () {
    console.log("setTimeout延迟执行2");
    process.nextTick(function () {
        console.log("nextTick延迟执行10");
    });
}, 0);
process.nextTick(function () {
    console.log("nextTick延迟执行3");
});
```

