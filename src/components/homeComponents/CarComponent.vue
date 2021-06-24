<template>
  <section id="about" class="aboutSection">
    <div @touchstart="handleSwipeStart" @touchend="handleSwipeEnd" class="carousel">
      <div class="slider">
        <div class="slide current">
          <picture class="lozad">
            <source srcset="@/assets/carousel/patioLRG.jpg"
            media="(min-width: 900px)">
            <source srcset="@/assets/carousel/patioMED.jpg"
            media="(min-width: 640px)">
            <source srcset="@/assets/carousel/patioSM.jpg">
            <img class="slideBackgroundImage" src="@/assets/carousel/patioMED.jpg" alt="patio setting on a sunny day"/>
          </picture>
          <div class="content">
            <!-- <h1 class="largeText">Fresh and Local</h1> -->
            <p>Welcome to your local oasis right by the lake. Come for a handcrafted cocktail or a signature dish, stay for the local vibes and conversation with good friends.</p>
          </div>
        </div>
        <div class="slide">
          <picture class="lozad">
            <source srcset="@/assets/carousel/rubLRG.jpg"
            media="(min-width: 900px)">
            <source srcset="@/assets/carousel/rubMED.jpg"
            media="(min-width: 640px)">
            <source srcset="@/assets/carousel/rubSM.jpg">
            <img class="slideBackgroundImage" src="@/assets/carousel/rubMED.jpg" alt="meat sliced after being grilled with a perfect rub"/>
          </picture>
          <div class="content">
            <!-- <h1 class="largeText">Fresh and Local</h1> -->
            <p>We handcraft our signature rub, marinate and smoke our meat in-house for your tastebud’s enjoyment.</p>
          </div>
        </div>
        <div class="slide">
          <picture class="lozad">
            <source srcset="@/assets/carousel/saladLRG.jpg"
            media="(min-width: 900px)">
            <source srcset="@/assets/carousel/saladMED.jpg"
            media="(min-width: 640px)">
            <source srcset="@/assets/carousel/saladSM.jpg">
            <img class="slideBackgroundImage" src="@/assets/carousel/saladMED.jpg" alt="a delicious looking salad"/>
          </picture>
          <div class="content">
            <!-- <h1 class="largeText">Fresh and Local</h1> -->
            <p>Honest, inventive and thoughtful dishes that are not your typical "bar food". From carefully crafted gyros and sandwiches, to wings, salads and even our made-from-scratch soup, we have food for everyone including delicious gluten free options.</p>
          </div>
        </div>
        <div class="slide">
          <picture class="lozad">
            <source srcset="@/assets/carousel/drinkLRG.jpg"
            media="(min-width: 900px)">
            <source srcset="@/assets/carousel/drinkMED.jpg"
            media="(min-width: 640px)">
            <source srcset="@/assets/carousel/drinkSM.jpg">
            <img class="slideBackgroundImage" src="@/assets/carousel/drinkMED.jpg" alt="artisan cocktail"/>
          </picture>
          <div class="content">
            <!-- <h1 class="largeText">We Cater</h1> -->
            <p>Enjoy our handcrafted cocktails, a glass of wine or a beer. From our twist on an Old Fashioned to a drink that takes you back to vacation at the beach.</p>
          </div>
        </div>
        <div class="slide">
          <picture class="lozad">
            <source srcset="@/assets/carousel/breakfastBurritoLRG.jpg"
            media="(min-width: 900px)">
            <source srcset="@/assets/carousel/breakfastBurritoMED.jpg"
            media="(min-width: 640px)">
            <source srcset="@/assets/carousel/breakfastBurritoSM.jpg">
            <img class="slideBackgroundImage" src="@/assets/carousel/breakfastBurritoMED.jpg" alt="mouth watering breakfast burrito"/>
          </picture>
          <div class="content">
            <!-- <h1 class="largeText">Options for any dietary restrictions</h1> -->
            <p>Handcrafted breakfast burritos available from 6a.m. to 9a.m. 7 days a week, through our walk-up window.</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click='prevSlide' id="prev">
          <img src="@/assets/arrowLeft.svg" alt="Left arrow" width="15" height="15">
        </button>
        <button @click='nextSlide' id="next">
          <img src="@/assets/arrowRight.svg" alt="Right arrow" width="15" height="15">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarouselComponent',

  data() {
    return {
      touchesStartX: '',
    }
  },

  methods: {
    nextSlide() {
      const slides = document.querySelectorAll('.slide');
      const current = document.querySelector('.current');
      if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current');
      }
      current.classList.remove('current');
    },

    prevSlide() {
      const slides = document.querySelectorAll('.slide');
      const current = document.querySelector('.current');
      if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
      } else {
        slides[slides.length - 1].classList.add('current');
      }
      current.classList.remove('current');
    },

    handleSwipeStart(e) {
      const touchesStartX = e.touches[0].clientX;
      this.touchesStartX = touchesStartX;
    },

    handleSwipeEnd(e) {
      const touchesEndX = e.changedTouches[0].clientX;
      const change = this.touchesStartX - touchesEndX;
      if(change < -50) {
        this.prevSlide();
      }
      if (change > 50) {
        this.nextSlide();
      }
    }
  }
}
</script>

<style scoped>
.aboutSection {
  position: relative;
  height: 70vh;
}

.carousel {
  position: relative;
  height: 65vh;
  width: 100vw;
  top: 2.5vh;
}

.slider {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.slide.current {
  opacity: 1;
}

.slide .content {
  position: absolute;
  bottom: -300px;
  width: 100%;
  left: 0;
  padding: 14px;
  opacity: 0;
  background-color: rgba(240, 240, 236, 0.8);
  border-left: none;
  border-right: none;
  border-bottom: none;
}

@media (min-width: 350px) {
  .slide .content {
    padding: 35px;
  }
}

@media (min-width: 600px) {
  .slide .content {
    left: 0;
    width: 600px;
  }
}

.slide .content h1 {
  margin-bottom: 10px;
}

.slide.current .content {
  opacity: 1;
  transform: translateY(-300px);
  transition: all 0.7s ease-in-out 0.3s;
}

button#next,
button#prev {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f0f0ec;
  z-index: 98;
}

button#next {
  right: 15px;
}

button#prev {
  left: 15px;
}


.buttons button {
  border: 2px solid #f0f0ec;
  color: #f0f0ec;
  cursor: pointer;
  padding: 13px 13px;
  border-radius: 50%;
  outline: none;
}

.buttons button:hover {
  border: 2px solid #f8a601;
}

@media (hover: none) {
  .buttons button:hover {
    border: 2px solid #f0f0ec;
  }
}

.slideBackgroundImage {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
}

.slide {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (min-width: 900px) {
  .carousel {
    width: 900px;
    margin: auto;
  }
}
</style>
