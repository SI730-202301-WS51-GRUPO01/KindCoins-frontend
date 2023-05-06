import { createRouter, createWebHistory } from "vue-router";
import SignUpWith from "../components/user-start/signupwith.vue";
import Login from "../components/user-start/login.vue";
import Congratulations from "../components/user-start/congratulations.vue"

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
            redirect: 'SignUpWith',
        },
        {
            path:'/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/congratulations',
            name: Congratulations,
            component: Congratulations,
        }
    ]
})

export default router