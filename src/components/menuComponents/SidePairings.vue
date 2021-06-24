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
        description: 'Romaine, cherry tomatoes, red onion, cucumbers, mushrooms, shredded mozzarella',
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
        description: '(GF upon request) Romaine, shredded parmesan, croutons, Caesar dressing',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Organic Garden French Beans',
        description: 'Fresh organic French green beans, steamed and finished with house crafted garlic dill butter Seasonal availability',
        mealPrice: 3,
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
        title: 'Garlic & Dill Red Potatoes ',
        description: 'Steamed red potatoes with house crafted garlic dill butter',
        mealPrice: 4,
        price: '',
        pp: '',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'side pairings',
      },
      {
        title: 'Metro Deli Potato Chips',
        description: 'Regular or Jalapeno',
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
        description: 'We smoke all of our meat in-house for your taste buds enjoyment! Choices include Smoked Chicken, Smoked Pork Shoulder, Ribeye Steak, and Pork Belly (bacon)',
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
  width: 90%;
}
</style>
