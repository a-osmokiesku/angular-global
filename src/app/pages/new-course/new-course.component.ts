import { OnDestroy, Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./new-course.template.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewCourse implements OnInit, OnDestroy{
    
    public date: string
    public duration: number = 0;

    public form: FormGroup = this.formBuilder.group({
        title: ["", [Validators.required, Validators.maxLength(50)]],
        description: ["", [Validators.required, Validators.maxLength(500)]],
    });

    constructor(private formBuilder: FormBuilder){}

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