<template>
    <div class="app-container">
        <AppHeader/>
    </div>
    <div class="card mx-4">
        <div class="flex flex-row ">
            <div>
                <AppSideMenu/>
            </div>
            <div class="w-full">
                <router-view></router-view>
            </div>
            <div class="">
                <CampaignCard/>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppSideMenu from "@/components/layout/AppSideMenu.component.vue";
import CampaignCard from "@/components/campaign-section/my-campaigns/CampaignCard.component.vue";
import CampaignData from "../campaign-section/launch-campaign/CampaignData.component.vue";

export default {
name: 'AppMainContent',
components: { AppHeader,AppSideMenu,CampaignCard, CampaignData }, 
data(){
    return{
    };
},
};
</script>

<style scoped>
.side-menu {
  flex: 0 0 auto;
}
</style>
  