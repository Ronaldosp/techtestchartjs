<template>
  <div class="background-login">
      <div
        class="container mt-5"
        style="
            display: flex;
            align-items: center;
            justify-content: center;
            align-items: center;
            max-width: 400px;
            height: 350px;
            width: 100%;
            background-color: #fff;
            padding: 30px 30px;
            border-radius: 5px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        "
      >
      <div class="container">
        <h5 style="
            font-family: serif;
            font-size: 135%;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
          ">Login</h5>
          <hr />
        <form style="text-align: center" @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email </label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="form.email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="form.password"
            />
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
      </div>
      </div>
  </div>
</template>

<script>
import {useChartStore} from "../stores/chart"
import { mapActions, mapState } from "pinia";
export default {
  name: "LoginPage",
  data() {
    return {
        form:{ 
            email : "",
            password: ""
        }
    };
  },
  computed: {},
  components: {},
  methods: {
    ...mapActions(useChartStore,["login"]),
    handleLogin(){
        this.login(this.form)
    }
  },
};
</script>

<style>
.background-login{
    background-color: #FA8072; 
  background-image: url(""); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
