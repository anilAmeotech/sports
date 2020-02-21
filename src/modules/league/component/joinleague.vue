<template>
  <div class="joinleague">
    <div class="headerballs">
      <h3>Join League</h3>
      <b-button href="/createleague" class="createbtn" pill variant="primary">Create league</b-button>
    </div>
    <div>
      <b-tabs align="center">
        <b-tab title="NBA">
          <div class="container">
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
                  <b-row v-for="item in items" v-bind:key="item.name">
                    <b-col cols="1">
                      <b-icon-alert-circle></b-icon-alert-circle>
                    </b-col>
                    <b-col cols="8">
                      <div no-body class="mb-1 custom-tab">
                        <a
                          block
                          href="#"
                          v-b-toggle.v-bind:id="item.id"
                          variant="info"
                        >{{item.name}}</a>
                        <b-collapse
                          v-bind:id="item.id"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <div class="collpase-content">
                            <b-card-text>this is demo page</b-card-text>
                          </div>
                        </b-collapse>
                      </div>
                    </b-col>
                    <b-col cols="3">
                      <b-button variant="primary" v-b-modal.my-modal>Join</b-button>

                      <b-modal id="my-modal">
                        <template v-slot:modal-header="{}">
                          <div class="popup" style="float:left; width:100%;">
                            <h3>Terms and Conditions</h3>
                          </div>
                        </template>

                        <p>Please read carefully all terms and conditions</p>
                        <label class="checkbox-inline">
                          <input type="checkbox" v-model="isagree" name="checkbox" /> I
                          understand and agree to
                          <a href>Privacy Policy</a> and
                          <a href>Terms of Services</a>
                        </label>
                        <template v-slot:modal-footer="{}">
                          <div class="popup" style="float:left; width:100%;">
                            <b-button
                              :disabled="!isagree"
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
                </div>
              </b-tab>
              <b-tab title="Private League" active>
                <div class="row inputbox">
                  <b-form-input placeholder="League ID"></b-form-input>
                  <b-form-input placeholder="Password"></b-form-input>
                  <b-button variant="primary" class="button">Search</b-button>
                </div>
                <div class="box-header">
                  <b-card-text class="float-left">League Name</b-card-text>
                  <b-card-text class="float-center">Creator</b-card-text>
                  <b-card-text class="float-right">Active Teams</b-card-text>
                </div>
                <div>
                  <div class="tablist" role="tablist">
                    <b-row v-for="item in items" v-bind:key="item.id">
                      <b-col cols="1">
                        <b-icon-alert-circle></b-icon-alert-circle>
                      </b-col>
                      <b-col cols="8">
                        <div no-body class="mb-1 custom-tab">
                          <a
                            block
                            href="#"
                            v-b-toggle.v-bind:id="item.id"
                            variant="info"
                          >{{item.name}}</a>
                          <b-collapse
                            v-b-toggle.v-bind:id="item.id"
                            visible
                            accordion="my-accordion"
                            role="tabpanel"
                          >
                            <div class="collpase-content">
                              <b-card-text>{{item.items}}</b-card-text>
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
        </b-tab>
        <b-tab title="NFL" active>
          <div class="container">
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
                  <b-row v-for="item in items" v-bind:key="item.name">
                    <b-col cols="1">
                      <b-icon-alert-circle></b-icon-alert-circle>
                    </b-col>
                    <b-col cols="8">
                      <div no-body class="mb-1 custom-tab">
                        <a
                          block
                          href="#"
                          v-b-toggle.v-bind:id="item.id"
                          variant="info"
                        >{{item.name}}</a>
                        <b-collapse
                          v-bind:id="item.id"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <div class="collpase-content">
                            <b-card-text>this is demo page</b-card-text>
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
                          <input type="checkbox" v-model="isagree" name="checkbox" /> I
                          understand and agree to
                          <a href>Privacy Policy</a> and
                          <a href>Terms of Services</a>
                        </label>
                        <template v-slot:modal-footer="{}">
                          <div class="popup" style="float:left; width:100%;">
                            <b-button
                              :disabled="!isagree"
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
                </div>
              </b-tab>
              <b-tab title="Private League" active>
                <div class="row inputbox">
                  <b-form-input placeholder="League ID"></b-form-input>
                  <b-form-input placeholder="Password"></b-form-input>
                  <b-button variant="primary" class="button">Search</b-button>
                </div>
                <div class="box-header">
                  <b-card-text class="float-left">League Name</b-card-text>
                  <b-card-text class="float-center">Creator</b-card-text>
                  <b-card-text class="float-right">Active Teams</b-card-text>
                </div>
                <div>
                  <div class="tablist" role="tablist">
                    <b-row v-for="item in items" v-bind:key="item.id">
                      <b-col cols="1">
                        <b-icon-alert-circle></b-icon-alert-circle>
                      </b-col>
                      <b-col cols="8">
                        <div no-body class="mb-1 custom-tab">
                          <a
                            block
                            href="#"
                            v-b-toggle.v-bind:id="item.id"
                            variant="info"
                          >{{item.name}}</a>
                          <b-collapse
                            v-b-toggle.v-bind:id="item.id"
                            visible
                            accordion="my-accordion"
                            role="tabpanel"
                          >
                            <div class="collpase-content">
                              <b-card-text>{{item.items}}</b-card-text>
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
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts" src="./joinleague.ts"></script>

<style scoped lang="css">
@import "../league.css";
</style>
