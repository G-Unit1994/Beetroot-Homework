class WorldClock {
    constructor(city, timezone) {
        this.city = city;
        this.timezone = timezone;
        this.element = document.createElement('div');
        this.element.className = 'clock';

        // Create buttons
        this.deleteButton = document.createElement('button');
        this.deleteButton.textContent = 'Delete Clock';
        this.deleteButton.addEventListener('click', () => this.deleteClock());

        this.showTimeButton = document.createElement('button');
        this.showTimeButton.textContent = 'Show Time';
        this.showTimeButton.addEventListener('click', () => this.showTime());

        this.showDateTimeButton = document.createElement('button');
        this.showDateTimeButton.textContent = 'Show Date & Time';
        this.showDateTimeButton.addEventListener('click', () => this.showDateTime());

        // Create a container for the buttons
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.className = 'buttons';
        this.buttonContainer.appendChild(this.showTimeButton);
        this.buttonContainer.appendChild(this.showDateTimeButton);
        this.buttonContainer.appendChild(this.deleteButton);

        this.updateTime();
        this.interval = setInterval(() => this.updateTime(), 1000);
    }

    getCurrentDate() {
        return new Date().toLocaleDateString('en-US', { timeZone: this.timezone });
    }

    getCurrentDateTime() {
        return new Date().toLocaleString('en-US', { timeZone: this.timezone });
    }

    updateTime() {
        this.element.innerHTML = `<h3>${this.city}</h3>
                                  <p>${this.getCurrentDateTime()}</p>`;
        this.element.appendChild(this.buttonContainer);
    }

    showTime() {
        alert(`Current time in ${this.city}: ${new Date().toLocaleTimeString('en-US', { timeZone: this.timezone })}`);
    }

    showDateTime() {
        alert(`Current date and time in ${this.city}: ${this.getCurrentDateTime()}`);
    }

    deleteClock() {
        clearInterval(this.interval);
        this.element.remove();
    }

    getElement() {
        return this.element;
    }
}

const timezones = {
    'Kyiv': 'Europe/Kyiv',
    'Odesa': 'Europe/Kyiv',
    'London': 'Europe/London',
    'New York': 'America/New_York',
    'Tokyo': 'Asia/Tokyo',
    'Sydney': 'Australia/Sydney',
    // Add more cities and their respective time zones here
};

document.getElementById('clockForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('timezoneInput').value.trim();
    const timezone = timezones[city];
    if (timezone) {
        const clock = new WorldClock(city, timezone);
        document.getElementById('clockContainer').appendChild(clock.getElement());
        document.getElementById('timezoneInput').value = '';
    } else {
        alert('Please enter a valid city name');
    }
});

// class WorldClock {
//     constructor(city, timezone) {
//         this.city = city;
//         this.timezone = timezone;
//         this.element = document.createElement('div');
//         this.element.className = 'clock';

//         // Create buttons
//         this.deleteButton = document.createElement('button');
//         this.deleteButton.textContent = 'Delete Clock';
//         this.deleteButton.addEventListener('click', () => this.deleteClock());

//         this.showTimeButton = document.createElement('button');
//         this.showTimeButton.textContent = 'Show Time';
//         this.showTimeButton.addEventListener('click', () => this.showTime());

//         this.showDateTimeButton = document.createElement('button');
//         this.showDateTimeButton.textContent = 'Show Date & Time';
//         this.showDateTimeButton.addEventListener('click', () => this.showDateTime());

//         // Add buttons to the element
//         this.element.appendChild(this.deleteButton);
//         this.element.appendChild(this.showTimeButton);
//         this.element.appendChild(this.showDateTimeButton);

//         this.updateTime();
//         this.interval = setInterval(() => this.updateTime(), 1000);
//     }

//     getCurrentDate() {
//         return new Date().toLocaleDateString('en-US', { timeZone: this.timezone });
//     }

//     getCurrentDateTime() {
//         return new Date().toLocaleString('en-US', { timeZone: this.timezone });
//     }

//     updateTime() {
//         this.element.innerHTML = `<h3>${this.city}</h3>
//                                   <p>${this.getCurrentDateTime()}</p>`;
//         this.element.appendChild(this.deleteButton);
//         this.element.appendChild(this.showTimeButton);
//         this.element.appendChild(this.showDateTimeButton);
//     }

//     showTime() {
//         alert(`Current time in ${this.city}: ${new Date().toLocaleTimeString('en-US', { timeZone: this.timezone })}`);
//     }

//     showDateTime() {
//         alert(`Current date and time in ${this.city}: ${this.getCurrentDateTime()}`);
//     }

//     deleteClock() {
//         clearInterval(this.interval);
//         this.element.remove();
//     }

//     getElement() {
//         return this.element;
//     }
// }

// const timezones = {
//     'London': 'Europe/London',
//     'New York': 'America/New_York',
//     'Tokyo': 'Asia/Tokyo',
//     'Sydney': 'Australia/Sydney',
//     // Add more cities and their respective time zones here
// };

// document.getElementById('clockForm').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const city = document.getElementById('timezoneInput').value.trim();
//     const timezone = timezones[city];
//     if (timezone) {
//         const clock = new WorldClock(city, timezone);
//         document.getElementById('clockContainer').appendChild(clock.getElement());
//         document.getElementById('timezoneInput').value = '';
//     } else {
//         alert('Please enter a valid city name');
//     }
// });