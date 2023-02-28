<template lang="">
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <a class="register"><strong>Register</strong></a>
              <div class="userDetails"><input type="text" required="required"><span class="userDets">UserName</span></div>
              <div class="userDetails"><input type="text" required="required"><span class="userDets">FirstName</span></div>
              <div class="userDetails"><input type="text" required="required"><span class="userDets">LastName</span></div>
              <div class="userDetails"><input type="text" required="required"><span class="userDets">Email</span></div>
              <div class="userDets"><input type="password" required="required  "><span>Password</span></div>
              <button class="btn btn-primary" type="submit">login</button>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.card {
        display: flex;
        justify-content: center;
        margin: auto;
        align-items: center;
        min-height: 300px;
        width: 360px;
        flex-direction: column;
        gap: 35px;
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