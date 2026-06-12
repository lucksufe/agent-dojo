# 保存对话为案例

将当前对话整理为 Agent Dojo 项目格式的案例文件。

## 要求

1. **保留真实用户输入**：用户的每一条消息都要保留，不能省略或概括
2. **Agent 响应可精简**：由于 Agent 回复通常较长，可以概括要点
3. **记录代码变更**：涉及的代码片段、配置修改要记录
4. **标注关键节点**：重要的决策、问题解决、功能完成

## 输出格式

生成 JavaScript 文件，格式如下：

```javascript
export const projects = [
  {
    title: '案例标题',
    author: '作者名称',
    description: '一句话描述这个项目做了什么',
    tags: ['标签1', '标签2', '标签3'],
    difficulty: 'beginner|intermediate|advanced',
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
```

## 执行步骤

1. 回顾整个对话过程
2. 提取所有用户消息（完整保留）
3. 概括每轮 Agent 响应的要点
4. 整理涉及的代码片段
5. 总结最终结果和经验教训
6. 生成文件并保存到 `src/data/projects/` 目录

## 文件命名

使用小写字母和连字符，例如：`my-project-name.js`

## 保存位置

`src/data/projects/[文件名].js`
