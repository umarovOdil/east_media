<script setup lang="ts">
import { Instagram, Linkedin, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-24 bg-white dark:bg-[#0d1117]">
    <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
       <!-- Info -->
       <div>
          <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">Let's Create <br/>Something <span class="text-primary">Iconic</span>.</h2>
          <p class="text-xl text-gray-500 dark:text-gray-400 mb-12">Ready to take your business to the next level? Drop us a line and let's discuss your next big project.</p>
          
          <div class="space-y-6">
             <a href="#" class="flex items-center gap-4 text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors hover:translate-x-2 duration-300">
                <Instagram class="w-8 h-8" /> 
                <span>Instagram</span>
             </a>
             <a href="#" class="flex items-center gap-4 text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors hover:translate-x-2 duration-300">
                <Linkedin class="w-8 h-8" /> 
                <span>LinkedIn</span>
             </a>
             <a href="#" class="flex items-center gap-4 text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors hover:translate-x-2 duration-300">
                <Send class="w-8 h-8" /> 
                <span>Telegram</span>
             </a>
          </div>
       </div>
       
       <!-- Form -->
       <form class="space-y-10 mt-8" @submit.prevent>
           <div class="group relative">
              <input type="text" id="name" placeholder=" " class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-lg outline-none focus:border-primary transition-colors dark:text-white autofill:bg-transparent" />
              <label for="name" class="absolute left-0 top-4 text-gray-500 dark:text-gray-500 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg pointer-events-none">Your Name</label>
           </div>
           
           <div class="group relative">
              <input type="email" id="email" placeholder=" " class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-lg outline-none focus:border-primary transition-colors dark:text-white" />
              <label for="email" class="absolute left-0 top-4 text-gray-500 dark:text-gray-500 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg pointer-events-none">Email Address</label>
           </div>
           
           <div class="group relative">
              <textarea id="message" placeholder=" " rows="3" class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-lg outline-none focus:border-primary transition-colors resize-none dark:text-white"></textarea>
              <label for="message" class="absolute left-0 top-4 text-gray-500 dark:text-gray-500 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg pointer-events-none">Project Details</label>
           </div>
           
           <button class="w-full py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl hover:shadow-2xl">
              Send Message
           </button>
       </form>
    </div>
  </section>
</template>
