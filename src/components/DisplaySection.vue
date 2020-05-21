<template>
  <div class="container">
    <div class="row">
      <app-selected-filters></app-selected-filters>
      <app-search></app-search>
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

export default {
  components: {
    appSelectedFilters: SelectedFilters,
    appCharacterTile: CharacterTile,
    appSearch: Search
  }
};
</script>

<style>
</style>
