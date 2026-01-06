<script setup lang="ts">
import { Video, Code, Cpu, TrendingUp } from 'lucide-vue-next'
</script>

<template>
  <section id="services" class="py-24 bg-light-surface dark:bg-dark-surface relative overflow-hidden">
     <!-- Abstract BG Elements -->
     <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
     
     <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-black mb-16 text-center tracking-tight">
          Our <span class="text-primary">Expertise</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
           <!-- Web Dev -->
           <div class="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-xl p-8 md:col-span-2">
               <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

               <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <Code class="w-64 h-64 text-primary" />
               </div>

               <div class="relative z-10 h-full flex flex-col">
                   <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Code class="w-7 h-7" />
                   </div>
                   <div class="mt-auto">
                      <h3 class="text-2xl font-bold mb-2">Web Development</h3>
                      <p class="text-gray-500 dark:text-gray-400">High-performance, reactive web apps.</p>
                   </div>
               </div>
           </div>

           <!-- Video Production (Large) -->
           <div class="md:col-span-1 group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 p-8">
              <!-- <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                 <Video class="w-64 h-64 text-primary" />
              </div> -->
              
              <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent dark:from-[#161b22] z-0" />
              
              <div class="relative z-10 h-full flex flex-col">
                 <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Video class="w-7 h-7" />
                 </div>
                 <div class="mt-auto">
                    <h3 class="text-3xl font-bold mb-3">Video Production</h3>
                    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-md">Cinematic storytelling that captures your brand's essence. From high-end commercials and documentaries to viral social content.</p>
                 </div>
              </div>
           </div>
           
           <!-- AI Design -->
           <div class="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-xl p-8">
                <div class="relative z-10 h-full flex flex-col">
                    <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                       <Cpu class="w-7 h-7" />
                    </div>
                    <div class="mt-auto">
                       <h3 class="text-2xl font-bold mb-2">AI & Creative Design</h3>
                       <p class="text-gray-500 dark:text-gray-400">Next-gen visuals using Generative AI workflows for speed and impact.</p>
                    </div>
                </div>
           </div>
           
           <!-- Marketing (Large) -->
           <div class="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 p-8">
              <div class="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

              <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <TrendingUp class="w-64 h-64 text-primary" />
               </div>

               <div class="relative z-10 h-full flex flex-col">
                  <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <TrendingUp class="w-7 h-7" />
                  </div>
                  <div class="mt-auto">
                     <h3 class="text-3xl font-bold mb-3">Complex Marketing</h3>
                     <p class="text-lg text-gray-500 dark:text-gray-400 max-w-lg">Data-driven strategies to scale your reach. PPC, SEO, and Growth Hacking tailored for ROI.</p>
                  </div>
               </div>
           </div>
        </div>
     </div>
  </section>
</template>
