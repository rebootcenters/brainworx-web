<template>
  <footer>
    <div id="footer">
      <Copyright company="ReBoot Brainworx LLC" />
    </div>
  </footer>
</template>

<script>
import Copyright from "./Copyright.vue";

export default {
  name: "Footer",
  components: {
    Copyright,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  background-color: #28667f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 15px;
  color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
}
.footer-section {
  width: 300px;
  max-width: 33%;
}
#logo-container {
  flex-grow: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 120px;
}
.social-media-container {
  position: absolute;
  display: flex;
}
.social-media-container svg {
  padding: 5px;
  color: #cfe0d0;
}
</style>
