<template>
  <div class="container">
    <h3>Filters</h3>
    <div class="filter-container">
      <h3>Species</h3>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="human"
          v-model="species"
          value="Human"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="human">Human</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="mytholog"
          v-model="species"
          value="Mytholog"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="mytholog">Mytholog</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="alien"
          v-model="species"
          value="Alien"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="alien">Alien</label>
      </div>
    </div>

    <div class="filter-container">
      <h3>Gender</h3>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="male"
          v-model="gender"
          value="Male"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="male">Male</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="female"
          v-model="gender"
          value="Female"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="female">Female</label>
      </div>
    </div>
  </div>
</template>

<script>
import { datamixin } from "../../data";

export default {
  // data() {
  //   return {
  //     gender: "",
  //     species: ""
  //   };
  // },
  computed: {
    gender: {
      get() {
        let filter = this.$store.getters.getSelectedFilterList.find(
          filter => filter["filterType"] === "gender"
        );
        if (filter) return filter.name;
        else return "";
      },
      set(value) {
        let filter = {};
        this.constructFilter(filter, value, "gender");
        this.$store.dispatch("addFilter", filter);
        this.updateData();
      }
    },
    species: {
      get() {
        let filter = this.$store.getters.getSelectedFilterList.find(
          filter => filter["filterType"] === "species"
        );
        if (filter) return filter.name;
        else return "";
      },
      set(value) {
       let filter = {};
        this.constructFilter(filter, value, "species");
        this.$store.dispatch("addFilter", filter);
        this.updateData();
      }
    }
  },
  methods: {
    constructFilter(filter, value, filterType) {
      //let filter = {};
      if (value != "") {
        filter["filterType"] = filterType;
        filter["name"] = value;
       // filters.push(filter);
      }
      return filter;
    }
    //,
    //removed on change
    // addFilter() {
    //   let filters = [];
    //   this.constructFilter(filters, this.gender, "gender");
    //   this.constructFilter(filters, this.species, "species");
    //   this.$store.dispatch("addFilter", filters);
    //   this.updateData();
    // }
  },
  mixins: [datamixin]
};
</script>

<style scoped>
.container {
  margin: 20px 0px 0px 0px;
}

.filter-container {
  border: solid black 1px;
  padding: 20px;
  margin: 20px 0px;
  background: white;
}

.custom-radio :hover {
  cursor: pointer;
}
</style>
