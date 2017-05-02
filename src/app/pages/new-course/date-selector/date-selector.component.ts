import { ControlValueAccessor } from '@angular/forms/src/directives';
import {
    Component,
    forwardRef,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

const CUSTOM_DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateSelectorComponent),
    multi: true
};

@Component({
	selector: 'date-selector',
	providers: [CUSTOM_DATE_VALUE_ACCESSOR],
	template: require('./date-selector.template.html')
})

export class DateSelectorComponent implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    public isDisabled: boolean;
    public date: string;

    public form: FormGroup = this.formBuilder.group({
        date: [null,Validators.pattern("(0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-9]|3[01])/[0-9]{4}")]
    })

    constructor(private formBuilder: FormBuilder){}

    writeValue(obj: any): void {
        debugger;
        if(obj && obj != ""){
            var temp = new Date(obj);
            this.form.controls["date"].setValue(`${temp.getMonth()}/${temp.getDate()}/${temp.getFullYear()}`);
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
        if(this.form.controls["date"].valid && event.target.value !== ""){
            var tmp = new Date(event.target.value)
            this.date = tmp.toDateString();
            this.onChange(tmp);
            this.onTouched();
        }else{
            this.onChange(null);
            this.onTouched();
        }
    }
}