<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  {
    icon: '📚',
    title: '入门教程',
    description: '从零开始，一步步学习 Agent 的安装和使用',
    path: '/getting-started'
  },
  {
    icon: '🚀',
    title: '进阶实战',
    description: '真实项目案例，展示 Agent 的强大能力',
    path: '/showcase'
  },
  {
    icon: '💡',
    title: '小技巧',
    description: '实用技巧分享，提升你的使用效率',
    path: '/tips'
  }
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1 class="hero-title">欢迎来到 Agent Dojo</h1>
      <p class="hero-subtitle">
        在这里，你将学会如何使用 AI Agent 来提升开发效率。
        <br />
        从入门到进阶，每一步都有详细指导。
      </p>
      <button class="cta-button" @click="router.push('/getting-started')">
        开始学习 →
      </button>
    </section>

    <section class="features">
      <div
        v-for="feature in features"
        :key="feature.path"
        class="feature-card"
        @click="router.push(feature.path)"
      >
        <span class="feature-icon">{{ feature.icon }}</span>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
      </div>
    </section>

    <section class="contribute">
      <h2>🤝 参与贡献</h2>
      <p>
        你有自己的 Agent 使用案例吗？欢迎通过 GitHub PR 分享你的实战经验！
      </p>
      <p class="contribute-link">
        查看
        <a href="https://github.com" target="_blank">贡献指南</a>
        了解如何提交你的案例。
      </p>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
}

.hero {
  text-align: center;
  padding: var(--spacing-2xl) 0;
}

.hero-title {
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.cta-button {
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-size: 1.1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-2xl) 0;
}

.feature-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--spacing-md);
}

.feature-title {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.contribute {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  margin-top: var(--spacing-2xl);
}

.contribute h2 {
  margin-bottom: var(--spacing-md);
}

.contribute p {
  color: var(--color-text-light);
  line-height: 1.8;
}

.contribute-link {
  margin-top: var(--spacing-md);
}
</style>
