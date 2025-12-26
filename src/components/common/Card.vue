<script setup lang="ts">

</script>

<template>
  <div class="border border-neutral-200 rounded-2xl bg-white">
    <div class=" border-b border-b-neutral-200 p-6">
      <slot name="header" />
    </div>
    <div class="p-6">
      <slot name="body" />
    </div>
    <div class="border-t border-t-neutral-200 p-6">
      <slot name="footer" />
    </div>
  </div>
</template>
