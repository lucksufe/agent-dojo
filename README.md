# Agent Dojo

Agent 使用教学与实战分享网站，帮助新手从零开始学习 AI Agent 的使用。

## 项目简介

这是一个面向新手的 Agent 使用教学网站，特点：

- **交互式引导**：步骤勾选、进度跟踪、鼓励反馈
- **多平台支持**：DeepSeek、小米 MiMo、Claude
- **实战案例**：展示完整的 Agent 交互过程
- **社区贡献**：通过 GitHub PR 提交你的案例
- **移动端适配**：响应式设计，支持手机访问

## 技术栈

- Vue 3 + Vite 5
- Vue Router 4
- 纯 CSS 样式（无 UI 框架）
- 静态部署（Vercel）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
src/
├── components/
│   ├── layout/        # Header、Sidebar
│   ├── tutorial/      # StepCard、StepProgress
│   └── showcase/      # ProjectCard
├── views/             # 页面组件
├── data/              # 数据文件
│   ├── steps.js       # 入门教程步骤
│   ├── tips.js        # 小技巧
│   └── projects/      # 实战案例
└── styles/            # CSS 样式
```

## 贡献案例

欢迎提交你自己的 Agent 使用案例！

1. Fork 本仓库
2. 在 `src/data/projects/` 目录下创建新的案例文件
3. 按照现有案例格式编写（包含多步骤交互）
4. 提交 Pull Request

案例格式示例：

```json
{
  "title": "项目标题",
  "author": "作者",
  "description": "项目简介",
  "tags": ["标签1", "标签2"],
  "difficulty": "beginner|intermediate|advanced",
  "agent": {
    "name": "Agent 名称（如 Claude Code、Cursor 等）",
    "version": "Agent 版本号",
    "model": "使用的模型名称"
  },
  "steps": [
    {
      "title": "步骤标题",
      "userMessage": "用户输入",
      "agentResponse": "Agent 响应",
      "code": "相关代码（可选）",
      "result": "步骤结果（可选）"
    }
  ],
  "finalResult": {
    "description": "最终结果"
  },
  "tips": ["经验总结"]
}
```

## 部署

项目通过 GitHub + Vercel 自动部署：

1. 推送代码到 GitHub
2. 在 Vercel 导入仓库
3. 自动构建部署

## 许可证

MIT
