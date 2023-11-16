// Function to calculate total costs
function calculateCosts() {
    // Define labor rates
    const laborRates = {
        eventCoordinator: 300,
        cateringManager: 75,
        dj: 175,
        valetParking: 50,
        restroomAttendant: 40,
        servers: 45,
        bartenderServer: 50,
    };

    // Initialize totals
    let estimatedMaterialTotal = 0;
    let actualMaterialTotal = 0;
    let estimatedLaborTotal = 0;
    let actualLaborTotal = 0;

    // Calculate Material and Labor Costs
    // Fetch estimated material costs
    estimatedMaterialTotal += parseFloat(document.getElementById('estimated-venue-rental').value) || 0;
    estimatedMaterialTotal += parseFloat(document.getElementById('estimated-beverages').value) || 0;
    // Repeat this structure for each category and item

    // Fetch actual material costs
    actualMaterialTotal += parseFloat(document.getElementById('actual-venue-rental').value) || 0;
    actualMaterialTotal += parseFloat(document.getElementById('actual-beverages').value) || 0;
    // Repeat this structure for each category and item

    // Fetch estimated labor costs
    estimatedLaborTotal += parseFloat(document.getElementById('estimated-event-coordinator-hours').value) * laborRates.eventCoordinator || 0;
    estimatedLaborTotal += parseFloat(document.getElementById('estimated-bartender-server-hours').value) * laborRates.bartenderServer || 0;
    // Repeat this structure for each labor position

    // Fetch actual labor costs
    actualLaborTotal += parseFloat(document.getElementById('actual-event-coordinator-hours').value) * laborRates.eventCoordinator || 0;
    actualLaborTotal += parseFloat(document.getElementById('actual-bartender-server-hours').value) * laborRates.bartenderServer || 0;
    // Repeat this structure for each labor position

    // Fetch insurance costs
    const estimatedInsurance = parseFloat(document.getElementById('estimated-insurance').value) || 0;
    const actualInsurance = parseFloat(document.getElementById('actual-insurance').value) || 0;

    // Fetch overage costs
    const estimatedOverage = parseFloat(document.getElementById('estimated-material-overage').value) || 0;
    const actualOverage = parseFloat(document.getElementById('actual-material-overage').value) || 0;

    // Calculate Grand Totals
    let totalEstimated = estimatedMaterialTotal + estimatedLaborTotal + estimatedInsurance + estimatedOverage;
    let totalActual = actualMaterialTotal + actualLaborTotal + actualInsurance + actualOverage;

    // Display Results
    document.getElementById('total-result').innerHTML = 
        `<strong>Total Estimated:</strong> ${totalEstimated.toFixed(2)}<br>
         <strong>Total Actual:</strong> ${totalActual.toFixed(2)}<br>
         <strong>Over Budget:</strong> ${(totalActual - totalEstimated).toFixed(2)}`;
}

// Event Listener for Calculate Button
document.getElementById('calculate-btn').addEventListener('click', calculateCosts);

