<template>
  <div class="banner">
    <nav class="mainNav">
      <div @click='onClickLogo' class="logoNav">
        <router-link to="/">
          <h1>EXCHANGE</h1>
        </router-link>
      </div>
      <ul @click='onClickLogo' class="navLinks mediumText">
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/menu">Menu</router-link>
        </li>
        <li>
          <router-link to="/OrderOnline">Order Online</router-link>
        </li>
      </ul>
      <div @click='onClickBurger' class="navBurger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navigation',

  methods: {
    onClickBurger() {
      const burger = document.querySelector('.navBurger');
      const nav = document.querySelector('.navLinks');
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    },

    onClickLogo() {
      const burger = document.querySelector('.navBurger');
      const nav = document.querySelector('.navLinks');
      if( nav.classList.contains('nav-active')) {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
      }
    },
  },

}

</script>

<style scoped>
/* =================================
  Navigation
==================================== */

.banner {
  position: sticky;
  top: 0;

  width: 100vw;
  background-color: #d8c9a6;
  z-index: 99;
}


.mainNav {
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  height: min-content;
  background-color: #d8c9a6;
}

.logoNav {
  position: relative;
  letter-spacing: 7px;
  padding-top: 8px;
  padding-bottom: 5px;
  z-index: 101;
}

h1 {
  font-size: 26px;
}

.navLinks {
  position: absolute;
  list-style-type: none;
  height: min-content;
  background-color: #d8c9a6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  opacity: 0;
  bottom: 41px;

  transition: .45s ease-in;
  z-index: 100;
}

.navLinks li {
  z-index: 100;
}

.navLinks a {
  padding: 13px 28px;
  letter-spacing: 1px;
  display: block;
  z-index: 100;
}

.navBurger {
  display: block;
  cursor: pointer;
}

.navBurger div {
  width: 25px;
  height: 3px;
  background-color: #4a4a4a;
  margin: 5px;
  transition: all 0.3s ease-in;
}

.nav-active {
  opacity: 1;
  transform: translateY(125%);
  transition: opacity .45s ease-in;
}

/* ------ buger-----------*/

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px,6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px,-6px);
}

/* =================================
 nav media queries
==================================== */

@media screen and (min-width:768px){

  .navLinks {
    position: relative;
    transform: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 35%;
    bottom: 0;
    margin-top: 0px;
    opacity: 1;
  }

  .navLinks a {
    padding: 10px 10px;
  }

  .navBurger {
    display: none;
  }
}

@media screen and (min-width:900px){
  .mainNav {
    width: 900px;
    margin: auto;
    justify-content: space-between;
  }

  .logoNav {
    margin-left: 10px;
  }
}

</style>
