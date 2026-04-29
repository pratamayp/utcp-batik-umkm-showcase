<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { menuItems } from "@/lib/menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
</script>

<template>
  <Sheet>
    <!-- Hamburger Menu Button -->
    <SheetTrigger as-child>
      <button
        type="button"
        class="block lg:hidden -m-2.5 p-2.5 text-stone-700 hover:text-amber-700 transition-colors"
      >
        <span class="sr-only">Open mobile menu</span>
        <Menu class="h-6 w-6" aria-hidden="true" />
      </button>
    </SheetTrigger>

    <!-- The Sliding Sidebar -->
    <SheetContent
      side="left"
      class="w-72 bg-white p-0 border-r border-stone-200"
    >
      <div class="flex h-full flex-col gap-y-5 overflow-y-auto px-6 pb-4">
        <!-- Mobile Logo -->
        <div class="flex h-16 shrink-0 items-center">
          <div class="font-bold text-xl text-stone-900 tracking-tight">
            Batik<span class="text-amber-700">Showcase</span>
          </div>
        </div>

        <!-- Mobile Navigation Links -->
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in menuItems" :key="item.name">
                  <!-- SheetClose (optional) can be wrapped around NuxtLink if you want it to close automatically on click, 
                       but standard Nuxt routing within a sheet often closes it naturally on route change -->
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
    </SheetContent>
  </Sheet>
</template>
