<template>
  <div class="container">
    <div class="rectangle">
      <div class="publ-check">
        <i class="pi pi-check" style="color: #22c55e"></i>
        <span class="publicacion" style="color: #22c55e">
          Publicación realizada con exito
        </span>
      </div>
      <button class="boton-crear">Crear otra campaña</button>
      <button class="boton-regresar">Ir a mis campañas</button>
    </div>
    <pv-card class="card" style="width: 20em">
      <template #header>
        <img
          src="../../../../public/ganado_sequia_africa.jpg"
          alt="sequia"
          width="320"
          height="258"
        />
      </template>
      <template #title>
        Apoya a las familias afectadas por la sequía en el Cuerno de África
      </template>
      <template #content>
        <p>
          Las comidas compartidas proporcionarán apoyo en efectivo de emergencia
          a las familias afectadas por la sequía en Etiopía, Kenia y Somalia.
        </p>
      </template>
      <template #footer>
        <button class="donar">DONAR AHORA</button>
      </template>
    </pv-card>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
}
.rectangle {
  width: 670px;
  height: 595px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 357px;
}
.publ-check {
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
.boton-crear {
  font-weight: bold;
  background-color: #ffde59;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.boton-regresar {
  font-weight: bold;
  background-color: white;
  color: black;
  border: 2px solid #ffde59;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.donar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 36px;
  background: #0597a6;
  border: none;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
}
.card {
  position: absolute;
  left: 1054px;
}
</style>
