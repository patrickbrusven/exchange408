<template>
  <div class="landingPage">
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage
  }
}
</script>

<style scoped>

.landingPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92vh;
}

</style>
