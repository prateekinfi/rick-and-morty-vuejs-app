<template>
  <div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By ID
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" @click="sort(true)">Ascending</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item" @click="sort(false)">Descending</button>
  </div>
</div>
    
  </div>
</template>

<script>
export default {
  methods:{
    sort(order){
      this.$store.dispatch('sortList',order)
    }
  }
}
</script>

<style scoped>
.btn-group{
width: 100%;
}
.btn{
width: 100%;
}
button.dropdown-toggle{
  background-color:black;
}
.dropdown-menu{
width: inherit;
}
</style>
