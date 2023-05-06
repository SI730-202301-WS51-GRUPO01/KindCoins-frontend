<template>
    <div class="yape-payment-dialog">
        <h2 class="yape-payment-dialog-title">Pago con Yape</h2>
        <p>Abre la app de Yape en tu teléfono móvil y escanea el siguiente código QR para hacer el pago:</p>
        <div class="yape-payment-qr-code">
            <!-- Inserta aquí el código QR de Yape -->
            <!-- <img src="../../assets/img/donacionesQR.png" alt="Código QR de Yape" /> -->
        </div>
        <p>También puedes realizar el pago con Yape ingresando manualmente el número de teléfono:</p>
        <div class="yape-payment-phone-number">
            <span>Telefono:</span>
            <span class="yape-payment-phone-number-value">987654321</span>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {};
    },
};
</script>
  
<style>
img {
    width: 100px;
}
.yape-payment-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.yape-payment-dialog-title {
    font-size: 24px;
    margin-bottom: 20px;
}
.yape-payment-qr-code {
    margin: 20px;
}
.yape-payment-phone-number {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
}
.yape-payment-phone-number span {
    margin-right: 10px;
}
.yape-payment-phone-number-value {
    font-weight: bold;
}
</style>