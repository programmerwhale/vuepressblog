# markdown语法

## markdown标题
1、使用 = 和 - 标记一级和二级标题
```md
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

2、使用 # 号标记

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## markdown段落

1、第一行和第二行中间空一行  
2、第一行结尾处多两个空格

### 字体

:::tip *或者_都可以，在要设置字体格式的前后加一对是斜体，两对儿是粗体，三对是粗斜体  

:::

*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___  

```md
*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___  
```

### 分隔线

```md
***
```

***

### 下划线

```md
<u>带下划线文本</u>
```

<u>带下划线文本</u>


## markdown列表

### 无序列表

:::tip *或者+或者- 都可以  

:::

```md
* 第一项
* 第二项
* 第三项
```

* 第一项
* 第二项
* 第三项

### 有序列表

```md
1. 第一项
2. 第二项
3. 第三项
```

1. 第一项
2. 第二项
3. 第三项

### 列表嵌套

```md
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素


## markdown 区块

```md
> 区块引用
```

> 区块引用

## markdown 代码

1. 如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`）  
```md
`printf()` 函数
```

`printf()` 函数

2. 代码块可以用```包起来  

```md
```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

## markdown 链接
1. `[链接名称](链接地址)  `  
这是一个链接 [菜鸟教程](https://www.runoob.com)  

2.`<链接地址>`  
<https://www.runoob.com>

## markdown 图片
```md
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")

## markdown 表格
```md
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

# markdown拓展
>参考：<https://www.vuepress.cn/guide/markdown.html#header-anchors>

## Emoji
emoji列表 :point_down:  
<https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json>

## 自定义容器
::: tip
这是一个提示
:::

```md
::: tip
这是一个提示
:::
```

::: details
这是一个可展开详情块，在 IE / Edge 中不生效
:::

```
::: details
这是一个可展开详情块，在 IE / Edge 中不生效
:::
```

# 一些踩过的坑以及解决办法

## dsadf