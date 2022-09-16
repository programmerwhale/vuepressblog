module.exports = {
      title: 'Whale\'s blog',
      description: '个人网站',
      base: '/learning-blog/', // 这是部署到github相关的配置
      markdown: {
       lineNumbers: true // 代码块显示行号
      },
        //theme: 'vuepress-theme-maker',
      themeConfig: {
       nav:[ // 导航栏配置
        {text: 'Home', link: '/' },
        {text: '前端', 
        items:[
            {text: 'Markdown',link:'/frontend/markdown.md'}
        ]},
        {text: '后端语言', link: '/backend/' },
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
       sidebar: 'auto', // 侧边栏配置
       sidebarDepth: 3, // 侧边栏显示2级
      },
      plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }]
     };// .vuepress/theme/index.js