<template>
  <div id="register-section">
    <h1>Become Brainworx Certified</h1>
    <form
      id="register-form"
      @submit="submitted = true"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeym42cU4xlqD-xp6Ne2A5387Jd8Z7ey0G5MQTqdNLUZvUPmg/formResponse"
      method="post"
      target="hidden-iframe"
    >
      <h1>Register today</h1>
      <input type="text" name="entry.1240030835" placeholder="Name" required />
      <input type="email" name="entry.631781054" placeholder="Email" required />
      <input
        type="text"
        name="entry.1069984566"
        placeholder="Phone (Optional)"
      />
      <input id="submit-btn" type="submit" />
    </form>
    <iframe name="hidden-iframe" id="hidden-iframe"></iframe>
    <h1 v-if="submitted">Thank you for your response!</h1>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data: function () {
    return {
      submitted: false,
    };
  },
};
</script>

<style scoped>
#register-section {
  background-color: #002b3d;
  color: white;
  padding: 30px;
}
#register-form h1 {
  margin: 0px 0px 20px;
}
#register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 50%;
  margin: auto;
}
#register-form input {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 400px;
  font-size: 16px;
  font-weight: 500;
}
#register-form #submit-btn {
  background-color: #499459;
  color: white;
  width: 420px;
}
iframe#hidden-iframe {
  display: none;
}
</style>
