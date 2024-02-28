import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValueAccessorExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control_value_access';
}
