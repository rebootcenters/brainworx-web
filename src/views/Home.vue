<template>
  <div id="home">
    <showcase />
    <testimonials v-if="false" />
    <contact />
    <router-view name="RegisterForm" />
    <register-form />
  </div>
</template>

<script>
import Testimonials from "@/components/sections/Testimonials.vue";
import Showcase from "@/components/sections/Showcase.vue";
import Contact from "@/components/sections/Contact.vue";
import RegisterForm from "@/components/sections/RegisterForm.vue";

export default {
  name: "Home",
  components: {
    Testimonials,
    Showcase,
    Contact,
    RegisterForm,
  },
};
</script>

<style>
#home {
  text-align: center;
  background-image: url("~@/assets/sunset-boy.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.section {
  width: 1100px;
  margin: 0px auto;
}
</style>
