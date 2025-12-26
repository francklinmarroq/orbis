<script setup lang="ts">
</script>

<template>
  <div class="h-screen">
    <nav class="border-b-2 border-b-neutral-200 bg-white flex justify-end h-16 pr-8 fixed w-full">
      <ul class="flex gap-3 align-middle items-center">
        <li>
          <RouterLink :to="{ name: 'signup' }" exact class="text-neutral-700 p-2 rounded-lg hover:bg-neutral-300
            duration-300" active-class="text-white bg-neutral-900 hover:text-neutral-700">
            Sign Up
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'signin' }" exact class="text-neutral-700 p-2 rounded-lg hover:bg-neutral-300
            duration-300" active-class="text-white bg-neutral-900 hover:text-neutral-700">
            Sign In
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="bg-neutral-100 h-full flex items-center justify-center">
      <RouterView />
    </div>
  </div>
</template>
