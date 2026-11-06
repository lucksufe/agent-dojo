<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isExpanded = ref(false)
const currentStep = ref(0)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const nextStep = () => {
  if (currentStep.value < props.project.steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const difficultyLabels = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '高级'
}

const difficultyColors = {
  beginner: '#51cf66',
  intermediate: '#ffd43b',
  advanced: '#ff6b6b'
}
</script>

<template>
  <div class="project-card" :class="{ expanded: isExpanded }">
    <div class="project-header" @click="toggleExpand">
      <div class="project-info">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-author">by {{ project.author }}</p>
      </div>
      <div class="project-meta">
        <span
          class="difficulty-badge"
          :style="{ background: difficultyColors[project.difficulty] }"
        >
          {{ difficultyLabels[project.difficulty] }}
        </span>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <span class="expand-icon" :class="{ expanded: isExpanded }">▼</span>
    </div>

    <p class="project-description">{{ project.description }}</p>

    <div class="project-agent-info" v-if="project.agent">
      <span class="agent-badge">
        🤖 {{ project.agent.name }} {{ project.agent.version }}
      </span>
      <span class="model-badge">
        {{ project.agent.model }}
      </span>
    </div>

    <div class="project-content" v-show="isExpanded">
      <div class="timeline">
        <div class="timeline-header">
          <span class="step-indicator">步骤 {{ currentStep + 1 }} / {{ project.steps.length }}</span>
          <div class="step-nav">
            <button @click.stop="prevStep" :disabled="currentStep === 0" class="nav-btn">← 上一步</button>
            <button @click.stop="nextStep" :disabled="currentStep === project.steps.length - 1" class="nav-btn">下一步 →</button>
          </div>
        </div>

        <div class="step-content">
          <div class="step-card">
            <h4 class="step-title">{{ project.steps[currentStep].title }}</h4>

            <div class="message user-message">
              <span class="message-role">👤 用户</span>
              <p>{{ project.steps[currentStep].userMessage }}</p>
            </div>

            <div class="message agent-message">
              <span class="message-role">🤖 Agent</span>
              <p>{{ project.steps[currentStep].agentResponse }}</p>
            </div>

            <div class="step-code" v-if="project.steps[currentStep].code">
              <pre><code>{{ project.steps[currentStep].code }}</code></pre>
            </div>

            <div class="step-result" v-if="project.steps[currentStep].result">
              <span class="result-label">结果：</span>
              <span>{{ project.steps[currentStep].result }}</span>
            </div>
          </div>
        </div>

        <div class="step-dots">
          <span
            v-for="(step, index) in project.steps"
            :key="index"
            class="dot"
            :class="{ active: index === currentStep }"
            @click.stop="currentStep = index"
          ></span>
        </div>
      </div>

      <div class="final-result" v-if="project.finalResult">
        <h4>🎯 最终结果</h4>
        <p>{{ project.finalResult.description }}</p>
      </div>

      <div class="tips" v-if="project.tips && project.tips.length">
        <h4>💡 经验总结</h4>
        <ul>
          <li v-for="tip in project.tips" :key="tip">{{ tip }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.project-card:hover {
  box-shadow: var(--shadow-md);
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  cursor: pointer;
}

.project-info {
  flex: 1;
}

.project-title {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.project-author {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.project-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-sm);
}

.difficulty-badge {
  padding: 2px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: #000;
}

.tags {
  display: flex;
  gap: var(--spacing-xs);
}

.tag {
  padding: 2px 8px;
  background: var(--color-bg-hover);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--color-text-light);
}

.expand-icon {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  transition: transform var(--transition-fast);
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.project-description {
  padding: 0 var(--spacing-lg) var(--spacing-md);
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

.project-agent-info {
  padding: 0 var(--spacing-lg) var(--spacing-md);
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.agent-badge,
.model-badge {
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
}

.agent-badge {
  background: #e3f2fd;
  color: #1565c0;
}

.model-badge {
  background: #f3e5f5;
  color: #7b1fa2;
}

.project-content {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  border-top: 1px solid var(--color-border-light);
}

.timeline {
  margin-top: var(--spacing-md);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.step-indicator {
  font-weight: 600;
  color: var(--color-primary);
}

.step-nav {
  display: flex;
  gap: var(--spacing-sm);
}

.nav-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--color-text);
  transition: all var(--transition-fast);
}

.nav-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.step-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
}

.step-title {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.message {
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.message-role {
  font-weight: 600;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.user-message {
  background: #e3f2fd;
  border-left: 3px solid #2196f3;
}

.user-message .message-role {
  color: #1565c0;
}

.agent-message {
  background: #f3e5f5;
  border-left: 3px solid #9c27b0;
}

.agent-message .message-role {
  color: #7b1fa2;
}

.step-code {
  margin-top: var(--spacing-md);
}

.step-code pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
  font-size: 0.85rem;
}

.step-result {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: #d4edda;
  border-radius: var(--radius-sm);
  color: #155724;
}

.result-label {
  font-weight: 600;
}

.step-dots {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot.active {
  background: var(--color-primary);
  transform: scale(1.2);
}

.final-result {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background: linear-gradient(135deg, #d4edda, #c3e6cb);
  border-radius: var(--radius-md);
}

.final-result h4 {
  margin-bottom: var(--spacing-sm);
  color: #155724;
}

.tips {
  margin-top: var(--spacing-lg);
}

.tips h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.tips ul {
  list-style: none;
  padding: 0;
}

.tips li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-light);
}

.tips li::before {
  content: '•';
  color: var(--color-primary);
  margin-right: var(--spacing-sm);
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
  }

  .project-info {
    width: 100%;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-meta {
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: var(--spacing-sm);
  }

  .tags {
    flex-wrap: wrap;
  }

  .expand-icon {
    position: absolute;
    right: var(--spacing-md);
    top: var(--spacing-md);
  }

  .project-header {
    position: relative;
  }

  .project-description {
    padding: 0 var(--spacing-md) var(--spacing-md);
    font-size: 0.9rem;
  }

  .project-content {
    padding: 0 var(--spacing-md) var(--spacing-md);
  }

  .timeline-header {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: flex-start;
  }

  .step-nav {
    width: 100%;
  }

  .nav-btn {
    flex: 1;
  }

  .step-card {
    padding: var(--spacing-md);
  }

  .message {
    padding: var(--spacing-sm);
  }

  .step-code pre {
    font-size: 0.8rem;
    padding: var(--spacing-sm);
  }
}
</style>
