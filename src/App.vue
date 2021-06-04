<template>
  <div class="appContainer">
    <SpecialMessage />

    <!-- <div class="routerView"> -->
      <Navigation />
      <router-view />
      <!-- <FooterComponent /> -->
    <!-- </div> -->
    <FooterComponent />
  </div>
  <!-- <FooterComponent /> -->
</template>

<script>
import SpecialMessage from './components/SpecialMessage.vue'
import Navigation from './components/Navigation.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    SpecialMessage,
    Navigation,
    FooterComponent,

  },

    // watch: {
      // '$route' () {
        // if (this.$route.path === '/') {
          // const routerView = document.querySelector('.routerView');
          // const appContainer = document.querySelector('.appContainer');
          // routerView.style.position = "absolute";
          // appContainer.style.height = "300vh";
        // }
        // else {
          // const routerView = document.querySelector('.routerView');
          // const appContainer = document.querySelector('.appContainer');
          // routerView.style.position = "relative";
          // appContainer.style.height = "auto";
          // appContainer.style.min-height = "100vh";
        // }
      // }
    // },
}
</script>

<style>
@font-face {
  font-family: 'Kollektif';
  src: url('./assets/Kollektif.ttf') format('truetype');
  font-display: swap;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kollektif', Helvetica, Tahoma, sans-serif;
  font-weight: 300;
}

body {
  background-color: #f0f0ec;
  color: #4a4a4a;
}

.appContainer {
  position: relative;
  height: auto;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

.routerView {
  /* position: relative; */
  /* min-height: 100vh; */
  /* top: 0; */
}

footer {
  margin-top: auto;
  width: 100vw;
}

a {
  text-decoration: none;
  color: #4a4a4a;
}

li {
  list-style: none;
}

.largeText {
  font-size: 18px;
}

.mediumText {
  font-size: 13px;
}

.smallText {
  font-size: 12px;
}

p {
  font-size: 12px;
}

@media (min-width: 350px) {
  .largeText {
    font-size: 26px;
  }

  .mediumText {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
</style>
