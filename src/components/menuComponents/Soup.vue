<template>
  <div class="container">
    <categorieComponent categorie="SOUP"
                      description="" />
    <listComponent v-for="item in soups"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>
</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Soup',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      soups: [],
    }
  },

  created() {
    this.soups = [
      {
        title: 'Chicken Noodle',
        description: 'Tender chicken, whole-egg noodles, carrots, onions, and celery in a made-from-scratch broth and full of love.',
        mealPrice: 5,
        price: '',
        pp: 'Pinot Blanc',
        gf: false,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'soups',
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
