import { Component, Input } from '@angular/core';
import { IResult } from '../model/briefing';
import { CommonModule, DatePipe } from '@angular/common';
import { ColorizeWordsPipe } from '../pipe/colorize-words.pipe';

@Component({
  selector: 'app-briefing-result',
  standalone: true,
  imports: [CommonModule, DatePipe, ColorizeWordsPipe],
  templateUrl: './briefing-result.component.html',
  styleUrl: './briefing-result.component.css'
})
export class BriefingResultComponent {
  @Input({transform: groupByStationId}) result = null;

}

function groupByStationId(result: IResult) {
  const group = result.result?.reduce((acc: any, curr) => {
    let key = curr.stationId;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});

  const stationIds = group ? Object.keys(group).map(key => ({
    stationId: key,
    briefings: group[key]
  })) : [];
  
  return stationIds;
}