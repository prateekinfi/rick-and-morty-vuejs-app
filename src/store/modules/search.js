const state = {
    searchParameter: '',
}

const mutations = {
    'searchCharacterMutation': (state, payload) => {
        console.log('Inside Search mutation' + payload);
        state.searchParameter = payload;
    },
    'clearSearchMutation': state => {
        console.log('Inside search clear mutation ');
        state.searchParameter = '';
    }
}

const actions = {
    'searchCharacter': ({ commit }, payload) => {
        console.log('Inside search character Action : ' + payload);
        commit('searchCharacterMutation', payload)
    },
    'clearSearch': ({ commit }) => {
        console.log('Inside search clear Action');
        commit('clearSearchMutation')
    }
}

const getters = {
    'getSearchParameter': state => {
        return state.searchParameter;
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}