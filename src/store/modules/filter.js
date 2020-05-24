const state = {
    selectedFilterList: []
}

const mutations = {
    'addFilterMutation': (state, payload) => {
        console.log('Inside add filter mutation' + payload);
        let filter =state.selectedFilterList.find(filter => payload['filterType'] == filter['filterType']);
        if (filter) {
            filter['name']=payload.name;
        } else
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
    }
}

const actions = {
    'addFilter': ({ commit }, payload) => {
        console.log('Inside add filter Action : ' + payload);
        commit('addFilterMutation', payload);
    },
    'removeFilter': ({ commit }, payload) => {
        console.log('Inside remove filter Action : ' + payload);
        commit('removeFilterMutation', payload)
    }
}

const getters = {
    'getSelectedFilterList': state => {
        return state.selectedFilterList;
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}