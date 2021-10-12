import { createApp } from "vue";
import App from "./App.vue";
import FontAwesomeIcon from "@/utilities/fontawesome-icon";
import router from "./router";

createApp(App, {
  provide: {
    primary: "#28667f",
    seconday: "#499459",
    surface: "#707070",
  },
})
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
