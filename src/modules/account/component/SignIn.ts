import { Component, Vue } from 'vue-property-decorator';
import AuthService from '../../services/auth.service';
import Axios from 'axios';

const authService = new AuthService();

@Component
export default class SignIn extends Vue {

    private errorMessage = '';
    private formSubmit: boolean = false;

    private form = {
        email: '',
        password: '',
    };

    public SignIn() {
        this.errorMessage = '';
        this.formSubmit = true;
        let userCred = { "email": this.form.email, "password":this.form.password};
        console.log(userCred);
        authService.SignIn(userCred).then((response: any) => {
            this.formSubmit = false;
            const res = response.data;
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                this.$store.commit('userLogged', true);
                // let User = JSON.parse(localStorage.getItem('user'));
                // this.$store.state.User = User.username;
                this.$router.push('/league');
            } else {
                this.errorMessage = 'Invalid email or password.';
                setTimeout(() => {
                    this.errorMessage = "";
                }, 3000);
            }
        }, (err: any) => {
            this.errorMessage = 'Invalid email or password.';
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
            this.formSubmit = false;
        });
    }
}
