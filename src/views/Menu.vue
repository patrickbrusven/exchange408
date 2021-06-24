<template>
  <div class="menu">
    <Breakfast />
    <WhiteLine class="oneColumn" />
    <FirstThings />
    <WhiteLine class="oneColumn" />
    <Sandwiches class="sandwiches" />
    <WhiteLine class="oneColumn" />
    <Gyros />
    <WhiteLine class="oneColumn" />
    <Soup />
    <WhiteLine class="oneColumn" />
    <Salads />
    <WhiteLine class="oneColumn" />
    <Pastas />
    <WhiteLine class="oneColumn" />
    <SidePairings />
    <img class="darkLogo" src="@/assets/408LogoDarkBG.svg" alt="main logo" width="200" height="100">
  </div>
</template>

<script>
import WhiteLine from '@/components/menuComponents/dividerComponents/WhiteLineComponent.vue'
import Breakfast from '@/components/menuComponents/Breakfast.vue'
import FirstThings from '@/components/menuComponents/FirstThings.vue'
import Sandwiches from '@/components/menuComponents/Sandwiches.vue'
import Gyros from '@/components/menuComponents/Gyros.vue'
import Salads from '@/components/menuComponents/Salads.vue'
import Soup from '@/components/menuComponents/Soup.vue'
import Pastas from '@/components/menuComponents/Pastas.vue'
import SidePairings from '@/components/menuComponents/SidePairings.vue'
// import Beverages from '@/components/menuComponents/Beverages.vue'

export default {
  name: 'Menu',
  components: {
    WhiteLine,
    Breakfast,
    FirstThings,
    Sandwiches,
    Gyros,
    Salads,
    Soup,
    Pastas,
    SidePairings,
    // Beverages,
  }
}
</script>

<style>

.menu {
  color: #ced0cf;
  padding-top: 10px;
  align-self: center;

  display: grid;
  place-items: center;
  width: 100vw;
  max-width: 900px;
}

.darkLogo {
  width: 90%;
  height: auto;
  max-width: 640px;
  margin: -20px;
}

@media screen and (min-width:768px) {
  .menu {
    grid-template-columns: 1fr 1fr;
    align-items: self-start;
    justify-items: center;
  }

  .sandwiches {
    grid-column: 1/3;
  }

  .oneColumn {
    display: none;
  }

  .darkLogo {
    grid-column: 1/3;
  }
}
</style>
