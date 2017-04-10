import { OnDestroy, Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./new-course.template.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewCourse implements OnInit, OnDestroy{
    
    public title: string;
    public description: string;
    public date: string
    public duration: number = 0;

    constructor(){}

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

    dateSelectorHandler(date: string){
        this.date = date;
    }

    durationSelectorHandler(duration: number){
        this.duration = duration;
    }

    cancel(){
    }

    save(){
    }
}