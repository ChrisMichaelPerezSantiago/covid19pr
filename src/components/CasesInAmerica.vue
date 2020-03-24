<template>
  <div class="container w-full mx-auto">
    <div v-if="casesAmerica.isLoading" class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <h5 class="loading font-bold text-gray-400">
        loading
      </h5>
    </div>
    <div v-else class="w-full md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <div id="data" class="w-full ">
        <!--Table Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow">
          <div class="border-b border-gray-800 p-3">
            <h5 class="font-bold uppercase text-gray-600">COVID19 cases in America</h5>
            <button @click.prevent="downloadCSV(recordsTable)" class="rounded p-3 bg-blue-600" style="width: 4em"><i class="fas fa-file-csv fa-2x fa-fw fa-inverse"></i></button>
          </div>
          <div class="p-5">
            <v-card>
              <v-card-title>
                COVID19 cases in America
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="search by day country ..."
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
  </div>
</template>

<script>
  import {onMounted, reactive , ref} from '@vue/composition-api';
  import {useState, useStore} from '@u3u/vue-hooks';
  import {exportCSVFile , formatNumber} from '../utils/utils';
  
  export default {
    name: 'CasesInAmerica',
    setup() {
      const store = useStore();
      const state = reactive({
        ...useState(['casesAmerica'])
      });
  
      onMounted(() =>
        store.value.dispatch('GET_CASES_AMERICA')
      );
  
      const recordsTable = ref(state.casesAmerica.data[0].table[0]);
      const search = ref('');
      const headers = [
        {text: 'Country',    value: 'Country',   align: 'center' , sortable: true},
        {text: 'Confirmed',  value: 'Confirmed', align: 'center'},
        {text: 'Deaths',     value: 'Deaths',    align: 'center'},
      ];
  
      const recordsHeaders = {
        title: 'COVID19 CASES IN AMERICA',
        headers: [{
          Country: "Country",
          Confirmed: "Confirmed",
          Deaths: "Deaths",
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