//  Line
var trace1 = {
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'],
    y: [10, 15, 13, 17],
    type: 'scatter',
    name: 'AdExchange'
};
var trace2 = {
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'],
    y: [16, 5, 11, 9],
    type: 'scatter',
    name: 'Rubicon'
};

var layout = {
    title: 'Impressions Per Day (last 7 days)',
    font: { family: "'Open Sans', sans-serif" },
    xaxis: {
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
    },
    yaxis: {
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
        title: 'Impressions (thousands)'
    }
}
var data = [trace1, trace2];
Plotly.newPlot('line', data, layout);

// Bar
var data = [{
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'],
    y: [3, 7, 5, 7, 9],
    type: 'bar',
    width: 0.4
}];

var layout = {
    title: 'Total Revenue Per Day (last 7 days)',
    xaxis: {
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
    },
    yaxis: {
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
        title: 'Total Revenue (thousands)'
    }
}

Plotly.newPlot('bar', data, layout);

// Scatter
var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers',
    type: 'scatter',
    name: 'AdExchange',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
};

var trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers',
    type: 'scatter',
    name: 'Rubicon',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
};

var data = [trace1, trace2];

var layout = {
    xaxis: {
        range: [0.75, 5.25],
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
    },
    yaxis: {
        range: [0, 8],
        linecolor: 'lightgrey',
        linewidth: 1,
        mirror: true,
        title: 'Impressions (thousands)'
    },
    title: 'Impressions Over Time',
    font: { family: "'Open Sans', sans-serif" },
};

Plotly.newPlot('scatter', data, layout);

Multi Bars
var multi1 = {
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
    y: [24.25, 14, 23, 15, 22.3, 5.09, 2],
    name: 'AdExchange',
    type: 'bar',
    marker: {
        color: '#04524F'
    }
};

var multi2 = {
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
    y: [12, 18, 29, 20.5, 24, 9, 20],
    name: 'Rubicon',
    type: 'bar',
    marker: {
        color: ''
    }
};

var multi3 = {
    x: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
    y: [10, 20, 25, 12, 18, 29, 21, 10],
    name: 'Sovrn',
    type: 'bar',
    marker: {
        color: ''
    },

};


var multidata = [multi1, multi2, multi3];

var multilayout = {
    barmode: 'group',
    title: 'Impressions Over Time',
    font: { family: "'Open Sans', sans-serif" },
    // yaxis: {
    // 	range: [5, 100]
    // }
};

Plotly.newPlot('multibars', multidata, multilayout);

 Heatmap
var data = [
  {
    z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: ['Peter Klaven', 'Sydney Fife', 'Zooey Rice', 'Robbie Klaven', 'Oswald Klaven', 'Joyce Klaven'],
    type: 'heatmap'
  }
];

Plotly.newPlot('heatmap', data);