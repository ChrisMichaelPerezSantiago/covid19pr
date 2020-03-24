<template>
  <div class="container w-full mx-auto pt-20">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <!-- All reports component -->
      <AllReports/>
      <!-- All deaths component -->
      <Deaths/>
    </div>
  </div>
</template>

<script>
  import AllReports from '../components/AllReports';
  import Deaths from '../components/Deaths';
  
  export default {
    name: "Home",
    components:{
      AllReports,
      Deaths,
    },
    setup() {
      return{
        
      };
    }
  };
</script>