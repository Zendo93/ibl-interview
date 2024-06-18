export interface IBriefing {
    placeId: string;
    queryType: string;
    receptionTime: string;
    refs: string[];
    reportTime: string;
    reportType: string;
    revision: string;
    stationId: string;
    text: string;
    textHTML: string;
}

export interface IResult {
    error: string;
    id: string;
    result: IBriefing[];
}

export class Briefing {
    constructor(
        public messageTypes: string[],
        public airports: string[],
        public countries: string[]
    ) {}
}