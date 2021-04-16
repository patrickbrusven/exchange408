<template>
  <div class="container">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation,
  }
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

.container {
  display: flex;
  flex-direction: column;
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
