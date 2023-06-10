<template>
    <div class="class-full flex-column flex m-5">
        <div class="campaign-description pt-3 pb-3">
            <p class="pb-2">Descripción de la campaña</p>
            <pv-textarea  class="w-full" type="text" placeholder="Ej ."/>
        </div>
        <div class="donation-types pb-3">
            <p class="pb-2">Seleccione los tipos de donaciones que desea recibir</p>
            <div class="card flex justify-content-center">
                <div class="flex flex-row">
                    <div v-for="category of categories" :key="category.key" class="flex  align-items-center m-3">
                        <pv-radio-button v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                        <label :for="category.key">{{ category.name }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="donation-types pb-3">
            <p class="pb-2">Meta</p>
            <pv-inputNumber  class="w-full" id="number-input" v-model="value" />
        </div>
        <div class="donation-duration flex flex-row pb-3">
            <div  class="w-full">
                <p class="pb-2">Fecha de inicio de campaña</p>
                <pv-calendar v-model="date" dateFormat="dd/mm/yy" />
            </div>
            <div  class="w-full">
                <p class="pb-2">Fecha de fin de campaña</p>
                <pv-calendar v-model="date" dateFormat="dd/mm/yy" />
            </div>
        </div>
        <div class="pb-3">
            <div class="flex justify-content-end">
                <router-link to="/main-content/donation-details">
                    <pv-button>Siguiente</pv-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script >
export default {
  name: 'Campaign-details',
    data(){
        return{
        categories,
        selectedCategories: null,
        };
    }
    
}
const categories = [
    { key: '1', name: 'Monetaria' },
    { key: '2', name: 'Material' },
    { key: '3', name: 'Voluntariado' },
    { key: '4', name: 'Servicios' },
];

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
