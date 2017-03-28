import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { UiState } from '../../entities';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class LoaderService {
    private _uiState: BehaviorSubject<UiState> = new BehaviorSubject(new UiState(false));

    get uiState(){
        return new Observable(fn => this._uiState.subscribe(fn));
    }

    show(){
        this._uiState.next(new UiState(true));
    }

    hide(){
        this._uiState.next(new UiState(false));
    }
}