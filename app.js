// create an array of 10 names with some duplicate value
const names = ['John', 'Jane', 'Mary', 'John', 'John', 'John', 'John', 'John', 'John', 'John'];

// get unique names
const uniqueNames = [...new Set(names)];

// sort by names
const sortedNames = uniqueNames.sort();

// get all names where name starts with M
const mNames = sortedNames.filter(name => name.startsWith('M'));

// create an array of object with id, name, source, destination and duration
const flights = [
    { id: 1, name: 'John', source: 'Bangalore', destination: 'Mumbai', duration: '2h' },
    { id: 2, name: 'Jane', source: 'Bangalore', destination: 'Delhi', duration: '4h' },
    { id: 3, name: 'Mary', source: 'Bangalore', destination: 'Chennai', duration: '6h' },
    { id: 4, name: 'John', source: 'Bangalore', destination: 'Kolkata', duration: '8h' },
    { id: 5, name: 'John', source: 'Bangalore', destination: 'Hyderabad', duration: '10h' },
];

// sum of duration of all flights
const sumOfDuration = flights.reduce((total, flight) => total + parseInt(flight.duration), 0);

// get longest flight
const longestFlight = flights.reduce((prev, current) => (prev.duration > current.duration ? prev : current));

// order flight by duration
const orderedFlights = flights.sort((a, b) => a.duration - b.duration);

function sortFlightByDuration(flight1, flight2) {
    return flight1.duration - flight2.duration;
}

// create a function that takes an array as argument and returns an array of greetings
function greetings(array) {
    return array.map(name => `Hello ${name}`);
}

// get hour:minutes:seconds from seconds
function getTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsR = seconds % 60;
    return `${hours}:${minutes}:${secondsR}`;
}

// DOM
// add an event listened on body
document.body.addEventListener('click', () => {
    console.log('clicked');
}
);

// add resize listener on window
window.addEventListener('resize', () => {
    console.log('resized');
}
);


// API

// get sunset and sunrise time from a location


// get all the information about a location
const getSunTime = async (lat, lon) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
    const data = await response.json();
    return data;
}

getSunTime(12.9716, 77.5946).then(data => {
    console.log(data);
});


// Salesforce

// get a salesforce org id with SFDX commands
sfdx force:org:display -u

// list down all the orgs
sfdx force:org:list

// lightning button in lwc
<lightning-button label="Button" onclick="handleClick()"></lightning-button>

// deploy your metadata in Saleforce
sfdx force:mdapi:deploy -d src/main/default/metadata/
