<template lang="html">
  <section id="location" class="locationSection">
    <div class="location">
      <HoursComponent heading="HOURS"
                      content="6AM TO 9AM"
                      contentTwo="BREAKFAST BURRITOS AT"
                      contentThree="OUR WALK-UP WINDOW"/>
      <HoursComponent content="11AM TO 11PM"
                      contentTwo="INSIDE, PATIO, & WALK-UP WINDOW"
                      />
      <address class="address mediumText">
        <HoursComponent heading="LOCATION"
                        content="408 MAIN STREET, WINDSOR CO" />
        <p>Located in Downtown Windsor</p>
        <p>Parking available out front and in back behind our patio</p>
      </address>
      <div id="map">
        <img src="@/assets/windsorMap.png" alt="screenshot of google maps image with The 408 Exchange pinned"/>
      </div>
      <img class="logo" src="@/assets/408LogoLightBG.svg" alt="main logo" width="250" height="150">
    </div>
    <aside class="social">
      <div class="socialIcons">
        <A href="https://www.instagram.com/408exchangewindsor/" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/instagram.svg" alt="instagram logo" width="25" height="25">
        </A>
        <A href="https://www.facebook.com/the408exchangewindsor/" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/facebook.svg" alt="facebook logo" width="25" height="25">
        </A>
      </div>
    </aside>
  </section>
</template>

<script>
import HoursComponent from '@/components/homeComponents/HoursComponent.vue'
export default {
  name: 'LocationComponent',
  components: {
    HoursComponent,
  }
}
</script>

<style lang="css" scoped>
.uppercase p {
  text-transform: capitalize;
}
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
