<script setup lang="ts">
import MenuBar from '@/components/menu/MenuBar.vue'
</script>

<template>
  <div class="flex h-dvh bg-neutral-100">
    <div class="flex">
      <MenuBar />
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
