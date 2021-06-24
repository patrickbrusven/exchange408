<template lang="html">
<div class="contact">
    <img class="darkLogo" src="@/assets/408LogoDarkBG.svg" alt="main logo" width="200" height="100">
  <AboutContent heading="WALK-UP WINDOW"
                content='WANT TO TAKE OUR FOOD TO THE PARK OR BACK TO THE OFFICE? WE ADDED A WALK-UP WINDOW JUST FOR YOU! SINCE OUR TAVERN IS 21+ ON THE INSIDE, WE WANTED THE FAMILIES OF WINDSOR TO STILL BE ABLE TO STOP BY AND GRAB SOMETHING DELICIOUS.'/>
  <h5>WALK-UP WINDOW HOURS</h5>
  <p>STARTING JUNE 21ST - 6AM TO 9AM - BREAKFAST BURRITOS ONLY</p>
  <div class="container">
    <p>STARTING IN SEPTEMBER</p>
    <p>6AM TO 9AM BREAKFAST BURRITOS ONLY</p>
    <p>11AM TO CLOSE - REGULAR MENU AVAILABLE</p>
  </div>

  <AboutContent class="catering"
                heading="CATERING"
                content="WE CATER!! IF YOU LOVE OUR FOOD AND WANT TO CATER YOUR NEXT EVENT, WE CAN DO THAT. FROM A SMALL OFFICE BREAKFAST OPTION, TO A LARGE FAMILY EVENT WE CAN CUSTOMIZE YOUR CATERING OPTION TO FIT YOUR NEEDS. WE ASK FOR A MINIMUN OF 24 HOURS NOTICE - THE MORE NOTICE THE BETTER!"/>
  <h5>CLICK HERE TO CONTACT US ABOUT CATERING YOUR NEXT EVENT</h5>
  <Button />
  <p>RESPONSE TIME ON CATERING REQUESTS IS BETWEEN 2-5 HOURS. PLEASE ENSURE YOU PROVIDE CORRECT CONTACT INFORMATION!</p>
  <AboutContent heading="RENT OUR SPACE"
                content="LOOKING FOR A SMALL VENUE TO USE FOR YOUR NEXT EVENT? 408 IS A GREAT VENUE FOR SMALL PARTIES LOOKING FOR THAT LOCAL VIBE."/>
  <ul class="rentList">
    <li>AVAILABLE TO PARTIES 21+ ONLY</li>
    <li>RENTED SPACE INCLUDE THE INSIDE TAVERN, AND THE OUTSIDE PATIO. BOTH SPACES MUST BE RENTED TOGETHER AND CANNOT BE SEPERATED.</li>
  </ul>
  <h5>CLICK ON THE BUTTON BELOW TO CONTACT US ABOUT RENTING OUR SPACE. PLEASE INCLUDE HOW MANY PEOPLE WILL BE IN ATTENDANCE DURING YOUR EVENT, WHAT FOOD DRINK PREFERENCES YOU ARE LOOKING FOR, AND THE DATE OF YOUR EVENT. WE WILL PROVIDE CUSTOMIZATION OPTIONS AND PRICING INFO.</h5>
  <Button />
  <p>RESPONSE TIME ON EVENT REQUESTS IS 24 HOURS OR LESS. PLEASE ENSURE YOU PROVIDE CORRECT CONTACT INFORMATION!</p>
  <AboutContent heading="HOURS"
                content="6AM TO 9AM BREAKFAST BURRITOS AT OUR WALK-UP WINDOW"/>
  <h4>11AM TO 11PM INSIDE, PATIO, WALK-UP & DELIVERY</h4>
  <h5>408 MAIN STREET, WINDSOR CO LOCATED IN DOWNTOWN WINDSOR RIGHT NEXT TO CHIMNEY PARK</h5>
  <h5>PARKING AVAILABLE OUT FRONT AND IN THE BACK BEHIND OUR PATIO</h5>
</div>

</template>

<script>
import AboutContent from '@/components/aboutComponents/AboutContent.vue'
import Button from '@/components/Button.vue'


export default {
  name: 'Contact',
  components: {
    AboutContent,
    Button,
  }
}
</script>

<style lang="css" scoped>

.darkLogo {
  width: 77%;
  height: auto;
  max-width: 640px;
  margin: -50px;
  margin-bottom: -70px;
}

.contact {
  /* background-color: #07070f; */
  color: #ced0cf;
  padding-top: 10px;
  align-self: center;

  display: grid;
  /* grid-template-columns: 1fr; */
  place-items: center;
  width: 100vw;
  max-width: 900px;

  text-align: center;
}

.catering p {
  color: #f7a41d;
}

h5 {
  font-size: 20px;
}

p {
  font-size: 12px;
  color: #f7a41d;
  margin: 10px;
}

.container p {
  margin: 3px;
}

.rentList {
  width: 75vw;
  margin-bottom: 15px;
}

.rentList li {
  list-style: disc outside;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
}


</style>
