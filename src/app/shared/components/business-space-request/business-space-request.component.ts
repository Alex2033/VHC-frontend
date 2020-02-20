import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidationErrors} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-business-space-request',
  templateUrl: './business-space-request.component.html',
  styleUrls: ['./business-space-request.component.scss']
})
export class BusinessSpaceRequestComponent implements OnInit {
  formGroup: FormGroup;
  formErrors: ValidationErrors | null;
  notificationVisible: boolean = false;
  @Input() id: string;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null],
      email: [null],
      phone: [null],
      agree: [true, [Validators.requiredTrue]]
    });
  }

  submit() {
    this.formGroup.markAllAsTouched();

    if(!this.formGroup.valid) {
      return;
    } else {
      this.api.sendBusinessSpaceRequest({
        business_space_id: this.id,
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        phone: this.formGroup.value.phone
      }).subscribe(() => {
        this.notificationVisible = true;
        this.formGroup.reset();
      }, (err) => {
        this.formErrors = err.error;
      });
    }
  }

}
