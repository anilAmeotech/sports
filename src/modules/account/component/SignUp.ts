import { Component, Vue } from 'vue-property-decorator';
import AuthService from '../../services/auth.service';
import Axios from 'axios';

const authService = new AuthService();

@Component
export default class SignUp extends Vue {

  private success = '';
  private errorMessage = '';
  private formSubmit: boolean = false;
  private isagree: boolean = false;
  private passworderror: any = "";
  public loader: boolean = false;
  
  private form = {
    firstName: '',
    lastName: '',
    nickName: '',
    timeZone: new Date(),
    email: '',
    password: '',         
    repeatpassword: ''    
  };

  public Signup() {

    if (this.form.password === this.form.repeatpassword) {
      this.loader = true;
      this.errorMessage = '';
      this.formSubmit = true;
      let createUser = {
        "firstName": this.form.firstName,
        "lastName": this.form.lastName,
        "nickName": this.form.nickName,
        "timeZone": this.form.timeZone,
        "email": this.form.email,
        "password": this.form.password,
        "repeatpassword": this.form.repeatpassword
      };
      authService.SignUp(createUser).then(
        (data: any) => {
          console.log(data);
          this.loader = false;
          this.formSubmit = false;
          localStorage.setItem('user', JSON.stringify(data));
          this.$store.commit('userLogged', true);
          this.$router.push('/league');
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