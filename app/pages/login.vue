<script setup lang="ts">
import { Mail, Lock, ArrowLeft, ArrowRight } from "lucide-vue-next";
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value);
  router.push("/overview");
};
</script>

<template>
  <div class="min-h-screen bg-white flex overflow-hidden">
    <!-- Left Side: Visual/Decorative -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-stone-900 overflow-hidden">
      <div class="absolute inset-0 opacity-40">
        <img
          src="/images/login.webp"
          alt="Batik Background"
          class="w-full h-full object-cover object-left grayscale transition-transform duration-[10s] hover:scale-110"
        />
      </div>
      <!-- Pattern Overlay -->
      <!-- <div class="absolute inset-0 opacity-10">
        <img
          src="/images/parang-pattern.webp"
          alt="Pattern Overlay"
          class="w-full h-full object-cover invert"
        />
      </div> -->
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-t from-stone-900 via-transparent to-transparent"
      ></div>

      <div
        class="relative z-10 w-full h-full flex flex-col justify-between p-16"
      >
        <NuxtLink
          to="/"
          class="inline-flex items-center text-amber-500 text-xs font-sans font-bold uppercase tracking-[0.2em] hover:text-amber-400 transition-colors"
        >
          <ArrowLeft class="mr-2 h-4 w-4" />
          Beranda
        </NuxtLink>

        <div class="space-y-6">
          <div class="h-1 w-16 bg-amber-600"></div>
          <h2
            class="text-4xl md:text-5xl font-heading text-white leading-tight"
          >
            Akses Panel <br />
            <span class="text-amber-500">Administrator.</span>
          </h2>
          <p class="text-stone-400 font-body max-w-md leading-relaxed">
            Kelola katalog koleksi, pantau statistik, dan kelola kemitraan UMKM
            dalam satu dashboard terintegrasi.
          </p>
        </div>

        <div
          class="text-stone-500 text-[10px] font-sans uppercase tracking-[0.2em]"
        >
          &copy; 2026 E-Katalog Batik — Capstone Project
        </div>
      </div>
    </div>

    <!-- Right Side: Login Form -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-stone-50"
    >
      <div class="w-full max-w-md space-y-12">
        <!-- Back Link for Mobile -->
        <NuxtLink
          to="/"
          class="lg:hidden inline-flex items-center text-amber-700 text-xs font-sans font-bold uppercase tracking-[0.2em] mb-8"
        >
          <ArrowLeft class="mr-2 h-4 w-4" />
          Beranda
        </NuxtLink>

        <div class="space-y-2">
          <h3 class="text-3xl font-heading text-stone-900">Selamat Datang</h3>
          <p class="text-stone-500 font-body">
            Silakan masuk menggunakan akun administrator Anda.
          </p>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <div class="space-y-4">
            <!-- Email Input -->
            <div class="space-y-2">
              <label
                for="email"
                class="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest ml-1"
                >Alamat Email</label
              >
              <div class="relative group">
                <div
                  class="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors"
                >
                  <Mail class="w-4 h-4" />
                </div>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="admin@batik.com"
                  class="w-full bg-white border border-stone-200 rounded-none py-4 pl-12 pr-4 outline-none focus:border-amber-600 focus:ring-0 transition-all font-body text-stone-900 placeholder:text-stone-300"
                  required
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-2">
              <label
                for="password"
                class="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest"
                >Kata sandi</label
              >
              <div class="relative group">
                <div
                  class="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors"
                >
                  <Lock class="w-4 h-4" />
                </div>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  class="w-full bg-white border border-stone-200 rounded-none py-4 pl-12 pr-4 outline-none focus:border-amber-600 focus:ring-0 transition-all font-body text-stone-900 placeholder:text-stone-300"
                  required
                />
              </div>
            </div>
          </div>

          <div class="pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              rounded="none"
              class="w-full h-14 group"
            >
              Masuk ke Dashboard
              <ArrowRight
                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
