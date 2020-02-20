import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appServerSideValidation]'
})
export class FormErrorsDirective {

  constructor() {
  }
  @Input() formGroup: FormGroup;
  @Input()
  set appServerSideValidation(errors: ValidationErrors) {
    if(errors) {
      this.setFormControlErrors(this.formGroup, errors);
    }
  }
  private setFormControlErrors(formGroup: FormGroup | AbstractControl, errors: ValidationErrors) {
    for(let key in formGroup['controls']) {
      if (formGroup['controls'][key]['controls']) {
        this.setFormControlErrors(formGroup['controls'][key], errors);
      } else {
        formGroup['controls'][key].setErrors(errors[key]);
        // Цикл по объекту, если элемент объекта массив, то это многоязычное поле, иначе обычное
      }
    }
  }
}
