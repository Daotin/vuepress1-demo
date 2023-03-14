# 目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```sh
.
├── docs
│   ├── .vuepress // 可选的
│   │   ├── `components` // 可选的
│   │   ├── `theme` // 可选的
│   │   │   └── Layout.vue
│   │   ├── `public` // 可选的
│   │   ├── `styles` // 可选的
│   │   │   ├── index.styl
│   │   │   └── palette.styles
│   │   └── `config.js` // 可选的
│   │ 
│   ├── README.md  // 首页
│   ├── guide
│   │   └── README.md // 文档页面
│   └── config.md    // 配置文件
│ 
└── package.json
```

目录说明：

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级（一般可以放一些自定义的全局变量）。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量（一般放自定义的css样式）。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/config.js`: 配置文件。


## 默认的页面路由

此处我们把 `docs` 目录作为 `targetDir` ，下面所有的“文件的相对路径”都是相对于 `docs` 目录的。

对于上述的目录结构，默认页面路由地址如下：

|   文件的相对路径    |  页面路由地址   |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

