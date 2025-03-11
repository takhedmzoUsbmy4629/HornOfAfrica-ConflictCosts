/**
 * Calculator.js - Handles the war cost calculator functionality
 */

/**
 * Initialize the calculator when the DOM is loaded
 */
function initCalculator() {
  const calculateBtn = document.getElementById('calculateBtn');
  const calculatorResult = document.getElementById('calculatorResult');
  
  if (calculateBtn) {
      calculateBtn.addEventListener('click', calculateImpact);
  }
}

/**
* Calculate the potential impact of using war funds for development
*/
function calculateImpact() {
  const conflictSelect = document.getElementById('conflict');
  const projectSelect = document.getElementById('project');
  
  if (!conflictSelect || !projectSelect) return;
  
  const cost = parseFloat(conflictSelect.value);
  const projectType = projectSelect.value;
  
  let result = '';
  let quantity = 0;
  
  // Use data from the conflicts data file
  const costPerUnit = conflictData.calculator.costPerUnit[projectType];
  const impact = conflictData.calculator.impact[projectType];
  
  // Calculate how many units could be built with the war cost
  quantity = Math.floor(cost * 1000 / costPerUnit);
  
  switch(projectType) {
      case 'school':
          result = `<p>The $${cost} billion spent could have built <strong>${quantity.toLocaleString()}</strong> schools across the region.</p>
          <p>This would provide education for approximately <strong>${(quantity * impact.students).toLocaleString()}</strong> students and create <strong>${(quantity * impact.jobs).toLocaleString()}</strong> teaching jobs.</p>`;
          break;
      case 'hospital':
          result = `<p>The $${cost} billion spent could have built <strong>${quantity.toLocaleString()}</strong> hospitals across the region.</p>
          <p>This would provide healthcare access for approximately <strong>${(quantity * impact.patients).toLocaleString()}</strong> people and create <strong>${(quantity * impact.jobs).toLocaleString()}</strong> healthcare jobs.</p>`;
          break;
      case 'road':
          result = `<p>The $${cost} billion spent could have built <strong>${quantity.toLocaleString()}</strong> kilometers of paved roads.</p>
          <p>This would connect communities, reduce transportation costs by an estimated 30%, and accelerate regional trade.</p>`;
          break;
      case 'water':
          result = `<p>The $${cost} billion spent could have built <strong>${quantity.toLocaleString()}</strong> community water systems.</p>
          <p>This would provide clean water access for approximately <strong>${(quantity * impact.people).toLocaleString()}</strong> people and reduce waterborne diseases by an estimated 65%.</p>`;
          break;
      case 'power':
          result = `<p>The $${cost} billion spent could have built <strong>${quantity.toLocaleString()}</strong> medium-sized power plants.</p>
          <p>This would generate approximately <strong>${(quantity * impact.output).toLocaleString()} MW</strong> of electricity, potentially providing power to <strong>${(quantity * impact.homes).toLocaleString()}</strong> homes and businesses.</p>`;
          break;
  }
  
  // Update the result display
  const calculatorResult = document.getElementById('calculatorResult');
  if (calculatorResult) {
      calculatorResult.innerHTML = result;
  }
}

// When the DOM is loaded, initialize the calculator
document.addEventListener('DOMContentLoaded', initCalculator);