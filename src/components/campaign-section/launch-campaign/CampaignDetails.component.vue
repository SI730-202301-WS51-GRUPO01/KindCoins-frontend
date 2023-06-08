<template>
  <div class="campaign-container">
    <!-- First Part -->
    <transition name="slide-fade">
      <Card class="campaign-card">
        <template #title>
          <div class="p-d-flex p-jc-between">
            <span>Campaign Title</span>
            <img
              class="campaign-image"
              src="public\niñacomiendo.jpg"
              alt="Campaign Image"
            />
          </div>
        </template>

        <template #content>
          <div class="p-d-flex p-jc-between">
            <span>Goal: $1000</span>
            <span>Donors: 100</span>
          </div>

          <ProgressBar
            :value="progressValue"
            class="progress-bar"
          ></ProgressBar>
          <div class="p-d-flex p-jc-between">
            <span>Amount Raised: $500</span>
            <span>Completion: {{ progressValue }}%</span>
          </div>
        </template>
      </Card>
    </transition>

    <!-- Second Part -->
    <transition name="slide-fade">
      <Card class="summary-card">
        <template #title> Campaign Summary </template>

        <template #content>
          <div class="p-d-flex p-jc-between">
            <p>Campaign summary...</p>
            <img
              class="summary-image"
              src="public\niñacomiendo.jpg"
              alt="Campaign Summary Image"
            />
          </div>
        </template>
      </Card>
    </transition>
  </div>
</template>

<script>
import Card from "primevue/card";
import ProgressBar from "primevue/progressbar";
import Button from "primevue/button";

export default {
  components: {
    Card,
    ProgressBar,
    Button,
  },
  data() {
    return {
      progressValue: 50, // example value for the progress bar
    };
  },
};
</script>

<style scoped>
.campaign-container {
  padding: 20px;
  width: 80%;
  /**center the */
  margin: auto;
}

.campaign-card,
.summary-card {
  margin-top: 20px;
  margin-bottom: 20px;
}

.campaign-image {
  object-fit: cover;
  max-height: 400px;
  width: 60%;
  position: relative;
  /* top: 50px; */
  margin: auto;
  margin-bottom: 50px;
}

.summary-image {
  object-fit: cover;
  max-height: 600px;
  width: 100%;
}

.progress-bar {
  transition: width 2s;
}

.publish-button {
  animation: pulse 2s infinite;
}

/* Slide fade animation for the cards */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Pulse animation for the publish button */
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
