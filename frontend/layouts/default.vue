<template>
  <div class="flex min-h-screen">
    <Sidebar :menu-items="menuItems" />
    <main class="flex-1 p-8 bg-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Dashboard', path: '/', icon: 'dashboard' },
  { title: 'Transações', path: '/transactions', icon: 'receipt_long' },
  { title: 'Categorias', path: '/categories', icon: 'category' },
  { title: 'Configurações', path: '/settings', icon: 'settings' }
]
</script> 