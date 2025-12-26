<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/components/common/Card.vue'
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()
const loading = ref<boolean | null>(null)
const email = ref<string | null>(null)
const password = ref<string | null>(null)

async function handleSignIn(e: Event) {
  e.preventDefault()
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value as string,
      password: password.value as string,
    })
    if (error) {
      throw error
    }
    router.push({ name: 'home' })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = null
  }
}
</script>

<template>
  <Card class="w-xl">
    <template #header>
      <h1 class="text-2xl font-bold text-neutral-700">
        Log in
      </h1>
      <p class="text-neutral-400 ">
        Log in and start managing your business.
      </p>
    </template>
    <template #body>
      <form id="signinform" @submit="handleSignIn">
        <div class="my-4">
          <label for="email" class="font-semibold">Email</label>
          <input
            id="email" v-model="email" type="email" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Username"
          >
        </div>
        <div class="">
          <label for="password" class="font-semibold">Password</label>
          <input
            id="password" v-model="password" type="password" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Password"
          >
        </div>
      </form>
    </template>
    <template #footer>
      <button
        class="bg-neutral-700 text-white w-full py-2 rounded-lg hover:cursor-pointer hover:scale-103 hover:-translate-y-0.5 duration-300"
        form="signinform"
      >
        {{ loading ? 'Signing in...' : 'Sign In' }}
      </button>
    </template>
  </Card>
</template>
