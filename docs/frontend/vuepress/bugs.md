# 一些踩过的坑

## vuepress构建blog如何修改主题色

__安装插件：__

>参考链接：[https://www.vuepress.cn/plugin/official/plugin-blog.html][1]

```sh
yarn add -D @vuepress/plugin-blog
# OR npm install -D @vuepress/plugin-blog
```

__使用：__

```sh
module.exports = {
  plugins: ['@vuepress/blog']
}
```

***

修改`.vuepress/styles/palette.styl`中`$accentColor = #3eaf7c` ，`palette.styl`没有的话就创建一个。

还可以调整其他变量：

``` stylus
// colors
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

```

>参考链接：[https://vuepress-theme-blog.billyyyyy3320.com/config/palette.html][2]
***


__修改主题颜色成功。__

[1]:https://www.vuepress.cn/plugin/official/plugin-blog.html
[2]:https://vuepress-theme-blog.billyyyyy3320.com/config/palette.html