<template>
    <div class="class-full">
        <div class="monetary-donations">
            <h1>Recepción de donaciones monetarias</h1>
            <h3>Cuentas bancarias</h3>
            <div class="flex flex-row flex-wrap">
                <div class="flex align-items-center justify-content-center">
                    <img src="https://i.postimg.cc/fbXmWb9G/yape.png" alt="paid-method">
                </div>
                <div class="flex align-items-center justify-content-center">
                    <pv-inputNumber v-model="value1" inputId="integeronly" />
                </div>
            </div >
            <div class="flex flex-row flex-wrap">
                <span class="flex align-items-center justify-content-center"><i class="pi pi-plus-circle"/></span>
                <p class="flex align-items-center justify-content-center">Agregar cuenta bancaria</p>
            </div>
        </div>
        
        <div class="monetary-donations">
            <h1>Recepción de donaciones materiales</h1>
            <div class="flex flex-row flex-wrap">
                <pv-dropdown v-model="selectedCountry" editable :options="countries" optionLabel="name" placeholder="País" class="w-full md:w-14rem" />
                <pv-dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Ciudad" class="w-full md:w-14rem" />
                <pv-dropdown v-model="selectedDistrict" editable :options="districts" optionLabel="name" placeholder="Distritos" class="w-full md:w-14rem" />
            </div>
            <div class="flex flex-row flex-wrap"><pv-input-text v-model="value2" type="text" placeholder="Dirección" /></div>
            <div class="flex flex-row flex-wrap"><pv-input-text v-model="value2" type="text" placeholder="Referencia" /></div>
            <h3>Marque su ubicación actual</h3>

            
        </div>

    </div>

</template>

<script setup>

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

</script>


<style scoped>

</style>