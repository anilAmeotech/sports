import { Component, Vue } from 'vue-property-decorator';

@Component
export default class joinleague extends Vue {

    data() {
        return {
          items: [
            { "friends in the league": 'Dickerson', "league Rules": 'Rule 1 : 5 Points' },
            { "friends in the league":  'Larsen', "league Rules": 'Rule 2: 3 Points' },
            { "friends in the league":  'Geneva', "league Rules": 'Rule 3: 2 Points' },
            { "friends in the league":  'Jami', "league Rules": 'Rule 4: 1 Points' }
          ]
        }
      }
    created() {
        this.$store.commit('userLogged', true)
    }
}