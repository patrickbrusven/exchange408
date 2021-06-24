<template>
  <div class="appContainer">
    <picture>
      <source srcset="@/assets/trainLRG.jpg"
      media="(min-width: 1024px)">
      <source srcset="@/assets/trainMED.jpg"
      media="(min-width: 640px)">
      <source srcset="@/assets/trainSM.jpg">
      <img class="trainBackground hidden" src="@/assets/trainMED.jpg" alt="train on railroad tracks"/>
    </picture>
    <SpecialMessage />
      <Navigation />
      <router-view />
    <FooterComponent />
  </div>
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

    watch: {
      '$route' () {
        if (this.$route.path === '/' || this.$route.path === '/location') {
          const trainBackground = document.querySelector('.trainBackground');
          trainBackground.style.display = "none";
        }
        else {
          const trainBackground = document.querySelector('.trainBackground');
          trainBackground.style.display = "block";
        }
      }
    },
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
.thinner {
  font-weight: 100;
}

.bolder {
  font-weight: 600;
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

.trainBackground {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100vh;
  /* height: 100%; */
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
  /* opacity: .62; */
  z-index: -2;
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
