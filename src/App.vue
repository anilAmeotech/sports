<template>
  <div id="app">
    <div v-if="$store.state.isUserLogin">
      <appHeader />
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import appHeader from '@/modules/helper/appHeader.vue'
export default Vue.extend({
  components: {
    appHeader,
  },
})
</script>


<style lang="scss">
@import './custom.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
