import { IUserInfo } from '../abstraction/IUserInfo';

export  class UserInfo implements IUserInfo {
    public email: string;
    public userName: string;

	constructor(email?: string, userName?: string) {
		this.email = email;
		this.userName = userName;
	}
}
