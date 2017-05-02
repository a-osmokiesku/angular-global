import { Subscription, BehaviorSubject } from 'rxjs/Rx';
import { OnDestroy, Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthorService, CourseService } from '../../core/services';
import { ActivatedRoute, Router } from "@angular/router";
import { CourseItem } from "../../core/entities/index";

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./new-course.template.html')
})

export class NewCourse implements OnInit, OnDestroy{
    
    private authorServiceSubscription: Subscription;
    private courseServiceSubscription: Subscription;

    public form: FormGroup = this.formBuilder.group({
        title: ["", [Validators.required, Validators.maxLength(50)]],
        description: ["", [Validators.required, Validators.maxLength(500)]],
        date: ["", Validators.required],
        duration: [0, Validators.required],
        author: [[], Validators.required]
    });

    public sourceAuthors: string[];

    constructor(private formBuilder: FormBuilder,
        private courseService: CourseService, 
        private authorService: AuthorService, 
        private route: ActivatedRoute, 
        private router: Router){}

    ngOnDestroy(): void {
         this.authorServiceSubscription.unsubscribe();
    }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        if(id){
            this.courseServiceSubscription = this.courseService.getOne(id)
            .subscribe((course: CourseItem)=>{
                this.form.controls["title"].setValue(course.title);
                this.form.controls["description"].setValue(course.description);
                this.form.controls["date"].setValue(course.date);
                this.form.controls["duration"].setValue(course.duration);
            });
        }

        this.authorServiceSubscription = this.authorService.authors().subscribe((authors: string[])=>{
            this.sourceAuthors = authors;
        });
    }

    cancel(){
        if(this.route.snapshot.params['id']){
            this.router.navigate(['/courses']);
        }
        this.form.reset();
    }

    save(){
        var foo = this.form.errors;
        console.log(foo);
    }
}