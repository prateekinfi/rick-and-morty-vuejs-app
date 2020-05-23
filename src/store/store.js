import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedFilterList: [],
        resultList: [],
        searchParameter: ''
    },
    getters: {
        'getSelectedFilterList': state => {
            return state.selectedFilterList;
        },
        'getResultList': state => {
            return state.resultList;
        },
        'getSearchParameter':state => {
            return state.searchParameter;
        }
    },
    mutations: {
        'addFilterMutation': (state, payload) => {
            console.log('Inside add filter mutation' + payload);
            state.selectedFilterList.push(payload);
        },
        'removeFilterMutation': (state, payload) => {
            console.log('Inside remove filter mutation' + payload);
            state.selectedFilterList.splice(state
                .selectedFilterList
                .findIndex(
                    filter =>
                        filter.name === payload.name
                ), 1);
        },
        'searchCharacterMutation': (state, payload) => {
            console.log('Inside Search mutation' + payload);            
            state.searchParameter = payload;
        },
        'clearSearchMutation': state => {
            console.log('Inside search clear mutation ');
            state.searchParameter = '';
        },
        'updateDataMutation': (state, payload)=> {
            console.log('Inside updateData Mutation');
            state.resultList=payload;
        }
    },
    actions: {
        'addFilter': ({ commit }, payload) => {
            console.log('Inside add filter Action : ' + payload);
            commit('addFilterMutation', payload);
        },
        'removeFilter': ({ commit }, payload) => {
            console.log('Inside remove filter Action : ' + payload);
            commit('removeFilterMutation', payload)
        },
        'searchCharacter': ({ commit }, payload) => {
            console.log('Inside search character Action : ' + payload);
            commit('searchCharacterMutation', payload)
        },
        'clearSearch': ({ commit }) => {
            console.log('Inside search clear Action');
            commit('clearSearchMutation')
        },
        'updateData': ({ commit },payload) => {
            console.log('Inside updateData Action');
            commit('updateDataMutation',payload.results)
        }
    }
});


