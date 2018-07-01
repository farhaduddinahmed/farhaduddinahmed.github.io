var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/b.jpg') {
        
      myImage.setAttribute ('src','Images/a.jpg');
    } else {
      myImage.setAttribute ('src','Images/b.jpg');
    }
}

