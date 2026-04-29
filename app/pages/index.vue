<template>
  <div
    class="min-h-screen bg-stone-50 text-stone-900 flex flex-col items-center justify-center p-8"
  >
    <div class="max-w-2xl w-full space-y-8 text-center">
      <div
        class="inline-block px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-600/10 text-amber-800 text-sm font-medium mb-4"
      >
        Tailwind CSS v4 + Nuxt 4
      </div>
      <h1
        class="text-6xl font-bold tracking-tight bg-linear-to-br from-stone-900 to-amber-800 bg-clip-text text-transparent"
      >
        UT Capstone Project - Batik Showcase
      </h1>
      <p class="text-lg text-stone-600 max-w-lg mx-auto">
        A premium showcase for Indonesian Batik artistry, built with modern web
        technologies.
      </p>
      <div class="flex gap-4 justify-center pt-4">
        <NuxtLink href="/login">
          <button
            type="submit"
            class="py-3 rounded-xl text-base font-semibold bg-amber-700 hover:bg-amber-800 text-white border-none shadow-lg w-50 shadow-amber-700/20 transition-all active:scale-[0.98]"
          >
            Admin Login
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
