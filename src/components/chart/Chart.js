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
    "screen and (max-width: 701px) and screen",
    {
      width: 450,
      height: 250,
    },
  ],

  [
    "screen and (min-width: 501px) and (max-width: 1000px)",
    {
      width: 580,
      height: 300,
    },
  ],

  [
    "screen and (min-width: 570px) and (max-width: 701px)",
    {
      width: 500,
      height: 200,
    },
  ],
  [
    "screen and (max-width: 571px)",
    {
      width: 330,
      height: 200,
    },
  ],
];

new Chartist.Bar(".ct-chart", data, options, responsiveOptions);
