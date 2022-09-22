# 踩坑合集

## 找不到dll文件

没有dll不是根本原因，项目中出现引用二义性，有个类不小心重复了，导致报错“找不到dll文件”。

以后先去解决其他报错，或者清理后再重新生成。

## “GenerateDepsFile”任务意外失败”

生成nuget包之前重新生成报此错，清理后重新生成解决。

## 修改nuget包的缓存地址

无可视化修改方法，需要修改文件。

NuGet缓存包默认缓存位置：C:\Users\{username}\.nuget\packages

本地包默认位置：C:\Program Files (x86)\Microsoft SDKs\NuGetPackages

参考地址：https://blog.csdn.net/qq_26900081/article/details/106687582

## 批处理命令执行后，批处理文件所在文件夹清空
批处理部分代码如下

```sh
cd packages
del /q *.*
```

此命令目的是删除旧版本，再进行后续操作。

但因为批处理命令所在文件夹没有packages文件夹，所以该命令所在文件夹都会被删除。

nuget缓存包空间和批处理命令不能放在同一目录下。