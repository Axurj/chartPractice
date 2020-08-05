let resultRecieved1 = document.getElementById('resultTag1');
let resultRecieved2 = document.getElementById('resultTag2');

resultRecieved1.innerHTML = localStorage.getItem('Name');
resultRecieved2.innerHTML = localStorage.getItem('Points');