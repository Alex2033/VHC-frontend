import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment-view-request',
  templateUrl: './apartment-view-request.component.html',
  styleUrls: ['./apartment-view-request.component.scss']
})
export class ApartmentViewRequestComponent implements OnInit {
  formGroup: FormGroup;
  agree: boolean = false;
  notificationVisible: boolean = false;
  phonePattern = '^[0-9]+$';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      agree: ['false', [Validators.requiredTrue]]
    });
  }

  submit() {
    this.formGroup.markAllAsTouched();

    if(!this.formGroup.valid) {
      return;
    } else {
      this.notificationVisible = true;
      this.formGroup.reset();
    }
  }

}
