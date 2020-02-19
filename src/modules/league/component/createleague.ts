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
            { "name": "preset-1", "id": 1 , "points": 1 },
            { "name": "preset-2", "id": 2 , "points": 2 },
            { "name": "preset-3", "id": 3 , "points": 3 },
            { "name": "preset-4", "id": 4 , "points": 4 },
            { "name": "preset-5", "id": 5 , "points": 5 },
            { "name": "preset-6", "id": 6 , "points": 6 },
            { "name": "preset-7", "id": 7 , "points": 7 }            
          ]
        }
      }
}
