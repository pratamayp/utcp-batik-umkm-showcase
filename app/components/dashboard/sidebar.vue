<script setup lang="ts">
import { menuItems } from "~/lib/menu";
</script>

<template>
  <div
    class="flex h-full flex-col gap-y-5 overflow-y-auto border-r border-stone-200 bg-white px-6 pb-4"
  >
    <div class="flex h-16 shrink-0 items-center">
      <!-- Logo placeholder -->
      <div class="font-bold text-xl text-stone-900 tracking-tight">
        Batik<span class="text-amber-700">Showcase</span>
      </div>
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in menuItems" :key="item.name">
              <NuxtLink
                :to="item.href"
                active-class="bg-stone-50 text-amber-700"
                class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 transition-colors"
              >
                <component
                  :is="item.icon"
                  class="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
