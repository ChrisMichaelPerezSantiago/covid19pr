<template>
  <div class="container w-full mx-auto pt-20">
    <div v-if="reportsByContries.isLoading" class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <h5 class="loading font-bold text-gray-400">
        loading
      </h5>
    </div>
    <div v-else class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <div class="flex flex-wrap">
        <div class="w-full md:w-2/2 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Report of countries with more cases</h5>
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-orange-600">
                  <i class="fas fa-globe-americas fa-2x fa-fw fa-inverse"></i>
                  <select class="bg-teal p-2 rounded text-black bg-white" v-model="option">
                    <option disabled value="">Countries</option>
                    <option v-for="(country, index) in countries" :value="country" :key="index">
                      {{country}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-green-600"><i class="fa fa-heartbeat fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Recovered</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.recovered)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-orange-600"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Coronavirus Cases</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.cases)}} <span class="text-orange-500"><i class="fas fa-exchange-alt"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-red-600"><i class="<i fas fa-heart-broken fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Deaths</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.deaths)}} <span class="text-red-500"><i class="fas fa-caret-down"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/2 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">ACTIVE CASES</h5>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-blue-600"><i class="fas fa-user-friends fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Currently Infected Patients</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.active_cases[0].currently_infected_patients)}}</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">in Mild Condition</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.active_cases[0].inMidCondition)}}</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-red-600"><i class="fas fa-exclamation-circle fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Serious or Critical</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.active_cases[0].criticalStates)}}<span class="text-red-500"></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/2 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">CLOSED CASES</h5>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-green-600"><i class="fa fa-check-circle fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">cases which had an outcome</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.closed_cases[0].cases_which_had_an_outcome)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-green-600"><i class="fa fa-heartbeat fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">recovered</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.closed_cases[0].recovered)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
        <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded p-3 bg-red-600"><i class="<i fas fa-heart-broken fa-2x fa-fw fa-inverse"></i></div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <h5 class="font-bold uppercase text-gray-400">Deaths</h5>
                <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reportsByContries.data.closed_cases[0].deaths)}} <span class="text-red-500"><i class="fas fa-caret-down"></i></span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {onMounted, ref, reactive, watch} from '@vue/composition-api';
  import {useState, useStore} from '@u3u/vue-hooks';
  import {formatNumber} from '../utils/utils';
  
  export default {
    name: 'ReportByCountries',
    
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState(['reportsByContries'])
      });
  
      const option = ref('spain')
  
      const countries = reactive([
        'algeria' , 'australia' , 'austria',
        'belgium' , 'brazil',
        'canada' , 'china' , 'china-hong-kong-sar',
        'denmark',
        'france',
        'germany' , 'greece',
        'indonesia' , 'iran' , 'iraq' , 'ireland' , 'italy',
        'malaysia',
        'netherlands' , 'norway',
        'philippines' , 'poland' , 'portugal',
        'south-korea' , 'spain' , 'sweden' , 'switzerland',
        'uk' , 'us'
      ]);
  
      watch(() =>
        option.value , (value) =>{
          option.value = value;
          const selected = option.value;
          store.value.dispatch('GET_REPORTS_BY_COUNTRIES' , selected)
        }
      );
  
      onMounted(() =>{
        store.value.dispatch('GET_REPORTS_BY_COUNTRIES' , option.value)
      });      
  
      return{
        ...state,
        formatNumber,
        countries,
        option
      }
    }
  };
</script>