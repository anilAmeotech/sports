import { Component, Vue } from 'vue-property-decorator';
@Component
export default class league extends Vue {

    created() {
        this.$store.commit('userLogged', true)
    }
    data() {
        return {
          items: [         
            { "id": 1 },
            { "id": 2 },           
            { "id": 3 }            
          ]
        }
      }

}
