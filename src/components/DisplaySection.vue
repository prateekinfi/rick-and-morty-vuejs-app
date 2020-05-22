<template>
  <div class="container">
    <button @click="updateData();">display</button>
    <div class="row">
      <app-selected-filters></app-selected-filters>
    </div>
    <div class="row mb-4">
      <div class="col-md-9">
        <app-search></app-search>
      </div>
      <div class="col-md-3 col-sm-12">
        <app-sorting></app-sorting>
      </div>
    </div>
    <div class="row">
      <app-character-tile v-for="char in characterList" :key="char.id" :character="char"></app-character-tile>
    </div>
  </div>
</template>

<script>
import CharacterTile from "./Character/CharacterTile";
import SelectedFilters from "./Filters/SelectedFilters";
import Search from "./Search";
import Sorting from "./Sorting";
import { datamixin } from "../data";

export default {
  computed: {
    characterList() {
      return this.$store.getters.getResultList;
    }
  },
  components: {
    appSelectedFilters: SelectedFilters,
    appCharacterTile: CharacterTile,
    appSearch: Search,
    appSorting: Sorting
  },
  mixins: [datamixin]
};
</script>

<style scoped>
</style>
