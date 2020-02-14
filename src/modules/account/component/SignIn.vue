<template>
  <div class="SignIn">
    <div class="main-page">
      <div class="row">
        <div class="col-md-6">
          <form class="form custom-form" @submit.prevent="SignIn()" method="post">
            <h2>Log In</h2>
            <h4>Enter your login and password to access your account on SportClub</h4>
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
              required
            />

            <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <div class="row">
              <div class="col-sm-6">
                <a href="/league">
                  <div>
                    <button class="btn" type="submit">Sign In</button>
                  </div>
                </a>
              </div>

              <div class="col-sm-6">
                <a href="/signup">
                  <div class="link">
                    <p class="h5 mb-2">
                      <b-icon icon></b-icon>Create Account
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <img class="gogle" src="../../../assets/google.png" />
              <a href="www.google.com" class="google" type="submit">Log In with Google</a>
            </div>

            <div class="row">
              <img class="gogle" src="../../../assets/facebook.png" />
              <a href="www.facebook.com" class="fb" type="submit">Log In with Facebook</a>
            </div>
          </form>
        </div>
        <div class="col-md-6 imgstyle">
          <img class="align-content" src="../../../assets/sportclub.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SignIn.ts"></script>

<style scoped lang="scss">
@import "../account.scss";
</style>
