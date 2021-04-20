<template>
  <div class="sectionDivider">
    <div class="filler1"></div>
    <div class="filler2"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionBreak'
}
</script>

<style scoped>
.sectionDivider {
  width: 100vw;
}
.filler1 {
  background-color: #d8c9a6;
  height: 10px;
}

.filler2 {
  background-color: grey;
  height: 10px;
  margin-top: 2px;
}

@media screen and (min-width: 900px){
  .sectionDivider {
    width: 900px;
    margin: auto;
  }
}
</style>
