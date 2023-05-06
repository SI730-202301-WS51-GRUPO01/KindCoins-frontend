<template>
    <div class="login-container">
        <div class="grid-2">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
            <p class="inicia-sesion">Inicia sesión</p>
            <div class="flex flex-column gap-2">
                <label for="email">Correo electrónico</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
                <label for="password">Contraseña</label>
                <pv-input-text v-model="value" type="text" class="p-inputtext-sm"/>
            </div>
            <p>¿Olvidaste tu contraseña?</p>
            <pv-button label="Iniciar sesion"/>
            <p>¿Todavía no tienes cuenta?</p>
            <p>
                <router-link to="/sign-up-with">Crea una cuenta</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Login'
}
</script>

<style>
.logo{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    bottom: 28px;
}
.grid-2{
    grid-column: 2/3;
}
.login-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 40px;
    justify-items: center;
}
.inicia-sesion{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 18px;
    color: #515151;
}
</style>