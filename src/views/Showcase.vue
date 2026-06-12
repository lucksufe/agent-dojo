<script setup>
import { projects as exampleProjects } from '../data/projects/example-project.js'
import { projects as teachingProjects } from '../data/projects/agent-teaching-site.js'
import ProjectCard from '../components/showcase/ProjectCard.vue'

const projects = [...teachingProjects, ...exampleProjects]
</script>

<template>
  <div class="showcase">
    <div class="page-header">
      <h1>进阶实战</h1>
      <p>
        真实项目案例，展示 Agent 在实际开发中的应用。
        <br />
        每个案例都包含完整的交互过程，让你了解如何与 Agent 高效协作。
      </p>
    </div>

    <div class="contribute-banner">
      <span class="banner-icon">💡</span>
      <div class="banner-content">
        <strong>分享你的案例！</strong>
        <p>有自己的 Agent 使用经验？欢迎通过 GitHub PR 提交你的案例，帮助更多人学习。</p>
      </div>
      <a href="https://github.com" target="_blank" class="contribute-btn">提交案例</a>
    </div>

    <div class="projects-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>

    <div class="empty-state" v-if="projects.length === 0">
      <span class="empty-icon">📭</span>
      <h3>暂无案例</h3>
      <p>成为第一个分享者吧！</p>
    </div>
  </div>
</template>

<style scoped>
.showcase {
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

.contribute-banner {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: #fff9db;
  border: 1px solid #ffd43b;
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.banner-icon {
  font-size: 1.5rem;
}

.banner-content {
  flex: 1;
}

.banner-content strong {
  display: block;
  margin-bottom: var(--spacing-xs);
}

.banner-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #856404;
}

.contribute-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  background: #ffd43b;
  color: #856404;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.contribute-btn:hover {
  background: #ffc107;
  color: #856404;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--color-text-muted);
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: var(--spacing-md);
}

.empty-state h3 {
  margin-bottom: var(--spacing-sm);
}
</style>
