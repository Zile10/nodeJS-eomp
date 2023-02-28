<template lang="">
  <div class="vh-100">
          <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form>
        
                      <div class="row">
                        <div class="col-md-6 mb-4">
        
                          <div class="form-outline">
                            <input type="text" id="userName" class="form-control form-control-lg" required="required">
                            <label class="form-label" for="userName">UserName</label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4">
        
                          <div class="form-outline">
                            <input type="text" id="firstName" class="form-control form-control-lg" required="required">
                            <label class="form-label" for="firstName">FirstName</label>
                          </div>
        
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">
        
                          <div class="form-outline datepicker w-100">
                            <input type="text" class="form-control form-control-lg" id="LastName" required="required">
                            <label for="lastName" class="form-label">LastName</label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4">
        
                          <h6 class="mb-2 pb-1">Gender: </h6>
        
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                              value="option1" checked>
                            <label class="form-check-label" for="femaleGender">Female</label>
                          </div>
        
                          <div class="form-check form-check-inline" required="required">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                              value="option2" />
                            <label class="form-check-label" for="maleGender">Male</label>
                          </div>
        
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                              value="option3" />
                            <label class="form-check-label" for="otherGender">Other</label>
                          </div>
        
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
        
                          <div class="form-outline">
                            <input type="email" id="emailAddress" class="form-control form-control-lg" required="required">
                            <label class="form-label" for="emailAddress">Email</label>
                          </div>
        
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
        
                          <div class="form-outline">
                            <input type="password" id="password" class="form-control form-control-lg" required="required">
                            <label class="form-label" for="password">Password</label>
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
export default {
    
}
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