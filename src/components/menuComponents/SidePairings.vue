<template>
  <div class="container">
    <categorieComponent categorie="SIDE PAIRINGS"
                      description="" />
    <listComponent v-for="item in sidePairings"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>
</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'SidePairings',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      sidePairings: [],
    }
  },

  created() {
    this.sidePairings = [
      {
        title: 'Garden Side Salad',
        description: 'Romaine, cherry toms, red onion, cucumber, shredded mozzarella',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Caesar Side Salad ',
        description: 'Romaine, shredded parmesan, croutons, Caesar dressing',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Small Mac & Cheese',
        description: 'Baked penne, creamy cheddar',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Cuppa Chicken Noodle Soup',
        description: 'Smoked chicken, fettuccini, carrot, onion, celery, chicken broth, garlic, bay, thyme, parsley, oregano',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Garlic & Dill Red Potatoes ',
        description: 'Baby red potatoes, butter, garlic, dill',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Boulder Chips',
        description: 'Regular, Jalapeno, Salt ‘n’ Vinegar, BBQ',
        mealPrice: 1.75,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Meats',
        description: 'Smoked Chicken, Smoked Pork Shoulder, Ribeye Steak, Pork Belly',
        mealPrice: 2,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
    ]
  }
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  width: 90vw;
}
</style>
