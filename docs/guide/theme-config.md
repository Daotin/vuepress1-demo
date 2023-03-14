# 配置

## 首页配置

网站首页的配置如下：

``` yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

- home：`true`表示显示首页，`false`表示不显示首页。
- heroImage：封面图
- heroText：标题（设置为 `null` 来禁用标题）
- tagline：副标题（设置为 `null` 来禁用副标题）
- actionText：按钮名称
- actionLink：按钮跳转地址
- features：首页描述


## 基础配置

`config.js`里面包含导航栏，侧边栏，标题，搜索框，默认主题等一系列配置信息。

配置信息及说明如下：

``` js
// .vuepress/config.js
module.exports = {
  /**
   * 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
   */
  base: '/',
  /**
   * 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
   */
  title: '天喻信息',
  /**
   * 网站的描述(SEO使用，页面不会显示)
   */
  description: '描述',

  markdown: {
    /**
     * 是否在每个代码块的左侧显示行号。
     */
    lineNumbers: true, 
    /**
     * Markdown 文件的 headers (标题 & 小标题) 会在准备阶段被提取出来，默认情况下，VuePress 会提取 h2 和 h3 标题。你可以通过这个选项来修改提取出的标题级别。
     * (也就是说，如果不设置的话，默认只会展示到h3标题，即使你文章中有h4也不会在侧边栏显示)
     */
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6' ]
  },
  /**
   * 插件：vuepress-plugin-fulltext-search，提供全文搜索功能
   */
  plugins: ['fulltext-search'],
}
```
## 主题配置

主题配置的内容是在`themeConfig`里面。有导航栏，侧边栏，搜索框等配置。

```js
  themeConfig: {
    /**
     * 导航栏 Logo,Logo 可以被放置在公共文件目录.
     */
    logo: '/logo.png',
    /**
     * 导航栏链接
     * 通过设置`navbar: false` 来禁用导航栏。
     */
    nav: [
      { text: '使用说明', link: '/guide/quick-start' },
      { text: '云平台帮助文档', link: '/cloud-help/help-center' },
      // 外部链接
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      // 下拉列表
      {
        text: '语言', items: [
          { text: 'Chinese', link: '/' },
          { text: 'Japanese', link: '/' }
        ]
      },
      // 还可以通过嵌套的 `items` 来在 `下拉列表` 中设置分组
      {
        text: '语言',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ],
    /**
     * 侧边栏（见下面详细介绍）
     */
    sidebar: {
      '/guide/': [
        'quick-start',
        'directory-structure',
        'assets',
        'markdown',
        'theme-config',
      ],
      '/cloud-help/': [
        'help-center',
      ],
    },
    /**
   * 通过设置 `themeConfig.search: false` 来禁用默认的搜索框，或是通过 `themeConfig.searchMaxSuggestions` 来调整默认搜索框显示的搜索结果数量：
   */
    search: true,
    searchMaxSuggestions: 10,
    /**
     * 侧边栏显示标题深度
     * 默认的值是1，它将提取到 h2。如果想显示到h6,就要设置为5
     * （同时也需要设置markdown.extractHeaders把文章中的h6提取出来，否则也是不显示h6的）
     */
    sidebarDepth: 5,
    /**
     * 上 / 下一篇链接
     * 上一篇和下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。
     * 你可以通过 `nextLinks` 和 `prevLinks` 来全局禁用它们
     */
    nextLinks: true,
    prevLinks: true,
    /**
     * 启用页面滚动效果
     */
    smoothScroll: true
    /**
     * 显示最后更新时间：获取每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
     */
    lastUpdated: 'Last Updated',
  },

```



### 导航栏

导航栏可能包含你的页面标题、搜索框、导航栏链接等等，它们均取决于你的配置。

#### 导航栏 Logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在`公共文件目录`。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  }
}
```

#### 导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}


```
外部链接 `<a>` 标签的特性将默认包含`target="_blank" rel="noopener noreferrer"`，你可以提供 `target` 与 `rel`，它们将被作为特性被增加到 `<a>` 标签上：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' }
    ]
  }
}
```

当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
```

此外，你还可以通过嵌套的 `items` 来在 `下拉列表` 中设置分组：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ]
  }
}
```

### 禁用导航栏

你可以使用 `themeConfig.navbar` 来禁用所有页面的导航栏：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false
  }
}
```

你也可以通过 `YAML front matter` 来禁用某个指定页面的导航栏：

``` yaml
---
navbar: false
---
```



### 侧边栏

想要使 侧边栏（Sidebar）生效，需要配置 `themeConfig.sidebar`，基本的配置，需要一个包含了多个链接的数组：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
```

你可以省略 `.md` 拓展名，同时以 `/` 结尾的路径将会被视为 `*/README.md`，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 `YAML front matter` 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为 `[link, text]` 的数组。


#### 侧边栏分组

你可以通过使用**对象**来将侧边栏划分成多个组：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
```

侧边栏的每个子组默认是可折叠的，你可以设置 `collapsable: false` 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 `sidebarDepth` 字段用于重写默认显示的侧边栏深度(`1`)。


#### 多个侧边栏

如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：

```
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
```

接着，遵循以下的侧边栏配置：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
```


#### 禁用侧边栏

你可以通过 `YAML front matter` 来禁用指定页面的侧边栏（就是在文档页面的头部写上如下内容）：

``` yaml
---
sidebar: false
---
```

## 多语言支持

### 站点多语言配置

要启用 VuePress 的多语言支持，首先需要使用如下的文件结构：

```
docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
```

然后，在 `.vuepress/config.js` 中提供 `locales` 选项：

``` js
module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '天喻信息',
      description: '描述信息'
    },
    '/en/': {
      lang: 'en-US',
      title: 'whty',
      description: 'description'
    }
  }
}
```
### 主题多语言配置

默认主题也内置了多语言支持，可以通过 `themeConfig.locales` 来配置。

每个语言除了可以配置一些站点中用到的文字语言之外，还可以拥有自己的`导航栏`和`侧边栏`。配置如下：

``` js
module.exports = {
  locales: { /* ... */ },
  themeConfig: {
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 中文下的导航栏
        nav: [
          { text: '嵌套', link: '/zh/nested/' }
        ],
        // 中文下的侧边栏
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        // 英文下的导航栏
        nav: [
          { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
        ],
        // 英文下的侧边栏
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      }
    }
  }
}
```

