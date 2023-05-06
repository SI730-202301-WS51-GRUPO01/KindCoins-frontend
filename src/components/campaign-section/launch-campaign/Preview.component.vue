<template>
    <div id="div-camps">
        <span id="first-sect" style=" font-family: 'Roboto';color: #909399;">Campañas /</span>
        <span style="font-family: 'Roboto';color: #131414;">Crear campaña </span>
    </div>
    <div id="box-section-camp">

        <span id="page-camp">Paso 5 de 5 </span>
        <span id="preview-camp">Vista Previa</span>
        <div id="img-section-camp" style="height: 36%;position: relative;width: 566px;">
            <img id="img-camp" src="https://i.postimg.cc/MHScPFk3/imgs.jpg">
            <div id="info-img-camp">
                <span id="subtittle-img-info" style="font-family: 'Roboto';">Alimenta familias en Palestina</span>

                <img id="icon-money"
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCp-4_xr8CgEz-6Jc3LQJfcukk0NmLZoj9E38ZGycdahtY-i8m">
                <span id="money" style="font-family: 'Roboto';color: #687781;">1.500.000 coins</span>
                <span id="donantes"> 49.162 donantes</span>
                <!-- falta  hacer pipip <vue-progress-bar></vue-progress-bar>-->
                <pv-progressbar :value="50 / 100" style="top:95px;left: 90px;width: 300px;"></pv-progressbar>
                <span style="left:400px;top:80px;font-family: 'Roboto';font-size: 12px;"> 50%</span>
                <img id="icon-person"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmCiGI5gBndBcnvqEDU04S92Ye0J1CWhraouP-xFUFZ5gKwr4">
                            <span style="color: #687781;font-family: 'Roboto';font-size: 12px;top:61%;z-index: 3;left: 100px;">750.000
                                coins</span>    
            </div>
            
        </div>

        <div id="resume-camp">
            <span id="tittle-resume-camp"> Resumen</span>
            <p id="subinfo-resume-camp">Las comidas compartidas proporcionarán a las familias de Palestina un apoyo en
                efectivo para que puedan comprar alimentos en tiendas locales.</p>
            <p id="first-info-camp">Dos tercios de la población de Gaza —alrededor de 1.3 millones de personas— no pueden
                alimentar a sus familias debido a décadas de conflicto. Los disturbios políticos en la Franja de Gaza y los
                bloqueos continuos en el mar, la tierra y el aire a lo largo de Cisjordania dejan a la región dependiente de
                las importaciones. Esto significa que Palestina es muy vulnerable a las crisis globales y al aumento de los
                precios de los alimentos. Como uno de sus mayores importadores de harina de trigo y aceite, la guerra en
                Ucrania ha llevado al aumento de los precios de los alimentos en Palestina - un 3.7% de aumento en un año.
            </p>
            <p id="second-info-camp">El Programa Mundial de Alimentos está sobre el terreno proporcionando apoyo en efectivo
                a 300.000 palestinos vulnerables cada mes. La cuestión en Palestina no es la falta de alimentos, sino que la
                gente no puede permitirse comprarla. Es por eso que el WFP ofrece asistencia en efectivo – para que las
                familias puedan obtener los alimentos que necesitan mientras impulsan la economía local. Pueden gastar su
                dinero en más de 300 tiendas designadas en Cisjordania y Gaza. El WFP prioriza a las familias encabezadas
                por mujeres, a las personas con discapacidad y a las personas mayores con apoyo. </p>
        </div>

        <div id="text-boton">
            <img src="https://i.postimg.cc/Zqn5whW5/ni-os.jpg" id="kids-palestin">
            <!--   <div style="background: #FFDE59;
            border-radius: 4px; top:96%; left:30% ;width: 200px;text-align: center;"><button id="public-camp" style="border: none; background:transparent;color: #000000;font-family: 'Roboto';line-height: 24px;font-weight: 700;">Publicar</button></div>
                </div>-->
            <button id="donar-palestin2">Publicar</button>
        </div>
    </div >
 <pv-card id="card-palestin" style="width: 20em">
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
            <button id="donar-palestin">DONAR AHORA</button>
        </template>
    </pv-card>
</template>

<style>
    #div-camps {
        box-sizing: border-box;
        display: inline-block;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px 40px;
        gap: 40px;
        position: relative;
        width: 80%;
        height: 44px;
        left: 15%;
        top: 5px;
        border: 1px solid #DCDFE6;
        border-radius: 8px;
    }

    #page-camp {
        position: absolute;
        width: 74px;
        height: 24px;
        left: 307px;
        top: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        /* Icon-description */
        color: #687781;
    }

    #preview-camp {
        position: absolute;
        width: 76px;
        height: 24px;
        left: 5%;
        top: 3%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #000000;
    }
    /*---------------------- section info--------------------------*/
    #box-section-camp {
        position: relative;
        width: 29%;
        height: 1000px;
        left: 20%;
        top: 20px;
        background: #FFFFFF;
        border-radius: 5px;
        display:inline-block;
    }
    /*-----------------first Section-----*/
    #img-camp {
        position: absolute;
        width: 430px;
        height: 180px;
        top: 50px;
        z-index: 2;
        border-radius: 5px;
        margin: 10px 70px;
    }

    #info-img-camp {
        box-sizing: border-box;
        position: relative;
        width: 559px;
        height: 153px;
        left: 1%;
        top: 170px;
        z-index: 1;
        background: #FFFFFF;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
    }

    #subtittle-img-info {
        position: relative;
        height: 24px;
        left: 26.19%;
        right: 42.78%;
        top: 45%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #131414;
    }

    #icon-money {
        position: absolute;
        width: 30px;
        height: 20px;
        left: 10%;
        top: 90px;
        z-index: 2;
        border-radius: 5px;
    }

    #money {
        position: absolute;
        width: 86px;
        height: 20px;
        left: 16%;
        top: 92px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #687781;
    }

    #donantes {

        position: absolute;
        width: 90px;
        height: 20px;
        left: 390px;
        top: 92px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #687781;
    }

    #icon-person {
            z-index: 4;
        position: absolute;
        width: 10px;
        left: 67%;
        right: 9.38%;
        top: 64%;
        bottom: 9.38%;
        background: #687781;
    }

    /*--------------------text----------------------*/
    #resume-camp {
        box-sizing: border-box;
        position: relative;
        width: 559px;
        height: 39%;
        left: 1%;
        top: -30px;
        background: #FFFFFF;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
    }

    #tittle-resume-camp {
        position: relative;
        left: 40.72%;
        top: 2%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #131414;
    }

    #subinfo-resume-camp {
        position: relative;
        top: 4%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 24px;
        text-align: center;
        color: #000000;
    }

    #first-info-camp {
        position: relative;
        top: 6%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
        /* or 171% */
        text-align: center;
        color: #000000;
    }

    #second-info-camp {

        top: 7%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
        /* or 171% */
        text-align: center;
        color: #000000
    }

    #kids-palestin {
        position: absolute;
        width: 300px;
        height: 150px;
        left: 140px;
        top: 10px;
      
        border-radius: 5px;
    }

    #donar-palestin {
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

    #card-palestin {
      
        left: 69%;
        top: 100px;
    }

    #donar-palestin2 {
        top: 145px;
        left: 240px;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        gap: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #000000;
        line-height: 36px;
        background: #FFDE59;
        ;
        border: none;
        border-radius: 4px;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
     
    }
    #text-boton{
        position: relative;
        top:-40px;
        width: 563px;
        height: 200px;}

</style>

<script>
export default {
    name: 'Preview'
}
</script>
