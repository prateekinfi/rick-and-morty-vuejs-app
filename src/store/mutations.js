export const sortListMutation= (state, payload) => {
    console.log('Inside sortList Mutation');
    if (state.ascending != payload) {
        state.resultList.reverse();
        state.ascending = payload;
    }
}
export const updateDataMutation = (state, payload) => {
    console.log('Inside updateData Mutation');
    state.resultList = payload;
}