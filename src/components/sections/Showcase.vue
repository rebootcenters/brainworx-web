<template>
  <div class="showcase section">
    <div class="module background right secondary">
      <div class="text">
        <h1>
          Schedule your client's Brain Week, perform assessments, assign daily
          homework, and see all the information you need to help your client
          heal!
        </h1>
      </div>
      <div class="app-wrapper">
        <div class="app">
          <video width="320" autoplay muted loop>
            <source :src="brainWeekAssessmentsVideo" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div class="module background left primary first">
      <div class="text">
        <h1>
          Register clients directly linked to your account. Group your clients
          how you see fit.
        </h1>
      </div>
      <div class="app-wrapper">
        <div class="app">
          <video width="320" autoplay muted loop>
            <source :src="groupShareVideo" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video1 from "@/assets/showcase/group_share.mp4";
import Video2 from "@/assets/showcase/brainweek_assessments.mp4";

export default {
  name: "Showcase",
  data: function () {
    return {
      groupShareVideo: Video1,
      brainWeekAssessmentsVideo: Video2,
    };
  },
};
</script>

<style scoped>
.showcase.section {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.module {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.module.left {
  flex-flow: row wrap;
}
.module.right {
  flex-flow: row-reverse wrap;
}
.module.background {
  position: relative;
  color: white;
}
.module.background.primary:before {
  background: linear-gradient(210deg, rgba(83, 137, 163, 0.4), #084054);
}
.module.background.secondary:before {
  background: linear-gradient(150deg, rgba(91, 182, 112, 0.4), #33633c);
}
.module.background:before {
  content: "";
  position: absolute;
  width: 400%;
  height: 800px;
  top: -200px;
  z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 4px 2px;
}
.module.background.left:before {
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
.module.background.right:before {
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
.module.background.first:before {
  height: 900px;
  top: -350px;
}
.module .text {
  width: 400px;
}
.app-wrapper {
  margin: 40px;
  border: 5px solid rgb(50, 50, 50);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 2px;
}
.app {
  border-radius: 45px;
  overflow: hidden;
  border: 15px solid black;
}
.app video {
  margin-bottom: -4px;
  border-radius: 30px;
}
</style>
