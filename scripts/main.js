let myHeading = document.querySelector('h1');
myHeading.textContent = "hello world"

document.querySelector('h1').onclick = function() {
    alert("stop click me !");
}

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/s3.png') {
        myImage.setAttribute('src', 'images/dynamodb.png'); }
    else {
        myImage.setAttribute('src', 'images/s3.png');
    }
}

let myButton = document = document.querySelector('button');

function setUserName() {
    let myName = prompt(' pleas enter your name');
    localStorage.setItem('name', myName);
    alert('your name is ' + myName);
}

myButton.onclick = function() {
    setUserName()
}