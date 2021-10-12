<template>
  <div class="site-logo">
    <img :src="require('@/assets/brainworx-icon.jpeg')" :width="logoSize" />
  </div>
</template>

<script>
export default {
  name: "SiteLogo",
  props: {
    logoSize: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-logo {
  display: flex;
  align-items: center;
  padding: 5px 15px;
}
</style>
