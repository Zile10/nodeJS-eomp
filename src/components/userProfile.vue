<template lang="">
  <div class="vh-100">
          <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form class="form" @submit.prevent="register">
        
                      <div class="row">
                        <div class="col-md-6 mb-4">
        
                          <div class="form-outline">
                            <input type="text" id="userName" class="form-control form-control-lg" required="required" placeholder="UserName">
                            <label class="form-label" for="userName" v-modal="payload.username"></label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4">
        
                          <div class="form-outline">
                            <input type="text" id="firstName" class="form-control form-control-lg" required="required" placeholder="firstName" >
                            <label class="form-label" for="firstName" v-modal="payload.firstName"></label>
                          </div>
        
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">
        
                          <div class="form-outline datepicker w-100">
                            <input type="text" class="form-control form-control-lg" id="LastName" required="required" placeholder="lastName" >
                            <label for="lastName" class="form-label" v-modal="payload.lastName"></label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4">
        
                          <div class="form-outline">
                            <input type="text" id="gender" class="form-control form-control-lg" required="required"  placeholder="Gender" >
                            <label class="form-label" for="gender" v-modal="payload.gender"></label>
                          </div>
        
                        </div>
                      </div>

                      <div class="col-md-6 mb-4 pb-2">
        
                        <div class="form-outline">
                          <input type="tel" id="cellNumber n " class="form-control form-control-lg" required="required"  placeholder="CellNumber" >
                          <label class="form-label" for="cellNumber" v-modal="payload.cellNumber"></label>
                        </div>
      
                      </div>
        
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
        
                          <div class="form-outline">
                            <input type="email" id="emailAddress" class="form-control form-control-lg" required="required"  placeholder="Email">
                            <label class="form-label" for="emailAddress" v-modal="payload.email"></label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
        
                          <div class="form-outline">
                            <input type="password" id="password" class="form-control form-control-lg" required="required" placeholder="Password">
                            <label class="form-label" for="password" v-modal="payload.pass"></label>
                          </div>
        
                        </div>

                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline datepicker">
                            <input type="text" class="form-control" id="exampleDatepicker1" placeholder="select a date">
                            <label for="exampleDatepicker1" class="form-label" v-modal="payload.joinDate"></label>
                          </div>
        
                        </div>

                      </div>  
                      <div class="mt-4 pt-2">
                        <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                      </div>
                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/sign_in"
                        class="fw-bold text-body"><u>Login here</u></a></p>
    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>
<script>
import {useStore} from 'vuex'
import {computed} from '@vue/runtime-core'
// import axios from "axios";

export default {
    setup() {
      const payload = {
        username: "",
            firstName: "",
            lastName: "",
            gender: "",
            cellNumber: "",
            email: "",
            pass: "",
            roleID: 3,
            joinDate: ""
      };
      const store = useStore();
      const register = ()=> {
        store.dispatch("register", payload);
          // Refresh
          store.dispatch("fetchUsers");
          console.log(payload.joinDate);
      }
      const userMsg = 
      computed( ()=>store.state.message )
      return {
        payload,
        userMsg,
        register
      }
},
};
</script>
<style scoped>

.card {
        border-radius: 6px 36px 6px 36px;
        background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        box-shadow: 23px 23px 46px #bebebe,
                   -23px -23px 46px #ffffff;
        box-shadow: 5px 15px
}
.register {
    text-decoration: none;
    color: #000;
}

    
</style>