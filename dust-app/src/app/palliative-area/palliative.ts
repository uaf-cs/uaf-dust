
export class DustColumnDataPoint {
    constructor(
        public t: number = 0,   // time in seconds
        public C: number = 0    // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
    ) { }

    clone(): DustColumnDataPoint {
        return new DustColumnDataPoint(this.t, this.C);
    }

    copy(v: DustColumnDataPoint) {
        this.t = v.t;
        this.C = v.C;
        return this;
    }

    static lerp(a: DustColumnDataPoint, b: DustColumnDataPoint, x: number) {
        return new DustColumnDataPoint(
            x * a.t + (1 - x) * b.t,
            x * a.C + (1 - x) * b.C
        );
    }
}

export class Palliative {
    id: number;
    userid: number;
    shortname: string;
    longname: string;
    description: string;
    data: DustColumnDataPoint[] = [];
    mprt: number;

    cleanData() {
        let points: DustColumnDataPoint[] = [];
        const MaxSeconds = 59;
        for (let i = 0; i <= MaxSeconds; i++) {
            points.push(new DustColumnDataPoint());
        }

        this.data.sort((a: DustColumnDataPoint, b: DustColumnDataPoint) => {
            return a.t - b.t;
        });

        let j = 0;
        for (let i = 0; i <= MaxSeconds; i++) {
            let t = i;
            if (j == 0 && this.data[j].t > t) {
                points[i].copy(this.data[j]);
            } else if (j == this.data.length - 1 && this.data[j].t < t) {
                points[i].copy(this.data[j]);
            } else {
                // skip forward until we have the right two samples
                let a = this.data[j].clone();
                let b = this.data[j+1].clone();
                while (j < this.data.length - 2 && b.t < t) {
                    j++;
                    if (j <= this.data.length - 2) break;
                    a = this.data[j].clone();
                    b = this.data[j+1].clone();
                }
                let dt = b.t - a.t;
                let dC = b.C - a.C;
                let slope = dC / dt;
                let delta = t - a.t;
                points[i].t = t;
                points[i].C = a.C + delta * slope;
            }
        }
        this.data = points;
    }
}
