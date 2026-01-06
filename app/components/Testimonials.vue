<script setup lang="ts">
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'

const testimonials = [
  { 
    id: 1,
    text: "East Media transformed our digital presence completely. Their approach to AI usage is revolutionizing content creation.", 
    author: "Sarah Lee",
    role: "CEO, TechFlow"
  },
  { 
    id: 2,
    text: "The visuals delivered were beyond anything we imagined. Truly a partner that understands the future of media.", 
    author: "James Carter",
    role: "Marketing Director, Nexus"
  },
  { 
    id: 3,
    text: "Professional, futuristic, and incredibly efficient. The 3D web elements set us apart from everyone.", 
    author: "Elena V.",
    role: "Founder, Aether"
  }
]

const current = ref(0)

const next = () => current.value = (current.value + 1) % testimonials.length
const prev = () => current.value = (current.value - 1 + testimonials.length) % testimonials.length
</script>

<template>
  <section class="py-32 bg-light-bg dark:bg-dark-bg relative overflow-hidden">
     <!-- Background Decor -->
     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />
     
     <div class="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <div class="mb-12 flex justify-center">
            <div class="p-4 bg-primary/10 rounded-full text-primary">
                <Quote class="w-8 h-8 fill-current" />
            </div>
        </div>
        
        <div class="relative min-h-[300px]">
           <TransitionGroup name="fade">
             <div v-for="(t, i) in testimonials" :key="t.id" v-show="i === current" class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-3xl md:text-5xl font-medium leading-tight mb-8 text-gray-900 dark:text-white">"{{ t.text }}"</p>
                <div>
                   <h4 class="text-xl font-bold">{{ t.author }}</h4>
                   <span class="text-primary">{{ t.role }}</span>
                </div>
             </div>
           </TransitionGroup>
        </div>
        
        <div class="flex items-center justify-center gap-6 mt-12">
           <button @click="prev" class="p-4 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ChevronLeft class="w-6 h-6" />
           </button>
           <div class="flex gap-2">
              <button v-for="(t, i) in testimonials" :key="t.id" @click="current = i" :class="`w-3 h-3 rounded-full transition-colors ${current === i ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`" />
           </div>
           <button @click="next" class="p-4 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ChevronRight class="w-6 h-6" />
           </button>
        </div>
     </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
