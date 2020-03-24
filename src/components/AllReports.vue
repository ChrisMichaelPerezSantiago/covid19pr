<template>
  <div v-if="reports.isLoading" class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <h5 class="loading font-bold text-gray-400">
      loading
    </h5>
  </div>
  <div v-else class="w-full px-0 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <div class="flex flex-wrap">
      <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-green-600"><i class="fa fa-heartbeat fa-2x fa-fw fa-inverse"></i></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-400">Recovered</h5>
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].recovered)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].cases)}} <span class="text-orange-500"><i class="fas fa-exchange-alt"></i></span></h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].deaths)}} <span class="text-red-500"><i class="fas fa-caret-down"></i></span></h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].active_cases[0].currently_infected_patients)}}</h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].active_cases[0].inMidCondition)}}</h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].active_cases[0].criticalStates)}}<span class="text-red-500"></span></h3>
            </div>
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
    <div class="flex flex-wrap">
      <div id="data" class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded p-3 bg-green-600"><i class="fa fa-check-circle fa-2x fa-fw fa-inverse"></i></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="font-bold uppercase text-gray-400">cases which had an outcome</h5>
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].closed_cases[0].cases_which_had_an_outcome)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].closed_cases[0].recovered)}} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
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
              <h3 class="font-bold text-3xl text-gray-600">{{formatNumber(reports.data[0].closed_cases[0].deaths)}} <span class="text-red-500"><i class="fas fa-caret-down"></i></span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="data" class="w-full p-3">
      <!--Table Card-->
      <div class="bg-gray-900 border border-gray-800 rounded shadow">
        <div class="border-b border-gray-800 p-3">
          <h5 class="font-bold uppercase text-gray-600">Confirmed Cases and Deaths by Country, Territory, or Conveyance</h5>
          <button @click.prevent="downloadCSV(recordsTable)" class="rounded p-3 bg-blue-600" style="width: 4em"><i class="fas fa-file-csv fa-2x fa-fw fa-inverse"></i></button>
        </div>
        <div class="p-5">
          <v-card>
            <v-card-title>
              Confirmed Cases and Deaths by Country, Territory, or Conveyance
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="search by country ..."
                single-line
                hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="recordsTable"
              :search="search"
              ></v-data-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {onMounted, reactive , ref} from '@vue/composition-api';
  import {useState, useStore} from '@u3u/vue-hooks';
  import {exportCSVFile , formatNumber} from '../utils/utils';
  
  export default {
    name: 'AllReports',
    setup() {
      const store = useStore();
      const state = reactive({
        ...useState(['reports'])
      });
  
      onMounted(() =>
        store.value.dispatch('GET_REPORTS')
      );
  
      const recordsTable = state.reports.data[0].table[0];
      const search = ref('');
      const headers = [
        {text: 'Country',             value: 'Country',           align: 'center', sortable: true,},
        {text: 'Total Cases',         value: 'TotalCases',        align: 'center'},
        {text: 'New Cases',           value: 'NewCases',          align: 'center'},
        {text: 'Total Deaths',        value: 'TotalDeaths',       align: 'center'},
        {text: 'New Deaths',          value: 'NewDeaths',         align: 'center'},
        {text: 'Total Recovered',     value: 'TotalRecovered',    align: 'center'},
        {text: 'Active Cases',        value: 'ActiveCases',       align: 'center'},
        {text: 'Serious Or Critical', value: 'Serious_Critical',  align: 'center'},
        {text: 'Tot Cases / 1M Pop',  value: 'TotCases_1M_Pop',   align: 'center'}
      ];
  
      const recordsHeaders = {
        title: 'COVID19-CASES',
        headers: [{
          Country: "Country",
          TotalCases: "Total Cases",
          NewCases: "New Cases",
          TotalDeaths: "Total Deaths",
          NewDeaths: "New Deaths",
          TotalRecovered: "Total Recovered",
          ActiveCases: "ActiveCases",
          SeriousOrCritical: "Serious Or Critical",
          TotCases: 'Tot Cases / 1M Pop'
        }]
      }
  
      const downloadCSV = (recordsTable) =>{
        if(recordsTable){
          exportCSVFile(recordsTable , recordsHeaders.headers , recordsHeaders.title);
        }
      };
  
      return{
        ...state,
        headers,
        search,
        recordsTable,
        formatNumber,
        downloadCSV,
      };
    }
  };
</script>