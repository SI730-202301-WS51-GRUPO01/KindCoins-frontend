<template>
    <div class="signup-container">
        <div class="logo-container">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
            <p style="grid-column: 2/3; text-align: center;">Cuenta nueva</p>
            <div class="flex flex-column gap-2" style="grid-column: 2/3">
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="name" v-model="value" style="width: 321.93px" />
                    <label for="name" style="font-family: 'Roboto'; color: #515151">Ingresa tus nombres</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="lastname" v-model="value" style="width: 321.93px" />
                    <label for="lastname" style="font-family: 'Roboto'; color: #515151">Ingresa tus apellidos</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="dni" v-model="value" style="width: 321.93px" />
                    <label for="dni" style="font-family: 'Roboto'; color: #515151">Ingresa tu DNI</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="phone" v-model="value" style="width: 321.93px" />
                    <label for="phone" style="font-family: 'Roboto'; color: #515151">Ingresa tu teléfono</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="email" v-model="value" style="width: 321.93px" />
                    <label for="email" style="font-family: 'Roboto'; color: #515151">Ingresa tu correo electrónico</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="password" v-model="value" style="width: 321.93px" />
                    <label for="password" style="font-family: 'Roboto'; color: #515151">Ingresa tu contraseña</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="password2" v-model="value" style="width: 321.93px" />
                    <label for="password2" style="font-family: 'Roboto'; color: #515151">Confirma tu contraseña</label>
                </span>
            </div>
            <pv-checkbox v-model="checked" :binary="false" style="grid-column: 2/3;"/>
            <p style="grid-column: 2/3;">Acepto los Términos y condiciones</p>
            <router-link to="/thank-u" style="grid-column: 2/3; margin-bottom: 20px; ">
                <pv-button label="Crear mi cuenta" style="color:white; background-color:#FFDE59;"/>
            </router-link>
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
.logo-container{
    grid-column: 2/3;
}
</style>