<template>
  <div class="signUp">
    <div class="main-page">
      <div class="row">
        <div class="col-md-6">
          <form class="form custom-form" @submit.prevent="Signup()" method="post">
            <p class="small text-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <h2>Sign Up</h2>
            <h4>Enter your email address to create your account on SportClub</h4>
            <label>FirstName</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              class="form-control"
              name="firstName"
              placeholder="FirstName"
              required
              autofocus
            />
            <label>LastName</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              class="form-control"
              name="lastName"
              placeholder="LastName"
              required
              autofocus
            />
              <label>NickName</label>
            <input
              type="text"
              id="nickName"
              v-model="form.nickName"
              class="form-control"
              name="nickName"
              placeholder="NickName"
              required
              autofocus
            />
            <label>Email</label>
            <input
              type="email"
              id="inputEmail"
              v-model="form.email"
              class="form-control"
              name="Email"
              placeholder="Email address"
              required
              autofocus
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              v-model="form.password"
              class="form-control"
              name="password"
              placeholder="Password"
              minlength="6"
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              id="inputPassword"
              v-model="form.repeatpassword"
              class="form-control"
              name="repeatpassword"
              placeholder="Confirm Password"
              minlength="6"
              required
            />
            <p v-if="passworderror" class="text-danger">{{ passworderror }}</p>
            <label class="checkbox-inline">
              <input type="checkbox" v-model="isagree" name="checkbox" /> I
              understand and agree to
              <a href>Privacy Policy</a> and
              <a href>Terms of Services</a>
            </label>
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-sm-6">
                <a href="/login">
                  <div>
                    <button class="btn" :disabled="!isagree || loader" type="submit">
                      <span
                        v-if="loader"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span
                        class="mr-1"
                        v-bind:class="[
                          formSubmit ? 'fa fa-spinner fa-spin' : ''
                        ]"
                      ></span>
                       {{ loader ? 'Loading...' : 'Create Account'  }}                      
                    </button>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <router-link v-bind:to="{path:'/'}">
                  <div class="link">
                    <p class="h5 mb-2">
                      <b-icon icon="box-arrow-right"></b-icon>Log In
                    </p>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="row">
              <img class="gogle" src="../../../assets/google.png" />
              <a href="www.google.com" class="google" type="submit">Sign Up with Google</a>
            </div>

            <div class="row">
              <img class="gogle" src="../../../assets/facebook.png" />
              <a href="www.facebook.com" class="fb" type="submit">Sign Up with Facebook</a>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <img class="align-content" src="../../../assets/sportclub.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SignUp.ts"></script>

<style scoped lang="scss">
@import "../account.scss";
</style>
