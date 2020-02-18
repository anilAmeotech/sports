import { Component, Vue } from 'vue-property-decorator';

@Component
export default class standings extends Vue {

  created() {
    this.$store.commit('userLogged', true)
  }
  data() {
    return {
      items: [         
        { "name": "NBA 2018", "id": 1 },
        { "name": "NBA 2019", "id": 2 },
        { "name": "NBA 2020", "id": 3 },
        { "name": "NBA 2021", "id": 4 }                      
      ]
    }
  }  
}  