<template lang="html">
  <picture>
    <source srcset="../assets/logoOnBrickLarge.jpg"
    media="(min-width: 1024px)">
    <source srcset="../assets/logoOnBrickMed.jpg"
    media="(min-width: 640px)">
    <source srcset="../assets/logoOnBrickSmall.jpg">
    <img class="backgroundImage" src="../assets/logoOnBrickMed.jpg" alt="side of restaurant building brick facade"/>
  </picture>
  <div class="landingPageContent">
    <div class="customLogo">
      <div class="yellowLine verticalRightUpper"></div>
      <div class="yellowLine verticalRightLower"></div>
      <div class="yellowLine horizontalTop"></div>
      <h1 class="tavernName largeText">THE 408 EXCHANGE</h1>
      <h2 class="tavern mediumText">TAVERN</h2>
      <div class="yellowLine verticalLeftUpper"></div>
      <div class="yellowLine verticalLeftLower"></div>
      <div class="yellowLine horizontalBottom"></div>
    </div>
    <!-- <p class="smallText">Honest Food | Hand Crafted | Local Vibe</p> -->
  </div>

</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style lang="css" scoped>
.backgroundImage {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 92vh;
  width: 100%;
  object-fit: cover;
  opacity: .62;
  z-index: -2;
}

.landingPageContent {
  /* background-color: rgb(240, 240, 236); */
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  padding-bottom: 28px;
}

.landingPageContent p {
  margin-top: -23px;
}

@media screen and (min-width: 900px){
  .backgroundImage {
      width: 900px;
      margin-right: auto;
      margin-left: auto;
    }
}

/* ------ Custom Logo-----------*/
.landingPageContent .customLogo .tavernName {
  text-shadow: 0px 0px 4px #61616191;
}

.landingPageContent .customLogo .tavern {
  text-shadow: 0px 0px 4px #61616191;
}

.customLogo {
  /* background-color: #f0f0ec; */
  padding: 30px;
  display: grid;
  grid-template-rows: 3px 1fr 3px 1fr 3px 1fr 3px;
  grid-auto-columns: 1fr 3px 5fr 3px 1.1fr;
}

.landingPageContent .verticalLeftLower,
.landingPageContent .verticalLeftUpper {
    box-shadow: -3px 2px 4px 0px #61616191;
}

.landingPageContent .verticalRightLower,
.landingPageContent .verticalRightUpper {
  box-shadow: 2px 0px 2px 0px #61616191;
}

.landingPageContent .horizontalTop {
  box-shadow: 3px -3px 2px 0px #6161614a;
}

.landingPageContent .horizontalBottom {
  box-shadow: 1px 3px 2px 1px #6161616e;
}



.yellowLine {
  background-color: #f8a601;
  width: 100%;
  /* box-shadow: 0px 0px 4px #61616191; */
}

.verticalRightUpper {
  grid-column: 4/5;
  grid-row: 1/3;
}

.verticalLeftUpper {
  grid-column: 2/3;
  grid-row: 1/3;
}

.horizontalTop {
  grid-column: 2/5;
  grid-row: 1/2;
}

.horizontalBottom {
  grid-column:2/5;
  grid-row: 7/8;
}

.verticalLeftLower {
  grid-column: 2/3;
  grid-row: 6/8;
}

.verticalRightLower {
  grid-column: 4/5;
  grid-row: 6/8;
}

.tavernName {
  width: max-content;
  grid-column: 1/6;
  grid-row: 4/5;
  letter-spacing: 6px;
  justify-self: center;
}

.tavern {
  grid-column: 3/4;
  grid-row: 5/7;
  justify-self: center;
  align-self: center;
  letter-spacing: 3px;
}
</style>
