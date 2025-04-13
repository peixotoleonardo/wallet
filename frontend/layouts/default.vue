<template>
  <div class="flex min-h-screen">
    <Sidebar :menu-items="menuItems" />
    <main class="flex-1 p-8 bg-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

import type { MenuItem } from '~/components/Sidebar/menu-item';

const menuItems: MenuItem[] = [
  {
    title: 'Integrações',
    path: '/integrations',
    icon: 'integration_instructions'
  }
];
</script> 