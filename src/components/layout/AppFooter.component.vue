<template>
  <div class="card pr-5 pl-5 pt-5">
      <div class="flex flex-column justify-content-center flex-wrap">

          <div class="flex flex-row justify-content-between pb-2">
              <div class="flex flex-row ">
                  <div class="pr-2">
                       <img src="https://i.postimg.cc/025x5J7S/Flag.png" alt="Flag">
                  </div>
                 <div>
                      <p class="text-sm font-bold " style="color: #ffffff;">Perú</p>
                 </div>
                  
              </div>
              
              <div>
                  <ul class="ul-footer text-sm font-bold">
                      <li>Español</li>
                      <li>English</li>
                      <li>Português</li>
                      <li>Deutsch</li>
                  </ul>
              </div>
              <div>
              <ul class="ul-footer text-sm font-bold">
                  <li>Políticas de privacidad</li>
                  <li>Políticas de cookies</li>
                  <li>Términos y condiciones</li>
                  <li>Legal</li>
              </ul>
              </div>
              <div class="socialMedia ">

              <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
              <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
              <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
              <a href=""><ion-icon name="logo-youtube"></ion-icon></a>
              </div>
          </div>

          <hr class="solid font-bold">

          <div class="flex flex-row justify-content-between flex-wrap pt-2">
              <div class="footer-right text-sm">
                  <p>Copyright©2022 Todos los derechos reservados</p>
                  <p>KindCoins.com S.A.C. Av.Ramirez 123,Piso 7,San Isidro,Lima,Perú.</p>
              </div>
              <div>
                  <img src="https://i.postimg.cc/MGLJdsLb/Pago-Seguro.png" alt="PagoSeguro">
              </div>
          </div>

      </div>
      
  </div>
    
</template>

<script>
</script>

<style scoped>
.card{
  background-color: #0597A6;
}
.ul-footer{
  text-decoration: none;
  color: white;
  list-style: none;
}
.footer-right{
  color: white;
}
.socialMedia a{
  color: white;
  text-decoration: none; 
}
ion-icon {
  font-size: 35px;
  padding: 10px;
}
</style>