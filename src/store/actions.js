export const updateData= ({ commit }, payload) => {
    console.log('Inside updateData Action');
    commit('updateDataMutation', payload.results)
}

export const sortList= ({ commit }, payload) => {
    console.log('Inside sortList Action');
    commit('sortListMutation', payload)
}