<template>
  <div class="standings">
    <h3>Bracket</h3>
    <div class="diagram">
      <div class="container">
        <div class="bracket forward">
          <div class="round">
            <div class="card" v-for="item in items" v-bind:key="item.id">
              <div class="match">
                <div class="team">
                  <div class="row brackets">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                  <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>           
          </div>
          <div class="round">
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
          </div>
          <div class="round semi">
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bracket final">
          <div class="round">
            <div class="card">
              <div class="match final">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
            <div class="match third winner">
              <h5>NBA Champions 2020</h5>
              <img src="../../../assets/rockets.png" height="40" width="40" class="winnerimg" />
              <!-- <div class="team">                
              </div>
              <div class="team">                
              </div>-->
            </div>
          </div>
        </div>
        <div class="bracket reverse">
          <div class="round">
            <div class="card" v-for="item in items" v-bind:key="item.id">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                  <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>           
          </div>
          <div class="round">
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
          </div>
          <div class="round">
            <div class="card">
              <div class="match">
                <div class="team">
                  <div class="row">
                    <div class="cols-6">
                      <img src="../../../assets/jazz.png" height="40" width="40" />
                    </div>
                    <div class="cols-6">
                      <img src="../../../assets/rockets.png" height="40" width="40" />
                    </div>
                  </div>
                </div>
                <div class="team">
                  <p>Pick a Team</p>
                   <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <h3>Bet on special events</h3>
    <b-row class="custom-standings" v-for="item in items" v-bind:key="item.id">
      <b-col cols="2">
        <b-icon-alert-circle></b-icon-alert-circle>
      </b-col>
      <b-col cols="4">
        <p>{{item.name}}</p>
      </b-col>
      <b-col cols="6">
        <select class="custom-select">
          <option selected>Stephan Curry</option>
          <option value="1">Start</option>
          <option value="2">End</option>
          <option value="3">Prizes</option>
        </select>
      </b-col>
    </b-row>
    <b-button pill variant="primary">Submit</b-button>
  </div>
</template>

<script lang="ts" src="./standings.ts"></script>

<style scoped lang="css">
@import "../standings.css";
</style>

