import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DateValidatorDirective,
    multi: true
  }]
})
export class DateValidatorDirective implements Validator {  

  validate(control: AbstractControl): ValidationErrors | null {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = new Date(year + "-" + month + "-" + day); //Generate todays date without hours to compare with the bookingDate
    const bookingDate = new Date(control.value);
    
    if (bookingDate.getTime() < today.getTime()) {
        return { appDateValidator: true };                        
    } else {
        return null;
    }    
  }
}