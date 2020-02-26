<template>
  <div class="createleague">
    <h3>Create League</h3>
    <div class="row">
      <b-col>
        <b-form-input placeholder="Enter League Name"></b-form-input>
      </b-col>
      <b-col>
        <b-form-select>
          <b-form-select-option>Choose Enterprise</b-form-select-option>
          <option value="1">1</option>
          <option value="2">2</option>          
        </b-form-select>
      </b-col>
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
                    <b-collapse
                      v-bind:id="item.id"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <div class="collpase-content">
                        <div>
                          <b-table striped hover :items="items"></b-table>
                        </div>
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
              <b-card-text class="float-left">Scroing Category</b-card-text>
              <b-card-text class="float-right">Select Points</b-card-text>
            </div>
            <ul class="categry-list">
              <li v-for="item in items" v-bind:key="item.id" class="category-item">
                <b-form-checkbox
                  v-bind:key="item.id"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >{{item.name}}</b-form-checkbox>
                <b-form-select v-model="selected" :options="options">
                  <b-select-option>{{item.points}}</b-select-option>
                </b-form-select>
              </li>
            </ul>
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <b-button href="/successleague" pill variant="primary">Create League</b-button>
  </div>
</template>

<script lang="ts" src="./createleague.ts">
</script>

<style scoped lang="css">
@import "../league.css";
</style>
