# 元鑫荣华贸易有限公司 - Next.js 网站

这是一个基于 Next.js 和 React 构建的现代化企业网站，专为元鑫荣华贸易有限公司设计。

## 功能特性

- 🚀 基于 Next.js 14 和 React 18
- 📱 完全响应式设计
- 🎨 现代化 UI/UX 设计
- ⚡ 快速加载和优化性能
- 🔍 SEO 友好
- 📧 联系表单
- 🖼️ 图片画廊
- 📝 博客系统
- 👥 团队展示

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义 CSS
- **图标**: Font Awesome
- **动画**: Framer Motion
- **图片**: Next.js Image 组件

## 项目结构

```
├── src/
│   ├── components/          # React 组件
│   │   ├── Layout.tsx      # 主布局组件
│   │   ├── Header.tsx      # 头部组件
│   │   ├── Footer.tsx      # 底部组件
│   │   ├── Hero.tsx        # 首页轮播
│   │   ├── Services.tsx    # 服务展示
│   │   ├── About.tsx       # 关于我们
│   │   ├── Team.tsx        # 团队展示
│   │   ├── Blog.tsx        # 博客列表
│   │   └── ...
│   ├── pages/              # 页面文件
│   │   ├── index.tsx       # 首页
│   │   ├── about.tsx       # 关于我们页
│   │   ├── contact.tsx     # 联系我们页
│   │   └── ...
│   ├── styles/             # 样式文件
│   │   └── globals.css     # 全局样式
│   └── types/              # TypeScript 类型定义
├── public/                 # 静态资源
│   └── static/            # 原始静态文件
├── package.json           # 项目依赖
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind 配置
└── tsconfig.json          # TypeScript 配置
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式运行

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
npm run build
npm start
```

### 4. 静态导出

```bash
npm run build
```

构建完成后，静态文件将在 `out` 目录中生成。

## 页面说明

### 主要页面

- **首页** (`/`) - 公司介绍、服务展示、团队展示
- **关于我们** (`/about`) - 公司历史、价值观、团队介绍
- **产品服务** (`/service`) - 钢材产品、光伏支架系统
- **项目展示** (`/projects`) - 成功案例、项目画廊
- **团队介绍** (`/team`) - 团队成员、专业团队
- **博客** (`/blog`) - 行业资讯、公司动态
- **联系我们** (`/contact`) - 联系信息、在线表单

### 组件说明

- **Header** - 导航菜单、公司 Logo、联系信息
- **Hero** - 首页轮播图、主要标语
- **Services** - 服务展示、产品介绍
- **About** - 公司介绍、发展历程
- **Team** - 团队展示、成员介绍
- **Testimonial** - 客户评价、成功案例
- **Blog** - 最新文章、行业资讯
- **Footer** - 公司信息、快速链接、社交媒体

## 自定义配置

### 修改公司信息

在 `src/components/Header.tsx` 和 `src/components/Footer.tsx` 中修改：
- 公司名称
- 联系电话
- 邮箱地址
- 公司地址

### 修改样式

在 `src/styles/globals.css` 中自定义样式，或使用 Tailwind CSS 类名。

### 添加新页面

1. 在 `src/pages/` 目录下创建新的 `.tsx` 文件
2. 使用 `Layout` 组件包装页面内容
3. 在 `Header.tsx` 中添加导航链接

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

1. 运行 `npm run build`
2. 将 `out` 目录上传到静态托管服务

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

本项目仅供元鑫荣华贸易有限公司使用。

## 联系方式

如有问题或建议，请联系开发团队。
