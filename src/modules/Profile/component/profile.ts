import { Component, Vue } from 'vue-property-decorator';
import AuthService from '../../services/auth.service';

const authService = new AuthService();


@Component
export default class profile extends Vue {

  private success = '';
  private errorMessage = '';
  private formSubmit: boolean = false;
  private isagree: boolean = false;
  private passworderror: any = "";


  private form = {
    username: '',
    email: '',
    password: '',
    repeatpassword: ''
  };

  created() {
    this.$store.commit('userLogged', true)
}

  public Signup() {
    // eslint-disable-next-line no-console
  
    if (this.form.password === this.form.repeatpassword) {

      this.errorMessage = '';
      this.formSubmit = true;
      const request = { data: this.form };
      authService.SignUp(request).then(
        (data: any) => {
          console.log(data);
          this.formSubmit = false;    
        },
        (success: any) => {
          this.formSubmit = true;
        });
    }
    else {
      this.passworderror = "Password doesn't match please enter vaild password"
      setTimeout(() => {
        this.passworderror = "";
      }, 3000);
    }
  }
}