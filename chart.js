// Variables recieved from the form
const nameRecieved = document.getElementById('nameTag');
const numRecieved = document.getElementById('numTag');
const button = document.getElementById('submitTag');

// Array
let nameArray = [];
let numArray = [];

// Eventlistener + Functions
button.addEventListener('click', function (e){
    e.preventDefault();
    nameArray.push(nameRecieved.value);
    numArray.push(numRecieved.value);
    nameRecieved.value = '';
    numRecieved.value = 0;
    if(nameArray.length > 5 && numArray.length > 5){
        document.getElementById('container').classList.add('show');
        document.getElementById('container').classList.remove('hidden');
    }
}