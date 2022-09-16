module.exports = {
    title: 'Whale\'s blog',
    description: '个人网站',
    base: '/learning-blog/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        { text: 'Home', link: '/' },
        {text: '前端', link: '/frontend/' },
        {text: '后端语言', link: '/backend/' },
        {text: '算法题库', link: '/algorithm/'},
        {text: '学习资源', link: '/source/'},
        {text: '生活', link: '/life/'},
        {text: '其他', link: '/others/'},    
        {text: 'Github', link: 'https://github.com/programmerwhale/vuepressblog'},
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }