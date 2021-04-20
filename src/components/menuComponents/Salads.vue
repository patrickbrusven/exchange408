<template>
  <div class="container">
    <categorieComponent categorie="SALADS"
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
        description: 'Romaine, cherry toms, red onion, cucumber, shredded mozzarella | add choice of meat $2 |',
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
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'salads',
      },
      {
        title: 'Waldorf',
        description: 'Smoked chicken breast, romaine, halved grapes, sliced apples, celery, bleu cheese crumbles, candied walnuts, raspberry vinaigrette',
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
