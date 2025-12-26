<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/components/common/Card.vue'
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()
const loading = ref<boolean | null>(null)
const username = ref<string | null>(null)
const phone = ref<string | null>(null)
const email = ref<string | null>(null)
const password = ref<string | null>(null)

async function handleSignUp(e: Event) {
  e.preventDefault()
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value as string,
      password: password.value as string,
      phone: phone.value as string,
      options: {
        data: {
          display_name: username.value as string,
        },
      },
    })

    try {
      const { error } = await supabase.auth.updateUser({
        phone: phone.value as string,
      })
      if (error) {
        throw error
      }
    }
    catch (error) {
      console.error(error)
    }

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
        Sign Up
      </h1>
      <p class="text-neutral-400 ">
        Sign up and level up your bisiness.
      </p>
    </template>
    <template #body>
      <form id="signupform" @submit="handleSignUp">
        <div class="my-4">
          <label for="username" class="font-semibold">Full Name</label>
          <input
            id="username" v-model="username" type="text" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Full name"
          >
        </div>
        <div class="my-4">
          <label for="phone" class="font-semibold">Phone Number</label>
          <input
            id="phone" v-model="phone" type="phone" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Phone number"
          >
        </div>

        <div class="my-4">
          <label for="email" class="font-semibold">Email</label>
          <input
            id="username" v-model="email" type="email" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Email"
          >
        </div>
        <div class="my-4">
          <label for="password" class="font-semibold">Password</label>
          <input
            id="username" v-model="password" type="password" class="rounded-lg outline-neutral-300 p-2  w-full
            focus:outline-neutral-600 outline-2" placeholder="Password"
          >
        </div>
      </form>
    </template>
    <template #footer>
      <button
        class="bg-neutral-700 text-white w-full py-2 rounded-lg hover:cursor-pointer hover:scale-103 hover:-translate-y-0.5 duration-300"
        form="signupform"
      >
        {{ loading ? 'Signing up...' : 'Sign up' }}
      </button>
    </template>
  </Card>
</template>
