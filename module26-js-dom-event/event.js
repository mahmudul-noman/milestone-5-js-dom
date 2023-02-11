console.log('Event JS File');

function makeRed() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = '#000';
}


const makeBlueButton = document.getElementById('blue-btn')
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}