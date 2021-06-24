<template>
  <div class="container">
    <categorieComponent categorie="BREAKFAST"
                      description="Available 6am - 9am walk-up window or catering only" />

    <liComponent v-for="item in breakfast"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>

</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import liComponent from './dividerComponents/liComponent.vue'

export default {
  name:'Breakfast',

  components: {
    liComponent,
    categorieComponent
  },

  data() {
    return {
      breakfast: [],
    }
  },

  created() {
    this.breakfast = [
      {
        title: 'Breakfast Burrito ',
        description: 'Smoked bacon, butter fried tortilla, real scrambled eggs, green chili, and sour cream',
        mealPrice: 5,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        msg: 'SIMPLE',
        categorie: 'breakfast',
      },
      {
        title: 'Breakfast Burrito',
        description: 'Smoked ribeye, smoked bacon and breakfast sausage, butter fried tortilla, crispy potato, real scrambled eggs, green chili, sour cream, and cheddar cheese',
        mealPrice: 7,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: true,
        msg: 'CHEF-CRAFTED',
        categorie: 'breakfast',
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
