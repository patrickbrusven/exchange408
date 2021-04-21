<template>
  <div id="message" class="messageWrapper mediumText">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'SpecialMessage',

  data() {
    return {
      message: '',
    }
  },

  methods: {
    getMessage() {
      var comp = this;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
          var messageData = JSON.parse(xhr.responseText);
          var messageValues = Object.values(messageData);
          comp.message = messageValues[0];
        }
      }
      xhr.open('GET', 'message.json');
      xhr.send();
    }
  },

  created() {
    this.message = this.getMessage();
  }
}
</script>

<style scoped>
.messageWrapper {
  width: 100vw;
  color: #f0f0ec;

  height: min-content;
  background-color: grey;
}

p {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  margin: auto;
}

</style>
