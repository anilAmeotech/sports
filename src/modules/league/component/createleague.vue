<template>
  <div class="createleague">
    <h3>Create League</h3>
    <div class="row">
      <b-col
        ><b-form-input placeholder="Enter League Name"></b-form-input
      ></b-col>
      <b-col
        ><b-form-select>
          <b-form-select-option>Choose Enterprise</b-form-select-option>
        </b-form-select></b-col
      >
    </div>

    <div no-body class="custom-card">
      <b-tabs align="center">
        <b-tab title="Keep it Simple" active>
          <div class="box-header">
            <b-card-text class="float-left">Scroing Category</b-card-text>
          </div>
          <div>
            <div class="tablist" role="tablist">
              <ul id="example-1">
                <ol v-for="item in items" v-bind:key="item.id">
                  <div no-body class="mb-1 custom-tab">
                    <a block href="#" v-b-toggle.v-bind:id="item.id" variant="info">{{item.name}}</a>
                    <b-collapse v-bind:id="item.id" visible accordion="my-accordion" role="tabpanel">
                      <div class="collpase-content">
                        <b-card-text>
                          I start opened because
                          <code>visible</code> is
                          <code>true</code>
                        </b-card-text>
                        <b-card-text>{{ text }}</b-card-text>
                      </div>
                    </b-collapse>
                  </div>
                </ol>
              </ul>            
            </div>
          </div>
        </b-tab>
        <b-tab title="Customize Your League">
          <div>
            <div class="box-header">
              <b-card-text class="float-left"> Scroing Category </b-card-text>
              <b-card-text class="float-right"> Select Points </b-card-text>
            </div>
            <ul class="categoory-list">
              <li class="category-item">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Guess series winner
                </b-form-checkbox>
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </li>
              <li class="category-item">
                <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Guess series Score
                </b-form-checkbox>
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </li>
            </ul>
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <b-button href="/successleague" pill variant="primary"
      >Create League</b-button
    >
  </div>
</template>

<script lang="ts" src="./createleague.ts">
</script>

<style scoped lang="css">
@import "../league.css";
</style>
