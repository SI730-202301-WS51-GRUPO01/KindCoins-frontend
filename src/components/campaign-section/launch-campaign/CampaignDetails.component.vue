<template>
  <div>
    <!-- Wrapper Card -->
    <Card class="wrapper-card">
      <template #title>
        <div class="p-text-center">
          <h3>Vista previa</h3>
        </div>
      </template>

      <template #content>
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

        <!-- Third Part -->
        <Button label="Publish" class="publish-button" />
      </template>
    </Card>
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
.wrapper-card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
  padding: 20px;
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
  top: -50px;
  margin: auto;
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
  width: 40%;
  margin: auto;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: gold;
  color: black;
  font-weight: bold;
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
