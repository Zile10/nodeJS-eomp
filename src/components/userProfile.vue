<template>
  <div class="container-fluid">
      <div class="row">
          <h2 class="display-2">Registration</h2>
      </div>
      <div class="row">
          <div class="col">
              <form class="form" @submit.prevent="signUp">
                  <div class="form-control-wrapper">
                  <span class="inline">
                    <input class="form-control" type="text" placeholder="Username" required v-model="payload.username"/>
                    <i class="bi bi-person"></i>
                  </span>
                </div>
                  <div class="form-control-wrapper">
                  <span class="inline">
                    <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>
                    <i class="bi bi-person"></i>
                  </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                      <i class="bi bi-person"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                      <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellNumber" maxlength="12">
                      <i class="bi bi-telephone-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="email" class="form-control" placeholder="Email" v-model="payload.email">
                      <i class="bi bi-envelope"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="password" class="form-control" placeholder="Password" v-model="payload.pass">
                      <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                      <i class="bi bi-link"></i>
                    </span>
                </div>
                <div class="form-control-wrapper span-2">
                    <span class="inline">
                      <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                    </span >
                </div>
                <div class="form-control-wrapper span-2">
                  <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                </div>
                <div class="form-control-wrapper span-2">
                  <button type="submit" class="btn btn-success w-100">Register</button>
                </div>
            </form>
          </div>
      </div>
  </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
  setup() {
    const payload = {
        username: '',
        firstName: '',
        lastName: '',
        gender: '',
        cellNumber: '',
        email: '',
        pass: '',
        userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
        joinDate: ''
      };
    const store = useStore();
    const signUp = ()=> {
        store.dispatch("register", payload);
        // Refresh
        store.dispatch("fetchUsers");
    }
    const userMsg =
    computed( ()=>store.state.message )
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script><style scoped>
.form {
  border-radius: 6px 36px 6px 36px;
  background: -webkit-linear-gradient(to right, #F7797D, #FBD786, #C6FFDD);
  background: linear-gradient(to right, #F7797D, #FBD786, #C6FFDD);
  box-shadow: 23px 23px 46px #BEBEBE, -23px -23px 46px #FFFFFF;
  box-shadow: 5px 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px 15px;
  max-width: 800px;
  margin: auto;
}
.register {
  text-decoration: none;
  color: #000;
}
.span-2 {
  grid-column: span 2;
}

/* input {
  position: relative;
  width: 250px;
  color: black;
  padding: 15px;
  font-weight: bold;
} */
.user {
  color: black;
}
input {
  border-color: #000;
  padding: 10px;
  outline: none;
  color: black;
  background: transparent;
  transition: 1s;
  border-bottom-left-radius: 10px;
}
 
</style>