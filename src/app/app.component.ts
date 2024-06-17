import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BriefingFormComponent } from './briefing-form/briefing-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BriefingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibl';
}
