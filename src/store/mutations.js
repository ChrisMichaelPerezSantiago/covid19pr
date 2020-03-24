const type = require('./types.js');

export const mutations = {
  [type.SET_REPORTS](state, payload){
    state.reports.data = payload;
  },
  [type.REPORTS_IS_LOADING](state, payload){
    state.reports.isLoading = payload;
  },
  [type.SET_REPORTS_BY_COUNTRIES](state, payload){
    state.reportsByContries.data = payload;
  },
  [type.REPORTS_BY_COUNTRIES_IS_LOADING](state, payload){
    state.reportsByContries.isLoading = payload;
  },
  [type.SET_DEATHS](state, payload){
    state.deaths.data = payload;
  },
  [type.DEATHS_IS_LOADING](state, payload){
    state.deaths.isLoading = payload;
  },
  [type.SET_TESTS_IN_US](state, payload){
    state.tests.data = payload;
  },
  [type.TEST_IN_US_IS_LOADING](state, payload){
    state.tests.isLoading = payload;
  },
  [type.SET_CASES_AMERICA](state, payload){
    state.casesAmerica.data = payload;
  },
  [type.CASES_AMERICA_IS_LOADING](state, payload){
    state.casesAmerica.isLoading = payload;
  }
};