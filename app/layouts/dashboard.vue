<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Desktop Sidebar (Hidden on mobile) -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <DashboardSidebar />
    </div>

    <!-- Main Content Area -->
    <div class="lg:pl-72 flex flex-col min-h-screen">
      <!-- Sticky Navbar -->
      <DashboardNavbar />

      <!-- Page Content gets injected here -->
      <main class="flex-1">
        <div class="p-4 sm:p-6 lg:p-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
