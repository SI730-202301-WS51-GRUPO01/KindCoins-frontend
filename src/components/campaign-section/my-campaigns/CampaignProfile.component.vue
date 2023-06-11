<template>
    <div class="m-5">
      <!-- Wrapper Card -->
      <div class="flex pt-5 pb-3">
          <Card class="wrapper-card">
  
          <template #content>
              <!-- First Part -->
              <transition name="slide-fade">
              <Card class="campaign-card">
                  <template #title>
                  <div>
                      <img
                      class="campaign-image"
                      src="https://i.postimg.cc/YS2zVqWF/v-img.png"
                      alt="Campaign Image"
                      />
                      <span class="text-center" style="font-weight: bold"
                      >Alimenta familias en Palestina</span
                      >
                  </div>
                  </template>
  
                  <template #content>
                  <div class="line">
                      <div class="left">
                      <i class="pi pi-heart p-mr-1"></i>
                      <span>Goal: $1000</span>
                      </div>
                      <div class="right">
                      <i class="pi pi-user p-ml-1"></i>
                      <span>Donor: 100</span>
                      </div>
                  </div>
  
                  <ProgressBar
                      :value="progressValue"
                      class="progress-bar"
                  ></ProgressBar>
                  <div class="line">
                      <div class="left">
                      <span>$500 collected</span>
                      </div>
                      <div class="right">
                      <span>Completion: {{ progressValue }}%</span>
                      </div>
                  </div>
                  </template>
              </Card>
              </transition>
  
              <!-- Second Part -->
              <transition name="slide-fade">
              <Card class="summary-card">
                  <template #title>Resumen</template>
  
                  <template #content>
                  <div class="p-d-flex p-jc-between">
                      <h3 class="text-center" style="font-weight: bold">
                      Las comidas compartidas proporcionarán a las familias de
                      Palestina un apoyo en efectivo para que puedan comprar
                      alimentos en tiendas locales.
                      </h3>
                      <p class="text-center">
                      Dos tercios de la población de Gaza —alrededor de 1.3 millones
                      de personas— no pueden alimentar a sus familias debido a
                      décadas de conflicto. Los disturbios políticos en la Franja de
                      Gaza y los bloqueos continuos en el mar, la tierra y el aire a
                      lo largo de Cisjordania dejan a la región dependiente de las
                      importaciones. Esto significa que Palestina es muy vulnerable
                      a las crisis globales y al aumento de los precios de los
                      alimentos. Como uno de sus mayores importadores de harina de
                      trigo y aceite, la guerra en Ucrania ha llevado al aumento de
                      los precios de los alimentos en Palestina - un 3.7% de aumento
                      en un año. El Programa Mundial de Alimentos está sobre el
                      terreno proporcionando apoyo en efectivo a 300.000 palestinos
                      vulnerables cada mes. La cuestión en Palestina no es la falta
                      de alimentos, sino que la gente no puede permitirse comprarla.
                      Es por eso que el WFP ofrece asistencia en efectivo para que
                      las familias puedan obtener los alimentos que necesitan
                      mientras impulsan la economía local. Pueden gastar su dinero
                      en más de 300 tiendas designadas en Cisjordania y Gaza. El WFP
                      prioriza a las familias encabezadas por mujeres, a las
                      personas con discapacidad y a las personas mayores con apoyo.
                      </p>
                      <img
                      class="summary-image"
                      src="https://i.postimg.cc/T3db2N3M/Carousel.png"
                      alt="Campaign Summary Image"
                      />
                  </div>
                  </template>
              </Card>
              </transition>
          </template>
          </Card>
      </div>
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
        visible: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .wrapper-card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid lightgray;
    padding: 10px;
    width: 80%;
    /**center the */
    margin: auto;
  }
  
  .campaign-card,
  .summary-card {
    margin: 20px auto;
    text-align: center;
  }
  
  .campaign-image {
    object-fit: cover;
    max-height: 400px;
    width: 60%;
    /* position: relative; */
    display: block;
    margin: auto;
    top: -50px;
    border-radius: 20px;
  }
  .text-center {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .summary-image {
    object-fit: cover;
    max-height: 600px;
    width: 90%;
    display: block;
    margin: auto;
    border-radius: 20px;
  }
  
  .progress-bar {
    height: 10px;
    border-radius: 5px;
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
  
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .left {
    display: flex;
    align-items: center;
  }
  
  .right {
    display: flex;
    align-items: center;
  }
  </style>
  