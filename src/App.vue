<template>
  <RouterView />
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

export default {
  name: 'App',
  components: { AppFooter, AppHeader, CampaignCreated, AppSideMenu, CampaignData, Login, SignUp,
     ThankU, Congratulations, SignUpWith}, 
  data(){
    return{
      drawer: false,
      items:[
        {label: "SignUpWith", to:"/"},
        {label:"Login", to:"/login"},
        {label: "SignUp", to:"/signup"},
        {label: "ThankU", to:"/thank-u"},
        {label:"Congratulations", to:"/congratulations"}
      ],
    };
  },
};
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