import { Component, Vue } from 'vue-property-decorator';
import  $ from "jquery";

@Component
export default class createleague extends Vue { 
  

    created() {
        this.$store.commit('userLogged', true)       
    }

    data() {
        return {
          items: [         
            { "name": "Winner Series", "id": "checkbox-1" },
            { "name": "Winner-2", "id": "checkbox-2" },
            { "name": "Winner-3", "id": "checkbox-3" },
            { "name": "Winner-4", "id": "checkbox-4" },
            { "name": "Winner-5", "id": "checkbox-5" },
            { "name": "Winner-6", "id": "checkbox-6" },
            { "name": "Winner-7", "id": "checkbox-7" }            
          ]
        }
      }
}
