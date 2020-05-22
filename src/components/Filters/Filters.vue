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
          v-on:change="addFilter"
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
          v-on:change="addFilter"
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
          v-on:change="addFilter"
        />
        <label class="custom-control-label" for="alien" v-on:change="addFilter">Alien</label>
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
          v-on:change="addFilter"
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
          v-on:change="addFilter"
        />
        <label class="custom-control-label" for="female">Female</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      species: ""
    };
  },
  methods: {
    addFilter() {
      let filters = [];
      let genderFilter={};
      let speciesFilter={};

      if (this.gender != "") {
        genderFilter["filterType"] = "gender";
        genderFilter["name"] = this.gender;
        filters.push(genderFilter);
      }
      if (this.species != "") {
        speciesFilter["filterType"] = "species";
        speciesFilter["name"] = this.species;
        filters.push(speciesFilter);
      }
      console.log(filters);

      this.$store.dispatch("addFilter", filters);
    }
  }
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
