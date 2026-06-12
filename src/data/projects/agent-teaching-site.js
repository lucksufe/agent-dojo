export const projects = [
  {
    title: '使用 Agent 构建教学网站',
    author: 'Agent Dojo 团队',
    description: '完整记录如何通过与 Agent 的多轮交互，从零开始构建一个 Vue 3 前端项目。包含需求讨论、技术选型、功能开发、问题修复等全过程。',
    tags: ['Vue 3', '前端', '教学网站', 'Agent 协作'],
    difficulty: 'intermediate',
    agent: {
      name: 'Claude Code',
      version: '2.1.126',
      model: 'mimo-v2.5-pro'
    },
    steps: [
      {
        title: '提出初始需求',
        userMessage: '我想做一个交流分享agent使用的前端项目，从入门的怎么安装以及填环境变量，打开控制台等等一步一步教学。然后后面进阶一点的会把我自己的项目是怎么做的，各种交流的示例放上来，然后还有结果展示，等等，一些小技巧分享。前端最好有一点小交互，比如一步一步走的时候让用户勾选完成以后会到下一步，特别是教学时候是一步一步让用户保持注意力在少量信息中这样可以让新手用户少一些茫然和畏难的情绪，让他们获得信心加大成功的正反馈。先不着急编码，我们来做一些计划安排，因为有些实现和需求我本身也不是很确定。',
        agentResponse: '好的，我来帮你规划这个项目。首先需要确认几个关键问题：技术栈选择、内容结构、部署方式等。我建议使用 Vue 3 + Vite，因为模板语法接近原生 HTML，学习成本较低，响应式系统适合处理交互式教学步骤。',
        code: null,
        result: '进入规划阶段，开始讨论需求'
      },
      {
        title: '技术栈讨论',
        userMessage: '我不太了解现代前端框架，所以需要和你先沟通一下，你说的react和vite更适合交互，是说在有后端服务比如node的情况下适合还是静态页面时候也明显更合适。',
        agentResponse: 'React/Vue + Vite 是纯前端方案，不需要后端服务。Vite 只是打包工具，产物是静态 HTML/CSS/JS 文件。所谓"适合交互"是指处理页面内的动态交互更方便，比如点击复选框切换状态、步骤条进度变化等，全部在浏览器里运行。',
        code: null,
        result: '确认使用 Vue 3 + Vite，纯静态部署'
      },
      {
        title: '交互形式确认',
        userMessage: '可以，虽然我没尝试过，不过我相信你的判断',
        agentResponse: '很好。接下来确认几个细节：1) 教学步骤的交互形式（严格步骤制/自由进度制/混合模式）；2) 进阶内容展示形式；3) 整体设计风格。',
        code: null,
        result: '用户选择：自由进度制、项目实战案例、清新友好风格'
      },
      {
        title: '案例展示格式讨论',
        userMessage: '项目实战案例可以有多个的吧？然后我还想有用户可以分析他们成功案例的地方，可以通过github上面的merge request进行',
        agentResponse: '完全可以！用户通过 PR 提交案例，合并后 Vercel 自动部署。案例数据存放在 src/data/projects/ 目录，每个案例一个 JSON 文件。',
        code: `// 初始案例结构
{
  "title": "项目标题",
  "author": "作者",
  "steps": [...],
  "finalResult": {...}
}`,
        result: '确定社区贡献机制'
      },
      {
        title: '案例格式深化',
        userMessage: '感觉这个有些过于简单了，这个json结构，应该有多个步骤，在agent中进行数次交互才能完成一个项目',
        agentResponse: '你说得对！我重新设计数据结构，展示 Agent 的完整交互过程。每一步包含用户输入、Agent 响应、代码片段、截图。',
        code: `// 改进后的案例结构
{
  "title": "项目标题",
  "steps": [
    {
      "step": 1,
      "title": "步骤标题",
      "userMessage": "用户输入的提示词",
      "agentResponse": "Agent 的响应",
      "code": "相关代码",
      "screenshot": "截图路径"
    }
  ],
  "finalResult": { "description": "最终结果" },
  "tips": ["经验总结"]
}`,
        result: '案例结构设计完成，支持多步骤交互展示'
      },
      {
        title: '开始实现',
        userMessage: '可以',
        agentResponse: '开始创建 Vue 3 + Vite 项目，安装依赖，配置路由和基础结构。',
        code: `npm create vite@latest . -- --template vue
npm install vue-router@4`,
        result: '项目骨架创建完成'
      },
      {
        title: 'Node.js 安装问题',
        userMessage: '（发现 npm 命令不存在）',
        agentResponse: '需要先安装 Node.js。使用 apt 安装 Node.js 20.x。',
        code: `sudo curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs`,
        result: 'Node.js 安装成功'
      },
      {
        title: '国内环境适配',
        userMessage: '这个入门教程我想改一改，我想的流程和这个不同，因为国内使用这个途径是完成不了的，我不太确定nodejs安装claude code能不能成功',
        agentResponse: '理解，国内访问 Anthropic API 有限制。需要调整教程支持国内可用的 AI 服务。你打算用什么流程？',
        code: null,
        result: '开始适配国内环境'
      },
      {
        title: '增加多平台支持',
        userMessage: '获取API key这一步，做成可选的，增加deepseek选项，并且deepseek作为默认，还有小米mimo',
        agentResponse: '我来更新入门教程，支持多个 AI 提供商选择。使用水平 Tab 切换 DeepSeek、小米 MiMo、Claude。',
        code: null,
        result: '教程支持三个 AI 平台'
      },
      {
        title: '模型名称修正',
        userMessage: 'deepseek-v4-pro 模型用这个，chat已经弃用了，另外小米的开放平台链接也使用platform的链接。然后用水平的tab分开这三种api平台，不要弄成一个维度向下的，这样对用户信息过载了',
        agentResponse: '已更新：DeepSeek 模型改为 deepseek-v4-pro，小米链接改为 platform.mimo.xiaomi.com，使用水平 Tab 切换。',
        code: `# DeepSeek 环境变量
export ANTHROPIC_MODEL=deepseek-v4-pro
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic`,
        result: '平台信息更新完成'
      },
      {
        title: '环境变量配置优化',
        userMessage: '配置环境变量时也是同理，需要三个平台的分开',
        agentResponse: '我来修改环境变量配置步骤，每个平台有独立的代码块，支持 Windows/Linux 切换。',
        code: null,
        result: '环境变量配置按平台分离'
      },
      {
        title: '步骤顺序调整',
        userMessage: '另外在第一步时就有控制台概念了，但是当时用户可能还没接触这个，所以步骤5这个需要提前',
        agentResponse: '说得对，应该先让用户认识控制台。我把"打开终端/控制台"步骤移到第一步。',
        code: null,
        result: '教程步骤重新排序'
      },
      {
        title: '命令行入门优化',
        userMessage: '步骤1有这么一个提示引导，但是当时用户还没有安装node所以使用这个会造成迷惑，可以输入一个常用的简单命令，并且让用户不要对命令行产生畏难情绪，把命令是什么解释一下，使用稍微轻松一些的氛围',
        agentResponse: '我来优化第一步：用 echo Hello World 替代 node -v，增加命令行概念解释，语气更轻松友好。',
        code: `# 第一个命令改成简单的 echo
echo Hello World`,
        result: '新手体验优化完成'
      },
      {
        title: '概念澄清',
        userMessage: '另外步骤3里面要解释一下，还有其他agent，claude code cli只是其中一个，我们用来教学的，否则容易让用户对agent和claude code发生概念混淆',
        agentResponse: '我来更新步骤3，解释 Agent 是一类 AI 工具的统称，列举其他 Agent 工具，说明选择 Claude Code 做教学的原因。',
        code: null,
        result: '概念区分清楚，避免混淆'
      },
      {
        title: '环境变量样式修复',
        userMessage: '现在修改环境变量这边这些文字有一个高亮背景导致看不清了，需要修改',
        agentResponse: '找到原因了，StepCard 组件的 scoped 样式给 code 加了背景色。添加 pre code 规则覆盖。',
        code: `.step-description :deep(pre code) {
  background: none;
  padding: 0;
}`,
        result: '代码块样式修复'
      },
      {
        title: '样式统一',
        userMessage: '我觉得其他步骤里那种黑色背景白色字体更好，不要给字体额外放个背景色',
        agentResponse: '已修改，环境变量代码块现在和其他代码块风格一致：深色背景 + 浅色字体。',
        code: null,
        result: '样式统一完成'
      },
      {
        title: '环境变量内容修正',
        userMessage: 'deepseek和mimo不配置ANTHROPIC_API_KEY这个变量，去掉即可，且url为https://api.deepseek.com/anthropic mimo也类似，后面有anthropic后缀。mimo的模型为mimo-v2.5-pro',
        agentResponse: '已更新：去掉 ANTHROPIC_API_KEY，URL 添加 /anthropic 后缀，MiMo 模型改为 mimo-v2.5-pro。',
        code: `# DeepSeek
export ANTHROPIC_AUTH_TOKEN=your-key
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_MODEL=deepseek-v4-pro

# 小米 MiMo
export ANTHROPIC_AUTH_TOKEN=your-key
export ANTHROPIC_BASE_URL=https://api.mimo.xiaomi.com/anthropic
export ANTHROPIC_MODEL=mimo-v2.5-pro`,
        result: '环境变量配置准确'
      },
      {
        title: '最后一步优化',
        userMessage: '步骤6里面还有些问题，你得说在你想工作的目录下打开控制台，然后把怎么在目录下面打开控制台这些，然后告诉用户使用方向键和回车对一些选项进行交互，到能输入文字的区域才是自然语言交互，然后退出是/exit，这个更合适一些exit是agent帮你退出有额外交互了，然后退出后下次想回到这次交互中不丢失上下文则使用claude --resume',
        agentResponse: '我来详细更新最后一步：教用户在目标目录打开终端，说明交互方式，使用 /exit 退出，介绍 claude --resume 恢复历史对话。',
        code: `# 恢复历史对话
claude --resume`,
        result: '教程完整性提升'
      },
      {
        title: '进度同步修复',
        userMessage: '给步骤打勾，上方的教学进度条不会变化，而且打勾以后应该把内容收起来让用户聚焦后面的内容',
        agentResponse: '问题是 StepCard 组件没有向父组件发送事件。我来修复：1) 添加 emit 事件；2) 完成后自动收起内容；3) 父组件监听事件更新进度。',
        code: `// StepCard.vue
const emit = defineEmits(['toggle'])
const toggleComplete = () => {
  isCompleted.value = !isCompleted.value
  emit('toggle', isCompleted.value)
  if (isCompleted.value) {
    isExpanded.value = false
  }
}`,
        result: '进度同步和自动收起功能完成'
      },
      {
        title: '整理为案例素材',
        userMessage: '目前这些差不多了，把整个交互过程整理一下，做成给进阶实战提供案例的素材',
        agentResponse: '我来创建项目案例，记录整个协作过程，包含每个步骤的用户输入、Agent 响应、代码示例和最终结果。',
        code: null,
        result: '案例素材整理完成'
      },
      {
        title: 'Vercel 部署问题',
        userMessage: 'Command "npm install" exited with 1 这个项目在vercel deploy时报错',
        agentResponse: '检查发现是 Vite 版本过高导致兼容性问题。降级到 Vite 5.4 并删除 package-lock.json 让 Vercel 自己生成。',
        code: `// package.json
"devDependencies": {
  "@vitejs/plugin-vue": "^5.0.0",
  "vite": "^5.4.0"
}`,
        result: '部署问题解决'
      },
      {
        title: '移动端适配',
        userMessage: '目前移动端的适配不太好',
        agentResponse: '我来添加响应式设计：1) 侧边栏在移动端隐藏，点击汉堡菜单滑出；2) 首页功能卡片改为单列；3) 技巧页面改为单列；4) 调整字体和间距。',
        code: `@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -250px;
    z-index: 100;
  }
  .sidebar.open {
    left: 0;
  }
}`,
        result: '移动端适配完成'
      },
      {
        title: '卡片布局优化',
        userMessage: '进阶实战的卡片在移动端显示效果不好，左侧的标题和右边的进阶字样以及多个tag现在移动端时左右结构根本放不下，能修改为移动端上下结构吗',
        agentResponse: '修改 ProjectCard 组件，移动端改为上下结构：标题在上，难度标签和标签在下，标签自动换行。',
        code: `@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
  }
  .project-meta {
    flex-direction: row;
    width: 100%;
  }
}`,
        result: '卡片移动端布局优化完成'
      }
    ],
    finalResult: {
      description: '成功构建了一个完整的 Agent 使用教学网站，包含入门教程、进阶实战、技巧分享三大模块，支持 DeepSeek、小米 MiMo、Claude 三个 AI 平台，具有交互式引导和社区贡献机制。项目通过 20+ 轮 Agent 交互完成，支持 PC 和移动端访问。'
    },
    tips: [
      '先和 Agent 确认需求再动手，避免返工',
      '国内环境要考虑 API 访问问题，提前规划多平台支持',
      '用户体验的细节很重要：步骤顺序、提示文案、自动收起、进度同步',
      '让 Agent 帮你整理对话记录作为项目素材，一举两得',
      '组件设计要考虑数据同步，父子组件通信不能遗漏',
      '新手教程要从最基础的概念开始，比如什么是终端、什么是命令',
      '案例要展示真实的交互过程，包括多次修改和优化',
      '移动端适配要提前考虑，响应式设计不能遗漏',
      '使用 /init 命令可以自动生成项目上下文文档',
      '也可以主动让 Agent 生成项目文档，方便后续维护'
    ]
  }
]
