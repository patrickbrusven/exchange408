<template>
  <div class="landingPage">
    <LandingPage />
  </div>
  <SectionBreak />
  <CarouselComponent />
  <sectionBreak />
  <LocationComponent />

</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/homeComponents/LandingPage.vue'
import LocationComponent from '@/components/homeComponents/LocationComponent.vue'
import CarouselComponent from '@/components/homeComponents/CarComponent.vue'
import SectionBreak from '@/components/assetComponents/SectionBreak.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    CarouselComponent,
    LocationComponent,
    SectionBreak,
  }
}
</script>

<style>

.landingPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.landingPage .tavernName {
  font-size: 30px;
}

.landingPage .tavern {
  font-size: 27px;
}

</style>
