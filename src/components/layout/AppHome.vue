<template>
<div class="class-full">
        <pv-menubar class="sticky">
            <template #start>
                <img src="https://i.postimg.cc/6QvxVCSG/logo.png" alt="logo" class="h-3rem">              
            </template>

            <template #end>
                <div class="card flex flex-wrap justify-content-center gap-4 align-items-center">
                    <router-link to="/sign-up-with">
                        <pv-button style="background-color: #E0E0E0; color:black">Iniciar sesión</pv-button>
                    </router-link>
                    <router-link to="/sign-up">
                    <pv-button style="background-color: #FFC107; color:black">Registrarse</pv-button>
                    </router-link>
                </div> 
            </template>
        </pv-menubar>
        <div class="screen-image"></div>
    </div>
</template>

<style scoped>
.sticky{
    background-color: #0597A6;
    border:#0597A6;
}
.screen-image{
    background-image: url('../../../public/Slide2.jpg');
    background-size: cover;
    background-position:top;
    height: 800px;
}
</style>