<template>
  <div class="appHeader">
    <div>
      <b-navbar toggleable="xl">
        <img class="gogle" src="../../assets/sportclublogo.png" />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" disabled>Home</b-nav-item>
            <b-nav-item href="standings">Standings</b-nav-item>
            <b-nav-item href="league">Leagues</b-nav-item>
            <b-nav-item href="#" disabled>Bets</b-nav-item>
            <b-nav-item href="#" disabled>Events</b-nav-item>
            <b-nav-item href="#" disabled>Statistics</b-nav-item>
            <b-nav-item href="#" disabled>Contact</b-nav-item>
          </b-navbar-nav>
          <form>
            <input type="text" name="search" placeholder="Search.." />
          </form>
          <b-navbar-nav class="ml-auto">
            <b-card>
              <img src="../../assets/profile.png" width="60" height="60" />
            </b-card>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>Account</em>
              </template>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
              <b-dropdown-item href="signin">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "appHeader"
};
</script>

<style scoped lang="scss">
.bg-info {
  background-color: white;
}

.navbar-nav { 
  text-indent: 15px;
  margin-left: 10px;
}

form {
 margin-left: 9%;
}
.card {
  border: none;
}
.card-body {
  padding: 0;
}

input {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}
</style>