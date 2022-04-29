<template>
  <div id="app-body">
    <Footer />
    <div id="page">
      <router-view />
    </div>
    <Header v-if="$route.name == 'Home'" />
    <SlimHeader v-if="$route.name != 'Home'" :title="pageTitle" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import SlimHeader from "@/components/header/SlimHeader.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SlimHeader,
    Footer,
  },
  computed: {
    pageTitle: function () {
      switch (this.$route.name) {
        case "DataRequest":
          return "ReBoot Brainworx - Data Request";
        case "Shop":
          return "Brainworx Shop";
        default:
          return "ReBoot Brainworx";
      }
    },
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #28667f;
  margin: 0px;
}
#app-body {
  display: flex;
  flex-direction: column-reverse;
  min-height: 100vh;
}
#page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  flex-grow: 1;
  background-color: white;
}
.section {
  width: 1100px;
  margin: 0px auto;
}
</style>
