    <template>
        <nav class="navdonaciones" >
          <pv-breadcrumb  :model="breadcrumbItems" ></pv-breadcrumb>
        </nav>
         
        <div class="caja">    
                <div class="content" style="margin-left:50px"> 
                    <div class="flex flex-column gap-2" style="margin: 10px; width: 80%;">
                    <p style="text-align: center;  color: #687781"> PASO 1 DE 5 </p>
                    <label for="username" class="txtbutton">Nombre de la campaña</label>
                    
                <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
                   
                </div>

                <div class="flex flex-column gap-2" style="margin: 10px; width: 80%;">
                    <label for="username" class="txtbutton">Slogan</label>
                    <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
                    
                </div>
                <div style="width: 130px;">
                    <p class="txtbutton"> Foto de campaña </p>
                </div>
                <div class="img-box" style="display: grid;grid-template-columns: 25% 75%; width: 70%;">
                    <div>
                
                    <img src="../../../../public/triangulo.jpg" style="width: 100%;height: 100%;">
                      </div>
                    <div  style="margin-left:30px;">
                        <div >
                            <pv-button label="Editar" style="background-color:#409EFF;"/>
                        </div>
                        <div style="display: flex;">
                            <img src="public\doc.jpg" style="width: 35px;height: 35px;">
                            <p  >foto001.jpg</p>
                        </div>
                    </div> 

                </div>
                <small >Formato jpg/png,maximo 500kb</small>

                <div class="hola" >
                <router-link to="/donation-details"> 
                    <pv-button  label="siguiente" style="background: #FFDE59;" />
                </router-link>
            </div>
            </div>

            <div class="dere" > 
            <p style="margin-left:20%;margin-bottom:20px ;" class="txtbutton"> Ultimas campañas</p>
                <pv-card  class="cardimg" >
                <template #header>
                    <img  alt="user header" src="public\card1.jpg" style="width: 100%;height: 200px;"/>
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
          { label: 'Campañas', url: '/',disabled:true }, //pasar los path
          { label: 'Crear Campañas', url: '/campaign-details' },
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
    
    .txtbutton{
        color: #000000;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
    }

    .caja{
        background-color: white;
        width: 90%;
        height: calc(78vh + 40px);

padding-left: calc(13vw + 40px);
        display: grid;
        grid-template-columns:  60% 30%;
    }
        .hola{
           margin-left: 65%;
        }
        .cardimg{
            width: 100%;margin-left:16% ;
        }
    
    @media (max-width: 768px) {
        /* Cambiar a una columna cuando la pantalla sea más pequeña que 768px */
        .caja {
        grid-template-columns: auto;
        }
        .hola{
            margin-left: 56%;
    }
        .cardimg{
            width: 80%;
        }

    }

</style>
    
