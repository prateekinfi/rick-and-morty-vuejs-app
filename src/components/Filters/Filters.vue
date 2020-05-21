<template>
  <div class="container">


    <h3>Filters</h3>
    <div class="filter-container">
      <h3>Species</h3>
      <div class="custom-control custom-radio">
        <input type="radio" id="human" name="species" class="custom-control-input" />
        <label class="custom-control-label" for="human">Human</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="mytholog" name="species" class="custom-control-input" />
        <label class="custom-control-label" for="mytholog">Mytholog</label>
      </div>
        <div class="custom-control custom-radio">
        <input type="radio" id="alien" name="species" class="custom-control-input" />
        <label class="custom-control-label" for="alien">Alien</label>
      </div>
    </div>

    <div class="filter-container">
      <h3>Gender</h3>
      <div class="custom-control custom-radio">
        <input type="radio" id="male" name="gender" class="custom-control-input" />
        <label class="custom-control-label" for="male">Male</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="female" name="gender" class="custom-control-input" />
        <label class="custom-control-label" for="female">Female</label>
      </div>
    </div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
  margin: 20px 0px 0px 0px;
}

.filter-container {
  border: solid black 1px;
  padding: 20px;
  margin:20px 0px ;
  background: white;
}

.custom-radio :hover{
  cursor: pointer;
}
</style>
