<template>
    <div class="login-container">
        <div class="logo-container">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
            <p class="inicia-sesion">Inicia sesión</p>
            <div class="flex flex-column gap-2" style="grid-column: 2/3">
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="email" v-model="value" style="width: 321.93px" />
                    <label for="email" style="font-family: 'Roboto'; color: #515151">Ingrese su correo electrónico</label>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text id="password" v-model="value" style="width: 321.93px" />
                    <label for="password" style="font-family: 'Roboto'; color: #515151">Ingrese su contraseña</label>
                </span>
            </div>
            <p style="grid-column: 2/3; color: #0597A6; text-decoration-line: underline; font-size: 12px; font-family: 'Roboto'">
                ¿Olvidaste tu contraseña?
            </p>
            <router-link to="/explore" style="grid-column: 2/3">
                <pv-button label="Iniciar sesion" style="color:white; background-color:#FFDE59; margin-top:20px"/>
            </router-link>
            <p style="grid-column: 2/3; margin-top:20px; font-family: 'Roboto'; color: #515151">¿Todavía no tienes cuenta?</p>
            <p style="grid-column: 2/3;">
                <router-link to="/sign-up-with" style="color: #0597A6">Crea una cuenta</router-link>
            </p>
        </div>
</template>

<script>
export default{
    name: 'Login'
}
</script>

<style>
.logo{
    width: 220px;
    height: 220px;
    border-radius: 100px;
    bottom: 28px;
    margin-top: 50px;
}
.logo-container{
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
    grid-column: 2/3;
}
</style>