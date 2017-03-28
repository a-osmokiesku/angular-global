import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'toolbox',
    styles: [require('./toolbox.styles.scss')],
    template: require('./toolbox.template.html'),
   	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent{
    @Input() searchText: string | Date;
    @Output() searchTextChange: EventEmitter<string | Date> = new EventEmitter<string | Date>();

    constructor(){}

    find(){
        this.searchTextChange.emit(this.searchText);
    }
}