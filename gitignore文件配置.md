# gitignore文件配置

## 配置语法

以斜杠“/”开头表示目录；

以星号“*”通配多个字符；

以问号“?”通配单个字符

以方括号“[]”包含单个字符的匹配列表；

以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

## DEMO

    folder/*
说明：忽略目录`folder`下的全部内容；注意，不管是根目录下的`/folder/`目录，还是某个子目录`/child/folder/`目录，都会被忽略；

    /folder/*
说明：忽略根目录下的`/folder/`目录的全部内容；

```
/*
!.gitignore
!/workspace/folder1/
!/workspace/folder2/
```
说明：忽略全部内容，但是不忽略`.gitignore`文件、根目录下的`/workspace/folder1/`和`/workspace/folder2/`目录；