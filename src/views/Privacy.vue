<template>
  <div id="privacy-policy">
    <div id="doc-container">
      <privacy-doc />
    </div>
  </div>
</template>

<script>
import PrivacyDoc from "@/components/PrivacyDoc.vue";

export default {
  name: "Privacy",
  components: {
    PrivacyDoc,
  },
};
</script>

<style>
#privacy-policy {
  background-color: #707070;
}
#doc-container {
  width: 830px;
  margin: 10px auto;
  padding: 0px 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 2px;
  background-color: white;
}
@media only screen and (max-width: 890px) {
  #doc-container {
    margin: 0px;
    width: 100%;
  }
}
@media only screen and (max-width: 700px) {
  #doc-container {
    padding: 0px;
  }
}
</style>
