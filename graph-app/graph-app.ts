class DataPoint {
    constructor(public t: number, public C: number) { }
}


class GraphApp {

    constructor() {
        let e = document.createElement('div');
        e.id = 'myDiv';
        e.innerHTML = "Hello, world";
        document.body.appendChild(e);
    }

    run() {
        let e = <HTMLTextAreaElement>document.getElementById('rawdata');
        let str = e.textContent;

        let input = str.split(' ');
        let conc = []; //concentrations of dust in water
        for (let i of input) {
            conc.push(parseFloat(i));
        }
        //x axis values
        var seconds;
        for (let seconds of input.length(conc)){
            seconds+1;}

        //var numbers1= +input;//parseInt(input);
        var trace2 = {
            x: seconds,
            y: conc,
            mode: 'markers'
        };

        var data = [trace2];
        var layout = {};

        Plotly.newPlot('myDiv', data, layout);

    }

    convertInputToDataPoints(str: string): DataPoint[] {
        let dataPoints: DataPoint[] = [];
        return dataPoints;
    }

    plotGraph(dataPoints: DataPoint[]) {
//DIANE PUT GRAPH STUFF HERE
    }
}