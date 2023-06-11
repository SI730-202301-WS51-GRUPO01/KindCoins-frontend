<template>
    <div class="app-container">
        <AppHeader/>
    </div>
    <div class="card mx-4 ">
        <div class="flex flex-row ">
            <div>
                <AppSideMenu/>
            </div>
            <div class="w-full mx-5">
                <div class=" bg-white border-round-lg">
                    <router-view></router-view>
                </div>   
            </div>
            <div class="mb-3">
                <SelectMethod/>
            </div>
        </div>
    </div>
    <div>
        <AppFooter/>
    </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import AppSideMenu from "@/components/layout/AppSideMenu.component.vue";
import SelectMethod from "@/components/payment-methods/SelectMethod.component.vue";

export default {
name: 'AppMainContent',
components: { AppHeader,AppSideMenu,AppFooter, SelectMethod }, 
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
  