<template>
    <div class="plin-payment-dialog">
        <h2 class="plin-payment-dialog-title">Pago con Plin</h2>
        <p>Escanea el código QR para realizar el pago:</p>
        <img src="../../assets/img/donacionesQR.png" alt="Código QR para pago con Plin" class="plin-payment-qr" />
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
.plin-payment-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.plin-payment-dialog-title {
    font-size: 24px;
    margin-bottom: 20px;
}
.plin-payment-qr {
    max-width: 100%;
    margin-top: 20px;
}
</style>