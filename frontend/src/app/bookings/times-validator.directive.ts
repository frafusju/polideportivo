import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[ngModelGroup][appTimesValidatorDirective]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: TimesValidatorDirective,
        multi: true
    }]
})
export class TimesValidatorDirective implements Validator {
    
    validate(group: AbstractControl): ValidationErrors | null {
        
        let controls = (group as FormGroup).controls;
        let start_time = controls["start_time"].value;
        let end_time = controls["end_time"].value;
        let start_minutes = start_time.split(":");
        let end_minutes = end_time.split(":");
        let start_time_int = parseInt(start_time);
        let end_time_int = parseInt(end_time);
        
        if (start_time_int === end_time_int) {
            return { "equalTimes": true };
        } else if (start_time_int < 8 || end_time_int > 23) {          
            return { "timeIncorrect": true };        
        } else if ((end_time_int < start_time_int)) {            
            return { "endTimeError": true };
        } else if ((end_time_int - start_time_int) > 2 || (end_time_int - start_time_int) < 1) {
            return { "max2hours": true };
        } else if (start_minutes[1] !== "00" || end_minutes[1] !== "00") {
            return { "onlyOclockTimes": true };
        } else {
            return null;
        }
    }
}