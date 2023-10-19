const blaBlaCanvas = document.getElementById('myChart');

const blaBlaChart = new Chart(blaBlaCanvas, {
  // Graphe sur un chiffre d'affaire en augmentation
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022', 'Juin'],
    datasets: [{
      label: 'Chiffre d\'affaire',
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,170,180,190,200],
      backgroundColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  },

})