<script setup lang="ts">
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full z-50 glass transition-all duration-300">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-1 text-2xl font-black tracking-tighter text-[#0079ff]">
        <img src="/logo.png" alt="East Media" class="h-10 w-auto" />
        <span>East Media.</span>
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink v-for="link in ['Work', 'Services', 'About']" :key="link" :to="`#${link.toLowerCase()}`" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
          {{ link }}
        </NuxtLink>
        
        <!-- Theme Toggle -->
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Theme">
          <ClientOnly>
            <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" />
            <Moon v-else class="w-5 h-5 text-gray-600" />
            <template #fallback>
              <div class="w-5 h-5" />
            </template>
          </ClientOnly>
        </button>

        <!-- CTA -->
        <NuxtLink to="#contact" class="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-transform">
          Let's Talk
        </NuxtLink>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 text-gray-900 dark:text-white">
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-light-bg dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
        <NuxtLink v-for="link in ['Work', 'Services', 'About', 'Contact']" :key="link" :to="`#${link.toLowerCase()}`" @click="isOpen = false" class="text-lg font-medium text-gray-900 dark:text-white">
          {{ link }}
        </NuxtLink>
        <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
           <span class="text-gray-900 dark:text-white">Switch Theme</span>
           <button @click="toggleTheme" class="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <ClientOnly>
                <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" />
                <Moon v-else class="w-5 h-5 text-gray-600" />
              </ClientOnly>
           </button>
        </div>
    </div>
  </nav>
</template>
