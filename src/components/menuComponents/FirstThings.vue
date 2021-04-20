<template>
  <div class="container">
    <categorieComponent categorie="FIRST-THINGS"
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
        title: 'Artichoke Dip',
        description: '(GF upon request) Served with sliced French bread, Ancient Grains flat bread, carrots, celery sticks',
        mealPrice: 8.5,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: true,
        categorie: 'first things',
      },
      {
        title: 'Bruschetta',
        description: '(GF upon request) Served with sliced French bread, Ancient Grains flat bread, carrots, celery sticks',
        mealPrice: 8.5,
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
