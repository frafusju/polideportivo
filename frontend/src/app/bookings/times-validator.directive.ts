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
        const controls = (group as FormGroup).controls;

        // Verifica si los controles existen
        const start_time_control = controls["start_time"];
        const end_time_control = controls["end_time"];

        if (!start_time_control || !end_time_control) {
            return { "missingControls": true };
        }

        const start_time = start_time_control.value;
        const end_time = end_time_control.value;

        // Verifica si los valores no son nulos o indefinidos
        if (!start_time || !end_time) {
            return { "missingTimes": true };
        }

        // Convierte los tiempos a objetos Date para comparaciones precisas
        const start_date = new Date(`1970-01-01T${start_time}:00`);
        const end_date = new Date(`1970-01-01T${end_time}:00`);

        // Validación: Los tiempos no pueden ser iguales
        if (start_date.getTime() === end_date.getTime()) {
            return { "equalTimes": true };
        }

        // Validación: Los tiempos deben estar entre las 08:00 y las 23:00
        if (start_date.getHours() < 8 || end_date.getHours() > 23) {
            return { "timeIncorrect": true };
        }

        // Validación: La hora de fin debe ser mayor que la hora de inicio
        if (end_date.getTime() < start_date.getTime()) {
            return { "endTimeError": true };
        }

        // Validación: La duración debe ser de 1 o 2 horas
        const duration = (end_date.getTime() - start_date.getTime()) / (1000 * 60 * 60); // Diferencia en horas
        if (duration > 2 || duration < 1) {
            return { "max2hours": true };
        }

        // Validación: Solo se permiten horas en punto (minutos deben ser "00")
        if (start_date.getMinutes() !== 0 || end_date.getMinutes() !== 0) {
            return { "onlyOclockTimes": true };
        }

        // Si todas las validaciones pasan, retorna null
        return null;
    }
}