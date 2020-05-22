export const datamixin = {
    methods: {
        updateData() {
            let queryParams = "?";
            let searchQueryParam = "";
            let filterQueryParams = "";
            let selectedFilterList = this.$store.getters.getSelectedFilterList;
            let searchParameter = this.$store.getters.getSearchParameter;
            // console.log(selectedFilterList);
            
            if (selectedFilterList.length) {
                for (let filter in selectedFilterList) {
                    console.log(filter);
                    filterQueryParams = `${filter['filterType']}=${filter['name']}&`;
                }
                filterQueryParams = filterQueryParams.substr(0, filterQueryParams.length - 1);
            }
            if (searchParameter != "") {
                searchQueryParam = `name=${searchParameter}&`;
                console.log('searchQueryParam :' + searchQueryParam);
                queryParams += searchQueryParam;
            }
            queryParams += filterQueryParams
            console.log('searchQueryParam :' + searchQueryParam);
            console.log('filterQueryParams :' + filterQueryParams);
            console.log('queryParams :' + queryParams);

            this.$http
                .get("https://rickandmortyapi.com/api/character/" + queryParams)
                .then(data => {
                    console.log(data.body);
                    this.$store.dispatch("updateData", data.body);
                });
        }
    }
}