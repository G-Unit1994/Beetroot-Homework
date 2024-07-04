let currentLight = "red";

document.getElementById('changeLightButton').addEventListener('click', function() {
    if (currentLight === 'red') {
        document.getElementById('redLight').classList.remove('red');
        document.getElementById('yellowLight').classList.add('yellow');
        currentLight = 'yellow';
    } else if (currentLight === 'yellow') {
        document.getElementById('yellowLight').classList.remove('yellow');
        document.getElementById('greenLight').classList.add('green');
        currentLight = 'green';
    } else if (currentLight === 'green') {
        document.getElementById('greenLight').classList.remove('green');
        document.getElementById('redLight').classList.add('red');
        currentLight = 'red';
    }
});