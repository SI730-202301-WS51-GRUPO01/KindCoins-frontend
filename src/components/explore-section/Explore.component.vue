<template>
<AppHeader/>
<div class="explore-section">
    <div class="grid-container ml-4">
        <div class="grid-item">
            <AppSideMenu></AppSideMenu>
        </div>
        <div class="grid-item">
            <h3>Tendencia</h3>
            <Galleria></Galleria>
            <h3>Explorar</h3>
            <CampaignCard></CampaignCard>
        </div>
    </div>
</div>    
</template>

<script>
import CampaignCard from '../explore-section/CampaignCard.component.vue';
import Galleria from '../explore-section/Galleria.component.vue';
import AppSideMenu from '../layout/AppSideMenu.component.vue';
import AppHeader from '../layout/AppHeader.component.vue';

export default{
    name: 'explore-section',
    components:{ CampaignCard, Galleria, AppSideMenu, AppHeader}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap');
.explore-section{
    min-height: 64.2vh;
}
.explore-section h3{
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
}
.grid-container{
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 1rem;
}
.grid-container .grid-item h3{
    margin: 1% 0;
}
</style>