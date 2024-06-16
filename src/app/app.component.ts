import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibl';
}
