import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-briefing-form',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './briefing-form.component.html',
  styleUrl: './briefing-form.component.css'
})
export class BriefingFormComponent {

}
