<script setup>
import { ref } from 'vue'
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <div class="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="app-body">
      <div class="sidebar-overlay" :class="{ active: isSidebarOpen }" @click="closeSidebar"></div>
      <Sidebar :class="{ open: isSidebarOpen }" @navigate="closeSidebar" />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-body {
  display: flex;
  flex: 1;
  position: relative;
}

.main-content {
  flex: 1;
  padding: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
}

.sidebar-overlay {
  display: none;
}

@media (max-width: 768px) {
  .main-content {
    padding: var(--spacing-md);
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
