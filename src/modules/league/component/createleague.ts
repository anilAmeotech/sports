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
            { "name": "preset-1", "id": "accordion-1" },
            { "name": "preset-2", "id": "accordion-2" },
            { "name": "preset-3", "id": "accordion-3" },
            { "name": "preset-4", "id": "accordion-4" },
            { "name": "preset-5", "id": "accordion-5" },
            { "name": "preset-6", "id": "accordion-6" },
            { "name": "preset-7", "id": "accordion-7" }            
          ]
        }
      }
}
