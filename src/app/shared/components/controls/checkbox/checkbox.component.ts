import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() dataProcessingText: string;
  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.value = this.ngControl.value;
  }
  value: boolean;
  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }
  onChange: any = () => {

  };
  onTouched: any = () => {

  };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  get errorState() {
    return this.ngControl.invalid;
  }
}