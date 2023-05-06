<template>
    <div class="thanku-container">
        <div class="thanku-2">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
        <i class="pi pi-check-circle"></i>
        <p style="grid-column: 2/3">¡Gracias por registrarte en KindCoins!</p>
        <p style="grid-column: 2/3; text-align: center">Revisa tu correo electrónico para poder habilitar tu cuenta</p>
        <router-link to="/congratulations" style="grid-column: 2/3">
        <pv-button label="Aceptar"/>
        </router-link>
    </div>
</template>

<script>
</script>

<style>
.logo{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    bottom: 28px;
}
.thanku-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 40px;
    justify-items: center;
}
.thanku-2{
    grid-column: 2/3;
}
.pi{
    grid-column: 2/3;
}
</style>