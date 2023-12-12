<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TechChart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
      </ul>
        <button class="btn btn-outline-danger" type="submit" @click.prevent="logout" >Logout</button>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useChartStore } from '../stores/chart'
export default {
    name:"Navbar",
    data(){
        return{

        }
    },
    computed:{

    },
    components:{

    },
    methods:{
        ...mapActions(useChartStore,["logout"]),

    },
    created(){

    }
}
</script>

<style>

</style>