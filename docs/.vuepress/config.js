module.exports = {
      title: 'Whale\'s blog',
      description: '个人网站',
      base: '/learning-blog/', // 这是部署到github相关的配置
      markdown: {
       lineNumbers: true // 代码块显示行号
      },
        //theme: 'vuepress-theme-maker',
      themeConfig: {
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 页面滚动效果
        smoothScroll: true,
        nav:[ // 导航栏配置
          {text: 'Home', link: '/' },
          {text: '前端相关', 
          items:[
              {text: 'Markdown',link:'/frontend/markdown/markdown.md'},
              {text: 'Vuepress',link:'/frontend/vuepress/'},
          ]},
          {text: '后端语言',items:[
            {text: 'Asp.Net Core',link:'/backend/aspnetcore/'},
            {text: 'Go',link:'/backend/go/'},
            {text: 'Java',link:'/backend/java/'}
          ]},
          {text: '八股文', 
          items: [ 
          { text: "网络", link:"/csbasic/net/"},
          { text: "Mysql", link:"/csbasic/mysql/"},
          { text: "Redis", link:"/csbasic/redis/"},
          ]},
          {text: '算法题库', link: '/algorithm/'},
          {text: '学习资源', link: '/source/'},
          {text: '生活', link: '/life/'},
          {text: '其他', link: '/others/'},  
          {text: 'Github', link: 'https://github.com/programmerwhale/vuepressblog'}
        ],
        //sidebar: 'auto', // 侧边栏配置
        sidebar: {
          '/frontend/markdown/':[
            'markdown',
            'bugs'
          ],
          '/frontend/vuepress/':[
            'vuepress',
            'bugs'
          ],
        },
        sidebarDepth: 3, // 侧边栏显示2级
      },
      plugins: [
        '@vuepress/active-header-links', 
        '@vuepress/back-to-top',
        '@vuepress/blog',
        '@vuepress/last-updated',
        {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor',
        },
      ]
     };// .vuepress/theme/index.js