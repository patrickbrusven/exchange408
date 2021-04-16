<template>
  <div class="divider">
    <div class="wrapper">
      <div class="leftSmallPipe"></div>
      <h4>{{ msg }}</h4>
      <div class="rightSmallPipe"></div>
    </div>
    <div class="longBar"></div>
    <div class="block1"></div>
    <div class="block2"></div>
  </div>
</template>

<script>
export default {
  name: 'dividerComponent',
  props: {
    msg: String,
  }
}
</script>

<style scoped>
.leftSmallPipe,
.rightSmallPipe {
  background-color: #ced0cf;
  height: 100%;
  width: 100%;
}

.longBar,
.block1,
.block2 {
  background-color: #a48950;
  height: 5px;
}

.longBar {
  width: 100%;
}

.block1,
.block2 {
  width: 100%;
}

.divider {
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto 5px 5px;
  grid-column-gap: 5px;
  grid-template-rows: min-content;
  place-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.wrapper {
  display: grid;
  grid-template-columns: 2px max-content 2px;
  grid-column-gap: 2px;
}
</style>
