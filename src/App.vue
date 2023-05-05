<template> 
  <div>
    
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"
import AppMain from './components/layout/AppMain.component.vue'

export default {
  name: 'App',
  components: {AppFooter,AppHeader,AppMain},

}
</script>

<style scoped>
*{
  background-color: #EBFFFD;
}
</style>
