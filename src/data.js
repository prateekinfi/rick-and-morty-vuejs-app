export const datamixin = {
    methods: {
        updateData() {
            let queryParams = "?";
            let searchQueryParam = "";
            let filterQueryParams = "";
            let selectedFilterList = this.$store.getters.getSelectedFilterList;
            let searchParameter = this.$store.getters.getSearchParameter;

            if (selectedFilterList.length) {
                console.log(selectedFilterList.length);
                for (let i = 0; i < selectedFilterList.length; i++) {
                    filterQueryParams += `${selectedFilterList[i]['filterType']}=${selectedFilterList[i]['name']}&`;
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
                }, response => {
                    this.$store.dispatch("updateData", []);
                    console.log(response)
                });
        }
    }
}