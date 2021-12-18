var data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    [40, 29, 31, 22, 39, 38, 29],
    [20, 16, 19, 12, 20, 29, 21],
  ],
};

var options = {
  seriesBarDistance: 0,
  width: 450,
  height: 250,
  responsive: true,
  high: 40,
  low: 10,

  axisX: {
    showLabel: true,
    showGrid: false,
    offset: 50,
  },
};

var responsiveOptions = [
  [
    "screen and (min-width: 700px) and (max-width: 1000px)",
    {
      width: 650,
      height: 250,
    },
  ],
];

new Chartist.Bar(".ct-chart", data, options, responsiveOptions);
