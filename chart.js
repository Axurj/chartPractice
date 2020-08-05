// Variables recieved from the form
const nameRecieved = document.getElementById('nameTag');
const numRecieved = document.getElementById('numTag');
const button = document.getElementById('submitTag');
let linkRecieved = document.getElementById('linkTag');

// Array
let nameArray = [];
let numArray = [];

// Eventlistener + Functions
button.addEventListener('click', function (event){
    event.preventDefault();
    // nameRecieved.value = '';
    // numRecieved.value = 0;
    nameArray.push(nameRecieved.value);
    numArray.push(numRecieved.value);
    console.log('Names: ', nameArray);
    console.log('Points: ', numArray);
    // if(nameArray.length > 5 && numArray.length > 5){
    //     document.getElementById('container').classList.add('show');
    //     document.getElementById('container').classList.remove('hidden');
    // }
    if(numArray.length >= 5 && nameArray.length >= 5){
        localStorage.setItem('Name', nameArray);
        localStorage.setItem('Points', numArray);
        linkRecieved.classList.add('linkOn');
        linkRecieved.classList.remove('linkOff');
    }
})