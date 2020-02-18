<template>
  <div class="profile">
    <div class="myprofile">
      <h5>My Account</h5>
      <div>
        <b-tabs align="center">
          <b-tab title="Edit Profile" active>
            <b-container class="profileinput">
              <b-row class="inbox">
                <b-col>
                  <img
                    src="../../../assets/profile.png"
                    height="80"
                    width="80"
                    class="image pro-logo"
                  />
                </b-col>
                <b-col></b-col>
                <div class="w-100"></div>
                <b-col>
                  <form class="form custom-form" @submit.prevent="Signup()" method="post">
                    <p class="small text-danger" v-if="errorMessage">{{ errorMessage }}</p>
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      class="form-control"
                      name="name"
                      placeholder="Name"
                      required
                      autofocus
                    />
                    <label>Team Name</label>
                    <input
                      type="text"
                      id="teamname"
                      v-model="form.teamname"
                      class="form-control"
                      name="teamname"
                      placeholder="Team Name"
                      required
                      autofocus
                    />
                    <label>Email Address</label>
                    <input
                      type="email"
                      id="inputemail"
                      v-model="form.inputemail"
                      class="form-control"
                      name="inputemail"
                      placeholder="Email"
                      required
                    />
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-sm-6">
                        <a href="/login">
                          <div></div>
                        </a>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <button class="btn">
                      <img class="gogle" src="../../../assets/facebook.png" />
                      Connect to facebook
                    </button>

                    <button class="btn">
                      <img class="gogle" src="../../../assets/twitter.png" />Connected
                    </button>
                  </div>
                </b-col>
                <b-col>
                  <form class="form custom-form" @submit.prevent="Signup()" method="post">
                    <p class="small text-danger" v-if="errorMessage">{{ errorMessage }}</p>
                    <label>Username</label>
                    <input
                      type="text"
                      id="username"
                      v-model="form.username"
                      class="form-control"
                      name="username"
                      placeholder="Username"
                      required
                      autofocus
                    />
                    <label>Country</label>
                    <input
                      type="text"
                      id="country"
                      v-model="form.country"
                      class="form-control"
                      name="country"
                      placeholder="Country"
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
                    <div class="clearfix"></div>
                    <div class="row"></div>

                    <b-button pill variant="primary" class="primary btn">Save</b-button>
                  </form>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Friends">
            <b-container>
              <b-card>
                <b-row class="my-1">
                  <label for="input-small">My Friends</label>
                  <b-form-input id="input-small" size="sm" placeholder="Enter name"></b-form-input>
                  <b-button variant="primary">Search</b-button>
                </b-row>

                <b-row class="friendsprofile">
                  <b-col>
                    <div>
                      <img src="../../../assets/p1.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>tinyleopard720</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <img src="../../../assets/p2.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>jenny67</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <img src="../../../assets/p3.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>sadoanda176</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <img src="../../../assets/addfriend.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>Add Friend</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
                <h5>Received requets</h5>             

                <b-row class="friendsprofile">
                  <b-col>
                    <div>
                      <img src="../../../assets/p4.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>tinyleopard720</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <img src="../../../assets/p5.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>jen671</b-card-text>
                      </b-card>
                    </div>
                  </b-col>

                  <b-col>
                    <div>
                      <img src="../../../assets/p6.png" />
                      <b-card height="80" width="80" img-alt="Image" img-top tag="article">
                        <b-card-text>blubear265</b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </b-container>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./profile.ts"></script>

<style scoped lang="css">
@import "../profile.css";
</style>
