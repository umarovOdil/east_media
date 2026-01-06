<script setup lang="ts">
const tools = ['Premiere Pro', 'After Effects', 'Next.js', 'Midjourney', 'Canva', 'Figma', 'Blender', 'Unreal Engine', 'OpenAI', 'Tailwind CSS']
</script>

<template>
  <section class="py-16 border-y border-gray-100 dark:border-gray-800 overflow-hidden bg-light-bg dark:bg-dark-bg relative">
     <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10" />
     <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10" />
     
     <div class="flex gap-16 animate-marquee whitespace-nowrap min-w-full">
        <span v-for="(tool, i) in [...tools, ...tools, ...tools]" :key="i" class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 opacity-50 uppercase tracking-widest hover:opacity-100 transition-opacity cursor-default">
           {{ tool }}
        </span>
     </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
