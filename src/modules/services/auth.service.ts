import BaseService from './base.service';

export default class AuthService {

    private apiService: any;

    constructor() {
        this.apiService = new BaseService();
    }

    public SignUp(createUser: any) {
        return this.apiService.post('users/addUser/', createUser);
    }

    public SignIn(userCred: any) {
        return this.apiService.post('users/login/', userCred);
    }
}
