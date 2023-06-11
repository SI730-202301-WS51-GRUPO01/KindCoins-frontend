<template>
    <div class="card flex align-items-center justify-content-center pt-5">
      <pv-card style="width: 18em">
        <template #header>
            <img alt="user header" src="https://raw.githubusercontent.com/SI730-202301-WS51-GRUPO01/KindCoins-frontend/bugfix/public/card2.jpg" class="card-img" />
        </template>
        <template #title>Familias afectadas por la sequía en el Cuerno de África </template>
        <template #content>Las comidas compartidas proporcionarán apoyo en efectivo de emergencia a las familias afectadas por la sequía en Etiopía, Kenia y Somalia.</template>
        <template #footer>
          <router-link to="/main-content/donation-details">
            <pv-button label="Donar ahora" class="donar-btn"/>
          </router-link>
        </template>       
      </pv-card>
    </div>
</template>

<style scoped>
.card-img {
  width: 100%;
}

#title {
  font-size: 10px;
}
</style>