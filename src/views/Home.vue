<template>
  <div id="home">
    <Footer />
    <div id="body">
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
import Contact from "@/components/sections/Contact.vue";
import RegisterForm from "@/components/sections/RegisterForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Testimonials,
    Showcase,
    Contact,
    RegisterForm,
  },
};
</script>

<style>
#home {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
}
body {
  margin: 0px;
  background-image: url("~@/assets/sunset-boy.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
