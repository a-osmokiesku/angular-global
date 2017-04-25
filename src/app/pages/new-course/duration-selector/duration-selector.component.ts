import { ControlValueAccessor } from '@angular/forms/src/directives';
import {
    Component,
    OnChanges,
    forwardRef,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

//vendors
import { CustomValidators } from 'ng2-validation';

const CUSTOM_DURATION_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationSelectorComponent),
    multi: true
};



@Component({
	selector: 'duration-selector',
	encapsulation: ViewEncapsulation.None,
	providers: [CUSTOM_DURATION_VALUE_ACCESSOR],
	template: require('./duration-selector.template.html')
})

export class DurationSelectorComponent implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    public isDisabled: boolean;

    public form: FormGroup = this.formBuilder.group({
        duration: [0, Validators.compose([CustomValidators.min(0), CustomValidators.digits, CustomValidators.number])]
    })
    constructor(private formBuilder: FormBuilder){}

    writeValue(obj: any): void {
        var num = Number(obj);
        if(num != Number.NaN){
            this.form.controls["duration"].setValue(num);
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
        if(this.form.controls["duration"].valid && event.target.value !== ""){
            debugger;
            this.onChange(new Number(event.target.value));
            this.onTouched();
        }else{
            this.onChange(null);
            this.onTouched();
        }
    }
}