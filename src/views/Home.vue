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

<style scoped>

.landingPage {
  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100%;

  overflow-x: hidden;
}

.landingPage .tavernName {
  font-size: 30px;
}

.landingPage .tavern {
  font-size: 27px;
}

</style>
