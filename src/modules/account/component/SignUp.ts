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

  private form = {
    username: '',
    email: '',
    password: '',
    repeatpassword: ''
  };

  public Signup() {

    if (this.form.password === this.form.repeatpassword) {

      this.errorMessage = '';
      this.formSubmit = true;
      let createUser = {
        "username": this.form.username,
        "email": this.form.email,
        "password": this.form.password,
        "repeatpassword": this.form.repeatpassword
      };
      authService.SignUp(createUser).then(
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