<template lang="html">
  <div class="container">
    <h4>{{ heading }}</h4>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
  props: {
    heading: String,
    content: String,
  }
}
</script>

<style lang="css" scoped>

.container {
  margin: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 90%;
  text-align: center
}

h4 {
  padding: 5px 35px 5px 35px;
  margin: 25px 0px;
  width: max-content;
  font-size: 21px;
  letter-spacing: 3px;
  border: solid 1.5px #f7a41d;
}

.content {
  letter-spacing: 3px;
  margin: 5px;
}

@media screen and (min-width:905px) {
  .container {
    width: 100%;
  }
}

</style>
