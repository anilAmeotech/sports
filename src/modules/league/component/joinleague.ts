import { Component, Vue } from 'vue-property-decorator';

@Component
export default class joinleague extends Vue {
  public isagree: boolean = false;


    data() {
        return {
          items: [
            {"id": 1, "name":"League 1", "friends in the league": 'Dickerson', "league Rules": 'Rule 1 : 5 Points' },
            {"id": 2, "name":"League 2", "friends in the league":  'Larsen', "league Rules": 'Rule 2: 3 Points' },
            {"id": 3, "name":"League 3", "friends in the league":  'Geneva', "league Rules": 'Rule 3: 2 Points' },
            {"id": 4, "name":"League 4", "friends in the league":  'Jami', "league Rules": 'Rule 4: 1 Points' },
            {"id": 5, "name":"League 5", "friends in the league": 'Dickerson', "league Rules": 'Rule 1 : 5 Points' },
            {"id": 6, "name":"League 6", "friends in the league":  'Larsen', "league Rules": 'Rule 2: 3 Points' },
            {"id": 7, "name":"League 7", "friends in the league":  'Geneva', "league Rules": 'Rule 3: 2 Points' },
            {"id": 8, "name":"League 8", "friends in the league":  'Jami', "league Rules": 'Rule 4: 1 Points' }           
          ]
        }
      }
    created() {
        this.$store.commit('userLogged', true)
    }
    Join() {       
    }
}