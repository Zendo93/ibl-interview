import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Briefing, IResult } from '../model/briefing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BriefingService {

  constructor(private http: HttpClient) { }

  getBriefings(inputData: Briefing): Observable<IResult> {
    return this.http.post<IResult>('https://ogcie.iblsoft.com/ria/opmetquery',
    {
      "id": "query01",
      "method": "query",
      "params": [
        {
          "id": "briefing01", 
          "reportTypes": inputData.messageTypes,        
          "stations": inputData.airports,
          "countries": inputData.countries
        }
      ]
    }
    );
  }
}
