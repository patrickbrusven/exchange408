<template>
  <div class="container">
    <categorieComponent categorie="BREAKFAST"
                      description="Available 6am-9am thru pick-up window or catering" />
    <dividerComponent msg="simple"/>
    <listComponent v-for="item in simpleBreakfast"
                  :item="item"
                  v-bind:key="item.title"
                  />
    <dividerComponent msg="chef-crafted"/>

    <listComponent v-for="item in chefCraftedBreakfast"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>

</template>

<script>
import dividerComponent from './dividerComponents/dividerComponent.vue'
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Breakfast',

  components: {
    dividerComponent,
    listComponent,
    categorieComponent
  },

  data() {
    return {
      breakfast: [],
    }
  },

  computed: {
    chefCraftedBreakfast: function() {
      return this.breakfast.filter(item => item.chefCrafted);
    },

    simpleBreakfast: function() {
      return this.breakfast.filter(item => !item.chefCrafted);
    }
  },

  created() {
    this.breakfast = [
      {
        title: 'Breakfast Burrito ',
        description: 'Smoked bacon, butter fried tortilla, real scrambled eggs, green chili, sour cream',
        mealPrice: 6,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'breakfast',
      },
      {
        title: 'Breakfast Burrito',
        description: 'Smoked ribeye, smoked bacon, breakfast sausage, butter fried tortilla, crispy potato, real scrambled eggs, green chili, Pico de Gallo, sour cream, cheddar cheese',
        mealPrice: 7,
        price: '',
        pp: '',
        gf: false,
        vegetarian: false,
        chefCrafted: true,
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
