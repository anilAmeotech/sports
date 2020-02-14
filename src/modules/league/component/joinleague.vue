<template>
  <div class="joinleague">
    <div class="headerballs">
      <h3>Join League</h3>
      <b-button href="/createleague" class="createbtn" pill variant="primary">Create league</b-button>
    </div>

    <div class="row balls" style="display: flex;">
      <img src="../../../assets/basketball.png" />
      <img src="../../../assets/ball.png" />
    </div>

    <div>
      <b-tabs align="center">
        <b-tab title="Public leagues">
          <b-row>
            <b-col cols="4">
              <select class="custom-select">
                <option selected>Sort by</option>
                <option value="1">Start date</option>
                <option value="2">End date</option>
                <option value="3">Prizes</option>
              </select>
            </b-col>
            <b-col cols="4"></b-col>
            <b-col cols="4">
              <b-icon-list></b-icon-list>
            </b-col>
          </b-row>
          <div class="box-header">
            <b-card-text class="float-left">League Name</b-card-text>
            <b-card-text class="float-center">Creator</b-card-text>
            <b-card-text class="float-right">Active Teams</b-card-text>
          </div>
          <div class="tablist" role="tablist">
            <b-row>
              <b-col cols="1">
                <b-icon-alert-circle></b-icon-alert-circle>
              </b-col>
              <b-col cols="8">
                <div no-body class="mb-1 custom-tab">
                  <a block href="#" v-b-toggle.accordion-1 variant="info">League 1</a>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <div class="collpase-content">
                      <b-card-text>
                        <div>
                          <b-table hover :items="items"></b-table>
                        </div>
                      </b-card-text>
                      <!-- <b-card-text>{{ text }}</b-card-text> -->
                    </div>
                  </b-collapse>
                </div>
              </b-col>
              <b-col cols="3">
                <b-button variant="primary" v-b-modal.my-modal>Join</b-button>
                <!-- The modal -->
                <b-modal id="my-modal">
                  <template v-slot:modal-header="{}">
                    <div class="popup" style="float:left; width:100%;">
                      <h3>Terms and Conditions</h3>
                    </div>
                  </template>

                  <p>Please read carefully all terms and conditions</p>
                  <label class="checkbox-inline">
                    <input type="checkbox" name="checkbox" /> I
                    understand and agree to
                    <a href>Privacy Policy</a> and
                    <a href>Terms of Services</a>
                  </label>
                  <template v-slot:modal-footer="{}">
                    <div class="popup" style="float:left; width:100%;">
                      <b-button
                        pill
                        size="md"
                        style="width: 20%;"
                        variant="primary"
                        @click="Join()"
                      >Join</b-button>
                    </div>
                  </template>
                </b-modal>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="1">
                <b-icon-alert-circle></b-icon-alert-circle>
              </b-col>
              <b-col cols="8">
                <div no-body class="mb-1 custom-tab">
                  <a block href="#" v-b-toggle.accordion-2 variant="info">League 2</a>
                  <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                    <div class="collpase-content">
                      <b-card-text>
                        I start opened because
                        <code>visible</code> is
                        <code>true</code>
                      </b-card-text>
                      <!-- <b-card-text>{{ text }}</b-card-text> -->
                    </div>
                  </b-collapse>
                </div>
              </b-col>
              <b-col cols="3">
                <b-button variant="primary">Join</b-button>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="1">
                <b-icon-alert-circle></b-icon-alert-circle>
              </b-col>
              <b-col cols="8">
                <div no-body class="mb-1 custom-tab">
                  <a block href="#" v-b-toggle.accordion-3 variant="info">League 3</a>
                  <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                    <div class="collpase-content">
                      <b-card-text>
                        I start opened because
                        <code>visible</code> is
                        <code>true</code>
                      </b-card-text>
                      <!-- <b-card-text>{{ text }}</b-card-text> -->
                    </div>
                  </b-collapse>
                </div>
              </b-col>
              <b-col cols="3">
                <b-button variant="primary">Join</b-button>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="1">
                <b-icon-alert-circle></b-icon-alert-circle>
              </b-col>
              <b-col cols="8">
                <div no-body class="mb-1 custom-tab">
                  <a block href="#" v-b-toggle.accordion-4 variant="info">League 4</a>
                  <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                    <div class="collpase-content">
                      <b-card-text>
                        I start opened because
                        <code>visible</code> is
                        <code>true</code>
                      </b-card-text>
                      <!-- <b-card-text>{{ text }}</b-card-text> -->
                    </div>
                  </b-collapse>
                </div>
              </b-col>
              <b-col cols="3">
                <b-button variant="primary">Join</b-button>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab title="Private League" active>
          <div class="row inputbox">
            <b-form-input placeholder="League ID"></b-form-input>
            <b-form-input placeholder="Password"></b-form-input>
            <b-button variant="primary" class="button">Search</b-button>
          </div>
          <h5>Active Invitations</h5>
          <div class="box-header">
            <b-card-text class="float-left">League Name</b-card-text>
            <b-card-text class="float-center">Creator</b-card-text>
            <b-card-text class="float-right">Active Teams</b-card-text>
          </div>
          <div>
            <div class="tablist" role="tablist">
              <b-row>
                <b-col cols="1">
                  <b-icon-alert-circle></b-icon-alert-circle>
                </b-col>
                <b-col cols="8">
                  <div no-body class="mb-1 custom-tab">
                    <a block href="#" v-b-toggle.accordion-1 variant="info">League 1</a>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                      <div class="collpase-content">
                        <b-card-text>
                          <div>
                            <b-table hover :items="items"></b-table>
                          </div>
                        </b-card-text>
                        <!-- <b-card-text>{{ text }}</b-card-text> -->
                      </div>
                    </b-collapse>
                  </div>
                </b-col>
                <b-col cols="3">
                  <b-button variant="primary">Accept</b-button>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="1">
                  <b-icon-alert-circle></b-icon-alert-circle>
                </b-col>
                <b-col cols="8">
                  <div no-body class="mb-1 custom-tab">
                    <a block href="#" v-b-toggle.accordion-2 variant="info">League 2</a>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                      <div class="collpase-content">
                        <b-card-text>
                          I start opened because
                          <code>visible</code> is
                          <code>true</code>
                        </b-card-text>
                        <!-- <b-card-text>{{ text }}</b-card-text> -->
                      </div>
                    </b-collapse>
                  </div>
                </b-col>
                <b-col cols="3">
                  <b-button variant="primary">Accept</b-button>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="1">
                  <b-icon-alert-circle></b-icon-alert-circle>
                </b-col>
                <b-col cols="8">
                  <div no-body class="mb-1 custom-tab">
                    <a block href="#" v-b-toggle.accordion-3 variant="info">League 3</a>
                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                      <div class="collpase-content">
                        <b-card-text>
                          I start opened because
                          <code>visible</code> is
                          <code>true</code>
                        </b-card-text>
                        <!-- <b-card-text>{{ text }}</b-card-text> -->
                      </div>
                    </b-collapse>
                  </div>
                </b-col>
                <b-col cols="3">
                  <b-button variant="primary">Accept</b-button>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="1">
                  <b-icon-alert-circle></b-icon-alert-circle>
                </b-col>
                <b-col cols="8">
                  <div no-body class="mb-1 custom-tab">
                    <a block href="#" v-b-toggle.accordion-4 variant="info">League 4</a>
                    <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                      <div class="collpase-content">
                        <b-card-text>
                          I start opened because
                          <code>visible</code> is
                          <code>true</code>
                        </b-card-text>
                        <!-- <b-card-text>{{ text }}</b-card-text> -->
                      </div>
                    </b-collapse>
                  </div>
                </b-col>
                <b-col cols="3">
                  <b-button variant="primary">Accept</b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts" src="./joinleague.ts"></script>

<style scoped lang="css">
@import "../league.css";
</style>
