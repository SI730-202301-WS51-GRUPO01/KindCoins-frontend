<template>
    <div class="donation-container">
        <div class="donation-content">
            <div class="donation-selection">
                <!-- Rest of the donation selection code -->
                <button class="donation-option" :class="{ 'selected': donationType === 'one-time' }"
                    @click="selectDonationType('one-time')">Una vez</button>
                <button class="donation-option" :class="{ 'selected': donationType === 'monthly' }"
                    @click="selectDonationType('monthly')">Mensualmente</button>
            </div>
            <div class="donation-amount">
                <!-- Rest of the donation amount code -->
                <div class="donation-buttons">
                    <button class="donation-option" :class="{ 'selected': donationAmount === 5 }"
                        @click="selectDonationAmount(5)">S/ 5</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 10 }"
                        @click="selectDonationAmount(10)">S/ 10</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 15 }"
                        @click="selectDonationAmount(15)">S/ 15</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 20 }"
                        @click="selectDonationAmount(20)">S/ 20</button>
                    <div class="donation-custom-amount">
                        <input type="number" v-model="customDonationAmount" min="20" placeholder="Otro monto">
                    </div>
                </div>
                <div class="donation-selected-amount">
                    <div class="donation-amount-label">Monto seleccionado:</div>
                    <div class="donation-amount-value">S/ {{ donationAmount }}</div>
                </div>
                <div class="donation-payment-method">
                    <div class="donation-payment-label">Seleccione un método de pago:</div>
                    <div class="donation-payment-options">
                        <div class="payment-option">
                            <input type="radio" id="visa" name="payment-method" value="visa"
                                v-model="selectedPaymentMethod">
                            <label for="visa">Visa</label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="yape" name="payment-method" value="yape"
                                v-model="selectedPaymentMethod">
                            <label for="yape">Yape</label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="plin" name="payment-method" value="plin"
                                v-model="selectedPaymentMethod">
                            <label for="plin">Plin</label>
                        </div>
                    </div>
                    <button class="donation-continue-button" @click="continueToPayment">Continuar</button>
                </div>
            </div>
        </div>
        <!-- Payment method dialog -->
        <div class="payment-dialog" v-show="showPaymentDialog">
            <div class="payment-dialog-overlay" @click="closePaymentDialog"></div>
            <div class="payment-dialog-content">
                <h2 class="payment-dialog-title">Seleccione un método de pago:</h2>
                <!-- Rest of the payment method options code -->
                <!-- Rest of the payment method options code -->
                <div v-if="selectedPaymentMethod === 'visa'">
                    <VisaPayment />
                </div>
                <div v-else-if="selectedPaymentMethod === 'yape'">
                    <YapePayment />
                </div>
                <div v-else-if="selectedPaymentMethod === 'plin'">
                    <PlinPayment />
                </div>
                <button class="donation-continue-button" @click="closePaymentDialog">Cerrar</button>
            </div>
        </div>
    </div>
</template>


<!-- <template>
     <div class="donation-container">

    <div class="donation-container">
        <div class="donation-content">
            <div class="donation-selection">
                <button class="donation-option" :class="{ 'selected': donationType === 'one-time' }"
                    @click="selectDonationType('one-time')">Una vez</button>
                <button class="donation-option" :class="{ 'selected': donationType === 'monthly' }"
                    @click="selectDonationType('monthly')">Mensualmente</button>
            </div>
            <div class="donation-amount" v-if="selectedOption === 'dinero'">
                <div class="donation-buttons">
                    <button class="donation-option" :class="{ 'selected': donationAmount === 5 }"
                        @click="selectDonationAmount(5)">S/ 5</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 10 }"
                        @click="selectDonationAmount(10)">S/ 10</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 15 }"
                        @click="selectDonationAmount(15)">S/ 15</button>
                    <button class="donation-option" :class="{ 'selected': donationAmount === 20 }"
                        @click="selectDonationAmount(20)">S/ 20</button>
                    <div class="donation-custom-amount">
                        <input type="number" v-model="customDonationAmount" min="20" placeholder="Otro monto">
                    </div>
                </div>
                <div class="donation-selected-amount">
                    <div class="donation-amount-label">Monto seleccionado:</div>
                    <div class="donation-amount-value">S/ {{ donationAmount }}</div>
                </div>
                <div class="donation-payment-method">
                    <div class="donation-payment-label">Seleccione un método de pago:</div>
                    <div class="donation-payment-options">
                        <div class="payment-option">
                            <input type="radio" id="visa" name="payment-method" value="visa"
                                v-model="selectedPaymentMethod">
                            <label for="visa">Visa</label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="yape" name="payment-method" value="yape"
                                v-model="selectedPaymentMethod">
                            <label for="yape">Yape</label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="plin" name="payment-method" value="plin"
                                v-model="selectedPaymentMethod">
                            <label for="plin">Plin</label>
                        </div>
                    </div>
                    <button class="donation-continue-button" @click="continueToPayment">Continuar</button>
                </div>
            </div>
            <div class="donation-payment" v-else-if="selectedOption === 'pago'">
                <!-- Payment method dialog 
                <div class="payment-dialog" v-if="showPaymentDialog">
                    <div class="payment-dialog-overlay" @click="closePaymentDialog"></div>
                    <div class="payment-dialog-content">
                        <h2 class="payment-dialog-title">Seleccione un método de pago:</h2>
                        <!-- Rest of the payment method options code 
                        <div v-if="selectedPaymentMethod === 'visa'">
                            <VisaPayment />
                        </div>
                        <div v-else-if="selectedPaymentMethod === 'yape'">
                            <YapePayment />
                        </div>
                        <div v-else-if="selectedPaymentMethod === 'plin'">
                            <PlinPayment />
                        </div>
                        <button class="donation-continue-button" @click="closePaymentDialog">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> 
</template> -->
  
<script>
import VisaPayment from './VisaMethod.component.vue';
import YapePayment from './YapeMethod.component.vue';
import PlinPayment from './PlinMethod.component.vue';

export default {
    components: {
        VisaPayment,
        YapePayment,
        PlinPayment,
    },
    data() {
        return {
            donationType: 'one-time',
            selectedOption: 'dinero',
            donationAmount: 5,
            customDonationAmount: 0,
            selectedPaymentMethod: '',
            showPaymentDialog: false,
        };
    },
    methods: {
        selectDonationType(type) {
            this.donationType = type;
        },
        selectDonationAmount(amount) {
            this.donationAmount = amount;
        },
        continueToPayment() {
            if (this.selectedPaymentMethod) {
                // Show dialog for confirmation
                // Navigate to payment page based on selected payment method
            }
        },
        continueToPayment() {
            this.showPaymentDialog = true;
        },
        closePaymentDialog() {
            this.showPaymentDialog = false;
        },
    },
    watch: {
        customDonationAmount(amount) {
            if (amount >= 20 && Number.isInteger(amount)) {
                this.donationAmount = amount;
            }
        },
    },
};
</script>

<style>
.donation-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* margin-top: 50px; */
    align-items: flex-end;
}

.donation-content {
    display: flex;
    flex-direction: column;
    width: 300px;
    /* Adjust this value to control the width of the donation box */
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 20px;
}

.donation-selection {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #f2f2f2;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin-bottom: 20px;
}

.donation-option {
    font-size: 14px;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
    color: #666;
    background-color: #fff;
}

.donation-option.selected {
    color: #fff;
    background-color: #0597a6;
}

.donation-amount {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}

.donation-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}

.donation-custom-amount {
    margin-left: 20px;
    margin-top: 10px;
}

.donation-custom-amount input {
    border: none;
    outline: none;
    background-color: #f2f2f2;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    width: 80px;
    text-align: center;
}

.donation-selected-amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.donation-amount-label {
    font-size: 18px;
    margin-right: 10px;
}

.donation-amount-value {
    font-size: 24px;
    font-weight: bold;
    color: #0597a6;
}

.donation-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.donation-payment-label {
    font-size: 18px;
    margin-bottom: 10px;
}

.donation-payment-options {
    display: flex
}

.donation-payment-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.donation-payment-option .p-radio {
    margin-right: 10px;
}

.donation-payment-option .payment-method-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.donation-payment-button {
    margin-top: 20px;
}

.payment-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.payment-dialog-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment-dialog-title {
    font-size: 24px;
    margin-bottom: 20px;
}
</style>  