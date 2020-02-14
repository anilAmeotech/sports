<template>
  <div class="standingsView">
   
    <standings />
  </div>
</template>

<script>
import standings from "../component/standings.vue";

export default {
  name: "standingsView",
  components: {
    standings
  }
};
</script>
