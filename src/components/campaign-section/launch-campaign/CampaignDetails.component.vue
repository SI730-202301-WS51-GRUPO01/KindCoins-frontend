<template>

    <div id="div-camps"> 
        <span id="first-sect" style=" font-family: 'Roboto';color: #909399;">Campañas /</span>
        <span style="font-family: 'Roboto';color: #131414;">Crear campaña </span>
    </div>

    <div id="box-content">
        <div id="img">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCmB96dGtBtE_H4kXPD5PgRrFUuyNI7w_edfXYV73VFJp86UPy" id="flecha">
        </div>

        <div id="pasos">
            <p id="paso">Paso 1 de 5</p>
        </div>
        <div id="text-descrip">
            <p id="descrip">Descripción de la campaña</p>
            <div id="text-area">
            <Textarea id="text-box" v-model="value" rows="1" cols="75" />
        </div>
        </div>
        <div id="text-meta">
            <p id="selec">Seleccione los tipos de donaciones que desea recibir</p>
            <Textarea id="text-box2" v-model="value" rows="1" cols="75" />
            <p id="meta">Foto de campaña</p>
            <button id="boton-editar">EDITAR</button>
            <p id="formato">Formato jpg/png, máximo 500kb</p>
            <div id="foto">
            <p id="doc">foto001.jpg</p>
            <div>
                <img id="docum" src="../../../../public/doc.jpg" alt="documento">
            </div>
        </div>
        </div>
        <div>
            <img id="triangulos" src="../../../../public/triangulo.jpg" alt="triangulos">
        </div>
        <div>
            <router-link to="/donation-details">
            <button id="boton-siguiente">SIGUIENTE</button>
            </router-link>
        </div>
    </div>

<!-- <div id="container">
    <div id="card-img">
        <p id="text-campañas">
            Ultimas campañas
        </p>
        <img id="lupita" src="../../../../public/lupa.png" alt="lupa">
        <pv-card id="card-palestin" style="width: 20em">
        <template #header>
            <img src="../../../../public/niñacomiendo.jpg" alt="sequia" width="320" height="258"/>
        </template>
        <template #title> Apoya a las familias afectadas por la sequía en el Cuerno de África </template>
        <template #content>
            <p>
                Las comidas compartidas proporcionarán apoyo en efectivo de emergencia a las familias afectadas por la
                sequía en Etiopía, Kenia y Somalia.
            </p>
        </template>
        <template #footer>
            <button id="donar-palestin">DONAR AHORA</button>
        </template>
    </pv-card>
    </div>
</div> -->

</template>

<script>

</script>

<style>
#text-box2{
    left:37px;
    top:55px;
}
#meta{
    top:60px;
}
#triangulos{
    width: 150px;
    top:-45px;
    left:40px;
}
#boton-siguiente{
    top:-10px;
    left: 500px;
}
#selec{
    top:50px;
}
#boton-editar{
    top:75px;
    left:220px;
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
    background: #409EFF;
    border: none;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
#formato{
    color: #606266;
    left:40px;
    top:190px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 12px;
}
#doc{
    top:80px;
    left:250px;
    color: #606266;
}
#docum{
    left:220px;
    width: 20px;
    top:57px;
}
#container{
    top:-40px;
}
</style>