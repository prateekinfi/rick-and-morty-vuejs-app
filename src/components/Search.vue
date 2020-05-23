<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 mb-2">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="searchInput"
          placeholder="Search characters.."
          @keypress.enter="searchCharacter(searchInput)"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary black-btn" type="button" @click="searchCharacter()">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4 mb-2">
      <button
        class="btn btn-secondary black-btn clear-btn"
        type="button"
        @click="clearSearch();searchInput=''"
      >Clear search</button>
    </div>
  </div>
</template>

<script>
import { datamixin } from "../data";

export default {
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    searchCharacter() {
      this.$store.dispatch("searchCharacter", this.searchInput);
      this.updateData();
    },
    clearSearch() {
      this.$store.dispatch("clearSearch", this.searchInput);
      this.updateData();
    }
  },
  mixins: [datamixin]
};
</script>

<style scoped>
.black-btn {
  background: black;
}
.clear-btn {
  width: 100%;
}
</style>
