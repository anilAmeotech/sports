import { Component, Vue } from 'vue-property-decorator';
import  $ from "jquery";

@Component
export default class createleague extends Vue { 
  

    created() {
        this.$store.commit('userLogged', true)       
    }
}
