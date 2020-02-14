<template>
  <div class="league">
    <b-container class="bv-example-row">
      <ul class="leagueUI">
        <ol class="league-item" style="text-decoration: none;">
      <b-button href="/createleague" pill variant="primary">Create League</b-button>

      <b-button variant="primary">Search</b-button> 
        </ol>
        
         <ol class="league-item">
      <b-button href="/createleague" pill variant="primary">Create League</b-button>

      <b-button variant="primary">Search</b-button> 
        </ol>
      </ul>     
    </b-container>
  </div>
</template>

<script lang="ts" src="./league.ts">
</script>

<style scoped lang="css">
@import "../league.css";
</style>