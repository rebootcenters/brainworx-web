<template>
  <div id="home">
    <div class="image-section">
      <div class="grey-mask">
        <h1>ReBoot Brainworx</h1>
        <h2>The app that's revolutionizing the mental health industry!</h2>
        <router-link to="/#register-form">
          <button class="action-btn">
            Become a Brainworx Certified Treatment Center
          </button>
        </router-link>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<style scoped>
.image-section {
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("~@/assets/sunset-boy.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.grey-mask {
  background-color: rgba(40, 102, 127, 0.5);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.action-btn {
  width: 50%;
  min-height: 50px;
  margin: 40px auto;
  background: none;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 1.2em;
  color: white;
}
.action-btn:hover {
  background-color: rgba(40, 102, 127, 0.4);
  cursor: pointer;
}
.action-btn:active {
  background-color: rgba(40, 102, 127, 0.6);
}
</style>
