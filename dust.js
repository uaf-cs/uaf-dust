"use strict";
class Dust {
    constructor() {
    }
}
class DataPoint {
    constructor(t, C) {
        this.t = t;
        this.C = C;
    }
}
class GraphApp {
    constructor() {
        let e = document.createElement('div');
        e.id = 'myDiv';
        e.innerHTML = "Hello, world";
        document.body.appendChild(e);
    }
    run() {
        let str = "1 2 3 4 5";
        let input = str.split(' '); //prompt('Enter a string of numbers separated by spaces').split(' ');
        let numbers1 = [];
        for (let i of input) {
            numbers1.push(parseFloat(i));
        }
        //var numbers1= +input;//parseInt(input);
        var trace2 = {
            x: numbers1,
            y: numbers1 + 1,
            mode: 'markers'
        };
        var data = [trace2];
        var layout = {};
        Plotly.newPlot('myDiv', data, layout);
    }
}
//# sourceMappingURL=dust.js.map