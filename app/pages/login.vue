<script setup lang="ts">
import { Mail, Lock, ArrowLeft } from "lucide-vue-next";
import { ref } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value);
  router.push("/overview");
};
</script>

<template>
  <div
    class="min-h-screen bg-stone-50 text-stone-900 flex flex-col items-center justify-center p-6 relative overflow-hidden"
  >
    <!-- Ambient background glows (Warm Batik tones) -->
    <div
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/15 blur-[120px] rounded-full"
    ></div>
    <div
      class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-700/10 blur-[120px] rounded-full"
    ></div>

    <NuxtLink
      to="/"
      class="absolute top-8 left-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors group"
    >
      <ArrowLeft
        class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
      />
      Back to Home
    </NuxtLink>

    <div class="w-full max-w-md z-10">
      <div class="text-center mb-8 space-y-2">
        <h1
          class="text-4xl font-bold tracking-tight bg-linear-to-br from-stone-900 to-amber-800 bg-clip-text text-transparent"
        >
          Admin Portal
        </h1>
        <p class="text-stone-600">Secure access to Batik Showcase management</p>
      </div>

      <div
        class="bg-white/80 backdrop-blur-xl border border-stone-200 p-8 rounded-2xl shadow-xl shadow-stone-200/50 space-y-6"
      >
        <form class="space-y-4" @submit.prevent="handleLogin">
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-stone-700 ml-1"
              >Email Address</label
            >
            <div class="relative group">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors"
              >
                <Mail class="w-5 h-5" />
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="admin@batik.com"
                class="w-full bg-stone-50/50 border border-stone-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-amber-600/50 focus:ring-4 focus:ring-amber-600/10 transition-all placeholder:text-stone-400 text-stone-900"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between ml-1">
              <label for="password" class="text-sm font-medium text-stone-700"
                >Password</label
              >
              <a
                href="#"
                class="text-xs text-amber-700 hover:text-amber-600 transition-colors"
                >Forgot password?</a
              >
            </div>
            <div class="relative group">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors"
              >
                <Lock class="w-5 h-5" />
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="w-full bg-stone-50/50 border border-stone-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-amber-600/50 focus:ring-4 focus:ring-amber-600/10 transition-all placeholder:text-stone-400 text-stone-900"
                required
              />
            </div>
          </div>

          <div class="pt-2">
            <!-- Custom styled button to match the theme instead of default shadcn style -->
            <button
              type="submit"
              class="w-full py-3 rounded-xl text-base font-semibold bg-amber-700 hover:bg-amber-800 text-white border-none shadow-lg shadow-amber-700/20 transition-all active:scale-[0.98]"
            >
              Sign In to Dashboard
            </button>
          </div>
        </form>

        <div class="relative py-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-stone-200"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-white px-2 text-stone-400">Security verified</span>
          </div>
        </div>
      </div>

      <p class="text-center mt-8 text-sm text-stone-500">
        &copy; 2026 UT Capstone Project. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
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
