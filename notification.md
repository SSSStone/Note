
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
