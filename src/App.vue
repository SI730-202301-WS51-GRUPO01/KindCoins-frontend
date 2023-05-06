<template>
  <div class="app-container">
    <div class="content-container">
      <AppHeader></AppHeader>
      <CampaignCreated></CampaignCreated>
      <!-- <CampaignCreated></CampaignCreated> -->
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import CampaignCreated from "@/components/campaign-section/launch-campaign/CampaignCreated.component.vue";
import SelectMethod from "@/components/payment-methods/SelectMethod.component.vue";
import PaymentMethod from "@/components/payment-methods/PaymentMethod.component.vue";
import { RouterView } from "vue-router";
export default {
  name: 'App',
  components: { AppFooter, AppHeader, CampaignCreated, SelectMethod, PaymentMethod },
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex-grow: 1;
}

.app-footer {
  margin-top: auto;
}
</style>