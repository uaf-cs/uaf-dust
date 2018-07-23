
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

        for (let e of this.data) {
            if (typeof e.t !== 'number') e.t = parseFloat(e.t);
            if (typeof e.C !== 'number') e.C = parseFloat(e.C);
        }

        this.data.sort((a: DustColumnDataPoint, b: DustColumnDataPoint) => {
            return a.t - b.t;
        });
        // remove duplicates and outsiders
        let uniq: DustColumnDataPoint[] = [];
        let last = -1;
        for (let e of this.data) {
            if (e.t < 0) continue;
            if (e.t > 59) continue;
            if (e.t == last) continue;
            last = e.t;
            uniq.push(e);
        }
        this.data = uniq;

        console.log(this.data.length);
        let j = 0;
        for (let i = 0; i <= MaxSeconds; i++) {
            let t = i;
            let a = this.data[j].clone();
            let b = this.data[j+1].clone();
            if (j == 0 && this.data[j].t > t) {
                points[i].t = t;
                points[i].C = a.C;
                console.log('pre: ', j, points[i]);
            } else if (j == this.data.length - 1 && b.t <= t) {
                points[i].t = t;
                points[i].C = b.C;
                console.log('post: ', j, points[i]);
            } else {
                // skip forward until we have the right two samples    
                while (j < this.data.length - 2 && b.t < t) {
                    j++;
                    a = this.data[j].clone();
                    b = this.data[j+1].clone();
                    if (j >= this.data.length - 2) break;
                }
                if (b.t >= t) {
                    let dt = b.t - a.t;
                    let dC = b.C - a.C;
                    let slope = dC / dt;
                    let delta = t - a.t;
                    points[i].t = t;
                    points[i].C = a.C + delta * slope;    
                } else {
                    points[i].t = t;
                    points[i].C = b.C;
                }
                console.log('lerp: ', j, points[i]);
            }
        }
        this.data = points;
    }
}
