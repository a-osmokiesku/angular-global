import { ControlValueAccessor } from '@angular/forms/src/directives';
import {
    Component,
    forwardRef,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation,
    Input
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

const CUSTOM_DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorSelectorComponent),
    multi: true
};

@Component({
	selector: 'author-selector',
	providers: [CUSTOM_DATE_VALUE_ACCESSOR],
	template: require('./author-selector.template.html')
})

export class AuthorSelectorComponent implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};
    public foo: string[]
    @Input("authors")
    set authors(value: string[]){
        if(Array.isArray(value)){
            this.foo = value;
        }
    }

    public isDisabled: boolean;
    private selectedAuthors: string[] = [];

    public form: FormGroup = this.formBuilder.group({
        authors: [null]
    });

    constructor(private formBuilder: FormBuilder){}

    writeValue(obj: any): void {
        if(Array.isArray(obj)){
            this.form.controls['authors'].setValue(obj);
        }
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    setValue(event){
        var index = this.selectedAuthors.indexOf(event.target.value);
        if(index == -1){
            this.selectedAuthors.push(event.target.value)
        }else{
            this.selectedAuthors.splice(index, 1);
        }
        this.onChange(this.selectedAuthors);
        this.onTouched();
    }
}