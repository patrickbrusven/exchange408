<template lang="html">
  <picture>
    <source srcset="@/assets/logoOnBrickLarge.jpg"
    media="(min-width: 1024px)">
    <source srcset="@/assets/logoOnBrickMed.jpg"
    media="(min-width: 640px)">
    <source srcset="@/assets/logoOnBrickSmall.jpg">
    <img class="backgroundImage" src="@/assets/logoOnBrickMed.jpg" alt="side of restaurant building brick facade"/>
  </picture>
  <img class="landingPageLogo" src="@/assets/408LogoLightBG.svg" alt="main logo" width="500" height="500">
</template>

<script>
export default {
  name: 'LandingPage',
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
  position: relative;
  left: 6px;
  width: 132%;
  max-width: 750px;
  /* filter: drop-shadow(-6px 0px 4px rgba(97, 97, 97, .9)); */
  filter: drop-shadow(-6px 0px 6px rgba(240, 240, 236, 1));
}
</style>
