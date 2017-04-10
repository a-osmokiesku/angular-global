import {
    Component,
    EventEmitter,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';


@Component({
	selector: 'date-selector',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./date-selector.template.html')
})

export class DateSelectorComponent {
    
    public date: string;
    @Output('onDateSelected') dateSelected: EventEmitter<string> = new EventEmitter<string>();

    constructor(){}

    ngDoCheck():void{
        this.dateSelected.emit(this.date);
    }
}