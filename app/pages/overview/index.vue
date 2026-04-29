<script setup lang="ts">
// Tell Nuxt to use the dashboard.vue layout instead of the default one
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-stone-900">Dashboard Overview</h2>
      <p class="text-stone-500">Welcome back! Here is what's happening with your Batik showcase today.</p>
    </div>

    <!-- Main Chart/Table Placeholder -->
    <div class="h-96 rounded-xl border border-stone-200 bg-white flex items-center justify-center border-dashed">
      <p class="text-stone-400">Main Content / Data Table goes here</p>
    </div>
  </div>
</template>
