<template> 
  <div>
    
    <AppHeader></AppHeader>
    <p>Hola mundo</p>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/layout/AppHeader.component.vue"
import AppFooter from "@/components/layout/AppFooter.component.vue"


export default {
  name: 'App',
  components: {AppFooter,AppHeader},

}
</script>

<style scoped>

</style>
