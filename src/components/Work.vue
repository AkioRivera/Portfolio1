<template>
<div class="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12" id="project">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
      Project
      </p>
    </div>
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="ea469ae8-e6ec-4aca-8875-fc402da4d16e" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)" width="52" height="24"></rect>
        </svg>
    
      </span>
      PALANGOY WATER BILLING SYSTEM - CAPSTONE
    </h2>
    
  </div>
</div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/image/proj4.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Billing</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/image/proj1.png" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Landing Page</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/image/proj2.png" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">User UI</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/image/proj3.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dashboard</span>
            </a>
            <!-- image - end -->
        </div>
    </div>
    
</div>
<div class=" ml-8 mt-0 sm:ml-28 sm:mt-60 ">
    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features:</h2>
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>
            Login in ( User, Admin , Staff , Water Tender, Manager)
        </li>
        <li>
            Dashboard 
        </li>
        <li>
            Add Staff ( Add , Update , Delete , View )
        </li>
        <li>
            Announcement ( Add , Update View )
        </li>
        <li>
           Billing ( Add , Update ,View )
        </li>
        <li>
           Consumer List ( Add , Update , View )
        </li>
        <li>
          Transaction ( Accept, Decline , View )
        </li>
        <li>
           Walkin (Update , View )
        </li>
        <li>
            Report (View, Print )
        </li>
        <li>
           Settings ( Change Password )
        </li>
        <li>
           Gallery 
        </li>
        <li>
            Notifications
        </li>
        <li>
           Receipt (Print)
        </li>
        <li>
          Mobile Responsive ( User UI )
        </li>
    </ul>
    <br>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="showAlert"
    >
       Demo 
    </button>
    &nbsp;
   <a href="https://github.com/Noelito-source/Capstone.git">
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      
    >
       Code
    </button>
</a>
    <br><br>
    <div class="mb-6 ">
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-2">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                 HTML
                </span>
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-2">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                    CCS
                </span>
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-2">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                   JavaScript
                </span>
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-2">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                   Bootstrap
                </span>
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 mr-2">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                 PHP
                </span>
                <span
                    class="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500  mt-2 mr-2 sm:mt-0">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                   JQuery
                </span>
            </div>
        </div>
</template>
<script>
        export default {
            methods: {
                showAlert() {
                    const alertContainer = document.createElement('div');
                    alertContainer.classList.add('fixed', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'z-50', 'transition-opacity', 'duration-5000');
                    const alertElement = document.createElement('div');
                    alertElement.classList.add('bg-blue-800', 'text-white', 'rounded-lg', 'p-4', 'flex', 'items-center', 'opacity-100', 'transition-opacity', 'duration-5000');
                    const alertIcon = document.createElement('i');
                    alertIcon.classList.add('mr-2', 'fas', 'fa-sad-tear');
                    alertIcon.style.fontSize = '2rem';
                    const alertMessage = document.createTextNode('Sorry, I cannot host the project due to big files :(');
                    alertElement.appendChild(alertIcon);
                    alertElement.appendChild(alertMessage);
                    alertContainer.appendChild(alertElement);
                    document.body.appendChild(alertContainer);
                    setTimeout(() => {
                        alertContainer.classList.remove('opacity-100');
                        alertContainer.classList.add('opacity-0');
                        setTimeout(() => {
                            alertContainer.remove();
                        }, 500);
                    }, 5000);
                }
            }
        }
    </script>