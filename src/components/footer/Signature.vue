<template>
  <div id="devjockey-signature">
    <span><span>Powered by</span> <DevJockey size="1.3em"/></span>
  </div>
</template>

<script>
import DevJockey from '../shared/DevJockey.vue'

export default {
  name: 'Signature',
  components: {
    DevJockey
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave');
#devjockey-signature {
  display: flex;
  text-align: right;
}
</style>
