<template>
  <div class="container">
    <categorieComponent categorie="PASTAS"
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
        title: 'Smoked Chicken Alfredo',
        description: 'Smoked chicken, fettuccini, alfredo, cherry toms, red onion, mushrooms, parmesan, parsley',
        mealPrice: 12,
        price: '',
        pp: 'Chardonnay',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'pastas',
      },
      {
        title: 'Grown-A$$ Mac & Cheese',
        description: 'Baked penne, creamy cheddar, parmesan, bacon, jalapeno, onion, mushrooms',
        mealPrice: 8,
        price: '',
        pp: 'Bordeaux',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'pastas',
      },
      {
        title: 'Basic(ally) Mac & Cheese',
        description: 'Smoked chicken breast, romaine, halved grapes, sliced apples, celery, bleu cheese crumbles, candied walnuts, raspberry vinaigrette',
        mealPrice: 6,
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
