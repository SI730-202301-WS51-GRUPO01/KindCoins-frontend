<template>
    <div class="card">
        <div class="flex flex-column justify-content-center flex-wrap p-5 " id="Planes">
              
            <!-- Plan gratuito -->
                      
              <div class="flex flex-row card-container justify-content-between  flex-wrap border-round-2xl p-5">              
                <div>
                  <p class="tittle-plan">Mensual</p>
                  <ul class="text-start">
                    <li>Crea tu campaña y recibe donanciones</li>
                    <li>Duración ilimitada</li>
                    <li>Mayor visibilidad en nuestra sección de campañas</li>
                    <li>Crea tu campaña y recibe donanciones</li>
                    <li>Proridad en soporte</li>
                  </ul>
                </div>
                
                  <pv-button text @click="visible = true">
                  <p class="price align-self-center font-bold text-xl">S/ 19.99</p>
                  </pv-button>
                  <pv-dialog v-model:visible="visible" modal header="Header" >
                    <SelectMethod/>
                    <template #footer>
                      <pv-button text @click="visible = false">Cerrar</pv-button>
                    </template>
                  </pv-dialog>
                
              </div>

            
            <br>
            <div class="flex flex-row card-container justify-content-between  flex-wrap border-round-2xl p-5 ">
              <div>
                <p class="tittle-plan">Anual</p>
                <ul class="text-start">
                  <li>Crea tu campaña y recibe donanciones</li>
                  <li>Duración ilimitada</li>
                  <li>Mayor visibilidad en nuestra sección de campañas</li>
                  <li>Crea tu campaña y recibe donanciones</li>
                  <li>Proridad en soporte</li>
                </ul>
              </div>
              <pv-button text>
                <div class="align-self-center">
                  <p class="price font-bold text-xl text-right">S/ 215.99</p>
                  <p class="color-descuento"><u>10% de descuento</u></p>
                </div>
              </pv-button>
            </div>
            <br>
            <div class="flex flex-row card-container justify-content-between  flex-wrap border-round-2xl p-5 ">
              <div>
                <p class="tittle-plan">Free</p>
                <ul class="text-start">
                  <li>Crea tu campaña y recibe donanciones</li>
                  <li>Duración máxima de campaña de 1 mes</li>
                </ul>
              </div>
              <pv-button text>
                <p class="price align-self-center font-bold text-xl">Gratis</p>
              </pv-button>
            </div>

        </div>
    </div>
</template>

<script>

import PaymentMethod from "../../payment-methods/PaymentMethod.component.vue";
import SelectMethod from "../../payment-methods/SelectMethod.component.vue";

export default {
  name: 'MembershipType',
  components: {PaymentMethod, SelectMethod},
  
  data() {
  return {
    visible: false,
  };
} ,

}
</script>


<style scoped>
.card-container{
  background-color: #EBFFFD;
}
.tittle-plan{
    color: #0597A6;
    font-weight: bold;
    font-size: 1.25rem;
}
.text-start{
  font-size: 0.875rem;
}
.price{
  color: #00DDE3;
}
.color-descuento{
  color: red;
  font-size: 0.75rem;
}
</style>