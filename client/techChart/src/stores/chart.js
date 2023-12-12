import { defineStore } from 'pinia'
import axios from 'axios'

// const baseUrl = "http://localhost:3000"
const baseUrl = "https://chart.ronaldosp.online"

export const useChartStore = defineStore('chart',{
  state(){
    return{
    access_token: localStorage.access_token,
    chartData: {
      labels: [],
      datasets: [
          {
              label: 'Company Revenue',
              backgroundColor: '#f87979',
              data: []
          }
       ]
      },
    }
  },

  actions:{
    async login(form){
      try {
        console.log(form);
        const { data } = await axios({
          method: "POST",
          url : baseUrl + `/login`,
          data: form
        })
        console.log(data);
        localStorage.setItem("access_token" ,data.access_token)
        this.access_token = data.access_token
        this.$router.push('/')
        Swal.fire(`Login Successfull`)
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },

    async showChartData(){
      try {
        const { data } = await axios({
          method: "GET",
          url : baseUrl + `/charts`,
          headers:{
            access_token : localStorage.access_token
          }
        })
        const chart = data.chart.map((el)=>{
          return el.month
        })
        const chartData = data.chart.map((el)=>{
          return el.revenueLost
        })
        console.log(chart , chartData);
        this.chartData = {
          labels: chart,
          datasets: [
              {
                  label: 'Company Revenue',
                  backgroundColor: '#f87979',
                  data: chartData
              }
           ]
          }
      } catch (error) {
        console.log(error);
        if(error.response.data.message=="Unauthenticated"){
          Swal.fire(error.response.data.message)
          this.$router.push('/login')
        }
      }
    },

    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  }
})
