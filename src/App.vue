<template> 
  <div>
    
    <AppHeader></AppHeader>
    <DonationDetails></DonationDetails>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import DonationDetails from './components/campaign-section/launch-campaign/DonationDetails.component.vue'



export default {
  name: 'App',
  components: {AppFooter,AppHeader,DonationDetails},

}
</script>

<style scoped>

</style>
