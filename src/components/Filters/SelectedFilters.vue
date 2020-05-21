<template>
  <div class="container">
    <h3>Selected Filters</h3>
        <div class="selected-filter">
          Male
          <div class="cross">X</div>
        </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container{
  margin: 20px 0px 20px 0px;
}


.selected-filter {
  display: inline-block;
  background: black;
  color:white ;
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
