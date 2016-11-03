
#Notification

>https://developer.mozilla.org/en-US/docs/Web/API/Notification

##Constructor

`new Notification()`
Creates a new instance of the Notification object.

```
Notification(title, options)
//@param {String} title 要显示的通知标题
//@param {Object} options 备选项参数，键值对
```

##Properties

`Notification.permission`
A string representing the current permission to display notifications. Possible value are: denied (the user refuses to have notifications displayed), granted (the user accepts having notifications displayed), or default (the user choice is unknown and therefore the browser will act as if the value were denied).

`Notification.actions`
The actions array of the notification as specified in the options parameter of the constructor.

`Notification.badge`
The URL of the image used to represent the notification when there is not enough space to display thenotification itself.

`Notification.body`
The body string of the notification as specified in the options parameter of the constructor.

`Notification.data`
Returns a structured clone of the notification’s data.

`Notification.dir`
The text direction of the notification as specified in the options parameter of the constructor.

- **auto**: adopts the browser's language setting behaviour (the default.)
- **ltr**: left to right.
- **rtl** : right to left.
Note: Most browsers seem to ignore explicit ltr and rtl settings, and just go with the browser-wide setting.

`Notification.lang`
The language code of the notification as specified in the options parameter of the constructor.

`Notification.tag`
The ID of the notification (if any) as specified in the options parameter of the constructor.
标记当前通知的标签。

- The idea of notification tags is that more than one notification can share the same tag, linking them together. One notification can then be programmatically replaced with another to avoid the users' screen being filled up with a huge number of similar notifications.

`Notification.renotify`
布尔值。新通知出现的时候是否替换之前的。如果设为true，则表示替换，表示当前标记的通知只会出现一个。true参数要想其作用，必须tag需要设置属性值。

`Notification.icon`
The URL of the image used as an icon of the notification as specified in the options parameter of the constructor.

`Notification.requireInteraction`
A Boolean indicating that on devices with sufficiently large screens, a notification should remain active until the user clicks or dismisses it.

`Notification.silent`
Specifies whether the notification should be silent, i.e. no sounds or vibrations should be issued, regardless of the device settings.
布尔值。通知出现的时候，是否要有声音。默认false, 表示无声。

`Notification.sound`
字符串。音频地址。表示通知出现要播放的声音资源。

`Notification.timestamp`
Specifies the time at which a notification is created or applicable (past, present, or future).

`Notification.title`
The title of the notification as specified in the first parameter of the constructor.

`Notification.vibrate`
Specifies a vibration pattern for devices with vibration hardware to emit.
通知显示时候，设备震动硬件需要的振动模式。所谓振动模式，指的是一个描述交替时间的数组，分别表示振动和不振动的毫秒数，一直交替下去。例如[200, 100, 200]表示设备振动200毫秒，然后停止100毫秒，再振动200毫秒。

`Notification.noscreen'
布尔值。是否不再屏幕上显示通知信息。默认false, 表示要在屏幕上显示通知内容。

###Event handlers

`Notification.onclick`
A handler for the click event. It is triggered each time the user clicks on the notification.

`Notification.onerror`
A handler for the error event. It is triggered each time the notification encounters an error.

##Methods

###Static methods

These methods are available only on the Notification object itself.

`Notification.requestPermission()`
Requests permission from the user to display notifications.

- **granted**: The user has explicitly granted permission for the current origin to display system notifications.
- **denied**: The user has explicitly denied permission for the current origin to display system notifications.
- **default**: The user decision is unknown; in this case the application will act as if permission was denied.

###Instance methods

These properties are available only on an instance of the Notification object or through its prototype. The Notification object also inherits from the EventTarget interface.

`Notification.close()`
Programmatically closes a notification.

##notification应用

>http://blog.csdn.net/liuhe688/article/details/41971215

Web Notifications是HTML5中一个令人欣喜的新特性，它支持开发者配置和显示桌面通知，为用户提供更好的体验，最令人称赞的是，即使用户忙于其他工作时也可以收到来自页面的消息通知，例如一个新邮件的提醒，或者一个在线聊天室收到的消息提醒等等。
接下来，我们就试着一步一步创建我们自己的消息通知。
要创建消息通知，首先我们要创建一个消息框，这非常很简单，直接使用window对象下面的Notification类即可，代码如下：

```
var n = new Notification("sir, you got a message", {  
    icon: 'img/icon.png',  
    body: 'you will have a meeting 5 minutes later.'  
});  
```

在Notification这个类的构造函数中，有两个重要的参数，第一个是消息的标题，第二个是消息体对象，其中包括消息框的图标（icon）和消息内容（body）。
在执行完以上代码后，我们就成功地创建了一个消息框实例，在Chrome下面它最终会显示成这样：
![enter image description here](http://img.blog.csdn.net/20150309221457532)

到这里我们已经成功了一半，但能不能正确地显示出这个消息框，最终还取决于用户的授权。鉴于浏览器的安全机制，只有用户同意网页弹出消息通知框，消息通知才能够真正的显示出来。所以现在我们要做的就是申请用户授权。
Notification类提供了一个requestPermission方法，用来请求用户授权，代码如下：

```
Notification.requestPermission(function(status) {  
    //status是授权状态，如果用户允许显示桌面通知，则status为'granted'  
    console.log('status: ' + status);  
  
    //permission只读属性  
    var permission = Notification.permission;  
    //default 用户没有接收或拒绝授权请求 不能显示通知  
    //granted 用户接受授权请求 允许显示通知  
    //denied  用户拒绝授权请求 不允许显示通知  
  
    console.log('permission: ' + permission);  
});  
```

当这段代码执行时，浏览器会询问用户，是否允许该站点显示消息通知，如下图所示：
![enter image description here](http://img.blog.csdn.net/20150309221509013)

如果用户点击了左边的Block按钮，无论我们如何创建Notification实例，消息始终是无法显示出来的；只有用户选择了Allow按钮，代码才能正确执行并且显示出消息框来。
正如上面代码中所描述的那样，requestPermission函数执行完后，会进入一个回调函数，该回调函数可以传递一个status参数，表示在用户做出选择后，最终的授权状态。如果用户点击了授权提示右边的关闭按钮，相当于忽视了授权请求，此时status为default，在default状态下是无法显示消息的；如果用户点击了Block按钮拒绝授权请求，则status会是denied状态，自然是无法显示消息；如果用户点击了Allow按钮接受授权请求，则此时status会变成granted状态，只有在granted状态下才可以正确显示消息。
同时，在执行完授权请求后，浏览器会将权限状态赋到Notification的permission属性上面，该属性对于开发者来讲是只读的，它的值跟上述的status值是一样的。所以如果我们要显示一个消息通知，可以先判断一下是否拥有权限：

```
if (Notification.permission === 'granted') {  
    //show notification  
} 
```

正如上面描述的那样，当权限为granted时，我们就可以显示消息通知了。但是单纯的显示一个消息框是没有任何吸引力的，所以消息通知应该具有一定的交互性，在显示消息的前前后后都应该有事件的参与。Notification一开始就制定好了一系列事件函数，开发者可以很方面的使用这些函数处理用户交互：

```
var n = new Notification("sir, you got a message", {  
    icon: 'img/icon.png',  
    body: 'you will have a meeting 5 minutes later.'  
});  
  
//onshow函数在消息框显示时会被调用  
//可以做一些数据记录及定时操作等  
n.onshow = function() {  
    console.log('notification shows up');  
    //5秒后关闭消息框  
    setTimeout(function() {  
        n.close();  
    }, 5000);  
};  
  
//消息框被点击时被调用  
//可以打开相关的视图，同时关闭该消息框等操作  
n.onclick = function() {  
    alert('open the associated view');  
    //opening the view...  
    n.close();  
};  
  
//当有错误发生时会onerror函数会被调用  
//如果没有granted授权，创建Notification对象实例时，也会执行onerror函数  
n.onerror = function() {  
    console.log('notification encounters an error');  
    //do something useful  
};  
  
//一个消息框关闭时onclose函数会被调用  
n.onclose = function() {  
    console.log('notification is closed');  
    //do something useful  
};  
```

我们可以看到，Notification有4个常用的函数可以用来处理事件交互，onshow函数可以在消息展示时执行，onclick函数可以在用户点击消息后被调用，onclose函数是在消息框被关闭时被调用，onerror函数是发生错误时被调用，上面也提到了，如果没有被授权而继续创建消息通知，也会执行onerror函数。掌握了这几个函数的应用，基本上可以很好地处理消息事件了。

然后我们要把上面讲的几个步骤的代码组织起来，形成一个JavaScript对象，如下面代码所示：

```
var NotificationHandler = {  
    isNotificationSupported: 'Notification' in window,  
    isPermissionGranted: function() {  
        return Notification.permission === 'granted';  
    },  
    requestPermission: function() {  
        if (!this.isNotificationSupported) {  
            console.log('the current browser does not support Notification API');  
            return;  
        }  
  
        Notification.requestPermission(function(status) {  
            //status是授权状态，如果用户允许显示桌面通知，则status为'granted'  
            console.log('status: ' + status);  
  
            //permission只读属性  
            var permission = Notification.permission;  
            //default 用户没有接收或拒绝授权 不能显示通知  
            //granted 用户接受授权 允许显示通知  
            //denied  用户拒绝授权 不允许显示通知  
  
            console.log('permission: ' + permission);  
        });  
    },  
    showNotification: function() {  
        if (!this.isNotificationSupported) {  
            console.log('the current browser does not support Notification API');  
            return;  
        }  
        if (!this.isPermissionGranted()) {  
            console.log('the current page has not been granted for notification');  
            return;  
        }  
  
        var n = new Notification("sir, you got a message", {  
            icon: 'img/icon.png',  
            body: 'you will have a meeting 5 minutes later.'  
        });  
  
        //onshow函数在消息框显示时会被调用  
        //可以做一些数据记录及定时操作等  
        n.onshow = function() {  
            console.log('notification shows up');  
            //5秒后关闭消息框  
            setTimeout(function() {  
                n.close();  
            }, 5000);  
        };  
  
        //消息框被点击时被调用  
        //可以打开相关的视图，同时关闭该消息框等操作  
        n.onclick = function() {  
            alert('open the associated view');  
            //opening the view...  
            n.close();  
        };  
  
        //当有错误发生时会onerror函数会被调用  
        //如果没有granted授权，创建Notification对象实例时，也会执行onerror函数  
        n.onerror = function() {  
            console.log('notification encounters an error');  
            //do something useful  
        };  
  
        //一个消息框关闭时onclose函数会被调用  
        n.onclose = function() {  
            console.log('notification is closed');  
            //do something useful  
        };  
    }  
};  
  
document.addEventListener('load', function() {  
    //try to request permission when page has been loaded.  
    NotificationHandler.requestPermission();  
});  
```

我们看到，上面代码创建了一个NotificationHandler的对象，来管理消息相关的事件逻辑，通常我们的流程是这样的：在页面加载完之后调用requestPermission函数请求用户授权，然后页面代码执行一段时间之后，需要显示一个消息时，再调用showNotification函数显示这个消息，例如：

```
setTimeout(function() {  
    //if there has new mail, show notification  
    NotificationHandler.showNotification();  
}, 5000); 
```

需要注意的是，并不是所有的浏览器都支持Notification的，所以我们添加了一个isNotificationSupported属性，用来识别消息通知是否被浏览器所支持，在上面的代码中，如果识别到浏览器不支持这个API，就直接返回了。
