# 用 Agent 写脚本 · 普通职员上手指南

面向普通职员的 AI Agent 使用指南：以大模型/Trae 为例，讲清楚基本概念、模型 Key 配置、如何描述需求，以及可以直接照抄的实战脚本案例。

## 内容结构

| 页面 | 说明 |
| --- | --- |
| `index.html` | 首页：痛点场景、上手三步、阅读路线 |
| `concepts.html` | 基本概念：大模型、提示词、上下文、Token、Agent、工具调用、权限确认 |
| `setup.html` | 安装与配置：Trae 下载、界面、模式切换、添加模型 Key |
| `prompt.html` | 如何提需求：目标—输入—输出—规则—验收五要素与模板 |
| `practice.html` | 实战案例：批量重命名、合并 Excel、提取 Word 信息、压缩图片 |
| `faq.html` | 常见问题、安全清单与上手检查清单 |

## 技术栈

纯静态站点，无构建步骤：

- 原生 HTML + CSS + JavaScript
- 样式：`assets/css/style.css`
- 交互：`assets/js/main.js`（导航高亮、目录跟随、一键复制）

## 本地预览

```bash
# 任选一种
python3 -m http.server 8080
# 或
npx serve .
```

然后打开 <http://localhost:8080>。

## 部署

仓库根目录即为站点根目录，可直接部署到任意静态托管（Vercel、GitHub Pages、Nginx 等），无需构建命令，输出目录为 `.`。

## 归档说明

仓库中的 `archive/` 目录保留了旧版 Agent Dojo（Vue 3 + Vite）的源码，仅作历史存档，不再部署。详见 [`archive/README.md`](archive/README.md)。
