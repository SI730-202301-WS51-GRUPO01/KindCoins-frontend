<template>
    <div class="class-full flex-column flex m-5">
        <div class="campaign-description pb-3">
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

</script>

<style>

</style>