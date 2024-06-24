import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BriefingFormComponent } from './briefing-form/briefing-form.component';
import { BriefingResultComponent } from './briefing-result/briefing-result.component';
import { IResult } from './model/briefing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    BriefingFormComponent,
    BriefingResultComponent,
    MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibl';
  isLoaderVisible = false;
  result: IResult = {} as IResult;

  changeLoaderVisibility(event: boolean) {
    this.isLoaderVisible = event;
  }

  getResult(event: IResult) {
    this.isLoaderVisible = false;
    this.result = event;
  }
}
