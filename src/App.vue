<script setup>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
</script>

<template>
  <div class="app">
    <Header />
    <div class="app-body">
      <Sidebar />
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
}

.main-content {
  flex: 1;
  padding: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
}
</style>
