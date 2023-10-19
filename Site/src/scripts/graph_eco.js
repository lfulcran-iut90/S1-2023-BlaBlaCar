const blaBlaCanvas = document.getElementById('myChart');

const blaBlaChart = new Chart(blaBlaCanvas, {
  // Graphe sur un chiffre d'affaire en augmentation
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022', 'Aujourd\'hui'],
    datasets: [{
      label: 'Evolution du chiffre d\'affaire en millions d\'euros',
      data: [100,130,80,100,197,200 ],
      backgroundColor: '#6B28A6', 
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000',
      fill : true
    }]
  },
})