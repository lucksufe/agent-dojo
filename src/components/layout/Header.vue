<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="header">
    <div class="header-brand" @click="router.push('/')">
      <span class="brand-icon">🤖</span>
      <h1 class="brand-title">Agent Dojo</h1>
    </div>
    <p class="brand-subtitle">Agent 使用教学与实战分享</p>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
}

.brand-icon {
  font-size: 2rem;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.brand-subtitle {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
