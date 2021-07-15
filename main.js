let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/firefoxicon.jpg') {
        myImage.setAttribute('src','/firefoxicon2.jpg') ;
    } else {
        myImage.setAttribute('src','/firefoxicon.jpg');
    }
}
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please enter your name.') ;
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'mozilla is cool, ' + myName;
    }
}
    if(!localStorage.getItem('name')) {
        setUserName() ;
    } else {
        let storedName = localStorage.getItem('name') ;
        myHeading.textContent = 'MOZILLA IS COOL,' + storedName;
    }
myButton.onclick = function () {
    setUserName()
}

