<template>
    <div class="class-full flex-column flex m-5">
        <div class="pt-5 pb-3 flex justify-content-center">
            <h3 class="font-bold">Paso 3 de 5</h3>
        </div>
        <div class="monetary-donations pt-4 pb-3">
            <p class="title-monetary">Recepción de donaciones monetarias</p>
            <p class="subtitle">Cuentas bancarias</p>
            <div class="method flex flex-row flex-wrap gap-3">
                <div class="flex align-items-center justify-content-center">
                    <img src="https://i.postimg.cc/CxS5wC18/visa-logo-transparent-free-png.webp" alt="paid-method">
                </div>
                <div class="flex align-items-center justify-content-center ">
                    <pv-input-mask
                    id="basic"
                    v-model="inputMasks[0]"
                    mask="9999-9999-9999-9999"
                    placeholder="9999-9999-9999-9999"
                    />
                    <!-- <pv-input-mask v-model="value1" inputId="integeronly" class="p-inputtext-sm"/> -->
                </div>
                <div
                    v-for="(inputMask, index) in inputMasks.slice(1)"
                    :key="index"
                    class="flex align-items-center justify-content-center"
                    >
                    <pv-input-mask
                        v-model="inputMasks[index + 1]"
                        mask="9999-9999-9999-9999"
                        placeholder="9999-9999-9999-9999"
                    />
                </div>
            </div >
            <div class="add flex flex-row flex-wrap gap-3">      
                <pv-button  
                    class="flex align-items-center justify-content-center" 
                    icon="pi pi-plus-circle" 
                    text raised rounded aria-label="add" 
                    size="small" 
                    @click="addInputMask"
                    />
                <p class="flex align-items-center justify-content-center text-sm">Agregar cuenta bancaria</p>
                <br>
            </div>
            <p class="flex align-items-center justify-content-center text-sm error-message" v-if="showErrorMessage">
                    Solo se permite el registro de máximo <strong>3 cuentas bancarias por campaña</strong>.
            </p>
        </div>
        
        <div class="pb-3">
            <div class="flex justify-content-end">
                <router-link to="/main-content/membership-tipe">
                    <pv-button @click="saveBankAccounts">Siguiente</pv-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import GoogleMap from "./GoogleMap.component.vue";
import { BankAccountService } from "@/services/BankAccount.service.js";
/* const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]); */

export default {
    name: 'Donation-detail',
    components: {GoogleMap}, 
    data() {
    return {
        inputMasks: [''], // Arreglo que almacena los valores de los input masks
        showErrorMessage: false,
        campaignId: null,
        bankAccountService : null, 
    };
    },
    created() {
        this.getCampaignId();
        this.bankAccountService = new BankAccountService();
    },
    methods: {
    addInputMask() {
        if (this.inputMasks.length < 3) {
            this.inputMasks.push('');
        }else {
            this.showErrorMessage = true;
        }
    },

    getCampaignId() {
        try {
            this.campaignId = JSON.parse(localStorage.getItem('campaignId'));
        } catch (error) {
            console.error('Error parsing campaignId:', error);
        }
    },

    saveBankAccounts() {
    console.log(this.campaignId); // Imprime el ID de la campaña
    
    for (let index = 0; index < this.inputMasks.length; index++) {
        const element = this.inputMasks[index];

        const bankAccount = {
            accountNumber: element,
            campaignId: this.campaignId,
        };

        this.bankAccountService.createBankAccount(bankAccount)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    }

  },
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
.error-message {
  color: red;
}
</style>