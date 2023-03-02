<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">The Watchmen</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                  <li class="nav-item">
                    <router-link class="txt" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/admin">admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/sign_in">login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="txt" to="/userProfile">register</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
  name: 'navbar_bar'  
}
</script>
<style>
.txt {
  text-decoration: none;
  transition: all 0.2s;
  color: #000;
  position: relative;
}
.txt:hover {
  /*text-decoration: underline;*/
  /*border-bottom: 2px solid rgb(58, 68, 44);*/
}

.txt:hover::after {
  content: '';
  height: 2px;
  width: 100%;
  background-color: rgb(58, 68, 44);
  position: absolute;
  bottom: 0;
  left: 0;
}

.body {
  background-color: #D4C4C4B2 !important;
  ;
  position: fixed;
}
    /*.nav-item {
        background: grey;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 25px;
        width: 75px;
        left: 307px;
        top: 34px;
        border-radius: 20px;

    }*/
</style>