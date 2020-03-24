<template>
  <div class="container w-full mx-auto pt-20">
    <div v-if="tests.isLoading" class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <h5 class="loading font-bold text-gray-400">
        loading
      </h5>
    </div>
    <div v-else class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <div id="data" class="w-full p-3">
        <!--Table Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow">
          <div class="border-b border-gray-800 p-3">
            <h5 class="font-bold uppercase text-gray-600">Public Health Laboratory Testing for COVID-19 in US</h5>
            <button @click.prevent="downloadCSV(recordsTable)" class="rounded p-3 bg-blue-600" style="width: 4em"><i class="fas fa-file-csv fa-2x fa-fw fa-inverse"></i></button>
          </div>
          <div class="p-5">
            <v-card>
              <v-card-title>
                Public Health Laboratory Testing for COVID-19
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="search by day collected ..."
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
    name: 'TestsInUS',
    setup() {
      const store = useStore();
      const state = reactive({
        ...useState(['tests'])
      });
  
      onMounted(() =>
        store.value.dispatch('GET_TESTS')
      );
  
      const recordsTable = ref(state.tests.data.table)
      const search = ref('');
      const headers = [
        {text: 'Date Collected',         value: 'DateCollected',      align: 'center' , sortable: true},
        {text: 'CDC Labs',               value: 'CDCLabs',            align: 'center'},
        {text: 'US Public Health Labs',  value: 'USPublicHealthLabs', align: 'center'},
      ];
  
      const recordsHeaders = {
        title: 'TESTING IN US',
        headers: [{
          DateCollected: "Data Collected",
          CDCLabs: "CDC Labs",
          USPublicHealthLabs: "US Public Health Labs",
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