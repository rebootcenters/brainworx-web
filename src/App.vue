<template>
  <div id="app">
    <Footer />
    <div id="body">
      <!--<home />-->
      <showcase />
      <testimonials v-if="false" />
      <contact />
      <register-form />
      <router-view name="RegisterForm" />
    </div>
    <Header />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import Testimonials from "@/components/sections/Testimonials.vue";
import Showcase from "@/components/sections/Showcase.vue";
//import Home from "@/components/sections/Home.vue";
import Contact from "@/components/sections/Contact.vue";
import RegisterForm from "@/components/sections/RegisterForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Testimonials,
    Showcase,
    //Home,
    Contact,
    RegisterForm,
  },
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
  text-align: center;
  color: #28667f;
  margin: 0px;
  display: flex;
  flex-direction: column-reverse;
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
