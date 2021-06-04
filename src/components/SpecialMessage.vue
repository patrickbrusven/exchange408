<template>
  <div v-if="message" id="message" class="messageWrapper mediumText">
    <p>{{ message }}</p>
    <!-- <button @click="hideMessage" type="button">Hide</button> -->
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
    // hideMessage() {
    //   const message = document.querySelector('#message');
    //   message.classList.toggle('hideMessage');
    // },

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
  z-index: 200;
}

.hideMessage {
  display: none;
}

p {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  margin: auto;

  z-index: 200;
}

button {
  z-index: 200;
  cursor: pointer;
}

</style>
