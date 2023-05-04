<template> 
  <div>
    
    <AppHeader></AppHeader>
    <!-- <DonationDetails></DonationDetails> -->
    <GoogleMap></GoogleMap>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import DonationDetails from './components/campaign-section/launch-campaign/DonationDetails.component.vue'
import GoogleMap from './components/campaign-section/launch-campaign/GoogleMap.component.vue'
/* import GPS4Copia from './components/campaign-section/launch-campaign/GPS4 - copia.vue' */



export default {
  name: 'App',
  components: {AppFooter,AppHeader,DonationDetails,GoogleMap},

}
</script>

<style scoped>

</style>
