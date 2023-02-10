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



// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const sections = document.querySelectorAll('section');
for (const js_section of sections){
    js_section.style.border = '2px solid tomato';
    js_section.style.borderRadius = '10px';
    js_section.style.paddingLeft = '10px';
    js_section.style.backgroundColor = '#ddd';
    js_section.style.marginBottom = '10px';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'red';

const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('text-center');
placesContainer.classList.add('large-text');
placesContainer.classList.remove('large-text');