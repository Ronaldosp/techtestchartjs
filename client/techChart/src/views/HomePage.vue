<template>
    <div>
        <Chart/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Chart from "../components/Chart.vue"
import { useChartStore } from '../stores/chart'
export default {
    name:"HomePage",
    data(){
        return{

        }
    },
    computed:{
        
    },
    components:{ 
        Chart
    },
    methods:{
        ...mapActions(useChartStore,["showChartData"])
    },
    created(){
        this.showChartData()
    }
}
</script>

<style>

</style>