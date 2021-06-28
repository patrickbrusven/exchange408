<template>
  <div class="container">
    <categorieComponent categorie="PASTA"
                      description="" />
    <listComponent v-for="item in pastas"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>
</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Pastas',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      pastas: [],
    }
  },

  created() {
    this.pastas = [
      {
        title: 'Grown-A$$ Mac & Cheese',
        description: 'Baked penne, creamy cheddar, parmesan, smoked bacon, jalapenos, onions, mushrooms',
        mealPrice: 10,
        price: '',
        pp: 'Bordeaux',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'pastas',
      },
      {
        title: 'Basic(ally) Mac & Cheese',
        description: 'Baked penne and creamy cheddar',
        mealPrice: 7,
        price: '',
        pp: 'English Brown Ale',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'pastas',
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
