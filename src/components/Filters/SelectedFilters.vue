<template>
  <div class="container">
    <h3>Selected Filters</h3>
    <div class="selected-filter" v-for="(filter,index) in filterList" :key="index">
      {{filter.name}}
      <div class="cross" @click="removeFilter(filter,index)">X</div>
    </div>
  </div>
</template>

<script>
import {datamixin} from '../../data';

export default {
  computed: {
    filterList() {
      return this.$store.getters.getSelectedFilterList;
    }
  },
  methods: {
    removeFilter(filter, index) {
      //this.filterList.splice(index, 1);
      this.$store.dispatch("removeFilter", filter);
      this.updateData();
    }
    },
  mixins: [datamixin]
};
</script>
<style scoped>
.container {
  margin: 20px 0px 20px 0px;
}
.selected-filter {
  display: inline-block;
  background: black;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: 10px;
}

.cross {
  display: inline;
}

.cross:hover {
  cursor: pointer;
}
</style>
