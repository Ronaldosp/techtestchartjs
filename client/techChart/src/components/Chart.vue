<template>
<div class="container" style="width:1000px">
  <Bar 
  :data="chartData" />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { mapState } from 'pinia'
import { useChartStore } from '../stores/chart'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name:"BarChart",
    props:[""],
    data(){
        return{
            
        }
    },
    components:{
      Bar
    },
    methods:{

    },
    computed:{
        ...mapState(useChartStore,["chartData"])
    },
    created(){

    }

}
</script>

<style>

</style>