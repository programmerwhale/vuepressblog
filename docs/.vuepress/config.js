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
              {text: 'Vuepress',link:'/frontend/vuepress/vuepress.md'},
          ]},
          {text: '后端语言',items:[
            {text: 'Asp.Net Core',link:'/backend/aspnetcore/aspnetcore.md'},
            {text: 'Go',link:'/backend/go/go.md'},
            {text: 'Java',link:'/backend/java/java.md'}
          ]},
          {text: '八股文', 
          items: [ 
          { text: "网络", link:"/csbase/net/net.md"},
          { text: "操作系统", link:"/csbase/os/os.md"},
          { text: "Mysql", link:"/csbase/mysql/mysql.md"},
          { text: "Redis", link:"/csbase/redis/redis.md"},
          { text: "Linux", link:"/csbase/linux/linux.md"},
          ]},
          {text: '算法题库', link: '/algorithm/leetcode.md'},
          {text: '工具', 
          items:[
              {text: 'Markdown',link:'/tools/markdown/markdown.md'},
              {text: 'Git',link:'/tools/git/git.md'},
              {text: 'Mac',link:'/tools/mac/mac.md'},
              {text: 'Notion',link:'/tools/notion/notion.md'},
          ]},
          {text: '学习资源', link: '/source/'},
          {text: 'Github', link: 'https://github.com/programmerwhale/vuepressblog'}
        ],
        //sidebar: 'auto', // 侧边栏配置
        sidebar: {
          '/tools/markdown/':[
            'markdown',
            'bugs'
          ],
          '/frontend/vuepress/':[
            'vuepress',
            'bugs'
          ],
          '/backend/aspnetcore/':[
            'aspnetcore',
            'book1',
            'workopt'
          ],
          '/csbase/redis/':[
            'redis',
          ],
          '/csbase/net/':[
            'net',
          ],
          '/csbase/linux/':[
            'linux',
          ],
          '/csbase/os/':[
            'os',
          ],
          '/csbase/mysql/':[
            'mysql',
          ],
          '/tools/git/':[
            'git',
          ],
          '/tools/mac/':[
            'mac',
          ],
          '/tools/notion/':[
            'notion',
          ],
        },
        sidebarDepth: 3, // 侧边栏显示3级
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