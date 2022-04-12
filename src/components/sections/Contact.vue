<template>
  <div class="contact">
    <div class="section">
      <h1>Contact ReBoot to Become a Certified ReBoot Brainworx Center.</h1>
      <div id="contact-info">
        <div class="contact-card">
          <font-awesome-icon :icon="['fas', 'phone']" size="5x" />
          <div class="info">929.437.4325</div>
        </div>
        <div class="contact-card">
          <font-awesome-icon :icon="['fas', 'envelope']" size="5x" />
          <div class="info">info@rebootcenters.org</div>
        </div>
        <div class="contact-card">
          <font-awesome-icon :icon="['fas', 'map-pin']" size="5x" />
          <div class="info">Ephraim, Utah</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  background-color: #707070;
  padding: 100px;
  color: white;
  display: flex;
  justify-content: center;
}
#contact-info {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20px 20px;
}
.contact-card {
  background: linear-gradient(135deg, #5389a3, #084054);
  color: white;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
.contact-card .info {
  padding-top: 30px;
}
</style>
