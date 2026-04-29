<script setup lang="ts">
import { Mail, Lock, ArrowLeft } from 'lucide-vue-next'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Logging in with:', email.value, password.value)
  // Implement login logic here
}
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Ambient background glows -->
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>

    <NuxtLink to="/"
      class="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
      <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back to Home
    </NuxtLink>

    <div class="w-full max-w-md z-10">
      <div class="text-center mb-8 space-y-2">
        <h1
          class="text-4xl font-bold tracking-tight bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Admin Portal
        </h1>
        <p class="text-slate-400">Secure access to Batik Showcase management</p>
      </div>

      <div class="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl space-y-6">
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-slate-300 ml-1">Email Address</label>
            <div class="relative group">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors">
                <Mail class="w-5 h-5" />
              </div>
              <input id="email" v-model="email" type="email" placeholder="admin@batik.com"
                class="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 transition-all placeholder:text-slate-600"
                required />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between ml-1">
              <label for="password" class="text-sm font-medium text-slate-300">Password</label>
              <a href="#" class="text-xs text-sky-400 hover:text-sky-300 transition-colors">Forgot password?</a>
            </div>
            <div class="relative group">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors">
                <Lock class="w-5 h-5" />
              </div>
              <input id="password" v-model="password" type="password" placeholder="••••••••"
                class="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-sky-500/50 focus:ring-4 focus:ring-sky-500/10 transition-all placeholder:text-slate-600"
                required />
            </div>
          </div>

          <div class="pt-2">
            <Button type="submit"
              class="w-full py-6 text-base font-semibold bg-sky-600 hover:bg-sky-500 text-white border-none shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98]">
              Sign In to Dashboard
            </Button>
          </div>
        </form>

        <div class="relative py-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-white/5"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-transparent px-2 text-slate-500">Security verified</span>
          </div>
        </div>
      </div>

      <p class="text-center mt-8 text-sm text-slate-500">
        &copy; 2026 UT Capstone Project. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Additional subtle animations if needed */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
