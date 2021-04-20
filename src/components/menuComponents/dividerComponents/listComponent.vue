<template>
  <li>
    <div class="header">
      <div v-show="item.gf" class="gfIcon">GF</div>
      <h3 class="title">{{ item.title }} ${{ item.mealPrice }}</h3>
      <div v-show="item.price" class="slash"> /</div>
      <h4 v-show="item.price" class="price">Sandwich only - ${{ item.price }}</h4>
    </div>
    <p class="description">{{ item.description }}</p>
    <div v-show="item.pp" class="perfectPairing">
      <p class="ppLabel">Perfect Pairing</p>
      <div class="pipe"></div>
      <p class="pp">{{ item.pp }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'listComponent',

  props: {
    item: Object,
  }
}
</script>

<style scoped>
li {
  display: grid;
  grid-template-columns: max-content 2fr 1fr;
  grid-template-rows: min-content 2fr min-content min-content;
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;
}

.header {
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  grid-template-rows: min-content;

  grid-column: 1/3;
  grid-row: 1/2;
}

.gfIcon {
  width: 19px;
  height: 19px;
  background-color: #c8a75f;
  margin: 1px;
  margin-right: 5px;
  color: #07070f;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  padding-top: 2.5px;
  align-self: start;
  grid-column: 1/2;
  grid-row: 1/2;
}

.title {
  grid-column: 2/3;
  grid-row: 1/2;
}

.slash {
  font-size: 20px;
  margin-left: 2px;
  margin-right: 2px;
  grid-column: 3/4;
  grid-row: 1/2;
}

.price {
  grid-column: 4/5;
  grid-row: 1/2;
  align-self: end;
}

.description {
  grid-column: 1/3;
  grid-row: 2/4;
}

.perfectPairing {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: min-content;
  grid-column-gap: 2px;

  grid-column: 2/4;
  grid-row: 4/5;
  justify-self: end;
}

.pp,
.ppLabel {
  font-style: italic;
  align-self: end;
  font-size: 12px;
}

.ppLabel {
  grid-column: 1/2;
}

.pipe {
  content: '';
  height: 100%;
  width: 1px;
  background-color: #ced0cf;

  grid-column: 2/3;
}

.pp {
  grid-column: 3/4;
}
</style>
