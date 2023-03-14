module.exports = {
  title: '天喻信息',
  description: '描述',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '天喻信息',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US',
      title: 'whty',
      description: 'Vue-powered Static Site Generator'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    locales: {
      '/': {
        selectText: '选择语言', // 多语言下拉菜单的标题
        label: '简体中文', // 该语言在下拉菜单中的标签
      },
      '/en/': {
        selectText: 'Languages', 
        label: 'English',
        nav: [
          { text: 'Cloud Platform Help Center', link: '/en/cloud-help/help-center' },
        ],
        sidebar: {
          '/en/cloud-help/': [
            'help-center',
          ],
        },
      }
    },
    nav: [
      { text: '使用说明', link: '/guide/quick-start' },
      { text: '云平台帮助中心', link: '/cloud-help/help-center' }
    ],
    sidebar: {
      '/guide/': [
        'quick-start',
        'directory-structure',
        'theme-config',
        'assets',
        'markdown',
      ],
      '/cloud-help/': [
        'help-center',
      ],
    },
    sidebarDepth: 5,
    /**
     * 侧边栏是否展开所有文章的目录结构
     */
    // displayAllHeaders: true,
  },
  markdown: {
    lineNumbers: true, // 每个代码块显示行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6' ]
  },
  plugins: ['fulltext-search'],
  lastUpdated: 'Last Updated',
}