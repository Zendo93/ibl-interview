import { Component, OutputRef, output } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { Briefing, IResult } from '../model/briefing';
import { FormsModule } from '@angular/forms';
import { BriefingService } from '../service/briefing.service';

@Component({
  selector: 'app-briefing-form',
  standalone: true,
  imports: [CheckboxComponent, FormsModule],
  templateUrl: './briefing-form.component.html',
  styleUrl: './briefing-form.component.css'
})
export class BriefingFormComponent {
  atLeastOneCheckboxSelected = true;
  atLeastOneInputFilled = true;
  model = new Briefing(["METAR"], [], []);
  onResultChange = output<IResult>();

  constructor(private briefing: BriefingService) {}

  setMessageType(event: any) {
    this.model = event.target.checked ? new Briefing(
        this.model.messageTypes.concat(event.target.value),
        this.model.airports,
        this.model.countries
    )
    :
    new Briefing(
      this.model.messageTypes.filter(messageType => messageType !== event.target.value),
        this.model.airports,
        this.model.countries
    );
    
    this.atLeastOneCheckboxSelected = this.model.messageTypes.length > 0;
  }

  get airports() {
    return this.model.airports.join(' ');
  }

  set airports(value: string) {
    this.model = new Briefing(this.model.messageTypes, value ? value.split(' ') : [], this.model.countries);
    this.atLeastOneInputFilled = this.model.airports.length > 0 || this.model.countries.length > 0;
  }

  get countries() {
    return this.model.countries.join(' ');
  }

  set countries(value: string) {
    this.model = new Briefing(this.model.messageTypes, this.model.airports, value ? value.split(' ') : []);
    this.atLeastOneInputFilled = this.model.airports.length > 0 || this.model.countries.length > 0;
  }

  onSubmit() {
    this.briefing.getBriefings(this.model).subscribe(result => this.onResultChange.emit(result));
  }
}
