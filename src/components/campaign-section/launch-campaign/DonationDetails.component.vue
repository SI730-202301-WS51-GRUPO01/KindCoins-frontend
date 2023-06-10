<template>
    <div class="class-full flex-column flex m-5">
        <div class="monetary-donations pt-4 pb-3">
            <p class="title-monetary">Recepción de donaciones monetarias</p>
            <p class="subtitle">Cuentas bancarias</p>
            <div class="method flex flex-row flex-wrap gap-3">
                <div class="flex align-items-center justify-content-center">
                    <img src="https://i.postimg.cc/fbXmWb9G/yape.png" alt="paid-method">
                </div>
                <div class="flex align-items-center justify-content-center gap-2">
                    <pv-inputNumber v-model="value1" inputId="integeronly" class="p-inputtext-sm"/>
                </div>
            </div >
            <div class="add flex flex-row flex-wrap gap-3">      
                <pv-button  class="flex align-items-center justify-content-center" icon="pi pi-plus-circle" text raised rounded aria-label="add" size="small" />
                <p class="flex align-items-center justify-content-center text-sm">Agregar cuenta bancaria</p>
            </div>
        </div>
        
        <div class="material-donations pb-3">
            <p class="title-material">Recepción de donaciones materiales</p>
            <div class="flex-column flex gap-2 pb-2">
                <div class="flex flex-row flex-wrap justify-content-between gap-2">
                    <pv-dropdown v-model="selectedCountry" editable :options="countries" optionLabel="name" placeholder="País" class="w-full md:w-14rem" />
                    <pv-dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Ciudad" class="w-full md:w-14rem" />
                    <pv-dropdown v-model="selectedDistrict" editable :options="districts" optionLabel="name" placeholder="Distritos" class="w-full md:w-14rem" />
                </div>
                <pv-input-text class="w-full" v-model="value2" type="text" placeholder="Dirección" />
                <pv-input-text class="w-full" v-model="value2" type="text" placeholder="Referencia" />
            </div>          
            <h3 class="subtitle">Marque la ubicación de la campaña</h3>
            <GoogleMap></GoogleMap>  
        </div>
        <div class="pb-3">
            <div class="flex justify-content-end">
                <router-link to="/main-content/membership-tipe">
                    <pv-button>Siguiente</pv-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import GoogleMap from "./GoogleMap.component.vue";
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

export default {
  name: 'Donation-detail',
  components: {GoogleMap}, 
}
</script>

<style scoped>
.title-monetary{
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 7px;
}
.subtitle{
    font-size: 14px;
    padding-bottom: 15px;
}
.method{
    padding-bottom: 15px;
}
.title-material{
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 15px;
}
</style>