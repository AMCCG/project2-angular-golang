import { AbstractControl } from '@angular/forms';

export class RegularExpressionHandler {
    public static regularExpression(control: AbstractControl): { [key: string]: boolean } | null {
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?ก-ฮ]/
        if (control.value.match(regex) || control.value.length > 30) {
            return { regex: true }
        }
        return null
    }
}