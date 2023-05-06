<template>
  <div class="app-container">
    <AppHeader v-if="$route.meta.showHeader"/>
    <div class="main-container">
      <AppBreadcrumbComponent/>
      <RouterView/>
    </div>
  <AppSideMenu v-if="$route.meta.showSideMenu"/>
  <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import CampaignCreated from "./components/campaign-section/launch-campaign/CampaignCreated.component.vue";
import AppSideMenu from "./components/layout/AppSideMenu.component.vue";
import CampaignData from "./components/campaign-section/launch-campaign/CampaignData.component.vue";
import Login from "./components/user-start/login.vue";
import SignUp from "./components/user-start/signup.vue";
import ThankU from "./components/user-start/thanku.vue";
import Congratulations from "./components/user-start/congratulations.vue";
import SignUpWith from "./components/user-start/signupwith.vue";
import DonationDetails from "./components/campaign-section/launch-campaign/DonationDetails.component.vue";
import MembershipTipe from "./components/campaign-section/launch-campaign/MembershipTipe.component.vue";
import Preview from "./components/campaign-section/launch-campaign/Preview.component.vue";
import AppHome from "./components/layout/AppHome.vue";
import PaymentMethod from "./components/payment-methods/PaymentMethod.component.vue";
import AppBreadcrumbComponent from "./components/layout/AppBreadcrumb.component.vue";

export default {
  name: 'App',
  components: { AppFooter, AppHeader, CampaignCreated, AppSideMenu, CampaignData, Login, SignUp,
     ThankU, Congratulations, SignUpWith, DonationDetails, MembershipTipe, Preview, AppHome, PaymentMethod}, 
  data(){
    return{
      drawer: false,
      items:[
        {label: "SignUpWith", to:"/sign-up-with"},
        {label:"Login", to:"/login"},
        {label: "SignUp", to:"/signup"},
        {label: "ThankU", to:"/thank-u"},
        {label:"Congratulations", to:"/congratulations"},
        {label:"Home", to:"/home"},
        {label:"DonationDetails", to:"/donation-details"},
        {label:"MembershipTipe", to:"/membership-tipe"},
        {label:"Preview", to:"/preview"},
        {label:"PaymentMethod", to:"/payment-method"},
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 78vh;
    margin: 0;
    padding: 0;
}
.main-container {
    padding-bottom: calc(8vh + 1.5rem); 
}
</style>