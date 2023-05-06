<template>
    <div class="signup-container">
        <div class="container-2">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
            <p class="crea-cuenta">Cuenta nueva</p>
            <div class="flex flex-column gap-2">
                <label for="name">Nombres</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
                <label for="lastname">Apellidos</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
                <label for="dni">DNI</label>
                <pv-input-text v-model="value" type="number" class="p-inputtext-sm"/>
                <label for="number">Teléfono</label>
                <pv-input-text v-model="value" type="number" class="p-inputtext-sm"/>
                <label for="email">Correo electrónico</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
                <label for="password">Contraseña</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
                <label for="password2">Confirma tu contraseña</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
            </div>
            <pv-checkbox v-model="checked" :binary="true"/>
            <p>Acepto los Términos y condiciones</p>
            <router-link to="/thank-u">
                <pv-button label="Crear mi cuenta"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

const checked = ref(false);
</script>

<style>
.logo{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    bottom: 28px;
}
.signup-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 40px;
    justify-items: center;
}
.container-2{
    grid-column: 2/3;
}
</style>