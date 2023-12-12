<script>
import Navbar from './components/Navbar.vue'
export default{
  components:{
      Navbar
  }
}
</script>

<template>
<div>
  <div v-if="$route.name !== 'login'">
    <Navbar/>
    
  </div>
  <RouterView />
  </div>
</template>


