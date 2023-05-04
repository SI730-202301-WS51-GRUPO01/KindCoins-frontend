<template>
 <div class="sidemenu">
        <pv-accordion class="accordion-custom" :activeIndex="0">
            <pv-accordiontab>
                <template #header>
                    <span style="font-weight:bold; font-size: 14px;">Explorar</span>
                </template>
                <p style="font-size: 14px">Explorar</p>
                </pv-accordiontab>
                <pv-accordiontab>
                    <template #header>
                        <span style="font-weight:bold; font-size: 14px;">Noticias</span>
                </template>
                <p style="font-size: 14px">Noticias</p>
                </pv-accordiontab>
                <pv-accordiontab>
                    <template #header>
                        <span style="font-weight:bold; font-size: 14px;">Campañas</span>
                    </template>
                    <p style="font-size: 14px">Campañas</p>
                </pv-accordiontab>
            </pv-accordion>
    </div>
</template>

<style>
.side-menu{
    margin-top:20px;
}
.accordion-custom{
    width: 200px;
    height: 48px;
    padding: 12px 20px;
    gap: 17px;
}
</style>