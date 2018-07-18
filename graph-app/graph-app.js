"use strict";
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
        let e = document.getElementById('rawdata');
        let str = e.textContent;
        if (!str)
            return;
        let inputStrings = str.split(' ');
        let concentrations = []; //concentrations of dust in water
        for (let i of inputStrings) {
            concentrations.push(parseFloat(i));
        }
        //x axis values
        let seconds = [];
        // for (let seconds of inputStrings.length(concentrations)){
        // seconds + 1;
        for (let C of concentrations) {
            seconds.push(C + 1);
        }
        //var numbers1= +input;//parseInt(input);
        var trace2 = {
            x: seconds,
            y: concentrations,
            mode: 'markers'
        };
        var data = [trace2];
        var layout = {};
        Plotly.newPlot('myDiv', data, layout);
    }
    convertInputToDataPoints(str) {
        let dataPoints = [];
        return dataPoints;
    }
    plotGraph(dataPoints) {
        //DIANE PUT GRAPH STUFF HERE
    }
}
