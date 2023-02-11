// 1. Where to add
const placesList = document.getElementById('places-list');

// 2. how & what to be added
const addnewLi = document.createElement('li');
addnewLi.innerText = 'Added New List From JS';

// 3. Add the child
placesList.appendChild(addnewLi);


// added new sction to html file using JavaScript :::::::::::::::::::::::::::::::::::::::::::::::::;
// ::::::::::::::::::::added new section: favourite hobby to main section
// 1. get main continer 
const mainContainer = document.getElementById('main-container');
// 2. added section to main container
const addnewSection = document.createElement('section');
// 3. addded h1 to section
const added_h1 = document.createElement('h1');
// 4. added text to h1
added_h1.innerText = 'My Favourite Hobby';
// 5. show text to html body 
addnewSection.appendChild(added_h1);
// 6. added ul to section under h1 tag
const addUL = document.createElement('ul');
// 7. added li to ul
const added_Li1 = document.createElement('li');
// 8. added text to li
added_Li1.innerText = 'Coding';
// 9. show text to li in html body
addUL.appendChild(added_Li1);
// 10. added ul to section: for show this html body
addnewSection.appendChild(addUL);
// 11. added section to main container: for show this html body
mainContainer.appendChild(addnewSection);
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// set innerHTML directly
const addTeam = document.createElement('section');
addTeam.innerHTML = `
 <h1>My Fav. Team:</h1>
 <ul>
    <li>Argentina</li>
    <li>Barcelona</li>
    <li>Bangladesh</li>
</ul>   
`
mainContainer.appendChild(addTeam);