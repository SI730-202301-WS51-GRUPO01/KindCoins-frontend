import { createRouter, createWebHistory } from "vue-router";
import SignUpWith from "../components/user-start/signupwith.vue";
import SignUp from "../components/user-start/signup.vue";
import Login from "../components/user-start/login.vue";
import Congratulations from "../components/user-start/congratulations.vue";
import ThankU from "../components/user-start/thanku.vue";
import AppHome from "../components/layout/AppHome.vue";
import CampaignData from "../components/campaign-section/launch-campaign/CampaignData.component.vue";
import CampaignDetails from "../components/campaign-section/launch-campaign/CampaignDetails.component.vue";
import Preview from "../components/campaign-section/launch-campaign/Preview.component.vue";
import DonationDetails from "../components/campaign-section/launch-campaign/DonationDetails.component.vue";
import MembershipTipe from "../components/campaign-section/launch-campaign/MembershipTipe.component.vue";
import SelectMethod from "../components/payment-methods/SelectMethod.component.vue";
import PaymentMethod from "../components/payment-methods/PaymentMethod.component.vue";
import AppMainContent from "../components/layout/AppMainContent.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/sign-up-with',
            name: 'SignUpWith',
            component: SignUpWith,
        },
        {
            path:'/',
            redirect: '/home',
        },
        {
            path:'/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/congratulations',
            name: 'Congratulations',
            component: Congratulations,
        },
        {
            path:'/sign-up',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path:'/thank-u',
            name: 'ThankU',
            component: ThankU,
        },
        {
            path:'/home',
            name: 'Home',
            component: AppHome,
        },
        {
            path: '/main-content',
            name: 'AppMainContent',
            component: AppMainContent,
            children: [
                {
                    path: 'campaign-data',
                    name: 'CampaignData',
                    component: CampaignData,
                },
                {
                    path: 'campaign-details',
                    name: 'CampaignDetails',
                    component: CampaignDetails,
                },
                {
                    path:'donation-details',
                    name: 'DonationDetails',
                    component: DonationDetails,
                },
                {
                    path:'membership-tipe',
                    name:'MembershipTipe',
                    component: MembershipTipe,
                },
                {
                    path:'payment-method',
                    name:'PaymentMethod',
                    component: PaymentMethod,
                },
                {
                    path:'preview',
                    name: 'Preview',
                    component: Preview,

                },
            ]
          }

    ]
})

export default router;
