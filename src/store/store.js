import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedFilterList: [],
        characterList: [],
        filteredList: []
    },
    getters: {
        'selectedFilter': state => { return state.selectedFilterList; },
        'characterList': state => { return state.characterList; }
    },
    mutations: {
        // 'addFilterMutation': (state, payload) => {

        // },
        // 'removeFilterMutation': (state, payload) => {

        // },
        'searchCharacterMutation': (state, paylaod) => {
            console.log('Inside Search mutation'+ paylaod);
        },
        'clearSearchMutation':state => {
         console.log('Inside search clear mutation ');
            
        }
    },
    actions: {
        // 'addFilter': ({commit}, payload) => {

        // },
        // 'removeFilter': ({commit}, payload) => {
        // },
        'searchCharacter': ({commit}, payload) => {
            console.log('Inside Action : ' + payload);
            commit('searchCharacterMutation',payload)
        },
        'clearSearch': ({commit}) => {
            console.log('Inside search clear Action');
            commit('clearSearchMutation')
        }
    }
});