# Vuepress Blog

## 搭建及基础部署

### 如何新建一个vuepress项目以及部署到github pages

根目录下新建文件 **deploy.sh**

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的谬误
set -e

# 生成动态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是公布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果公布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果公布到 https://<USERNAME>.github.io/<REPO>
git remote add origin git@github.com:huabingtao/vuepress-starter.git
git branch -M main
git push -f git@github.com:huabingtao/vuepress-starter.git main:gh-pages

cd -
```

package.json新增命令
```
"scripts": {
  ...,
  "deploy": "bash deploy.sh"
}
```

执行：
```
npm run deploy
# yarn deploy
```

注：win系统需要一条一条执行 deploy.sh 里面执行git命令。

参考链接：[https://lequ7.com/guan-yu-vuepress-ji-yu-vuepress-da-jian-bo-ke-jiao-cheng-zi-dong-hua-bu-shu-githubactions.html][1]











[1]:https://lequ7.com/guan-yu-vuepress-ji-yu-vuepress-da-jian-bo-ke-jiao-cheng-zi-dong-hua-bu-shu-githubactions.html