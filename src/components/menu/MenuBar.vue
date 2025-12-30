<script setup lang="ts">
import gear from '@phosphor-icons/core/regular/gear.svg'
import house from '@phosphor-icons/core/regular/house.svg'
import { ref } from 'vue'

const menuItems = ref<object[]>([
  {
    label: 'Home',
    icon: house,
    navigateTo: '/',
  },
  {
    label: 'Options',
    icon: gear,
    navigateTo: '/settings',
  },
])

const hello = 'Hello'
</script>

<template>
  <div class="border-r border-r-neutral-200 bg-white p-2">
    <RouterLink v-for="item in menuItems" :key="item.label" :to="item.navigateTo">
      <div
        class="group flex items-center rounded-xl bg-neutral-700 p-4 hover:cursor-pointer hover:bg-neutral-200 m-1 transition-all duration-300"
      >
        <img v-if="item.icon" :src="item.icon" class="w-6 h-6 invert group-hover:invert-0">
      </div>
    </RouterLink>
  </div>
</template>
