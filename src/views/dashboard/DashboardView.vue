<script setup lang="ts">
import type { User } from '@supabase/supabase-js'
import { onMounted, ref } from 'vue'
import MenuBar from '@/components/menu/MenuBar.vue'
import { supabase } from '@/lib/supabaseClient'

const username = ref<User | null>(null)

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  if (data.user) {
    username.value = data.user.user_metadata.display_name
  }
})
</script>

<template>
  hi {{ username }}
</template>
