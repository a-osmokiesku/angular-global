import { Subscription, BehaviorSubject } from 'rxjs/Rx';
import { OnDestroy, Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthorService } from '../../core/services';

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./new-course.template.html')
})

export class NewCourse implements OnInit, OnDestroy{
    
    private authorServiceSubscription: Subscription;

    public form: FormGroup = this.formBuilder.group({
        title: ["", [Validators.required, Validators.maxLength(50)]],
        description: ["", [Validators.required, Validators.maxLength(500)]],
        date: ["", Validators.required],
        duration: [0, Validators.required],
        author: [[], Validators.required]
    });

    public sourceAuthors: string[];

    constructor(private formBuilder: FormBuilder, private authorService: AuthorService){}

    ngOnDestroy(): void {
         this.authorServiceSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.authorServiceSubscription = this.authorService.authors().subscribe((authors: string[])=>{
            this.sourceAuthors = authors;
        });
    }

    cancel(){
        this.form.reset();
    }

    save(){
        var foo = this.form.errors;
        console.log(foo);
    }
}