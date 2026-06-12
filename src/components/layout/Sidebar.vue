<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/getting-started', label: '入门教程', icon: '📚' },
  { path: '/showcase', label: '进阶实战', icon: '🚀' },
  { path: '/tips', label: '小技巧', icon: '💡' }
]

const isActive = (path) => route.path === path
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <div
        v-for="item in navItems"
        :key="item.path"
        class="nav-item"
        :class="{ active: isActive(item.path) }"
        @click="router.push(item.path)"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </div>
    </nav>
    <div class="sidebar-footer">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener"
        class="github-link"
      >
        <span>⭐</span> GitHub
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background: var(--color-bg-card);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) 0;
}

.sidebar-nav {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  color: var(--color-text);
}

.nav-item:hover {
  background: var(--color-bg-hover);
  color: var(--color-primary);
}

.nav-item.active {
  background: var(--color-bg-hover);
  color: var(--color-primary);
  border-left: 3px solid var(--color-primary);
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-label {
  font-size: 0.95rem;
}

.sidebar-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.github-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.github-link:hover {
  color: var(--color-primary);
}
</style>
