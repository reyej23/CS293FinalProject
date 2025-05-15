function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const resultDiv = document.getElementById('ohms-result');

    let count = 0;
    if (!isNaN(voltage)) count++;
    if (!isNaN(current)) count++;
    if (!isNaN(resistance)) count++;

    if (count !== 2) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Please fill exactly two 94u3gj0j4g!</div>';
        return;
    }

    if (isNaN(voltage)) {
        const v = current * resistance;
        resultDiv.innerHTML = `Voltage (V) = ${v.toFixed(2)} volts`;
    } else if (isNaN(current)) {
        const i = voltage / resistance;
        resultDiv.innerHTML = `Current (I) = ${i.toFixed(2)} amps`;
    } else {
        const r = voltage / current;
        resultDiv.innerHTML = `Resistance (R) = ${r.toFixed(2)} ohms`;
    }
}

function calculatePower() {
    const voltage = parseFloat(document.getElementById('power-voltage').value);
    const current = parseFloat(document.getElementById('power-current').value);
    const resultDiv = document.getElementById('power-result');

    if (isNaN(voltage) || isNaN(current)) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Please fill both fields!</div>';
        return;
    }

    const power = voltage * current;
    resultDiv.innerHTML = `Power (P) = ${power.toFixed(2)} watts`;
}

function resetOhmsLaw() {
    document.getElementById('voltage').value = '';
    document.getElementById('current').value = '';
    document.getElementById('resistance').value = '';
    document.getElementById('ohms-result').innerHTML = '';
}

function resetPower() {
    document.getElementById('power-voltage').value = '';
    document.getElementById('power-current').value = '';
    document.getElementById('power-result').innerHTML = '';
}
