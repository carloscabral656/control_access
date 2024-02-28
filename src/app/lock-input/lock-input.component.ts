import { JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lock-input',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './lock-input.component.html',
  styleUrl: './lock-input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LockInputComponent),
    multi: true
  }
]
})
export class LockInputComponent implements OnInit, ControlValueAccessor {
  value = false;
  disabled = false;

  onChange: (value: boolean) => void;
  onTouched: () => void;

  constructor() {}

  ngOnInit(): void {}

  toggleLocked() {
    this.value = !this.value;
  }

  /*
    - Just assign the value in this method.
    - If we change the value in FormControl it will be trigged.
    - This value in the method is the value of the form control.
    - We assign this obj to the value of the component
  */
  writeValue(obj: boolean): void {
    this.value = obj;
    //throw new Error('Method not implemented.');
  }

  /*
    - We send the value for the parent control to notify if some data has changed.
    - If we change the value here we must send a notification for the parent form control.
    - Every time we change the state in the component we must call this method.
  */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /*
    - What will we do if we click the form ?
  */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /*

  */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue() {
    if(this.disabled) return;
    this.value = !this.value;
    this.onChange(this.value); // Pass the new state to the Parent Control, update the state of the parent control.
    this.onTouched();
  }
}
