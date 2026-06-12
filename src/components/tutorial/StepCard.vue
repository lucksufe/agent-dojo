<script setup>
import { ref } from 'vue'

const props = defineProps({
  step: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['toggle'])

const isCompleted = ref(false)
const isExpanded = ref(true)

const toggleComplete = () => {
  isCompleted.value = !isCompleted.value
  emit('toggle', isCompleted.value)
  if (isCompleted.value) {
    isExpanded.value = false
  }
}

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="step-card" :class="{ completed: isCompleted }">
    <div class="step-header" @click="toggleExpand">
      <div class="step-check" @click.stop="toggleComplete">
        <input
          type="checkbox"
          :checked="isCompleted"
          @click.stop
          @change="toggleComplete"
        />
        <span class="checkmark" :class="{ checked: isCompleted }">
          {{ isCompleted ? '✓' : '' }}
        </span>
      </div>
      <div class="step-title-area">
        <span class="step-number">步骤 {{ index + 1 }}</span>
        <h3 class="step-title">{{ step.title }}</h3>
      </div>
      <span class="expand-icon" :class="{ expanded: isExpanded }">▼</span>
    </div>

    <div class="step-content" v-show="isExpanded">
      <div class="step-description" v-html="step.description"></div>

      <div class="step-code" v-if="step.code">
        <pre><code>{{ step.code }}</code></pre>
      </div>

      <div class="step-tip" v-if="step.tip">
        <span class="tip-icon">💡</span>
        <span>{{ step.tip }}</span>
      </div>
    </div>

    <div class="step-feedback" v-if="isCompleted">
      <span class="feedback-icon">🎉</span>
      <span class="feedback-text">{{ step.encouragement || '太棒了！继续下一步吧' }}</span>
    </div>
  </div>
</template>

<style scoped>
.step-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.step-card:hover {
  box-shadow: var(--shadow-sm);
}

.step-card.completed {
  border-color: var(--color-success);
}

.step-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  cursor: pointer;
  user-select: none;
}

.step-check {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.step-check input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  transition: all var(--transition-fast);
}

.checkmark.checked {
  background: var(--color-success);
  border-color: var(--color-success);
}

.step-title-area {
  flex: 1;
}

.step-number {
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.step-title {
  font-size: 1.1rem;
  margin-top: var(--spacing-xs);
  color: var(--color-text);
}

.expand-icon {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  transition: transform var(--transition-fast);
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.step-content {
  padding: 0 var(--spacing-md) var(--spacing-md);
  border-top: 1px solid var(--color-border-light);
}

.step-description {
  padding-top: var(--spacing-md);
  line-height: 1.8;
  color: var(--color-text);
}

.step-description :deep(p) {
  margin-bottom: var(--spacing-sm);
}

.step-description :deep(ul),
.step-description :deep(ol) {
  margin: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
}

.step-description :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.step-description :deep(code) {
  background: var(--color-bg-hover);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
}

.step-description :deep(pre code) {
  background: none;
  padding: 0;
  font-size: 0.9em;
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
  font-size: 0.9rem;
}

.step-tip {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: #fff9db;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  color: #856404;
}

.tip-icon {
  flex-shrink: 0;
}

.step-feedback {
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(135deg, #d4edda, #c3e6cb);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  animation: slideDown 0.3s ease;
}

.feedback-icon {
  font-size: 1.2rem;
}

.feedback-text {
  color: #155724;
  font-weight: 500;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
