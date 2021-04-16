<template>
  <div class="menu">
    <Breakfast />
    <FirstThings />
    <Sandwiches />
    <Salads />
    <Flatbreads />
    <Soup />
    <Pastas />
    <SidePairings />
  </div>
</template>

<script>
import Breakfast from '@/components/menuComponents/Breakfast.vue'
import FirstThings from '@/components/menuComponents/FirstThings.vue'
import Sandwiches from '@/components/menuComponents/Sandwiches.vue'
import Salads from '@/components/menuComponents/Salads.vue'
import Flatbreads from '@/components/menuComponents/Flatbreads.vue'
import Soup from '@/components/menuComponents/Soup.vue'
import Pastas from '@/components/menuComponents/Pastas.vue'
import SidePairings from '@/components/menuComponents/SidePairings.vue'
// import Beverages from '@/components/menuComponents/Beverages.vue'

export default {
  name: 'Menu',
  components: {
    Breakfast,
    FirstThings,
    Sandwiches,
    Salads,
    Flatbreads,
    Soup,
    Pastas,
    SidePairings,
    // Beverages,
  }
}
</script>

<style>
.menu {
  background-color: #07070f;
  color: #ced0cf;

  display: grid;
  place-items: center;
  width: 100vw;
}
</style>
