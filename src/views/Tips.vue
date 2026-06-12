<script setup>
import { ref, computed } from 'vue'
import { tips } from '../data/tips.js'

const selectedCategory = ref('all')

const categories = computed(() => {
  const cats = [...new Set(tips.map(tip => tip.category))]
  return ['all', ...cats]
})

const filteredTips = computed(() => {
  if (selectedCategory.value === 'all') return tips
  return tips.filter(tip => tip.category === selectedCategory.value)
})

const categoryIcons = {
  '效率': '⚡',
  '调试': '🔧',
  '配置': '⚙️',
  '安全': '🔒'
}
</script>

<template>
  <div class="tips-page">
    <div class="page-header">
      <h1>小技巧</h1>
      <p>实用技巧分享，帮助你更高效地使用 Agent。</p>
    </div>

    <div class="category-filter">
      <button
        v-for="cat in categories"
        :key="cat"
        class="category-btn"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat === 'all' ? '全部' : `${categoryIcons[cat] || ''} ${cat}` }}
      </button>
    </div>

    <div class="tips-grid">
      <div
        v-for="(tip, index) in filteredTips"
        :key="index"
        class="tip-card"
      >
        <div class="tip-header">
          <span class="tip-category">{{ categoryIcons[tip.category] || '' }} {{ tip.category }}</span>
        </div>
        <h3 class="tip-title">{{ tip.title }}</h3>
        <p class="tip-content">{{ tip.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tips-page {
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
}

.category-filter {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.category-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  color: var(--color-text-light);
  transition: all var(--transition-fast);
}

.category-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.category-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.tip-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  transition: all var(--transition-normal);
}

.tip-card:hover {
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.tip-header {
  margin-bottom: var(--spacing-sm);
}

.tip-category {
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 600;
}

.tip-title {
  font-size: 1.05rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.tip-content {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
}
</style>
