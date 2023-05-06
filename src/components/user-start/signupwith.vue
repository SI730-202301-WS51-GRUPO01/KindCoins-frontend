<template>
    <div class="signupwith-container">
        <div class="signupwith-2">
            <img class="logo1" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
            <p id="" class="crea-cuenta" style="grid-column: 2/3">Inicia sesión con</p>
            <pv-button id="facebook" icon="pi pi-facebook" label="Facebook"/>
            <pv-button id="google" icon="pi pi-google" label="Google"/>
            <p style="grid-column: 2/3">o</p>
            <p style="grid-column: 2/3">Ingresa con un 
                <router-link to="/login">correo</router-link>
            </p>
            <p style="grid-column: 2/3">¿Todavía no tienes una cuenta?</p>
            <p style="grid-column: 2/3">
                <router-link to="/sign-up">Crea una aquí</router-link>
            </p>
    </div>
</template>

<script>
export default{
    name:'SignUpWith'
}
</script>

<style>
.signupwith-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 50px;
    justify-items: center;
}
.signupwith-2{
    grid-column: 2/3;
}
.logo1{
    width: 100px;
    height: 100px;
    border-radius: 100px;
}
#facebook{
    grid-column: 2/3;
    background: #3B5997;
    width: 265.65px;
    height: 43px;
}
#google{
    grid-column: 2/3;
    background: #F4F4F4;
    width: 265.65px;
    height: 43px;
    color: #595959;
    border: 1px solid #D6D6D6;
}
</style>