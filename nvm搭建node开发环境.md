# 快速搭建 Node.js 开发环境以及加速 npm

- [安装nvm](#安装nvm)
- [加速nvm](#加速nvm)
- [加速npm](#加速npm)

## 安装nvm

```text
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
或者
```text
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

执行上述命令后，会把`nvm`安装到`~/.nvm`，并且把如下内容写入描述文件(`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)。

```text
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

重新打开终端即可使用`nvm`命令。

## 加速nvm

nvm 默认是从 `http://nodejs.org/dist/`下载的, 国外服务器, 必然很慢,
好在 nvm 以及支持从镜像服务器下载包, 于是我们可以方便地从七牛的 node dist 镜像下载:

    $ NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install 7.3.0
    
如果不想每次都输入镜像源，可以把`NVM_NODEJS_ORG_MIRROR`加入到`.bashrc`文件中。

```text
# nvm
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs
```

## 加速npm

`npm`可以通过简单的`--registry`参数, 使用国内的镜像 `https://registry.npm.taobao.org` 。

可以安装`cnpm`。[参考](https://npm.taobao.org/)

    npm install -g cnpm --registry=https://registry.npm.taobao.org
    