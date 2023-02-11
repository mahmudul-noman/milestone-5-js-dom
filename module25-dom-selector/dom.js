const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li);
}

const all_Headings = document.getElementsByTagName('h1');
for (const h1 of all_Headings) {
    // console.log(h1.innerText);
}

const visitdePlaces = document.getElementsByClassName('visited-places');
for (const place of visitdePlaces) {
    // console.log(place);
}

const playerList = document.getElementById('players-title');
playerList.innerText = "My Favourite Player Name for 2022: JS";





const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('text-center');
placesContainer.classList.add('large-text');
placesContainer.classList.remove('large-text');