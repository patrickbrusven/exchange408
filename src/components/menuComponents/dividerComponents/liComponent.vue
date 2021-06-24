<template lang="html">
  <li>
    <div class="header">
      <div class="wrapper">
        <div class="leftSmallPipe"></div>
        <h4 class="thinner">{{ item.msg }}</h4>
        <div class="rightSmallPipe"></div>
      </div>
      <div v-show="item.gf" class="gfIcon">GF</div>
      <h3 class="bolder title">{{ item.title }}</h3>
      <h3 class="bolder price">${{ item.mealPrice }}</h3>
      <div v-show="item.price" class="slash"> /</div>
      <h4 v-show="item.price" class="price">Sandwich only - ${{ item.price }}</h4>
    </div>
    <p class="thinner description">{{ item.description }}</p>
    <div v-show="item.pp" class="perfectPairing">
      <p class="ppLabel">Perfect Pairing</p>
      <div class="pipe"></div>
      <p class="pp">{{ item.pp }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'liComponent',

  props: {
    item: Object,
    msg: String
  }
}
</script>

<style lang="css" scoped>

li {
  display: grid;
  grid-template-columns: max-content 2fr 1fr;
  grid-template-rows: min-content 2fr min-content min-content;
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  letter-spacing: 1px;

  grid-column: 1/4;
  grid-row: 1/2;
}

.wrapper {
  display: grid;
  grid-template-columns: 1px max-content 1px;
  grid-column-gap: 5px;
}

.leftSmallPipe,
.rightSmallPipe {
  background-color: #ced0cf;
  height: 100%;
  width: 100%;
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
  align-self: baseline;
}

.title {
  text-transform: uppercase;
  margin: 0px 20px;
}

.slash {
  font-size: 20px;
  margin-left: 2px;
  margin-right: 2px;
}

.description {
  grid-column: 1/3;
  grid-row: 2/4;
  padding-top: 3px;
}

.perfectPairing {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: min-content;
  grid-column-gap: 2px;

  grid-column: 2/4;
  grid-row: 4/5;
  justify-self: end;
  padding-top: 4px;
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
