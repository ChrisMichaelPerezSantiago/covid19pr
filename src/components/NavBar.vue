<template>
  <nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <router-link to="/" class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"  href="#"> 
          🐛 COVID19
        </router-link>
      </div>
      <div>
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
      <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
        <li class="mr-6 my-2 md:my-0">
          <router-link to="/" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
            <i class="fas fa-home fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
          </router-link>
        </li>
        <li class="mr-6 my-2 md:my-0">
          <router-link :to="{name: 'ReportByCountries'}" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
            <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Report By Countries</span>
          </router-link>
        </li>
        <li class="mr-6 my-2 md:my-0">
          <router-link :to="{name: 'TestsInUs'}" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
            <i class="fas fa-check fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Tests in US</span>
          </router-link>
        </li>
        <li class="mr-6 my-2 md:my-0">
          <router-link :to="{name: 'About'}" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
            <i class="fas fa-info-circle fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Info</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {ref} from '@vue/composition-api';
  
  export default {
    name: 'NavBar',
    setup(){
      const isOpen = ref(false);
  
      return{
        isOpen
      }
    }
  };
</script>