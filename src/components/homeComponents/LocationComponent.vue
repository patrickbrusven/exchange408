<template lang="html">
  <section class="locationSection">
    <div class="location">
      <h3 class="largeText">Location</h3>
      <address class="address mediumText">
        <h3>THE 408 EXCHANGE</h3>
        <p>408 Main St</p>
        <p>Windsor, CO 80550</p>
      </address>
      <div id="map">
        <img src="@/assets/windsorMap.png" alt="screenshot of google maps image with The 408 Exchange pinned"/>
      </div>
      <img class="logo" src="@/assets/logolightbg.svg" alt="main logo" width="250" height="150">
      <!-- <LogoComponent theme="inherit" /> -->
    </div>
    <aside class="social">
      <div class="socialIcons">
        <a href="#">
          <img src="@/assets/instagram.svg" alt="instagram logo" width="25" height="25">
          <img src="@/assets/facebook.svg" alt="facebook logo" width="25" height="25">
          <img src="@/assets/twitter.svg" alt="twitter logo" width="25" height="25">
        </a>
      </div>
    </aside>
  </section>
</template>

<script>
// import LogoComponent from '@/components/assetComponents/LogoComponent.vue'
export default {
  name: 'LocationComponent',
  components: {
    // LogoComponent,
  }
}
</script>

<style lang="css" scoped>
.locationSection {
  display: flex;
  flex-direction: column;
  position: relative;
}

.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.location h3 {
  margin-top: 15px;
}

.address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.address h3 {
  letter-spacing: 6px;
  margin: 15px;
}

.address {
  margin: 10px;
  font-style: normal;
}

#map {
  height: 300px;
  width: 100vw;
  max-width: 899px;
  box-shadow: 0 0 0 3px rgba(216, 201, 166, 0.8);
  margin-top: 10px;
}

#map img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.logo {
  width: 90%;
  max-width: 500px;
  height: auto;
}

.social {
  display: flex;
  justify-content: center;
  margin-top: -25px;
  margin-bottom: 25px;
}

.socialIcons img:hover {
  opacity: .5;
  cursor: pointer;
}

a img {
  margin: 2px;
}

@media (hover: none) {
  .socialIcons img:hover {
    opacity: 1;
  }
}

@media screen and (min-width: 900px){
  #map {
    /* width: 899px; */
    margin: auto;
  }
}
</style>
