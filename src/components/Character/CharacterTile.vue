<template>
  <div class="wrapper col-md-3 col-sm-4 col-6">
    <div class="character-container">
      <div style="max-height: 13rem;position: relative;">
        <div
          class="image"
          :style="{backgroundImage: `url(${character.image})`}"
        ></div>
        <div class="title">
          <h3 class="name">{{character.name}}</h3>
          <span class="created">id: {{character.id}} created {{createdDate}} Years ago</span>
        </div>
      </div>
      <div class="character-details">
        <ul>
          <li class="property status">
            <span class="property-name">Status</span>
            <span class="property-value">{{character.status}}</span>
          </li>
          <li class="property species">
            <span class="property-name">Species</span>
            <span class="property-value">{{character.species}}</span>
          </li>
          <li class="property gender">
            <span class="property-name">Gender</span>
            <span class="property-value">{{character.gender}}</span>
          </li>
          <li class="property origin">
            <span class="property-name">Origin</span>
            <span class="property-value">{{character.origin.name}}</span>
          </li>
          <li class="property location">
            <span class="property-name">Last Location</span>
            <span class="property-value">{{character.location.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['character'],
  computed:{
    createdDate(){
      return new Number((new Date().getTime() - new Date(this.character.created).getTime()) / 31536000000).toFixed(0);;
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 2px;
} 
.character-container {
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  height: 100%;
}
.character-details {
  background-color: rgba(51, 51, 51, 1);
  color: rgb(255, 152, 0);
  padding: 1.2rem;
  height: 100%;
}
.image {
  width: 100%;
  height: 13rem;
  background-size: cover;
}
.title {
  background-color: rgba(32, 35, 41, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
}
.name {
  color: rgb(245, 245, 245);
  font-size: 1.2rem;
  display: block;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
.created {
  font-size: 0.7rem;
  color: rgb(245, 245, 245);
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.property {
  padding: 0.75rem 0px 0.375rem;
  border-bottom: 1px solid rgb(68, 68, 68);
  margin: 0;
  display: flex;
}
.property-name{
    text-transform: uppercase;
    color: rgb(158,158,158);
    text-align: left;
    width: 30%;
    display: inline-block;
    font-size: 0.7rem;
    padding-right: 0.8rem;
    box-sizing: border-box;
    font-weight: 400;
    vertical-align: middle;
}
.property-value{
  color: rgb(255,152,0);
    text-align: right;
    width: 70%;
    display: inline-block;
    font-size: 0.9rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
    font-weight: 400;
    vertical-align: middle;
}
</style>
