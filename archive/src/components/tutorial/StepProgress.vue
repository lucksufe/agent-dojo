<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  completed: {
    type: Number,
    required: true
  }
})

const percentage = computed(() => {
  if (props.total === 0) return 0
  return Math.round((props.completed / props.total) * 100)
})

const isComplete = computed(() => percentage.value === 100)
</script>

<template>
  <div class="progress-container">
    <div class="progress-header">
      <span class="progress-label">学习进度</span>
      <span class="progress-count">{{ completed }} / {{ total }}</span>
    </div>
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: percentage + '%' }"
        :class="{ complete: isComplete }"
      ></div>
    </div>
    <div class="progress-footer">
      <span class="progress-percentage">{{ percentage }}%</span>
      <span v-if="isComplete" class="complete-message">
        🎉 恭喜完成所有步骤！
      </span>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.progress-label {
  font-weight: 600;
  color: var(--color-text);
}

.progress-count {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.progress-bar {
  height: 12px;
  background: var(--color-border-light);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}

.progress-fill.complete {
  background: linear-gradient(90deg, var(--color-success), #69db7c);
}

.progress-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-sm);
}

.progress-percentage {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.complete-message {
  font-size: 0.9rem;
  color: var(--color-success);
  font-weight: 500;
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
