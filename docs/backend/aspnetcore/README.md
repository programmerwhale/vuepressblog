# bugs

## 找不到dll文件
 

## “GenerateDepsFile”任务意外失败”

生成nuget包之前重新生成报此错，清理后重新生成解决。

## 修改nuget包的缓存地址

https://blog.csdn.net/qq_26900081/article/details/106687582

## 批处理命令执行后，批处理文件所在文件夹清空
批处理部分代码如下

```sh
cd packages
del /q *.*
```

此命令目的是删除旧版本，再进行后续操作。


因为批处理命令所在文件夹没有packages文件夹，所以该命令所在文件夹都会被删除。