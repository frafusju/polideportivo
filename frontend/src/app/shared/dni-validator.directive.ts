import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDniValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DniValidatorDirective,
    multi: true
  }]
})
export class DniValidatorDirective implements Validator {  

  validate(control: AbstractControl): ValidationErrors | null {

    const dni = control.value;
    const dniRegex = /[0-9]{8}[A-Z]{1}|[XYZ]{1}[0-9]{7}[A-Z]{1}/gi;
    
    if (dniRegex.test(dni)) {
      const letter = dni.substring(dni.length-1);
      const number = dni.substring(0, dni.length - 1);
      //Corrects number to validate both NIF and NIE numbers
      const corrected_number = number.replace(/[X-Z]/, function(letter: string) {
        if (letter === 'X') {
          return 0;
        } else if (letter === 'Y') {
          return 1;            
        } else if (letter === 'Z') {
          return 2;
        }
      });
      const valid_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
      const correct_letter = valid_letters.charAt(corrected_number%23);

      if (correct_letter === letter) {
        return null;
      } else {
        return { appDniValidator: true };
      }
    } else {
      return { appDniValidator: true };
    }
  }
}