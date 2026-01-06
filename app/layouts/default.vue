<template>
  <div class="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
    <TheNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-light-surface dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <div class="container mx-auto px-6">
        <p>&copy; 2026 East Media. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
