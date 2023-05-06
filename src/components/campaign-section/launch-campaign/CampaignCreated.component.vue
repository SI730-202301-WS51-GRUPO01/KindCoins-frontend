<!--
<template>
    <div class="container">
    <div class="rectangle">
        <div class="publ-check">
        <i class="pi pi-check" style="color:#22C55E"></i>
        <span class="publicacion" style="color:#22C55E"> Publicación realizada con exito </span>
        </div>
        <button class="boton-crear">Crear otra campaña</button>
        <button class="boton-regresar">Ir a mis campañas</button>
    </div>
    <pv-card class="card" style="width: 20em">
        <template #header>
            <img src="../../../../public/ganado_sequia_africa.jpg" alt="sequia" width="320" height="258"/>
        </template>
        <template #title> Apoya a las familias afectadas por la sequía en el Cuerno de África </template>
        <template #content>
            <p>
                Las comidas compartidas proporcionarán apoyo en efectivo de emergencia a las familias afectadas por la
                sequía en Etiopía, Kenia y Somalia.
            </p>
        </template>
        <template #footer>
            <button class="donar">DONAR AHORA</button>
        </template>
    </pv-card>
</div>
</template>

<style>
.container{
    display: grid;
    flex-direction: row;
}
.rectangle{
    width: 670px;
  height: 595px;
  background-color: white;
  border-radius: 5px;
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 357px;
}
.publ-check{
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
}
.boton-crear{
    font-weight: bold;
    background-color: #FFDE59;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.boton-regresar{
    font-weight: bold;
    background-color: white;
  color: black;
  border: 2px solid #FFDE59;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.donar{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 36px;
    background: #0597A6;
    border: none;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
}
.card{
    position: absolute;
    left: 1054px;
}
</style>
-->

<template>
    <section class="grid-container">
        <div class="rectangle item-2">
            <div class="publ-check">
                <i class="pi pi-check" style="color:#22C55E"></i>
                <span class="publicacion" style="color:#22C55E"> Publicación realizada con exito </span>
            </div>
            <button class="boton-crear">Crear otra campaña</button>
            <button class="boton-regresar">Ir a mis campañas</button>
        </div>
        <div class="card item-3">
            <pv-card class="card-donar-ahora" style="width: 20em">
                <template #header>
                    <img src="../../../../public/ganado_sequia_africa.jpg" alt="sequia" width="320" height="258"/>
                 </template>
                <template #title> Apoya a las familias afectadas por la sequía en el Cuerno de África </template>
                <template #content>
                    <p>
                        Las comidas compartidas proporcionarán apoyo en efectivo de emergencia a las familias afectadas por la
                        sequía en Etiopía, Kenia y Somalia.
                    </p>
                </template>
                <template #footer>
                    <pv-button class="donar" style="font-family: 'Roboto'; background: #0597A6;">DONAR AHORA</pv-button>
                </template>
            </pv-card>
        </div>
    </section>
</template>

<style>
.grid-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
}
.item-2{
    grid-column: 2/3;
    margin-top:20px;
    width: 670px;
    height: 595px;
    background-color: white;
    border-radius: 5px;
    display: grid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.item-3{
    grid-column: 3/3;
    margin-top:20px;
}
.boton-crear{
    font-weight: bold;
    background-color: #FFDE59;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.boton-regresar{
    font-weight: bold;
    background-color: white;
  color: black;
  border: 2px solid #FFDE59;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>

<!--
    <div class="surface-card shadow-2 border-round select-none">
        <ul class="list-none p-2 m-0">
            <li>
                <div class="p-3 flex align-items-center justify-content-between text-500 cursor-pointer p-ripple">
                    <span class="font-medium">HOME</span>
                    <i class="pi pi-chevron-down">
                        ::before
                    </i>
                    <span class="p-ink" role="presentation" aria-hidden="true" style="height: 304px; width: 304px; top:-109px; left:61px;"></span>
                </div>
        <ul class="list-none p-0 m-0 overflow-hidden hidden" style>
            <li>
                <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                    <i class="pi pi-home mr-2 text-700"></i>
                    <span class="font-medium text-700">Dashboard</span>
                    <span class="p-ink" role="presentation" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
    </li>
</ul>
-->