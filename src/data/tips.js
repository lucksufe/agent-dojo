export const tips = [
  {
    category: '效率',
    title: '使用 / 命令菜单',
    content: '输入 / 可以唤出所有可用命令的菜单，配合下方向键可以在模糊匹配的结果中快速选择，无需记住每个命令的具体名称。'
  },
  {
    category: '效率',
    title: 'Shift+Tab 快速切换模式',
    content: '按 Shift+Tab 可以在 4 种预设模式间快速切换：默认模式、Auto Edits On（自动编辑）、Plan Mode（规划模式）、Auto Mode On（自动模式）。根据任务需要灵活切换，提升工作效率。'
  },
  {
    category: '效率',
    title: 'Workflow 工作流模式',
    content: 'Workflow 模式的架构是：你 ↔ Claude（编排者）→ 多个子智能体。Claude 作为"监工"，根据任务拆解并调度多个子 Agent 并行或串行工作，最后汇总结果。每一步完成后会自动 git 提交留痕，随时可以回档到任意步骤修改。整个流程不会中断，适合需要长时间运行的复杂任务。你只需要跟 Claude 描述目标，它会自动分配、协调和汇总。'
  },
  {
    category: '实用',
    title: '不止于编程',
    content: 'Claude Code 不仅能做项目编程，还可以帮你解决各种系统疑难杂症：安装软件、修改右键菜单、配置系统服务、排查网络问题等。以往需要搜索后慢慢调试的繁琐操作，现在直接交给 Agent 就能搞定。'
  },
  {
    category: '实用',
    title: '后台任务与会话恢复',
    content: '如果要关机或离开但任务还没完成，使用 /background 可以让任务转到后台继续执行。之后在其他地方连接到服务器，使用 /task 可以查看后台任务状态。如果是中断的会话，可以用 /resume 或 claude --resume 来恢复之前的对话上下文。'
  },
  {
    category: '配置',
    title: '项目上下文',
    content: '使用 /init 命令可以自动生成项目上下文文档（CLAUDE.md），记录项目结构、技术栈、规范等信息。也可以主动让 Agent 分析项目并生成文档。'
  },
  {
    category: '调试',
    title: '直接粘贴报错信息',
    content: '调试时可以直接把报错信息粘贴给 Agent，它会分析原因并给出修复方案。也可以让 Agent 读取日志文件进行分析。'
  },
  {
    category: '效率',
    title: '先规划后编码',
    content: '项目需求复杂时，可以告诉 Agent "暂时不进行编码，先进行需求沟通"，进入规划模式。确认方案后再动手，避免返工。'
  }
]
