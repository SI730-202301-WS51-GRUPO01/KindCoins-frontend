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
              <p class="price align-self-center font-bold text-xl">S/ 19.99</p>
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
              <div class="align-self-center">
                 <p class="price font-bold text-xl text-right">S/ 215.99</p>
                 <p class="color-descuento"><u>10% de descuento</u></p>
              </div>
             
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
              <p class="price align-self-center font-bold text-xl">Gratis</p>
            </div>
          
        </div>
    </div>
</template>

<script>

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