const axios = require('axios').default;
const type = require('./types');
const {BASE_URL} = require('../url/url');


export const actions = {
  GET_REPORTS({commit}){
    commit(type.REPORTS_IS_LOADING , true);
    axios.get(`${BASE_URL}/AllReports`)
      .then(res =>{
        const doc = res.data.reports;
        commit(type.SET_REPORTS , doc);
        setTimeout(() => {
          commit(type.REPORTS_IS_LOADING , false);      
        }, 1000);
      });
  },
  GET_REPORTS_BY_COUNTRIES({commit}, country){
    commit(type.REPORTS_BY_COUNTRIES_IS_LOADING , true);
    axios.get(`${BASE_URL}/ReportsByCountries/${country}`)
      .then(res =>{
        const doc = res.data.report;
        commit(type.SET_REPORTS_BY_COUNTRIES , doc);
        setTimeout(() => {
          commit(type.REPORTS_BY_COUNTRIES_IS_LOADING , false);      
        }, 1000);
      });
  },
  GET_DEATHS({commit}){
    commit(type.DEATHS_IS_LOADING , true);
    axios.get(`${BASE_URL}/Deaths`)
      .then(res =>{
        const doc = res.data.deaths;
        commit(type.SET_DEATHS , doc);
        setTimeout(() => {
          commit(type.DEATHS_IS_LOADING , false);      
        }, 1000);
      });
  },
  GET_TESTS({commit}){
    commit(type.TEST_IN_US_IS_LOADING , true);
    axios.get(`${BASE_URL}/TestsInUS`)
      .then(res =>{
        const doc = res.data.tests;
        commit(type.SET_TESTS_IN_US , doc);
        setTimeout(() => {
          commit(type.TEST_IN_US_IS_LOADING , false);      
        }, 1000);
      });
  },
  GET_CASES_AMERICA({commit}){
    commit(type.CASES_AMERICA_IS_LOADING , true);
    axios.get(`${BASE_URL}/AllCasesInAmerica`)
      .then(res =>{
        const doc = res.data.data;
        commit(type.SET_CASES_AMERICA , doc);
        setTimeout(() => {
          commit(type.CASES_AMERICA_IS_LOADING , false);      
        }, 1000);
      });
  },
};