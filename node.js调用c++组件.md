#node.js调用c++组件

## 安装环境

>windows

### 安装node.js

>http://nodejs.cn/

下载安装即可

### 安装node-gyp

>https://github.com/nodejs/node-gyp

You can install with `npm`:

    $ npm install -g node-gyp

You will also need to install:

- On Unix:
	- `python` (`v2.7` recommended, `v3.x.x` is not supported)
	- `make`
	- A proper C/C++ compiler toolchain, like `GCC`

- On Mac OS X:
	- `python` (`v2.7` recommended, `v3.x.x` is not supported) (already installed on Mac OS X)
	- Xcode
		- You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`
		- This step will install `gcc` and the related toolchain containing `make`

- On Windows:
	- Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).

	- Option 2: Install tools and configuration manually:
		- Visual C++ Build Environment:
			- Option 1: Install `Visual C++ Build Tools` using the Default Install option.
			- Option 2: Install `Visual Studio 2015` (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions.

	- Install `Python 2.7` (`v3.x.x` is not supported), and run `npm config set python python2.7` (or see below for further instructions on specifying the proper Python version and path.)

	-  Launch cmd, `npm config set msvs_version 2015`

## 模块绑定（.gyp）

```
{
  "targets": [
    {
      "target_name": "test",
      "sources": [ "hello.cc" ]
    }
  ]
}
```

## .CC文件

```
// add.cc
#include <node.h>

namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

void add(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = args.GetIsolate();

	// Check the number of arguments passed.
	if (args.Length() < 2) {
		// Throw an Error that is passed back to JavaScript
		isolate->ThrowException(Exception::TypeError(
		String::NewFromUtf8(isolate, "Wrong number of arguments")));
		return;
	}
	// Check the argument types
	if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
		isolate->ThrowException(Exception::TypeError(
		String::NewFromUtf8(isolate, "Wrong arguments")));
		return;
	}

	// Perform the operation
	double value = args[0]->NumberValue() + args[1]->NumberValue();
	Local<Number> num = Number::New(isolate, value);

	// Set the return value (using the passed in
	// FunctionCallbackInfo<Value>&)
	args.GetReturnValue().Set(num);
}

void myInit(Local<Object> exports) {
	NODE_SET_METHOD(exports, "add", add);
}

NODE_MODULE(test, myInit)

}
```

## .js文件

```
var test = require('./build/Release/test');

console.log(test.hello()); 
console.log(test.myHello()); 
```