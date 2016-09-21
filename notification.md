
#Notification

>https://developer.mozilla.org/en-US/docs/Web/API/Notification

##Constructor

`new Notification()`
Creates a new instance of the Notification object.

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

- auto: adopts the browser's language setting behaviour (the default.)
- ltr: left to right.
- rtl : right to left.
Note: Most browsers seem to ignore explicit ltr and rtl settings, and just go with the browser-wide setting.

`Notification.lang`
The language code of the notification as specified in the options parameter of the constructor.

`Notification.tag`
The ID of the notification (if any) as specified in the options parameter of the constructor.

- The idea of notification tags is that more than one notification can share the same tag, linking them together. One notification can then be programmatically replaced with another to avoid the users' screen being filled up with a huge number of similar notifications.

`Notification.icon`
The URL of the image used as an icon of the notification as specified in the options parameter of the constructor.

`Notification.requireInteraction`
A Boolean indicating that on devices with sufficiently large screens, a notification should remain active until the user clicks or dismisses it.

`Notification.silent`
Specifies whether the notification should be silent, i.e. no sounds or vibrations should be issued, regardless of the device settings.

`Notification.timestamp`
Specifies the time at which a notification is created or applicable (past, present, or future).

`Notification.title`
The title of the notification as specified in the first parameter of the constructor.

`Notification.vibrate`
Specifies a vibration pattern for devices with vibration hardware to emit.

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

###Instance methods

These properties are available only on an instance of the Notification object or through its prototype. The Notification object also inherits from the EventTarget interface.

`Notification.close()`
Programmatically closes a notification.