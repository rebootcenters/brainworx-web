<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0px;
  background-image: url("~@/assets/sunset-boy.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #28667f;
  margin: 0px;
  min-height: 100vh;
}
#body {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
@media (max-width: 988px) {
  #body {
    margin-top: 0px;
  }
}
.section {
  width: 1100px;
  margin: 0px auto;
}
#page {
  flex-grow: 1;
  background-color: white;
}
</style>
