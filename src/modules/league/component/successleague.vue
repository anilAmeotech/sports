<template>
  <div class="successleague">
    <h5>League Successfull Created</h5>
    <b-container class="profileinput">
      <b-row class="inbox">
        <b-col>
          <form class="form custom-form" @submit.prevent="Signup()" method="post">
            <p class="small text-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <label>League Name</label>
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
            <p v-if="passworderror" class="text-danger">{{ passworderror }}</p>
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-sm-6">
                <a href="/login">
                  <div></div>
                </a>
              </div>
            </div>
          </form>
        </b-col>
        <b-col>
          <form class="form custom-form" @submit.prevent="success()" method="post">
            <p class="small text-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <label>League ID</label>
            <input
              type="number"
              id="leagueid"
              v-model="form.leagueid"
              class="form-control"
              name="leagueid"
              placeholder="League Id"
              required
              autofocus
            />
            <label>Max Team</label>
            <input
              type="number"
              id="maxteam"
              v-model="form.maxteam"
              class="form-control"
              name="maxteam"
              placeholder="Max Team"
              required
              autofocus
            />
            <div class="clearfix"></div>
            <div class="row"></div>
          </form>
        </b-col>
      </b-row>
      <h5>Invite your friends</h5>
      <b-row class="profile">
        <b-col>
          <img src="../../../assets/p1.png" />
          <b-card
            height="80"
            width="80"
            img-alt="Image"
            img-top
            tag="article"
            style="border-radius: 42px;"
          >
            <b-card-text>tinyleopard720</b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <img src="../../../assets/p2.png" />
          <b-card
            height="80"
            width="80"
            img-alt="Image"
            img-top
            tag="article"
            style="border-radius: 42px;"
          >
            <b-card-text>jenny67</b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <img src="../../../assets/p3.png" />
          <b-card
            height="80"
            width="80"
            img-alt="Image"
            img-top
            tag="article"
            style="border-radius: 42px;"
          >
            <b-card-text>sadoanda176</b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <img src="../../../assets/p4.png" />
          <b-card
            height="80"
            width="80"
            img-alt="Image"
            img-top
            tag="article"
            style="border-radius: 42px;"
          >
            <b-card-text>jhon12</b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <div class="btn">
        <b-button pill>Make Bet</b-button>
        <b-button pill variant="primary">Get Shareable link</b-button>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts" src="./successleague.ts"></script>

<style scoped lang="css">
@import "../league.css";
</style>
