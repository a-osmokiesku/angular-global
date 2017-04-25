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
    
    public form: FormGroup = this.formBuilder.group({
        title: ["", [Validators.required, Validators.maxLength(50)]],
        description: ["", [Validators.required, Validators.maxLength(500)]],
        date: ["", Validators.required],
        duration: [0, Validators.required]
    });

    constructor(private formBuilder: FormBuilder){}

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

    cancel(){
        this.form.reset();
    }

    save(){
        debugger;
        var foo = this.form.errors;
        console.log(foo);
    }
}