<template>
  <div class="container">
    <categorieComponent categorie="FLATBREADS"
                      description="Served on a gluten-free, whole grain flatbread" />
    <listComponent v-for="item in flatbreads"
                  :item="item"
                  v-bind:key="item.title"
                  />
  </div>

</template>

<script>
import categorieComponent from './dividerComponents/categorieComponent.vue'
import listComponent from './dividerComponents/listComponent.vue'

export default {
  name:'Flatbreads',

  components: {
    categorieComponent,
    listComponent,

  },

  data() {
    return {
      flatbreads: [],
    }
  },

  created() {
    this.flatbreads = [
      {
        title: 'Alfredo',
        description: 'Smoked chicken, fettuccini pasta, house alfredo, cherry toms, red onions, mushrooms, parmesan, parsley',
        mealPrice: 13.5,
        price: '',
        pp: 'Aperol Spritz',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'flatbreads',
      },
      {
        title: 'Margherita',
        description: 'Ancient Grains Flatbread, organic marinara, romas, fresh basil, fresh mozzarella, olive oil',
        mealPrice: 13.5,
        price: '',
        pp: 'Negroni',
        gf: true,
        vegetarian: false,
        chefCrafted: false,
        categorie: 'flatbreads',
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
