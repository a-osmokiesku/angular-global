import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { UserInfo } from '../../entities';

@Injectable()
export class AuthService{
    private readonly LocalStorageKey: string = "auth";

    constructor(private localStorage: LocalStorageService){}

    public login(email: string, password: string): boolean{
        var userInfo: UserInfo = new UserInfo(email, "Artur");
        localStorage.setItem(this.LocalStorageKey, JSON.stringify(userInfo));
        return true
    }

    public logout(): void{
        if(this.isAuthenticated){
            localStorage.removeItem(this.LocalStorageKey);
        }
    }

    public isAuthenticated(): boolean{
        return localStorage.getItem(this.LocalStorageKey) != null;
    }

    public  getUserInfo(): UserInfo{
        var userInfo: UserInfo = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        return userInfo;
    }
}