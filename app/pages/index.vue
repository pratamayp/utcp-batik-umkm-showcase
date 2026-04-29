<template>
  <div class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
    <div class="max-w-2xl w-full space-y-8 text-center">
      <div
        class="inline-block px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-sm font-medium mb-4">
        Tailwind CSS v4 + Nuxt 4
      </div>
      <h1
        class="text-6xl font-bold tracking-tight bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
        UT Capstone Project - Batik Showcase
      </h1>
      <p class="text-lg text-slate-400 max-w-lg mx-auto">
        A premium showcase for Indonesian Batik artistry, built with modern web technologies.
      </p>
      <Button variant="secondary" as-child>
        <NuxtLink to="/login">Admin Login</NuxtLink>
      </Button>
    </div>
  </div>
</template>
