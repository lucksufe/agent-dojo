export const projects = [
  {
    title: '自动化代码审查 Agent',
    author: '示例用户',
    description: '使用 Agent 自动审查 GitHub PR，生成代码质量报告，提升团队代码审查效率。',
    tags: ['自动化', 'GitHub', '代码审查'],
    difficulty: 'intermediate',
    steps: [
      {
        title: '初始化项目',
        userMessage: '帮我创建一个 Node.js 项目，用于自动审查 GitHub PR。需要接入 GitHub API。',
        agentResponse: '好的，我来帮你初始化项目并配置 GitHub API 集成。首先创建项目结构...',
        code: `mkdir pr-reviewer && cd pr-reviewer\nnpm init -y\nnpm install @octokit/rest dotenv`,
        result: '项目初始化完成'
      },
      {
        title: '配置 GitHub Token',
        userMessage: '现在需要配置 GitHub Personal Access Token，用于访问 API。',
        agentResponse: '我来帮你创建环境配置文件。你需要在 GitHub Settings > Developer settings > Personal access tokens 创建一个 token。',
        code: `// .env\nGITHUB_TOKEN=your_github_token\nGITHUB_OWNER=your_username\nGITHUB_REPO=your_repo`,
        result: '环境变量配置完成'
      },
      {
        title: '实现 PR 获取逻辑',
        userMessage: '获取指定仓库的最新 PR，并读取代码变更内容。',
        agentResponse: '我来实现获取 PR 代码变更的功能。使用 Octokit 库调用 GitHub API...',
        code: `const { Octokit } = require('@octokit/rest')\n\nconst octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })\n\nasync function getPRChanges(prNumber) {\n  const { data: files } = await octokit.pulls.listFiles({\n    owner: process.env.GITHUB_OWNER,\n    repo: process.env.GITHUB_REPO,\n    pull_number: prNumber\n  })\n  return files\n}`,
        result: '成功获取 PR 变更文件列表'
      },
      {
        title: '集成代码审查 Agent',
        userMessage: '使用 Claude Agent 分析代码变更，找出潜在问题。',
        agentResponse: '我来集成 Claude API 进行智能代码审查。将代码变更发送给 Agent 分析...',
        code: `const Anthropic = require('@anthropic-ai/sdk')\n\nconst client = new Anthropic()\n\nasync function reviewCode(changes) {\n  const message = await client.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 1024,\n    messages: [{\n      role: 'user',\n      content: \`请审查以下代码变更：\\n\${JSON.stringify(changes, null, 2)}\`\n    }]\n  })\n  return message.content[0].text\n}`,
        result: 'Agent 审查功能集成完成'
      },
      {
        title: '运行测试',
        userMessage: '测试一下完整流程，审查一个真实的 PR。',
        agentResponse: '好的，让我运行完整流程，获取最新的 PR 并进行审查...',
        code: `node index.js --pr=42`,
        result: '审查完成！发现 3 个潜在问题：1) 未处理的异常 2) 性能优化建议 3) 安全隐患'
      }
    ],
    finalResult: {
      description: '成功实现自动化代码审查，团队审查效率提升 60%，代码质量显著改善。'
    },
    tips: [
      '建议先在小范围测试，确认效果后再推广',
      '注意 GitHub API 有调用频率限制',
      '定期更新 Agent 的审查规则，适应团队代码风格',
      '可以配置 Webhook 实现 PR 创建时自动触发审查'
    ]
  }
]
