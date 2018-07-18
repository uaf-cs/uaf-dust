
export class DustColumnDataPoint {
    t: number;  // time in seconds
    C: number;  // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
}

export class Palliative {
    id: number;
    userid: number;
    shortname: string;
    longname: string;
    description: string;
    data: DustColumnDataPoint[] = [ { t: 0, C: 0 }, { t: 1, C: 1 }, { t: 2, C: 4 } ];
    mprt: number;
}
