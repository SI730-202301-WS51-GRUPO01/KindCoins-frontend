<template>

    <template>
    </template>
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
                <p id="descrip">Nombre de la campaña</p>
            </div>
    
            <div id="text-area">
                <Textarea id="text-box" v-model="value" rows="5" cols="75"></Textarea>
            </div>
            <div id="text-selec">
                <p id="selec">Seleccione los tipos de donaciones que desea recibir</p>
            </div>
            <div id="text-meta">
                <p id="meta">Meta</p>
            </div>
            <div id="area-username">
                <span class="p-float-label">
                <Textarea v-model="value" :textarea="{style: {marginTop: '1.5em'}}" rows="3" cols="75"></Textarea>
                <label>Ingrese cantidad de coins</label>
                </span>
            </div>
            <div>
                <router-link to="/campaign-details">
                    <button id="boton-siguiente">SIGUIENTE</button>
                </router-link>
            </div>
        </div>
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
    
    </template>
    
    <script></script>
    
    <style>
    #div-camps{
            box-sizing: border-box;
            display: inline-block   ;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 40px;
            gap: 40px;
            position: relative;
            width: 80%;
            height: 44px;
            left: 15%;
            top: 25px;
            /* Border/base */
            border: 1px solid #DCDFE6;
            border-radius: 8px;
    }
    #box-content{
        position: absolute;
        width: 670px;
        height: 531px;
        left: 353px;
        top: 220px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    #flecha{
        width: 20px;
        margin-left: 30px;
        margin-top: 35px;
    }
    #paso{
        position: absolute;
        top: -25px;
        left: 290px;
        width: 74px;
        height: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #687781;
    }
    #text-box{
        left: 38px;
        top: 25px;
    }
    #descrip{
        left:40px;
        top:20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
    }
    #selec{
        top: 35px;
        left: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        color: #000000;
    }
    #meta{
        top: 100px;
        left: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        color: #000000;
    }
    textarea {
      line-height: 1.5;
      padding-top: 1em;
    }
    #area-username{
        left:37px;
        top:110px;
    }
    #donar-palestin{
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
    #card-palestin{
        position: absolute;
        left: 70%;
        top: 200px;
    }
    #card-img{
        left: -200px;
        top:-20px;
    }
    #boton-siguiente{
        left:480px;
        top: 120px;
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
        background: #FFDE59;
        border: none;
        border-radius: 4px;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
    }
    #text-campañas{
        left:1333px;
        top: 150px;
    }
    #lupita{
        left: 1623px;
        width: 25px;
        top:125px;
    }
    </style>