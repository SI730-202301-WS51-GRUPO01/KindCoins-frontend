<template>
    <div class="visa-payment-dialog">
        <h2 class="visa-payment-dialog-title">Pago con Visa</h2>
        <form @submit.prevent="processPayment">
            <div class="form-group">
                <!-- <label for="card-holder-name"></label> -->
                <input type="text" id="card-number" v-model="cardNumber" placeholder="Número de tarjeta" required
                    class="full-width" />
            </div>
            <div class="form-group">
                <!-- <label for="card-number"></label> -->

                <!-- <label for="card-expiration-date"></label> -->
                <input type="text" id="card-expiration-date" v-model="cardExpirationDate" placeholder="MM/AA" required
                    maxlength="5" />
                <input type="text" id="card-cvv" v-model="cardCVV" placeholder="CVV" maxlength="4" required />
            </div>
            <div class="form-group">
                <!-- Input for name -->
                <input type="text" id="card-holder-name" v-model="cardHolderName" placeholder="Nombre" required />
                <!-- Input for lastname -->
                <input type="text" id="card-holder-lastname" v-model="cardHolderLastname" placeholder="Apellido" required />
            </div>
            <div class="form-group">
                <!-- <label for="card-cvv">:</label> -->
                <!-- Email input -->
                <input type="email" id="card-holder-email" v-model="cardHolderEmail" placeholder="Correo electrónico"
                    required class="full-width" />
            </div>
            <button type="submit" class="visa-payment-button">Procesar pago</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            cardHolderName: '',
            cardNumber: '',
            cardExpirationDate: '',
            cardCVV: '',
        };
    },
    methods: {
        processPayment() {
            // Aquí puedes agregar la lógica para procesar el pago con la tarjeta de crédito Visa
            console.log('Procesando pago con Visa...');
            // Obtener el mes y año de la fecha de vencimiento
            const expirationMonth = this.cardExpirationDate.substring(0, 2);
            const expirationYear = this.cardExpirationDate.substring(3);
            // Formatear la fecha de vencimiento como "MM/AA"
            this.cardExpirationDate = `${expirationMonth}/${expirationYear}`;
        },
    },
};
</script>
  
<style>
.visa-payment-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.visa-payment-dialog-title {
    font-size: 24px;
    margin-bottom: 20px;
}
.visa-payment-button {
    margin-top: 20px;
    background-color: #0597a6;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.visa-payment-button:hover {
    background-color: #046a76;
}
.form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 100%;
}
input[type="text"],
input[type="email"],
input[type="month"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="month"]:focus {
    border-color: #0597a6;
}
</style>