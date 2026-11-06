# 归档：旧版 Agent Dojo

本目录是旧版「Agent Dojo」网站的完整源码存档（Vue 3 + Vite + Vue Router），已被仓库根目录的静态站点取代，**不再部署**。

## 内容

- `index.html`、`vite.config.js`、`package.json` — 旧版工程入口与构建配置
- `src/` — Vue 组件、页面、路由与案例数据
- `public/` — 旧版静态资源
- `docs/` — 旧版需求讨论记录
- `vercel.json` — 旧版 Vercel 路由重写配置
- `dist/`、`node_modules/` — 本地构建产物与依赖（已被 git 忽略，不在版本库中）

## 如需重新运行旧版

```bash
cd archive
npm install
npm run dev
```

构建：`npm run build`，产物输出到 `archive/dist`。
