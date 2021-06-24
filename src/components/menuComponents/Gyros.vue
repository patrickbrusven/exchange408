<template lang="html">
  <div class="container">
    <categorieComponent categorie="GYROS"
                      description="Available as lettuce wraps by request. Served with your choice of a side pairing." />
    <listComponent v-for="item in gyros"
                  :item="item"
                  v-bind:key="item.title"
                  categorie="Gyro"
                  />
  </div>
</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Gyros',
  components: {
    // dividerComponent,
    categorieComponent,
    listComponent
  },

  data() {
    return {
      gyros: [],
    }
  },

  created() {
    this.gyros = [
      {
        title: 'The Traditional',
        description: 'Beef and lamb, house crafted Tzatziki Sauce, feta cheese, cherry tomatoes, romaine, served on a stone fired naan bread',
        mealPrice: 10,
        price: 7,
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'gyros',
      },
      {
        title: 'Small Town Chicken',
        description: 'Smoked chicken, house crafted Tzatziki Sauce, feta cheese, cherry tomatoes, romaine, served on a stone fired naan bread',
        mealPrice: 10,
        price: '7',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'gyros',
      },
      {
        title: 'Shred City Pork',
        description: 'Smoked pork, house crafted Tzatziki Sauce, feta cheese, cherry tomatoes, romaine, served on a stone fired naan bread',
        mealPrice: 10,
        price: 7,
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'gyros',
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
</style>
