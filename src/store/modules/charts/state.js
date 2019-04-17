export default {
  chartOptions: {
    dataLabels: {
        enabled: false
    },
    chart: {
      zoom: {
          enabled: false
      }
    },
    stroke: {
        curve: 'smooth'
    },
  },
  seriesNegative: [
    {
      name: 'Myo',
      data: [31, 40, 28, 51, 42, 109, 100, 11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41]
    }, 
    {
      name: 'GSR',
      data: [11, 32, 45, 32, 34, 52, 41]
    },
  ],
  charts: null
}
