
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
    data: DustColumnDataPoint[];
    mprt: number;
}
