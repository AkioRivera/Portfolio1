<template>
    <div class="flex items-start justify-center mx-auto top-0 mt-96 absolute left-0 right-7  ml-96">
        <div class="bg-white relative shadow rounded-lg w-[56rem] h-[79rem] mb-6">
            <div class="p-8">
                <div class="flex felx-col items-center justify-center">
                    <span class="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"> Skill
                    </span>
                </div>
                <div class="px-8 py-4">
                    <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3"> My Skills
                    </h2>
                    <p class="font-light text-sm text-gray-500 mb-3">I have honed my skills in various programming
                        languages and frameworks, each contributing to my comprehensive development toolkit. In HTML and
                        CSS, I have a strong foundation, enabling me to craft well-structured and styled web pages. My
                        proficiency in JavaScript, combined with my expertise in Tailwind CSS, Vue.js, and React.js,
                        allows me to create dynamic and interactive user interfaces. With PHP and Laravel, I can build
                        robust backend systems, ensuring seamless functionality. I am well-versed in version control
                        using Git, facilitating efficient collaboration and project management. My experience with
                        Bootstrap and jQuery enhances my ability to design responsive and feature-rich websites.
                        Additionally, I have a solid understanding of C#, Java, and C++, broadening my versatility as a
                        developer and allowing me to tackle diverse programming challenges across different platforms.
                    </p>
                </div>
                <!-- To achieve the desired progress, you can update the 'stroke-dasharray' property. -->


                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">HTML</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">90%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 90px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">CSS</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">90%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#3B82F6" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 90px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Tailwind</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#3B82F6" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 95px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>

                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">JavaScript </span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FCD34D" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 75px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>


                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Vue</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#48BB78" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 80px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>


                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">PHP</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">85%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#CA56F2" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 85px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Laravel</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">85%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 85px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Git</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">90%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 90px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">React</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">40%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF0000" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 40px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Java</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">60%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 60px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">C#</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">50%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#7C4DFF" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 50px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>

                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Visual Basic</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#7C4DFF" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 80px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
                <div class="mb-7">
                    <div class="flex justify-between py-1">
                        <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">C++</span>
                        <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">40%</span>
                    </div>
                    <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <path class="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                        <path class="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                            style="stroke-dasharray: 40px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                        </path>
                    </svg>
                </div>
            </div>
        </div>

    </div>


</template>
