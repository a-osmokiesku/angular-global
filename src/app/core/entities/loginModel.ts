import { ILogin } from '../abstraction/ILogin';

export  class LoginModel implements ILogin {
    public email: string;
    public password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}
}
