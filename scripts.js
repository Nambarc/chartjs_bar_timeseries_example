
// Get graph context and configure size.
var ctx = document.getElementById('chart_0').getContext('2d');
ctx.canvas.width = 1000;
ctx.canvas.height = 470;

// Define graph options.
var graph_options = {
  animation: {duration: 2000},
  scales:{
    xAxes: [
      {
        scaleLabel: {display: true, labelString: 'Date'},
        type: 'time',
        distribution: 'series',
        offset: true
      }
    ],
    yAxes: [
      {
        gridLines: {drawBorder: true},
        scaleLabel: {display: true, labelString: 'Things'},
        ticks: {suggestedMin: 0}
      }
    ],
  },
  legend: {
    display: false,
    position: 'right'
  }
}

// Define data to display on graph. See data format below. I tend to keep the 
// actual data in a variable, and then load that into a "dataset".
// Required daily running amount each.
var my_data = [
  {x: new Date(2020, 10, 01), y: 10},
  {x: new Date(2020, 10, 02), y: 20},
  {x: new Date(2020, 10, 03), y: 30},
];

var data_set = [
  {
    label: 'RequiredDaily',
    backgroundColor: 'rgba(255, 87, 51, 0.4)',
    borderColor: 'rgba(255, 87, 51, 1)',
    data: my_data,
    type: 'bar',
    borderWidth: 2
  },
]

// Configure graph.
var cfg = {
  data: {
    datasets: data_set
  },
  options: graph_options
};

// Create graph.
var chart = new Chart(ctx, cfg);
