<template lang="html">
  <div class="wrapper">
    <div class="container">
      <div class="customLogo">
        <div class="yellowLine verticalRightUpper"></div>
        <div class="yellowLine verticalRightLower"></div>
        <div class="yellowLine horizontalTop"></div>
        <h1 :style="{ color: theme }" class="tavernName largeText">THE 408 EXCHANGE</h1>
        <h2 :style="{ color: theme }" class="tavern mediumText">TAVERN</h2>
        <div class="yellowLine verticalLeftUpper"></div>
        <div class="yellowLine verticalLeftLower"></div>
        <div class="yellowLine horizontalBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent',
  props: {
    theme: String,
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}

.container {
  align-self: center;
}

.customLogo {
  padding: 30px;
  display: grid;
  grid-template-rows: 3px 1fr 3px 1fr 3px 1fr 3px;
  grid-auto-columns: 1fr 3px 5fr 3px 1.1fr;
}

.yellowLine {
  background-color: #f8a601;
  width: 100%;
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
