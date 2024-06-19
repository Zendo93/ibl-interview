import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BriefingFormComponent } from './briefing-form/briefing-form.component';
import { BriefingResultComponent } from './briefing-result/briefing-result.component';
import { IResult } from './model/briefing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BriefingFormComponent, BriefingResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibl';
  result: IResult = {} as IResult;

  getResult(event: IResult) {
    console.log(event);
    this.result = event;
  }
}
