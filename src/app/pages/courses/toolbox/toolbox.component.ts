import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'toolbox',
    styles: [require('./toolbox.styles.scss')],
    template: require('./toolbox.template.html')
})

export class ToolboxComponent{
    private searchText: string | Date;

    @Output() counterChange = new EventEmitter();
  
    @Input()
    get counter() {
        return this.searchText;
    }
    set counter(val) {
        this.searchText = val;
        this.counterChange.emit(this.searchText);
    }

    constructor(){}

    find(){
        this.counterChange.emit(this.searchText);
    }
}