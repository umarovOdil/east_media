<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline()
    
    tl.from('.hero-title-line', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
    })
    .from('.hero-desc', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8')
    .fromTo('.hero-btn', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' }
    , '-=0.8')
    .from('.hero-badge', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.6')
  })
  
  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section class="relative min-h-[90vh] pt-32 lg:pt-20 flex items-center overflow-hidden">
     <!-- Text Content -->
     <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="z-20">
            <h1 class="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
              <div class="overflow-hidden"><span class="hero-title-line block">We Elevate</span></div>
              <div class="overflow-hidden"><span class="hero-title-line block">Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Business</span></span></div>
              <div class="overflow-hidden"><span class="hero-title-line block">Through Digital</span></div>
              <div class="overflow-hidden"><span class="hero-title-line block">Mastery.</span></div>
            </h1>
            <p class="hero-desc text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
              East Media combines AI-driven design, cinematic video, and complex marketing strategies to build future-proof brands.
            </p>
            <div class="flex flex-wrap gap-4 mb-12">
                <button class="hero-btn px-8 py-4 bg-primary hover:bg-primary-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30">
                   View Our Work
                </button>
                <button class="hero-btn px-8 py-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full transition-all">
                   Our Services
                </button>
            </div>
            
            <div class="flex flex-wrap gap-4">
               <div class="hero-badge glass-card px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> AI Powered
               </div>
               <div class="hero-badge glass-card px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                  <span class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> Creative Excellence
               </div>
            </div>
        </div>
        
        <!-- Image Container -->
        <div class="lg:h-[800px] h-[500px] w-full absolute lg:relative top-0 right-0 lg:opacity-100 opacity-50 flex items-center justify-center pointer-events-none">
           <img src="/hero-screens.png" alt="East Media Digital Experience" class="w-full h-full lg:h-auto max-h-[800px] object-cover lg:object-contain drop-shadow-2xl" />
        </div>
     </div>
     
     <!-- Background Lighting -->
     <div class="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
     <div class="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
  </section>
</template>
