import {
    Component,
    EventEmitter,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';


@Component({
	selector: 'duration-selector',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./duration-selector.template.html')
})

export class DurationSelectorComponent {
    
    public duration: number = 0;
    @Output('onDurationSelected') dateSelected: EventEmitter<number> = new EventEmitter<number>();

    constructor(){}

    ngDoCheck():void{
        this.dateSelected.emit(this.duration);
    }
}