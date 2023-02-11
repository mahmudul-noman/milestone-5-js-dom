// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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