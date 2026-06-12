<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const mdContent = ref('')
const renderedHtml = ref('')
const saved = ref(false)

const mdText = `# 保存对话为案例

将当前对话整理为 Agent Dojo 项目格式的案例文件。

## GitHub 仓库

**项目地址**：https://github.com/lucksufe/agent-dojo

欢迎 Star 和 Fork！

## 要求

1. **保留真实用户输入**：用户的每一条消息都要保留，不能省略或概括
2. **Agent 响应可精简**：由于 Agent 回复通常较长，可以概括要点
3. **记录代码变更**：涉及的代码片段、配置修改要记录
4. **标注关键节点**：重要的决策、问题解决、功能完成
5. **记录 Agent 信息**：使用的模型、Agent 名称和版本号

## 输出格式

生成 JavaScript 文件，格式如下：

\`\`\`javascript
export const projects = [
  {
    title: '案例标题',
    author: '作者名称',
    description: '一句话描述这个项目做了什么',
    tags: ['标签1', '标签2', '标签3'],
    difficulty: 'beginner|intermediate|advanced',
    agent: {
      name: 'Agent 名称（如 Claude Code、Cursor 等）',
      version: 'Agent 版本号',
      model: '使用的模型名称'
    },
    steps: [
      {
        title: '步骤标题',
        userMessage: '用户的原始输入（完整保留）',
        agentResponse: 'Agent 响应的概括（可以精简）',
        code: '相关代码或配置（可选，无则为 null）',
        result: '这一步的结果（可选）'
      }
      // ... 更多步骤
    ],
    finalResult: {
      description: '项目最终完成的结果'
    },
    tips: [
      '从这次交互中学到的经验1',
      '经验2'
    ]
  }
]
\`\`\`

## 使用方法

### 1. 安装命令

下载 \`save-case.md\` 文件，放到以下任一目录：
- \`.claude/commands/\` — 项目级别（仅当前项目可用）
- \`~/.claude/commands/\` — 用户级别（所有项目可用）

### 2. 生成案例文件

在 Claude Code 对话中输入 \`/save-case\`，Agent 会自动整理对话并生成 JS 文件到 \`src/data/projects/\` 目录。

### 3. 提交 PR

\`\`\`bash
# Fork 仓库（在 GitHub 页面点击 Fork 按钮）

# 克隆你 Fork 的仓库
git clone https://github.com/你的用户名/agent-dojo.git
cd agent-dojo

# 将生成的案例文件复制到项目中
cp /path/to/your-case.js src/data/projects/

# 创建分支并提交
git checkout -b add-my-case
git add src/data/projects/your-case.js
git commit -m "feat: 添加案例 - 你的案例标题"
git push origin add-my-case

# 在 GitHub 上创建 Pull Request
\`\`\`

## 执行步骤

1. 回顾整个对话过程
2. 提取所有用户消息（完整保留）
3. 概括每轮 Agent 响应的要点
4. 整理涉及的代码片段
5. 获取当前 Agent 信息（名称、版本、模型）
6. 总结最终结果和经验教训
7. 生成文件并保存到 \`src/data/projects/\` 目录

## 获取 Agent 信息

使用以下命令获取当前 Agent 信息：
- Claude Code 版本：\`claude --version\`
- 模型名称：从对话上下文中获取

## 文件命名

使用小写字母和连字符，例如：\`my-project-name.js\`

## 保存位置

\`src/data/projects/[文件名].js\`
`

onMounted(() => {
  mdContent.value = mdText
  renderedHtml.value = marked(mdText)
})

function downloadMd() {
  const blob = new Blob([mdText], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'save-case.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function saveToClipboard() {
  navigator.clipboard.writeText(mdText).then(() => {
    saved.value = true
    setTimeout(() => {
      saved.value = false
    }, 2000)
  })
}
</script>

<template>
  <div class="save-case">
    <section class="page-header">
      <h1>保存对话为案例</h1>
      <p class="subtitle">
        使用 Claude Code 的自定义命令功能，将对话保存为 Agent Dojo 案例
      </p>
    </section>

    <section class="usage-guide">
      <h2>使用方法</h2>
      <div class="steps">
        <div class="step">
          <span class="step-num">1</span>
          <div class="step-content">
            <h3>下载命令文件</h3>
            <p>点击下方按钮下载 <code>save-case.md</code> 文件</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">2</span>
          <div class="step-content">
            <h3>放置到命令目录</h3>
            <p>
              将文件放到以下任一目录：
            </p>
            <div class="path-list">
              <div class="path-item">
                <code>.claude/commands/</code>
                <span class="path-desc">项目级别（仅当前项目可用）</span>
              </div>
              <div class="path-item">
                <code>~/.claude/commands/</code>
                <span class="path-desc">用户级别（所有项目可用）</span>
              </div>
            </div>
          </div>
        </div>
        <div class="step">
          <span class="step-num">3</span>
          <div class="step-content">
            <h3>使用命令生成案例</h3>
            <p>
              在 Claude Code 对话中输入 <code>/save-case</code>，Agent 会自动整理对话并生成 JS 文件到 <code>src/data/projects/</code> 目录
            </p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">4</span>
          <div class="step-content">
            <h3>Fork 仓库并提交 PR</h3>
            <p>在 GitHub 上 Fork <a href="https://github.com/lucksufe/agent-dojo" target="_blank">agent-dojo</a> 仓库，然后：</p>
            <div class="code-block">
              <pre><code># 克隆你 Fork 的仓库
git clone https://github.com/你的用户名/agent-dojo.git
cd agent-dojo

# 将生成的案例文件复制到项目中
cp /path/to/your-case.js src/data/projects/

# 创建分支并提交
git checkout -b add-my-case
git add src/data/projects/your-case.js
git commit -m "feat: 添加案例 - 你的案例标题"
git push origin add-my-case

# 在 GitHub 上创建 Pull Request</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="actions">
      <button class="btn btn-primary" @click="downloadMd">
        下载 save-case.md
      </button>
      <button class="btn btn-secondary" @click="saveToClipboard">
        {{ saved ? '已复制!' : '复制内容' }}
      </button>
    </section>

    <section class="preview">
      <h2>文件内容预览</h2>
      <div class="md-preview" v-html="renderedHtml"></div>
    </section>
  </div>
</template>

<style scoped>
.save-case {
  max-width: 800px;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.subtitle {
  color: var(--color-text-light);
  font-size: 1.1rem;
}

.usage-guide {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.usage-guide h2 {
  margin-bottom: var(--spacing-lg);
}

.steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.step {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.step-num {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
}

.step-content p {
  color: var(--color-text-light);
  line-height: 1.6;
}

.step-content a {
  color: var(--color-primary);
  text-decoration: underline;
}

.code-block {
  margin-top: var(--spacing-sm);
  background: var(--color-bg);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  background: none;
  padding: 0;
  font-size: 0.85rem;
  line-height: 1.6;
}

.path-list {
  margin-top: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.path-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.path-item code {
  background: var(--color-bg);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-family: monospace;
}

.path-desc {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--color-bg-card);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.preview {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.preview h2 {
  margin-bottom: var(--spacing-lg);
}

.md-preview {
  line-height: 1.8;
  color: var(--color-text);
}

.md-preview :deep(h1) {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.md-preview :deep(h2) {
  font-size: 1.4rem;
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.md-preview :deep(h3) {
  font-size: 1.1rem;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

.md-preview :deep(p) {
  margin-bottom: var(--spacing-md);
}

.md-preview :deep(ul),
.md-preview :deep(ol) {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-xl);
}

.md-preview :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.md-preview :deep(code) {
  background: var(--color-bg);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: 0.9em;
}

.md-preview :deep(pre) {
  background: var(--color-bg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
}

.md-preview :deep(pre code) {
  background: none;
  padding: 0;
}

.md-preview :deep(strong) {
  color: var(--color-text);
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.6rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .path-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
}
</style>
