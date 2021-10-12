<template>
  <div id="copyright">
    <span>
      <!--<font-awesome-icon :icon="['fas', 'copyright']" />-->
      &#169; {{ year }} {{ company }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  props: {
    company: String,
  },
  computed: {
    year: () => {
      return new Date().getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#copyright {
  flex-grow: 1;
}
</style>
