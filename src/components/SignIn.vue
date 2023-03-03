<template>
  <div class="container m-auto mt-5">
    <div class="cards">
      <div class="card-body">
        <a class="signIn">Login</a>
        <div class="userInput">
          <input type="text" required /><span>Email Address</span>
        </div>
        <div class="userInput">
          <input type="password" required /><span>Password</span>
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
        <p class="text-center text-muted mt-5 mb-0">
          Already have an account?
          <a href="userProfile" class="fw-bold text-body"><u>Login here</u></a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Login_component",
  setup() {
    const payload = {
      email: "",
      pass: "",
    };
    const store = useStore();
    const login = () => {
      store.dispatch("login", payload);
      // Refresh
      store.dispatch("fetchUsers");
    };
    const userMsg = computed(() => store.state.message);
    let user = computed(() => store.state.user)
    // if (user) {
      
    // }
    return {
      payload,
      userMsg,
      user,
      login,
    };
  },
};
</script>
<style scoped>
.signIn {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  text-decoration: none;
}
.cards {
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  min-height: 300px;
  width: 360px;
  flex-direction: column;
  gap: 35px;
  border-radius: 6px 36px 6px 36px;
  background: -webkit-linear-gradient(to right, #F7797D, #FBD786, #C6FFDD);
  background: linear-gradient(to right, #F7797D, #FBD786, #C6FFDD);
  box-shadow: 23px 23px 46px #BEBEBE, -23px -23px 46px #FFFFFF;
  box-shadow: 5px 15px;
}
.userInput {
  position: relative;
  width: 250px;
  color: black;
  padding: 15px;
  font-weight: bold;
}
.user {
  color: black;
}
.userInput input {
  width: 90%;
  padding: 10px;
  outline: none;
  color: black;
  background: transparent;
  transition: 1s;
  border-bottom-left-radius: 10px;
}
.userInput span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 20px;
  padding: 10px;
  pointer-events: none;
  font-size: large;
  color: black;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}
.userInput input:valid ~ span,
.userInput input:focus ~ span {
  transform: translateX(113px) translateY(-20px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: black;
  letter-spacing: 0.2em;
  color: #fff;
  border: zpx;
}
.btn {
  height: 45px;
  padding-bottom: 2rem;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  letter-spacing: 2px;
  margin-bottom: 1em;
}
.enter:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>