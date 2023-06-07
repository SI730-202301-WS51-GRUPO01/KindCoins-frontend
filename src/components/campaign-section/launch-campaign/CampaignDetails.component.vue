
<!-- hola ,si quieres modificar el routeo esta en la linea 34 aprox -->

<template>
    <nav class="navdonaciones">
      <pv-breadcrumb  :model="breadcrumbItems" ></pv-breadcrumb>
    </nav>


       
    <div class="caja2" >
   
        <div class="content" style="margin: 25px;"> 
         
            <p style="text-align: center; color: #687781;margin: 20px;" > PASO 1 DE 5 </p>

            <div class="flex flex-column gap-2" style="margin: 10px; width: 90%; ">
               
                <label for="username" class="txtbutton">Descripcion de la campaña</label>
                
               <pv-input-text id="username" v-model="value" aria-describedby="username-help" style="height: 100px;" />
                
                
            </div>
            <div style="margin: 25px;">
                <p class="txtbutton"> Seleccione los tipos de donaciones que desea recibir</p>

                <div class="card flex flex-wrap justify-content-left gap-5" style="margin-top: 10px; display: flex;">
                    <div class="flex align-items-center">
                        <pv-checkbox v-model="donaciones" inputId="tipo1" name="donaciones" value="Dinero" />
                        <label for="tipo1" class="ml-2"> Dinero </label>
                    </div>
                    <div class="flex align-items-center">
                        <pv-checkbox v-model="donaciones" inputId="tipo2" name="donaciones" value="Alimentos" />
                        <label for="tipo2" class="ml-2"> Alimentos </label>
                    </div>
                    <div class="flex align-items-center">
                        <pv-checkbox v-model="donaciones" inputId="tipo3" name="donaciones" value="Ropa" />
                        <label for="tipo3" class="ml-2"> Ropa </label>
                    </div>
                    <pv-input-text type="text" v-model="value" style="width:43%;" placeholder="juguetes,Ropa"/>
                </div>
            </div>

            <div class="flex flex-column gap-2" style="margin: 10px; width: 90%;">
                <label for="meta" class="txtbutton">Meta</label>
                <pv-input-text id="meta" v-model="value" aria-describedby="meta-help" placeholder="Ingrese cantidad de coins"/>
                
            </div>
            
    
            <div class="hola2">
                <router-link to="/donation-details"> 
                    <pv-button  label="siguiente" style="background: #FFDE59;" />
                </router-link>
            </div>
        </div>

        <div class="dere" style="margin: 25px; justify-content: center;"> 
        <p class="txtbutton" style="margin-bottom: 20px;"> Ultimas campañas</p>
            <pv-card style="width: 100%;margin: auto;">
            <template #header>
                <img  alt="user header" src="public\card1.jpg" style="width: 100%;height: 250px;"/>
            </template>
            <template #title> Alimenta familias en Palestina </template>
            <template #content>
                <p>
                    Las Comidas compartidas proporcionarán a las familias de palestina
                    un apoyo en efectivo para que puedan comprar alimentos en tiendas locales
                </p>
            </template>
            <template #footer>
                <pv-button label="Donar Ahora"  style="background: #0597A6;"/>
            </template>
        </pv-card>
        </div>
      </div>
  </template>
  
  <script>
  import Breadcrumb from 'primevue/breadcrumb';
  
  export default {
    components: {
      Breadcrumb,
    },
    data() {
      return {
        breadcrumbItems: [
          { label: 'Campañas', url: '/campaign-data' }, //pasar los path
          { label: 'Crear Campañas', url: '/categoria/',disabled:true },
        //en caso este en costruccion lo desabilitamos jjiji
        ],
        
      };
    },
  };
  
  </script>

  <style>

    .navdonaciones{
        margin: 10px auto;
        width: 80%;       
    }

    .caja2{
        background-color: white;
        width: 90%;
        height: calc(78vh + 40px);

  padding-left: calc(13vw + 40px);
        display: grid;
        grid-template-columns:  60% 30%;
    }
    .hola2{
        margin-left: 76%;
    }
    @media (max-width: 800px) {
        /* Cambiar a una columna cuando la pantalla sea más pequeña que 768px */
        .caja2 {
        grid-template-columns: auto;
        }
        .hola2{
        margin-left: 65%;
    }
    }

</style>
