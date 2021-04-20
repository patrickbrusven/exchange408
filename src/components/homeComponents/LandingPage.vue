<template lang="html">
  <picture>
    <source srcset="@/assets/logoOnBrickLarge.jpg"
    media="(min-width: 1024px)">
    <source srcset="@/assets/logoOnBrickMed.jpg"
    media="(min-width: 640px)">
    <source srcset="@/assets/logoOnBrickSmall.jpg">
    <img class="backgroundImage" src="@/assets/logoOnBrickMed.jpg" alt="side of restaurant building brick facade"/>
  </picture>
  <img class="landingPageLogo" src="@/assets/logolightbg.svg" alt="main logo" width="500" height="500">
  <!-- <LogoComponent class="landingPageLogo" theme="inherit" /> -->
</template>

<script>
// import LogoComponent from '../assetComponents/LogoComponent.vue'

export default {
  name: 'LandingPage',
  components: {
    // LogoComponent,
  }
}
</script>

<style>
.backgroundImage {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: .62;
  z-index: -2;
}

@media screen and (min-width: 900px){
  .backgroundImage {
      width: 900px;
      margin-right: auto;
      margin-left: auto;
    }
}

.landingPageLogo {
  filter: drop-shadow(-1px 3px 2px rgba(97, 97, 97, .8));
  width: 100%;
  max-width: 750px;
}

/* ------ Custom Logo-----------*/
/* .landingPageLogo .customLogo .tavernName {
  text-shadow: 0px 0px 4px #61616191;
}

.landingPageLogo .customLogo .tavern {
  text-shadow: 0px 0px 4px #61616191;
}


.landingPageLogo .verticalLeftLower,
.landingPageLogo .verticalLeftUpper {
  box-shadow: -3px 2px 4px 0px #61616191;
}

.landingPageLogo .verticalRightLower,
.landingPageLogo .verticalRightUpper {
  box-shadow: 2px 0px 2px 0px #61616191;
}

.landingPageLogo .horizontalTop {
  box-shadow: 3px -3px 2px 0px #6161614a;
}

.landingPageLogo .horizontalBottom {
  box-shadow: 1px 3px 2px 1px #6161616e;
} */
</style>
