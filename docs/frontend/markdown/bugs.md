# 一些踩过的坑

## vuepress修改主题色
>官方说明：docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。  
所以直接在`.vuepress/styles/palette.styl`覆盖变量即可  
一般只需要主题色即可：`$accentColor = #fb6052`  
参考链接：<https://www.fenxianglu.cn/article/277 >  