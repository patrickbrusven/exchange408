<template lang="html">
  <div class="banner">
    <div class="leftLargePipe">
    </div>
    <h2 class="categorie">{{ categorie }}</h2>
    <div class="rightLargePipe">
    </div>
    <p class="categorieDescription">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CategorieComponent',
  props: {
    categorie: String,
    description: String,
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 5px max-content 5px 2fr 1fr;
  grid-template-rows: min-content 2fr;
  justify-items: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.leftLargePipe {
  background-color: #ced0cf;
  grid-column: 3/4;
  grid-row: 1/2;
  width: 100%;
  height: 80%;
}

.categorie {
  grid-column: 4/5;
  grid-row: 1/2;
  font-size: 30px;
  margin: 5px;
}

.rightLargePipe {
  background-color: #ced0cf;
  grid-column: 5/6;
  grid-row: 1/2;
  width: 100%;
  height: 80%;
}

.categorieDescription {
  grid-column: 2/7;
  grid-row: 2/3;
  text-align: center;
}
</style>
