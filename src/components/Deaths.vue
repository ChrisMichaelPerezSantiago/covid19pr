<template>
  <div v-if="deaths.isLoading">
    <h5 class="loading font-bold text-gray-400">
      loading
    </h5>
  </div>
  <div v-else>
    <div id="data" class="w-full p-3">
      <!--Table Card-->
      <div class="bg-gray-900 border border-gray-800 rounded shadow">
        <div class="border-b border-gray-800 p-3">
          <h5 class="font-bold uppercase text-gray-600">Confirmed Deaths</h5>
          <button @click.prevent="downloadCSV(recordsTable)" class="rounded p-3 bg-blue-600" style="width: 4em"><i class="fas fa-file-csv fa-2x fa-fw fa-inverse"></i></button>
        </div>
        <div class="p-5">
          <v-card>
            <v-card-title>
              Confirmed Deaths
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="search by day ..."
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
    name: 'Deaths',
    setup() {
      const store = useStore();
      const state = reactive({
        ...useState(['deaths'])
      });
  
      onMounted(() =>
        store.value.dispatch('GET_DEATHS')
      );
  
      const recordsTable = ref(state.deaths.data.table);
      const search = ref('');
      const headers = [
        {text: 'Date',                 value: 'Date',                 align: 'center' , sortable: true},
        {text: 'Total Deaths',         value: 'TotalDeaths',          align: 'center'},
        {text: 'Change in Total',      value: 'ChangeInTotal',        align: 'center'},
        {text: 'Change in Total (%)',  value: 'ChangeTotalInPercent', align: 'center'},
      ];
  
      const recordsHeaders = {
        title: 'COVID19-DEATHS',
        headers: [{
          Date: "Date",
          TotalDeaths: "Total Deaths",
          ChangeInTotal: "Change in Total",
          ChangeTotalInPercent: "Change in Total (%)",
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