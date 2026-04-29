<script setup lang="ts">
import { Bell } from "lucide-vue-next";
import MobileNavbar from "./mobile-navbar.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
</script>

<template>
  <header
    class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-stone-200 bg-white/80 backdrop-blur-md px-4 sm:gap-x-6 sm:px-6 lg:px-8"
  >
    <!-- Mobile Hamburger Menu -->
    <MobileNavbar class="lg:hidden" />

    <!-- Separator for mobile -->
    <div class="h-6 w-px bg-stone-200 lg:hidden" aria-hidden="true" />

    <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <!-- Notifications -->
        <button
          type="button"
          class="-m-2.5 p-2.5 text-stone-400 hover:text-stone-500"
        >
          <span class="sr-only">View notifications</span>
          <Bell class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div
          class="hidden lg:block lg:h-6 lg:w-px lg:bg-stone-200"
          aria-hidden="true"
        />

        <!-- User Profile Dropdown -->
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <button class="-m-1.5 flex items-center p-1.5 outline-none">
              <span class="sr-only">Open user menu</span>
              <Avatar class="h-8 w-8 bg-amber-100">
                <AvatarImage src="" alt="Admin" />
                <AvatarFallback class="text-amber-800 font-medium"
                  >AD</AvatarFallback
                >
              </Avatar>
              <span class="hidden lg:flex lg:items-center">
                <span
                  class="ml-4 text-sm font-semibold leading-6 text-stone-900"
                  aria-hidden="true"
                  >Admin User</span
                >
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            class="w-56 bg-white border-stone-200"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator class="bg-stone-100" />
            <DropdownMenuItem class="cursor-pointer hover:bg-stone-50"
              >Profile</DropdownMenuItem
            >
            <DropdownMenuItem class="cursor-pointer hover:bg-stone-50"
              >Settings</DropdownMenuItem
            >
            <DropdownMenuSeparator class="bg-stone-100" />
            <NuxtLink href="/login">
              <DropdownMenuItem
                class="cursor-pointer text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                >Log out
              </DropdownMenuItem>
            </NuxtLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
</template>
