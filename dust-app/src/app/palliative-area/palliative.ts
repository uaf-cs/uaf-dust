
export enum DustColumnGraphType {
    Concentration,
    LnC,
    dCdt,
    Deriv1,
    Deriv2,
    RSQ
}

export class DustColumnGraph {
    x: number[] = [];
    y: number[] = [];

    constructor(
        public mode: string = 'lines',
        public type: string = 'scatter'
    ) { }
}

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

    static createFromJSON(json: any): DustColumnDataPoint {
        let p = new DustColumnDataPoint();
        p.t = json.t;
        p.C = json.C;
        p.lnC = json.lnC;
        p.slope = json.slope;
        p.intercept = json.intercept;
        p.deriv1 = json.deriv1;
        p.deriv2 = json.deriv2;
        p.dCdt = json.dCdt;
        p.rsq = json.rsq;
        p.tau = json.tau;
        return p;
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

/**
 * Calculate the slope of the linear regression line.
 * @param knownYs 
 * @param knownXs 
 */
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

    // New fields identified
    testTech: string = "unknown tech";
    testDate: string = "0000-01-01 00:00:00";
    analysisTech: string = "unknown tech";
    analysisDate: string = "0000-01-01 00:00:00";
    laboratory: string = "unknown laboratory";

    static CreateFromJSON(palliative: any): Palliative {
        let p = new Palliative();
        p.id = palliative.id;
        p.userid = palliative.userid;
        p.shortname = palliative.shortname;
        p.longname = palliative.longname;
        p.description = palliative.description;
        p.data = [];
        if (palliative.data) {
            for (let dcp of palliative.data) {
                p.data.push(DustColumnDataPoint.createFromJSON(dcp));
            }    
        }
        p.mprt = palliative.mprt;
        p.mprtTime = palliative.mprtTime;

        // new fields identified
        p.testTech = palliative.testTech ? palliative.testTech : p.testTech;
        p.testDate = palliative.testDate ? palliative.testDate : p.testDate;
        p.analysisTech = palliative.analysisTech ? palliative.analysisTech : p.analysisTech;
        p.analysisDate = palliative.analysisDate ? palliative.analysisDate : p.analysisDate;
        p.laboratory = palliative.laboratory ? palliative.laboratory : p.laboratory;

        return p;
    }

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

        let i = 0;
        for (let p of this.data) {
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
            p.deriv1 = Math.abs(Math.exp(p.intercept) * p.slope);
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

    getXYs(whichType: DustColumnGraphType, mode: string = 'lines', type: string = 'scatter'): DustColumnGraph[] {
        let dcgd = new DustColumnGraph(mode, type);
        for (let p of this.data) {
            let x = p.t;
            let y = 0;
            switch (whichType) {
                case DustColumnGraphType.Concentration:
                    y = p.C;
                    break;
                case DustColumnGraphType.LnC:
                    y = p.lnC;
                    break;
                case DustColumnGraphType.Deriv1:
                    y = p.deriv1;
                    break;
                case DustColumnGraphType.Deriv2:
                    y = p.deriv2;
                    break;
                case DustColumnGraphType.dCdt:
                    y = p.dCdt;
                    break;
                case DustColumnGraphType.RSQ:
                    y = p.rsq;
                    break;
                default:
                    y = 0;
            }
            dcgd.x.push(x);
            dcgd.y.push(y);
        }
        let linearRegression = new DustColumnGraph(mode, type);
        if (whichType == DustColumnGraphType.LnC) {
            let slope = 0;
            let intercept = 0;
            for (let i = 0; i <= this.data.length; i++) {
                if (this.data[i].t > this.mprtTime) break;
                slope = this.data[i].slope;
                intercept = this.data[i].intercept;
            }
            for (let i = 0; i <= this.data.length; i++) {
                if (this.data[i].t > this.mprtTime) break;
                linearRegression.x.push(this.data[i].t);
                linearRegression.y.push(intercept + slope * this.data[i].t);
            }
            return [dcgd, linearRegression];
        }
        return [dcgd];
    }

    getLayout(whichType: DustColumnGraphType): any {
        let layout = {
            xaxis: {
                title: 'time (t)'
            },
            yaxis: {
                title: 'Concentration (C)'
            },
            title: 'Mean Particle Residence Time'
        };

        switch (whichType) {
            case DustColumnGraphType.Concentration:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³)';
                layout.title = 'Mean Particle Residence Time τ';
                break;
            case DustColumnGraphType.LnC:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Ln(C)';
                layout.title = 'Mean Particle Residence Time τ';
                break;
            case DustColumnGraphType.Deriv1:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s)';
                layout.title = 'Rate of Change in Concentration';
                break;
            case DustColumnGraphType.Deriv2:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s²)';
                layout.title = 'Rate of Reduction in Rate of Concentration Change';
                break;
            case DustColumnGraphType.dCdt:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s)';
                layout.title = 'Rate of Change in Concentration';
                break;
            case DustColumnGraphType.RSQ:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'R²';
                layout.title = 'R²';
                break;
        }
        return layout;
    }
}
