<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()

const layouts = {
  AuthLayout,
  DefaultLayout,
}

const layout = computed(() => layouts[route.meta.layout || 'DefaultLayout'])
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
