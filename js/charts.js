/**
 * Charts.js - Handles all chart visualizations for the site
 */

/**
 * Initialize all charts when the DOM is loaded
 */
function initCharts() {
  createCostChart();
  createHumanCostChart();
  createInfrastructureChart();
}

/**
* Creates the financial costs chart
*/
function createCostChart() {
  const costCtx = document.getElementById('costChart').getContext('2d');
  const costChart = new Chart(costCtx, {
      type: 'bar',
      data: {
          labels: conflictData.labels,
          datasets: [{
              label: 'War Cost (Billions USD)',
              data: conflictData.warCosts,
              backgroundColor: '#8b0000',
          }, {
              label: 'Rebuild Cost (Billions USD)',
              data: conflictData.rebuildCosts,
              backgroundColor: '#daa520',
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              title: {
                  display: true,
                  text: 'Financial Cost of Conflicts (Adjusted for Inflation)',
                  font: { size: 16 }
              },
              legend: {
                  position: 'bottom'
              }
          }
      }
  });
  
  return costChart;
}

/**
* Creates the human costs chart
*/
function createHumanCostChart() {
  const humanCtx = document.getElementById('humanCostChart').getContext('2d');
  const humanChart = new Chart(humanCtx, {
      type: 'bar',
      data: {
          labels: conflictData.labels,
          datasets: [{
              label: 'Estimated Lives Lost (Thousands)',
              data: conflictData.humanCosts,
              backgroundColor: '#8b0000',
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              title: {
                  display: true,
                  text: 'Human Cost of Conflicts',
                  font: { size: 16 }
              },
              legend: {
                  position: 'bottom'
              }
          }
      }
  });
  
  return humanChart;
}

/**
* Creates the infrastructure rebuild costs chart
*/
function createInfrastructureChart() {
  const infraCtx = document.getElementById('infrastructureChart').getContext('2d');
  const infraChart = new Chart(infraCtx, {
      type: 'pie',
      data: {
          labels: conflictData.labels,
          datasets: [{
              data: conflictData.rebuildCosts,
              backgroundColor: [
                  '#8b0000',
                  '#a52a2a',
                  '#b22222',
                  '#dc143c',
                  '#ff0000'
              ]
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              title: {
                  display: true,
                  text: 'Infrastructure Rebuild Costs (Billions USD)',
                  font: { size: 16 }
              },
              legend: {
                  position: 'bottom'
              }
          }
      }
  });
  
  return infraChart;
}

// When the DOM is loaded, initialize the charts
document.addEventListener('DOMContentLoaded', initCharts);