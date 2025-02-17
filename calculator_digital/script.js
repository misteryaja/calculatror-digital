function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(display);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
