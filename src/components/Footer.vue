<template>
  <footer class="bg-gray-900 border-t border-gray-400 shadow">
    <div class="container max-w-md mx-auto flex py-8">
      <div class="w-full mx-auto flex flex-wrap">
        <div class="flex w-full md:w-40">
          <div class="px-8">
            <h3 class="font-bold font-bold text-gray-100">Copyright</h3>
            <p class="py-1 text-gray-600 text-sm">
              Copyright &copy; COVID19 {{year}}
            </p>
          </div>
        </div>
        <div class="flex w-full md:w-1/2">
          <div class="px-8">
            <h3 class="font-bold font-bold text-gray-100">For Developers</h3>
            <a class="inline-block text-gray-100 no-underline hover:text-gray-100 hover:text-underline py-1" href="https://www.npmjs.com/package/covid19-api">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-orange-600"><i class="fab fa-npm fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            </a>
            <a class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1" href="https://github.com/ChrisMichaelPerezSantiago/covid19">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-orange-600"><i class="fab fa-github fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="version">
          <img :src="`https://img.shields.io/badge/version-${version}-red`" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    setup(){
      const state = {
        version: require('../../package.json').version,
        year: new Date().getFullYear()
      };
  
      return{
        ...state
      }
    }
  };
</script>