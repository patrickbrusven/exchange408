<template>
  <div class="container">
    <categorieComponent categorie="SANDWICHES"
                        description="Available as lettuce wraps or on GF bread upon request. Served with your choice of a side pairing."
                          />
    <!-- <dividerComponent msg="simple"/> -->
    <listComponent v-for="sandwich in sandwiches"
                  :item="sandwich"
                  v-bind:key="sandwich.title"
                  categorie="Sandwich"
                  />
    <!-- <dividerComponent msg="chef-crafted"/> -->

    <!-- <listComponent v-for="sandwich in chefCraftedSandwiches"
                  :item="sandwich"
                  v-bind:key="sandwich.title"
                  categorie="Sandwich"
                  /> -->
  </div>
</template>

<script>
// import dividerComponent from './dividerComponents/dividerComponent.vue'
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Sandwiches',
  components: {
    // dividerComponent,
    categorieComponent,
    listComponent
  },

  data() {
    return {
      sandwiches: [],
    }
  },

  // computed: {
  //
  //   chefCraftedSandwiches: function() {
  //     return this.sandwiches.filter(sandwich => sandwich.chefCrafted);
  //   },
  //
  //   simpleSandwiches: function() {
  //     return this.sandwiches.filter(sandwich => !sandwich.chefCrafted);
  //   }
  // },

  created() {
    this.sandwiches = [
      {
        id: 234234,
        title: 'Small Town Chicken',
        description: 'Smoked chicken breast, cherry pepper aioli, shredded romaine and sliced romas on rosemary and olive oil french bread',
        mealPrice: 10,
        price: 7,
        pp: 'Indian Pale Ale',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'sandwiches',
      },
      {
        title: 'Shred City Pork',
        description: 'Smoked pork shoulder, cherry pepper aioli, shredded romaine and sliced romas on rosemary and olive oil french bread',
        mealPrice: 10,
        price: 7,
        pp: 'Whiskey John Collins',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'sandwiches',
      },
      {
        title: 'Urban Steak',
        description: 'Charcoal-grilled hickory smoked ribeye or t-bone steak, cherry pepper aioli, shredded romaine and sliced romas on rosemary and olive oil french bread',
        mealPrice: 12,
        price: 9,
        pp: 'Whiskey',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'sandwiches',
      },
      {
        title: 'The 408 BLT',
        description: 'Smoked pork belly (think thick cut bacon), cherry pepper aioli, shredded romaine and sliced romas on rosemary and olive oil french bread',
        mealPrice: 11,
        price: 8,
        pp: 'Whiskey',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'sandwiches',
      },
      {
        title: 'Veggie',
        description: 'Cherry pepper aioli, sliced romas, sliced provolone, and shredded cabbage on rosemary and olive oil french bread',
        mealPrice: 9,
        price: 7,
        pp: 'Cabernet',
        gf: false,
        vegetarian: true,
        chefCrafted: false,
        categorie: 'sandwiches',
      },
      // {
      //   title: 'The 408 Ribeye',
      //   description: 'Charcoal and hickory-grilled ribeye steak (med rare), garlic, horseradish, cherry pepper aioli, green peppers, roasted mushrooms, melted provolone and mozzarella cheeses, served on sliced rosemary & olive oil French bread',
      //   mealPrice: 12,
      //   price: 9,
      //   pp: 'Whiskey',
      //   gf: false,
      //   vegetarian: false,
      //   chefCrafted: true,
      //   categorie: 'sandwiches',
      // },
      // {
      //   title: '(Technically) PB&J',
      //   description: 'Smoked pork belly (think thick-cut bacon), jalapeno raspberry jam, shredded red and green cabbage, green onion, served on sliced rosemary & olive oil French bread',
      //   mealPrice: 12,
      //   price: 9,
      //   pp: 'Whiskey',
      //   gf: false,
      //   vegetarian: false,
      //   chefCrafted: true,
      //   categorie: 'sandwiches',
      // },
      // {
      //   title: 'Thai Love Me Some Bacon ',
      //   description: 'Smoked pork belly (think thick-cut bacon), cherry pepper aioli, julienned carrot, cucumber, sliced red pepper, shredded red and green cabbage, cilantro, green onion, spices served on sliced rosemary & olive oil French bread',
      //   mealPrice: 12,
      //   price: 9,
      //   pp: 'Pilsner',
      //   gf: false,
      //   vegetarian: false,
      //   chefCrafted: true,
      //   categorie: 'sandwiches',
      // },
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
