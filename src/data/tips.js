export const tips = [
  {
    category: '效率',
    title: '使用快捷键',
    content: '在 Claude Code 中，按 ↑ 键可以快速调出上一条命令，节省重复输入时间。'
  },
  {
    category: '效率',
    title: '批量操作',
    content: '一次描述多个相关任务，Agent 会按顺序执行，比如："帮我创建一个 React 组件，添加样式，然后写单元测试"。'
  },
  {
    category: '调试',
    title: '详细描述问题',
    content: '遇到错误时，提供完整的错误信息和上下文，Agent 能更准确地定位问题。'
  },
  {
    category: '调试',
    title: '分步调试',
    content: '复杂问题可以分步解决，先让 Agent 理解问题，再逐步提出解决方案。'
  },
  {
    category: '配置',
    title: '环境变量管理',
    content: '使用 .env 文件管理敏感配置，配合 .gitignore 防止泄露。'
  },
  {
    category: '配置',
    title: '项目上下文',
    content: '在项目根目录创建 CLAUDE.md 文件，记录项目规范和偏好，Agent 会自动读取。'
  },
  {
    category: '安全',
    title: 'API Key 保护',
    content: '永远不要将 API Key 直接写在代码中，使用环境变量或密钥管理服务。'
  },
  {
    category: '安全',
    title: '代码审查',
    content: 'Agent 生成的代码也需要人工审查，特别是涉及安全和数据处理的部分。'
  }
]
