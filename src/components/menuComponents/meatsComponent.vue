<template lang="html">
  <div class="container">
    <li v-for="item in meats"
        v-bind:key="item.title">
      <div class="header">
        <div v-show="item.gf" class="gfIcon">GF</div>
        <h3 class="title">{{ item.title }}</h3>
      </div>
      <p class="description">{{ item.description }}</p>
      <div class="choices">
        <p>| Smoked Chicken, Smoked Pork Shoulder $2.50 |</p>
        <p>| Pork Belly (bacon) $3.50 |</p>
        <p>| Ribeye Steak $4.50 |</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'MeatsComponent',

  data() {
    return {
      meats: [],
    }
  },

  created() {
    this.meats = [
      {
        title: 'Meats',
        description: 'We smoke all of our meat in-house for your taste buds enjoyment! Choices include...',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
    ]
  }

}


</script>

<style lang="css" scoped>
.container {
  display: grid;
  place-items: center;
  width: 90%;
}



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

  grid-column: 1/4;
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
  align-self: baseline;
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

.choices {
  margin-top: 5px;
  grid-column: 1/3;
}
/* 
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
} */
</style>
