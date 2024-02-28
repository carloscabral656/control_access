import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LockInputComponent } from '../lock-input/lock-input.component';

@Component({
  selector: 'app-value-accessor-example',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, LockInputComponent],
  templateUrl: './value-accessor-example.component.html',
  styleUrl: './value-accessor-example.component.scss'
})
export class ValueAccessorExampleComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  /*
    - We can change the value here in the constructor of the FormControl
    
  */
  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl({ value: false, disabled: false })
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
