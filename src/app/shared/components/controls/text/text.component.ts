import { Component, ElementRef, Input, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements ControlValueAccessor {
  focused = false;
  @Input() errorMessages: Object;
  @Input() title: string;
  @Input() hint: string;
  @Input() strip: string;
  @Input() placeholder: string;
  @Input() hidePlaceholder: boolean = false;
  @ViewChild('input') input: ElementRef;
  get shouldLabelFloat() {
    return this.focused || this.value;
  }
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
    // this.value = this.ngControl.value;
  }
  public value: string;

  writeValue(value: any): void {
    if(value === '') {
      value = null;
    }
    if(this.strip && value !== null) {
      const afterStrip = value.replace(new RegExp(this.strip, 'g'), '');
      if(value !== afterStrip) {
        this.input.nativeElement.value = afterStrip;
        this.writeValue(afterStrip);
        return;
      }
    }
    this.value = value;
    this.onChange(this.value);
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
  focus() {
    // this.focused = true;
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.input.nativeElement.focus();
    });
  }
  
  get errorState() {
    return this.ngControl.invalid;
  }
}
