<template>
  <div class="overflow-x-hidden bg-gray-50 sticky top-0 z-50 shadow-md">
    <header class="py-4 md:py-6">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex-shrink-0">
            <a href="#" title="" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <img class="w-auto h-10" src="../assets/image/logo.png" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="text-gray-900" @click="isOpen = !isOpen" :aria-expanded="isOpen">
              <span aria-hidden="true">
                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                </svg>
              </span>
            </button>
          </div>
          <div class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            <a href="#about" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" @click.prevent="$vuetify.goTo('#about')"> About </a>

            <a  href="#skills"  title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Skills</a>

            <a href="#project" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Projects </a>
            <a href="#experience" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Experience </a>
          </div>

          <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            <a href="#contact" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact me </a>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
            Download Cv
            </a>
          </div>
        </div>

        <nav :class="isOpen ? 'block' : 'hidden'" class="px-1 py-8">
          <div class="grid gap-y-7">
            <a href="#about" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              About
         </a>

            <a href="#skills" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Skills</a>
            <a href="#project" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Project </a>

            <a href="#experience" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Experience</a>

            <a href="#contact" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact me </a>

            <a
              href=""
              title=""
              class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Download cv
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
const isOpen = ref(false)
onMounted (() => {
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            setTimeout(() => {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        });
    });
  
})
</script>
