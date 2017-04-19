import { IUserInfo } from '../abstraction/IUserInfo';

export  class UserInfo implements IUserInfo {
    public email: string;
    public userName: string;
	public token: string;

	constructor(email?: string, userName?: string, token?: string) {
		this.email = email;
		this.userName = userName;
		this.token = token;
	}
}
