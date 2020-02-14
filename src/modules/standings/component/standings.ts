import { Component, Vue } from 'vue-property-decorator';

@Component
export default class standings extends Vue {

  created() {
    this.$store.commit('userLogged', true)
  }
}  