<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen p-4">
    <div class="mb-8">
      <h1 class="text-2xl font-bold">Wallet App</h1>
    </div>
    
    <nav class="space-y-2">
      <NuxtLink 
        v-for="(item, index) in menuItems" 
        :key="index"
        :to="item.path"
        class="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"
      >
        <span class="material-icons">{{ item.icon }}</span>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">

interface MenuItem {
  title: string;
  path: string;
  icon: string;
}

defineProps<{
  menuItems: MenuItem[]
}>()
</script> 