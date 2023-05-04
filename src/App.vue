<template>
  <div class="app-container">
    <div class="content-container">
      <AppHeader></AppHeader>
      <nav>
        <AppSideMenu></AppSideMenu>
      </nav>
      <main>
        <CampaignCreated></CampaignCreated>
      </main>
      <aside>

      </aside>
  </div>
  <AppFooter></AppFooter>
</div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import CampaignCreated from "./components/campaign-section/launch-campaign/CampaignCreated.component.vue";
import AppSideMenu from "./components/layout/AppSideMenu.component.vue";
import CampaignData from "./components/campaign-section/launch-campaign/CampaignData.component.vue";

export default {
  name: 'App',
  components: { AppFooter, AppHeader, CampaignCreated, AppSideMenu, CampaignData },
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-footer {
  margin-top: auto;
}
.content-container{
  flex-grow: 1;
}
</style>