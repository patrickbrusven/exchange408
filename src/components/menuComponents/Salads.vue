<template>
  <div class="container">
    <categorieComponent categorie="GREENS"
                      description="" />
    <listComponent v-for="item in salads"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>

</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Salads',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      salads: [],
    }
  },

  created() {
    this.salads = [
      {
        title: 'Garden',
        description: 'Romaine, cherry tomatoes, red onion, cucumbers, mushrooms, shredded mozzarella | add choice of meat $2 |',
        mealPrice: 8,
        price: '',
        pp: 'Berliner Weisse',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'salads',
      },
      {
        title: 'Caesar',
        description: '(GF upon request) Romaine, shredded parmesan, croutons, Caesar dressing | add choice of meat $2 |',
        mealPrice: 8,
        price: '',
        pp: 'Lightly Oaked Chardonnay',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'salads',
      },
      {
        title: 'THE 1893',
        description: 'Smoked chicken breast, romaine, grapes, sliced apples, celery, bleu cheese crumbles, house crafted candied walnuts and raspberry vinaigrette',
        mealPrice: 11,
        price: '',
        pp: 'Sauvignon Blanc',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'salads',
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
