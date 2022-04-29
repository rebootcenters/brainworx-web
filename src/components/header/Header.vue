<template>
  <div>
    <header id="header">
      <router-link id="header-left" to="/">
        <div id="logo-container">
          <site-logo :logo-size="logoSize" />
        </div>
        <div>
          <div class="company">ReBoot Brainworx</div>
          <div class="tagline">
            The app that's revolutionizing the mental health industry!
          </div>
        </div>
      </router-link>
      <div id="header-right">
        <router-link to="/#register-form">
          <button class="action-btn">
            Become a Brainworx Certified Treatment Center
          </button>
        </router-link>
      </div>
    </header>
    <div id="header-placeholder"></div>
  </div>
</template>

<script>
import SiteLogo from "@/components/header/SiteLogo.vue";

export default {
  name: "Header",
  components: {
    SiteLogo,
  },
  data: function () {
    return {
      logoSize: window.innerWidth > 988 ? 75 : 200,
    };
  },
  mounted() {
    window.addEventListener("resize", this.setLogoSize);
  },
  unmounted() {
    window.removeEventListener("resize", this.setLogoSize);
  },
  methods: {
    setLogoSize() {
      this.logoSize = window.innerWidth > 988 ? 75 : 200;
    },
  },
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  background: linear-gradient(90deg, #357590, #195369);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}
#header-placeholder {
  height: 105px;
}
#header-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
}
#header-right {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
#logo-container {
  display: flex;
  align-content: center;
}
.company,
.tagline {
  text-align: left;
  line-height: 1;
  padding: 3px;
}
.company {
  font-size: 2em;
  font-weight: 700;
}
a {
  text-decoration: none;
}
.action-btn {
  margin: 15px;
  padding: 0px 30px;
  min-height: 50px;
  background-color: #28667f;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 1.2em;
  color: white;
}
.action-btn:hover {
  background-color: #195369;
  cursor: pointer;
}
.action-btn:active {
  background-color: #084054;
}
@media (max-width: 1013px) {
  #header-placeholder {
    height: 185px;
  }
}
@media (max-width: 988px) {
  #header {
    position: relative;
  }
  #header-placeholder {
    height: 0px;
  }
  #header-left {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  #header-left .company,
  #header-left .tagline {
    text-align: center;
  }
  #header-left .company {
    font-size: 2.5em;
    padding-bottom: 5px;
  }
  #header-right {
    padding: 20px;
  }
  #header-right .action-btn {
    padding: 5px 20px;
  }
}
</style>
