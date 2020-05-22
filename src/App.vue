<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <app-filters></app-filters>
      </div>
      <div class="col-md-9">
        <app-display-section></app-display-section>
      </div>
    </div>
  </div>
</template>

<script>
import DisplaySection from "./components/DisplaySection";
import Filters from "./components/Filters/Filters";

export default {
  components: {
    appDisplaySection: DisplaySection,
    appFilters: Filters
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
body {
  background: url("./assets/background.png");
}
</style>
