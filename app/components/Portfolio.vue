<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const triggerRef = ref(null)

const projects = [
  { id: 1, title: 'Nebula', category: 'AI Visuals', color: 'bg-indigo-500' },
  { id: 2, title: 'Velocity', category: 'Automotive', color: 'bg-red-500' },
  { id: 3, title: 'Apex', category: 'Fintech', color: 'bg-emerald-500' },
  { id: 4, title: 'Zenith', category: 'Architecture', color: 'bg-slate-500' },
]

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.to(sectionRef.value, {
      x: () => -((sectionRef.value as HTMLElement).scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.value,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + ((sectionRef.value as HTMLElement).scrollWidth - window.innerWidth),
      }
    })
  })
  
  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <div ref="triggerRef" class="overflow-hidden">
    <section id="work" class="h-[100dvh] flex relative bg-gray-900 text-white" :style="{ width: `${projects.length * 100}vw` }">
       <div ref="sectionRef" class="flex w-full h-full">
          <div v-for="project in projects" :key="project.id" class="w-screen h-[100dvh] flex-shrink-0 flex items-center justify-center relative group overflow-hidden">
              <!-- Background Image Placeholder using Color -->
              <div :class="`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-700`" />
              <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" :style="{ backgroundImage: `url(https://picsum.photos/seed/${project.id}/1920/1080)` }" />
              <div class="absolute inset-0 bg-black/50" />
              
              <!-- Content -->
              <div class="relative z-10 text-center p-12">
                 <span class="text-primary font-bold tracking-widest uppercase mb-4 block">{{ project.category }}</span>
                 <h3 class="text-7xl md:text-9xl font-black mb-8">{{ project.title }}</h3>
                 <button class="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all font-bold">
                    View Project
                 </button>
              </div>
          </div>
       </div>
    </section>
  </div>
</template>
