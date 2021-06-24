<template>
  <div class="container">
    <categorieComponent categorie="FIRST THINGS"
                      description="" />
    <listComponent v-for="item in firstThings"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>

</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'FirstThings',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      firstThings: [],
    }
  },

  created() {
    this.firstThings = [
      {
        title: 'Wings (6)',
        description: 'Choose from Buffalo, Barbeque or Garlic Parmesan',
        mealPrice: 8.5,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'first things',
      },
      {
        title: 'Pesto Artichoke Dip',
        description: '(GF upon request) Served with sliced rosemary french bread, carrots & celery',
        mealPrice: 8.5,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: true,
        categorie: 'first things',
      },
      {
        title: 'Speckled Eggs',
        description: 'Hard boiled eggs seasoned to perfection with just a hint of spice',
        mealPrice: 3,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: true,
        categorie: 'first things',
      },
    ]
  }
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  width: 90%;
}
</style>
