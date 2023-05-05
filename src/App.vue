<template> 
  <div>
    
    <AppHeader></AppHeader>
    <AppSideBar></AppSideBar>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import AppSideBar from "./components/layout/AppSideBar.component.vue";


export default {
  name: 'App',
  components: {AppFooter,AppHeader,AppSideBar},

}
</script>

<style scoped>
*{
  background-color: #EBFFFD;
}
</style>
