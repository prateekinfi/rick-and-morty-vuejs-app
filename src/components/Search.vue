<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 mb-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search characters.." />
        <div class="input-group-append">
          <button class="btn btn-secondary black-btn" type="button">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4 mb-2">
      <button class="btn btn-secondary black-btn clear-btn" type="button">Clear search</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.black-btn {
  background: black;
}
.clear-btn{
  width: 100%;
}
</style>
