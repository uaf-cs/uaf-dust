
export class DustColumnDataPoint {

    constructor(
        public t: number = 0,   // time in seconds
        public C: number = 0    // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
    ) { }

    lnC = 0;
    slope = 0;
    intercept = 0;
    deriv1 = 0;
    deriv2 = 0;
    dCdt = 0;
    rsq = 0;
    tau = 0;

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

// class MPRTPoint {
//     lnC = 0;
//     slope = 0;
//     intercept = 0;
//     deriv1 = 0;
//     deriv2 = 0;
//     dCdt = 0;
//     rsq = 0;
//     tau = 0;

//     constructor(
//         public t: number = 0,
//         public C: number = 0
//     ) {
//         this.lnC = Math.log(C);
//     }
// }

function mean(Xs: number[]): number {
    let a = 0;
    for (let x of Xs) a += x;
    return a / Xs.length;
}

function regressionSlope(knownYs: number[], knownXs: number[]): number {
    if (knownXs.length != knownYs.length) return 0.0;
    if (knownXs.length < 1) return 0.0;
    let count = knownXs.length;

    let meanX = mean(knownXs);
    let meanY = mean(knownYs);

    let num = 0;
    let den = 0;
    for (let i = 0; i < count; i++) {
        let x = knownXs[i];
        let y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        den += (x - meanX) * (x - meanX);
    }

    return num / den;
}

function regressionIntercept(knownYs: number[], knownXs: number[]): number {
    if (knownXs.length != knownYs.length) return 0.0;
    if (knownXs.length < 1) return 0.0;
    let count = knownXs.length;

    let meanX = mean(knownXs);
    let meanY = mean(knownYs);

    let num = 0;
    let den = 0;
    for (let i = 0; i < count; i++) {
        let x = knownXs[i];
        let y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        den += (x - meanX) * (x - meanX);
    }
    let b = num / den;

    return meanY - b * meanX;
}

// Pearson product-moment correlation coefficient
function RSQ(knownYs: number[], knownXs: number[]): number {
    if (knownXs.length != knownYs.length) return 0.0;
    if (knownXs.length < 1) return 0.0;
    let count = knownXs.length;

    let meanX = mean(knownXs);
    let meanY = mean(knownYs);

    let num = 0;
    let denx = 0;
    let deny = 0;
    for (let i = 0; i < count; i++) {
        let x = knownXs[i];
        let y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        denx += (x - meanX) * (x - meanX);
        deny += (y - meanY) * (y - meanY);
    }
    return num / Math.sqrt(denx * deny);
}

export class Palliative {
    id: number;
    userid: number;
    shortname: string;
    longname: string;
    description: string;
    data: DustColumnDataPoint[] = [];
    mprt: number;
    mprtTime: number;

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
            let b = this.data[j + 1].clone();
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
                    b = this.data[j + 1].clone();
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

    calcMPRT() {
        const MaxSeconds = 59;

        // let points: DustColumnDataPoint[] = [];
        let i = 0;
        for (let p of this.data) {
            // points.push(new DustColumnDataPoint(p.t, p.C));
            if (p.t != i) break;
            i++;
        }

        this.mprt = -1;
        this.mprtTime = -1;
        if (i != 60) {
            return false;
        }

        let knownXs: number[] = [];
        let knownYs: number[] = [];
        let foundTau = false;
        for (let i = 0; i <= MaxSeconds; i++) {
            let p = this.data[i];
            p.lnC = Math.log(p.C);
            knownXs.push(p.t);
            knownYs.push(p.lnC);
            p.slope = regressionSlope(knownYs, knownXs);
            p.intercept = regressionIntercept(knownYs, knownXs);
            p.deriv1 = Math.abs(Math.exp(p.intercept) * p.slope * Math.exp(p.slope * 0));
            p.deriv2 = p.deriv1 * Math.abs(p.slope * Math.exp(p.slope * p.t));
            p.dCdt = Math.abs(Math.exp(p.intercept) * p.slope * Math.exp(p.slope * p.t));
            p.rsq = Math.pow(RSQ(knownYs, knownXs), 2);
            p.tau = Math.abs(1 / p.slope);

            if (i < 6) continue;

            // 0.001 mg/m^3/s^2
            if (!foundTau && p.deriv2 < 0.001) {
                this.mprt = p.tau;
                this.mprtTime = p.t;
                foundTau = true;
            }
        }

        return true;
    }

    importFromCSV(data: string) {
        // split using regex any sequence of 1 or more newlines or carriage returns
        let splitLines: string[][] = [];
        let lines = data.split(/[\n\r]+/);
        for (let line of lines) {
            // split with either white space or commas
            let unfilteredTokens = line.split(/[,\s]+/);
            if (unfilteredTokens.length > 0 && unfilteredTokens[0][0] == '#') continue;
            let tokens: string[] = [];
            for (let t of unfilteredTokens) {
                if (t.length > 0) {
                    tokens.push(t);
                }
            }
            if (tokens.length == 0) {
                continue;
            }

            splitLines.push(tokens);
        }

        // tokens should be numbers t and then C
        // we skip every line when the first two tokens are not numbers
        let i = 0;
        this.data = [];
        for (let line of splitLines) {
            if (line.length >= 2) {
                let t = +line[0];
                let C = +line[1];
                if (isNaN(t) || isNaN(C)) continue;
                this.data.push(new DustColumnDataPoint(t, C));
            }
        }
    }
}
