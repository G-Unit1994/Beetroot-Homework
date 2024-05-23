  document.addEventListener('DOMContentLoaded', function() {
            var redLight = document.getElementById('red');
            var yellowLight = document.getElementById('yellow');
            var greenLight = document.getElementById('green');
            var switchButton = document.getElementById('switchButton');

            var currentColor = 'red';

            switchButton.addEventListener('click', function() {
                if (currentColor === 'red') {
                    redLight.style.backgroundColor = 'grey';
                    yellowLight.style.backgroundColor = 'yellow';
                    currentColor = 'yellow';
                } else if (currentColor === 'yellow') {
                    yellowLight.style.backgroundColor = 'grey';
                    greenLight.style.backgroundColor = 'green';
                    currentColor = 'green';
                } else if (currentColor === 'green') {
                    greenLight.style.backgroundColor = 'grey';
                    redLight.style.backgroundColor = 'red';
                    currentColor = 'red';
                }
            });
        });
