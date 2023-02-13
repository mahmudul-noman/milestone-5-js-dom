// option: 1 ::::::::::::::::::::::::::::::::
//<button onclick="document.body.style.backgroundColor='yellow'">Color Change to Yellow</button>


// option: 2 ::::::::::::::::::::::::::::::::
function makeRed() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = '#000';
}


// option: 3 ::::::::::::::::::::::::::::::::
const makeBlueButton = document.getElementById('blue-btn')
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}


// option: 4 ::::::::::::::::::::::::::::::::
const makeGreenBtn = document.getElementById('green-btn');
makeGreenBtn.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})


// option: 5 ::::::::::::::::::::::::::::::::
// We will this. IMPORTANT
document.getElementById('golden-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})