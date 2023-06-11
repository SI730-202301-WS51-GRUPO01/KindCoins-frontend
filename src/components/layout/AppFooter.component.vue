<template>
  <div class="card pr-5 pl-5 pt-5">
      <div class="flex flex-column justify-content-center flex-wrap">

          <div class="flex flex-row justify-content-between pb-2">
              <div class="flex flex-row ">
                  <div class="pr-2">
                       <img src="https://i.postimg.cc/025x5J7S/Flag.png" alt="Flag" style="width: 3vh;">
                  </div>
                 <div>
                      <p class="text-sm font-bold " style="color: #ffffff;">Perú</p>
                 </div>
                  
              </div>
              
              <div>
                  <ul class="ul-footer text-sm font-bold">
                      <li class="mb-2">Español</li>
                      <li class="mb-2">English</li>
                      <li class="mb-2">Português</li>
                      <li class="mb-2">Deutsch</li>
                  </ul>
              </div>
              <div>
              <ul class="ul-footer text-sm font-bold">
                  <li class="mb-2">Políticas de privacidad</li>
                  <li class="mb-2">Políticas de cookies</li>
                  <li class="mb-2">Términos y condiciones</li>
                  <li class="mb-2">Legal</li>
              </ul>
              </div>
              <div class="socialMedia">
              <a href="https://www.instagram.com/">
                <img src="../../../public/ig.png" alt="Instagram">
              </a>
              <a href="https://www.facebook.com/">
                <img src="../../../public/fb.png" alt="Facebook">
              </a>
              <a href="https://twitter.com/home">
                <img src="../../../public/twitter.png" alt="Twitter">
              </a>
              <a href="https://www.youtube.com/">
                <img src="../../../public/yt.png" alt="Youtube">
              </a>
              </div>
          </div>

          <hr class="solid font-bold">

          <div class="flex flex-row justify-content-between flex-wrap pt-2">
              <div class="footer-right text-sm">
                  <p>Copyright©2022 Todos los derechos reservados</p>
                  <p>KindCoins.com S.A.C. Av.Ramirez 123, Piso 7, San Isidro, Lima, Perú.</p>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.card{
  background-color: #0597A6;
  font-family: 'Roboto', sans-serif;
  
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
.socialMedia a img{
  width: 3vh;
  height: 3vh;
  margin-right: 3vh;
}
ion-icon {
  font-size: 35px;
  padding: 10px;
}
hr{
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
