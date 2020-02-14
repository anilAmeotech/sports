import { Component, Vue } from 'vue-property-decorator';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

@Component
export default class successleague extends Vue {

  private errorMessage = '';
  private formSubmit: boolean = false;
  private isagree: boolean = false;
  private passworderror: any = "";

  private form = {
    name: '',
    leagueid: '',
    password: '',
    maxteam: ''
  };

    created() {
        this.$store.commit('userLogged', true)
    }
}
