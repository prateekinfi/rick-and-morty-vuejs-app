<template>
  <div class="container">
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
      <app-character-tile></app-character-tile>
      <app-character-tile></app-character-tile>
      <app-character-tile></app-character-tile>
      <app-character-tile></app-character-tile>
    </div>
  </div>
</template>

<script>
import CharacterTile from "./Character/CharacterTile";
import SelectedFilters from "./Filters/SelectedFilters";
import Search from "./Search";
import Sorting from './Sorting'

export default {
  components: {
    appSelectedFilters: SelectedFilters,
    appCharacterTile: CharacterTile,
    appSearch: Search,
    appSorting: Sorting
  }
};
</script>

<style scoped>
</style>
