const facts = [
    "SpaceX's Falcon Heavy is currently the most powerful operational rocket in the world.",
    "The global space economy was valued at $447 billion in 2020.",
    "There are over 3,000 active satellites orbiting Earth as of 2021.",
    "The International Space Station (ISS) has been continuously occupied since November 2000.",
    "NASA's Artemis program aims to land the first woman and next man on the Moon by 2024.",
    "The space tourism industry is expected to reach $3 billion by 2030.",
    "Satellite internet constellations like Starlink aim to provide global broadband coverage.",
    "The James Webb Space Telescope, launched in 2021, is the largest and most powerful space telescope ever built.",
    "3D printing technology is being developed for use in space exploration and colonization.",
    "The space debris problem is becoming increasingly critical, with over 128 million pieces of debris orbiting Earth.",
    "The first human to journey into outer space was Soviet cosmonaut Yuri Gagarin on April 12, 1961.",
    "The Apollo program cost approximately $25.4 billion, equivalent to about $150 billion in 2020 dollars.",
    "The Mars Perseverance rover, launched in 2020, is searching for signs of ancient microbial life on Mars.",
    "The Hubble Space Telescope has made more than 1.5 million observations since its launch in 1990.",
    "The first woman in space was Soviet cosmonaut Valentina Tereshkova in 1963.",
    "The coldest known place in the universe is the Boomerang Nebula, with a temperature of -272°C.",
    "The largest known star, UY Scuti, is about 1,700 times larger than our Sun.",
    "The speed of light in vacuum is approximately 299,792,458 meters per second.",
    "The first artificial satellite, Sputnik 1, was launched by the Soviet Union in 1957.",
    "The Voyager 1 spacecraft is the farthest human-made object from Earth, launched in 1977.",
    "The asteroid belt between Mars and Jupiter contains millions of asteroids.",
    "The concept of 'space elevator' could potentially reduce the cost of space travel dramatically.",
    "The first spacewalk was performed by Soviet cosmonaut Alexei Leonov in 1965.",
    "The Parker Solar Probe is the closest human-made object to the Sun, studying its outer corona.",
    "The search for extraterrestrial intelligence (SETI) uses radio telescopes to listen for signals from alien civilizations.",
    "The first commercial space station, Axiom Space Station, is planned to attach to the ISS in 2024.",
    "The New Horizons spacecraft completed the first flyby of Pluto in 2015.",
    "Space mining could potentially yield trillions of dollars worth of resources from asteroids and other celestial bodies.",
    "The first image of a black hole was captured by the Event Horizon Telescope in 2019.",
    "NASA's Ingenuity helicopter performed the first powered, controlled flight on another planet (Mars) in 2021."
];

let usedFactsIndices = [];

function getRandomFact() {
    if (usedFactsIndices.length === facts.length) {
        usedFactsIndices = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (usedFactsIndices.includes(randomIndex) || 
             (usedFactsIndices.length > 0 && randomIndex === usedFactsIndices[usedFactsIndices.length - 1]));

    usedFactsIndices.push(randomIndex);
    return facts[randomIndex];
}

const factElement = document.getElementById('fact');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function displayFact() {
    factElement.textContent = getRandomFact();
}

function nextFact() {
    displayFact();
}

function prevFact() {
    usedFactsIndices.pop(); // Remove the current fact
    if (usedFactsIndices.length > 0) {
        usedFactsIndices.pop(); // Remove the previous fact to allow re-display
    }
    displayFact();
}

nextButton.addEventListener('click', nextFact);
prevButton.addEventListener('click', prevFact);

displayFact();

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        nextFact();
    } else if (touchEndX - touchStartX > 50) {
        prevFact();
    }
}