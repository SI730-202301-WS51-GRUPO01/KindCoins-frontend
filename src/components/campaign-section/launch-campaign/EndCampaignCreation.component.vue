<template>
    <div>
        <div class="flex justify-content-center"> 
            <div>
                <h3 class="font-bold">¡Campaña publicada con éxito!</h3>
            </div>          
        </div>
        
        <div class="options m-3">
            <div class="flex flex-column">
                <div class="flex align-items-center justify-content-center m-3">
                    <router-link to="/main-content/campaign-data">
                        <pv-button class="bt-other-campaign justify-content-center" raised >Crear otra campaña</pv-button>
                    </router-link>
                </div>
                <div class="flex align-items-center justify-content-center">
                    <!-- Aqui poner el routing de Explorar -->
                    <pv-button class="bt-explorar justify-content-center" raised >Ir a explorar</pv-button>
                </div>
            </div>           
        </div>
    </div>
</template>

<style scoped>
    .bt-other-campaign{
        background-color: #FFDE59;
        color: black;
        width: 15rem;
    }
    .bt-explorar{
        background-color: white;
        color: black;
        width: 15rem;
    }


</style>