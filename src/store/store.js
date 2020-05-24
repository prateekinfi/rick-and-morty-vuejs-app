import Vue from 'vue'
import Vuex from 'vuex'
import filter from './modules/filter'
import search from './modules/search'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        resultList: [],
        ascending: true
    },
    getters,
    mutations,
    actions,
    modules: {
        search,filter
    }
});


