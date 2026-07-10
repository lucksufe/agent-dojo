export const steps = [
  {
    title: '认识并打开终端/控制台',
    description: `
      <p>终端（也叫控制台、命令行）是你与 Agent 交互的界面。别担心，它没有看起来那么可怕！</p>
      <p><strong>什么是命令？</strong></p>
      <p>命令就是你给电脑下的指令，就像跟电脑说话一样。比如输入 <code>echo 你好</code>，电脑就会把"你好"显示出来。</p>
      <p><strong>打开方式：</strong></p>
      <p><strong>Windows：</strong> 按 Win + R，输入 <code>cmd</code>，回车</p>
      <p><strong>macOS：</strong> 按 Cmd + 空格，输入 "Terminal"，回车</p>
      <p><strong>Linux：</strong> 按 Ctrl + Alt + T</p>
      <p>打开后你会看到一个窗口，光标在闪烁，等待你输入指令。试试下面这个简单的命令：</p>
    `,
    code: 'echo Hello World',
    tip: '输入命令后按回车执行。试试看，电脑会回复你 "Hello World"！',
    encouragement: '太棒了！你已经成功跟电脑对话了！命令行就是这么简单！'
  },
  {
    title: '安装 Node.js',
    description: `
      <p>Node.js 是运行 JavaScript 的环境，Agent 工具依赖它。</p>
      <p><strong>安装方法：</strong></p>
      <p>访问 <a href="https://nodejs.org" target="_blank">nodejs.org</a>，下载 LTS 版本（推荐），按照安装向导完成安装。</p>
      <p>安装完成后，在终端中输入以下命令验证：</p>
    `,
    code: 'node -v\nnpm -v',
    tip: '如果显示版本号，说明安装成功！',
    encouragement: '太棒了！Node.js 已经准备就绪！'
  },
  {
    title: '安装 Claude Code CLI',
    description: `
      <p><strong>什么是 Agent？</strong></p>
      <p>Agent 是一类 AI 工具的统称，它能理解你的指令并自动执行任务（如写代码、分析文件、操作终端等）。</p>
      <p>市面上有很多 Agent 工具，比如 Claude Code、Cursor、GitHub Copilot、Windsurf 等，它们各有特点。</p>
      <p><strong>为什么选择 Claude Code？</strong></p>
      <p>本教程使用 Claude Code 作为教学工具，因为它是 Anthropic 官方出品，功能完整且免费使用。掌握它之后，你也能轻松上手其他 Agent 工具。</p>
      <p><strong>国内用户建议：</strong>由于网络原因，直接安装可能很慢。建议先切换到淘宝镜像源，然后再安装。</p>
      <p><strong>第一步：切换 npm 镜像源（国内加速）</strong></p>
    `,
    code: 'npm config set registry https://registry.npmmirror.com/',
    code2Label: '<p><strong>第二步：安装 Claude Code</strong></p>',
    code2: 'npm install -g @anthropic-ai/claude-code',
    tip: 'Linux/macOS 用户如遇到权限问题，可在安装命令前加 sudo。安装完成后可用 npm config get registry 确认镜像源已生效。',
    encouragement: '很好！CLI 工具已安装完成！'
  },
  {
    title: '选择 AI 提供商并获取 API Key',
    description: `
      <p>API Key 是访问 AI 服务的凭证。选择一个你方便获取的服务商：</p>

      <div class="provider-tabs">
        <button class="provider-tab active" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.provider-panel').forEach(p=>p.style.display='none');document.getElementById('panel-mimo').style.display='block';">小米 MiMo</button>
        <button class="provider-tab" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.provider-panel').forEach(p=>p.style.display='none');document.getElementById('panel-deepseek').style.display='block';">DeepSeek</button>
        <button class="provider-tab" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.provider-panel').forEach(p=>p.style.display='none');document.getElementById('panel-claude').style.display='block';">Claude</button>
      </div>

      <div id="panel-mimo" class="provider-panel">
        <p class="provider-recommend">🌟 推荐：小米自研大模型，性价比高</p>
        <p><strong>使用邀请码注册可获得免费额度：</strong></p>
        <ul>
          <li>🇨🇳 <strong>国区用户</strong>：邀请码 <code>7WF5HB</code>，可获得 <strong>10 元</strong>使用额度，有效期 40 天</li>
          <li>🌍 <strong>外区用户</strong>：邀请码 <code>PD3MKZ</code>，可获得 <strong>$2</strong> 使用额度</li>
        </ul>
        <ol>
          <li>访问 <a href="https://platform.mimoxiaomi.com" target="_blank">小米 MiMo 开放平台</a></li>
          <li>注册并登录账号（注册时填写上述邀请码）</li>
          <li>获取 API Key</li>
        </ol>
      </div>

      <div id="panel-deepseek" class="provider-panel" style="display:none;">
        <p>国内访问稳定，性价比高</p>
        <ol>
          <li>访问 <a href="https://platform.deepseek.com" target="_blank">DeepSeek 开放平台</a></li>
          <li>注册并登录账号</li>
          <li>在 API Keys 页面创建密钥</li>
        </ol>
      </div>

      <div id="panel-claude" class="provider-panel" style="display:none;">
        <p>需要稳定的国际网络</p>
        <ol>
          <li>访问 <a href="https://console.anthropic.com" target="_blank">Anthropic Console</a></li>
          <li>注册并登录账号</li>
          <li>在 API Keys 页面创建密钥</li>
        </ol>
      </div>
    `,
    tip: '请妥善保管你的 API Key，不要分享给他人或提交到公开代码仓库。此步骤可选，如果你已有可用的 API 服务。',
    encouragement: '安全意识很重要！你做得很好！'
  },
  {
    title: '配置环境变量',
    description: `
      <p>将 API Key 配置到环境变量中，让 CLI 工具能够使用。</p>

      <div class="env-section">
        <div class="provider-tabs">
          <button class="provider-tab active" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.env-provider').forEach(p=>p.style.display='none');document.getElementById('env-mimo').style.display='block';">小米 MiMo</button>
          <button class="provider-tab" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.env-provider').forEach(p=>p.style.display='none');document.getElementById('env-deepseek').style.display='block';">DeepSeek</button>
          <button class="provider-tab" onclick="this.parentElement.querySelectorAll('.provider-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.env-provider').forEach(p=>p.style.display='none');document.getElementById('env-claude').style.display='block';">Claude</button>
        </div>

        <div id="env-deepseek" class="env-provider" style="display:none;">
          <div class="os-tabs">
            <button class="os-tab active" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='block';this.closest('.env-provider').querySelector('.env-code-linux').style.display='none';">Windows</button>
            <button class="os-tab" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='none';this.closest('.env-provider').querySelector('.env-code-linux').style.display='block';">Linux / macOS</button>
          </div>
          <div class="env-code-windows">
            <p><strong>Windows 设置方法：</strong></p>
            <ol>
              <li>按 Win + S，搜索"环境变量"</li>
              <li>点击"编辑系统环境变量"</li>
              <li>点击"环境变量"按钮</li>
              <li>在"用户变量"区域，点击"新建"，<strong>依次添加以下 3 个变量</strong>（每次添加一个）：</li>
            </ol>
            <p><strong>第 1 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_AUTH_TOKEN
变量值: your-deepseek-api-key</code></pre>
            <p><strong>第 2 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_BASE_URL
变量值: https://api.deepseek.com/anthropic</code></pre>
            <p><strong>第 3 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_MODEL
变量值: deepseek-v4-pro</code></pre>
          </div>
          <div class="env-code-linux" style="display:none;">
            <p><strong>Linux / macOS 终端命令：</strong></p>
            <pre><code>export ANTHROPIC_AUTH_TOKEN=your-deepseek-api-key
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_MODEL=deepseek-v4-pro</code></pre>
          </div>
        </div>

        <div id="env-mimo" class="env-provider">
          <div class="os-tabs">
            <button class="os-tab active" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='block';this.closest('.env-provider').querySelector('.env-code-linux').style.display='none';">Windows</button>
            <button class="os-tab" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='none';this.closest('.env-provider').querySelector('.env-code-linux').style.display='block';">Linux / macOS</button>
          </div>
          <div class="env-code-windows">
            <p><strong>Windows 设置方法：</strong></p>
            <ol>
              <li>按 Win + S，搜索"环境变量"</li>
              <li>点击"编辑系统环境变量"</li>
              <li>点击"环境变量"按钮</li>
              <li>在"用户变量"区域，点击"新建"，<strong>依次添加以下 3 个变量</strong>（每次添加一个）：</li>
            </ol>
            <p><strong>第 1 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_AUTH_TOKEN
变量值: your-mimo-api-key</code></pre>
            <p><strong>第 2 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_BASE_URL
变量值: https://api.mimo.xiaomi.com/anthropic</code></pre>
            <p><strong>第 3 个变量：</strong></p>
            <pre><code>变量名: ANTHROPIC_MODEL
变量值: mimo-v2.5-pro</code></pre>
          </div>
          <div class="env-code-linux" style="display:none;">
            <p><strong>Linux / macOS 终端命令：</strong></p>
            <pre><code>export ANTHROPIC_AUTH_TOKEN=your-mimo-api-key
export ANTHROPIC_BASE_URL=https://api.mimo.xiaomi.com/anthropic
export ANTHROPIC_MODEL=mimo-v2.5-pro</code></pre>
          </div>
        </div>

        <div id="env-claude" class="env-provider" style="display:none;">
          <div class="os-tabs">
            <button class="os-tab active" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='block';this.closest('.env-provider').querySelector('.env-code-linux').style.display='none';">Windows</button>
            <button class="os-tab" onclick="this.parentElement.querySelectorAll('.os-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');this.closest('.env-provider').querySelector('.env-code-windows').style.display='none';this.closest('.env-provider').querySelector('.env-code-linux').style.display='block';">Linux / macOS</button>
          </div>
          <div class="env-code-windows">
            <p><strong>Windows 设置方法：</strong></p>
            <ol>
              <li>按 Win + S，搜索"环境变量"</li>
              <li>点击"编辑系统环境变量"</li>
              <li>点击"环境变量"按钮</li>
              <li>在"用户变量"区域，点击"新建"，添加以下变量：</li>
            </ol>
            <pre><code>变量名: ANTHROPIC_API_KEY
变量值: your-claude-api-key</code></pre>
          </div>
          <div class="env-code-linux" style="display:none;">
            <p><strong>Linux / macOS 终端命令：</strong></p>
            <pre><code>export ANTHROPIC_API_KEY=your-claude-api-key</code></pre>
          </div>
        </div>
      </div>
    `,
    code: null,
    tip: 'Windows 用户添加环境变量后，需要关闭当前终端窗口并重新打开一个新的终端，变量才会生效。Linux/macOS 用户可将 export 命令添加到 ~/.bashrc 或 ~/.zshrc 文件中实现永久生效。',
    encouragement: '环境配置完成！马上就能开始使用了！'
  },
  {
    title: '运行第一个命令',
    description: `
      <p>现在让我们启动 Agent，开始你的第一次交互！</p>

      <p><strong>第一步：在你想工作的目录下打开终端</strong></p>
      <p>比如你想在 <code>D:\projects\my-app</code> 目录下工作：</p>
      <p><strong>Windows：</strong> 用文件管理器打开该目录，在地址栏输入 <code>cmd</code> 回车</p>
      <p><strong>macOS：</strong> 在 Finder 中打开目录，右键选择"服务" → "新建终端窗口"</p>
      <p><strong>Linux：</strong> 在文件管理器中右键选择"在终端中打开"</p>

      <p><strong>第二步：启动 Agent</strong></p>
      <p>在终端中输入以下命令：</p>
    `,
    code: 'claude',
    tip: null,
    encouragement: null
  },
  {
    title: '开始交互',
    description: `
      <p>启动后你会看到 Agent 的欢迎界面。这时你可以：</p>

      <p><strong>使用方向键和回车</strong> 选择菜单中的选项（比如同意协议等）</p>
      <p><strong>在输入区域</strong> 直接用自然语言描述你的需求，比如：</p>
      <ul>
        <li>"帮我创建一个 React 项目"</li>
        <li>"分析这段代码有什么问题"</li>
        <li>"写一个 Python 脚本处理 CSV 文件"</li>
      </ul>

      <p><strong>退出 Agent：</strong></p>
      <p>输入 <code>/exit</code> 退出（注意有斜杠）</p>
      <p>这会干净地退出，不会有多余的交互。</p>

      <p><strong>恢复上次的对话：</strong></p>
      <p>下次想继续之前的对话，使用：</p>
    `,
    code: 'claude --resume',
    tip: 'Agent 会显示历史对话列表，用方向键选择你想继续的对话即可。上下文不会丢失！',
    encouragement: '🎉 恭喜！你已经掌握了 Agent 的基本使用方法！现在可以开始探索了！'
  }
]
