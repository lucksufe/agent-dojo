<script setup>
import { ref, computed } from 'vue'
import { steps } from '../data/steps.js'
import StepCard from '../components/tutorial/StepCard.vue'
import StepProgress from '../components/tutorial/StepProgress.vue'

const completedSteps = ref(new Set())

const completedCount = computed(() => completedSteps.value.size)

const toggleStep = (index, completed) => {
  if (completed) {
    completedSteps.value.add(index)
  } else {
    completedSteps.value.delete(index)
  }
}
</script>

<template>
  <div class="getting-started">
    <div class="page-header">
      <h1>入门教程</h1>
      <p>跟着以下步骤，从零开始学习 Agent 的安装和使用。每完成一步，勾选标记你的进度。</p>
    </div>

    <StepProgress :total="steps.length" :completed="completedCount" />

    <div class="steps-list">
      <StepCard
        v-for="(step, index) in steps"
        :key="index"
        :step="step"
        :index="index"
        @toggle="(completed) => toggleStep(index, completed)"
      />
    </div>

    <div class="next-section" v-if="completedCount === steps.length">
      <div class="next-card">
        <h3>🎉 恭喜完成入门教程！</h3>
        <p>现在你已经掌握了 Agent 的基础使用方法。</p>
        <p>准备好进阶了吗？查看实战案例，学习更多高级用法。</p>
        <button class="next-button" @click="$router.push('/showcase')">
          查看实战案例 →
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.getting-started {
  max-width: 800px;
}

.page-header {
  margin-bottom: var(--spacing-xl);
}

.page-header h1 {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--color-text-light);
  font-size: 1.05rem;
  line-height: 1.6;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.next-section {
  margin-top: var(--spacing-2xl);
}

.next-card {
  background: linear-gradient(135deg, #d4edda, #c3e6cb);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  animation: fadeIn 0.5s ease;
}

.next-card h3 {
  color: #155724;
  margin-bottom: var(--spacing-sm);
}

.next-card p {
  color: #155724;
  margin-bottom: var(--spacing-sm);
}

.next-button {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-xl);
  background: #155724;
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.next-button:hover {
  background: #0d3311;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.5rem;
  }

  .page-header p {
    font-size: 0.95rem;
  }

  .next-card {
    padding: var(--spacing-lg);
  }
}
</style>
