var add = document.getElementById("add");
var cancel = document.getElementById("cancel");
var conf = document.getElementById("confirm");
var nam = document.getElementById("name");
var fromText = document.getElementById("from");
var toText = document.getElementById("till");
var from = document.getElementById("place_from");
var to = document.getElementById("place_to");
var boxes = document.getElementById("boxes");
var notes = document.getElementById("notes");
var taxis = document.getElementById("taxis");
var taxi1 = document.getElementById("taxi-1");
var taxi2 = document.getElementById("taxi-2");
var taxi3 = document.getElementById("taxi-3");
var taxi4 = document.getElementById("taxi-4");
var taxi5 = document.getElementById("taxi-5");
var taxi6 = document.getElementById("taxi-6");

var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");
var car5 = document.getElementById("car5");
var car6 = document.getElementById("car6");

car1.src = "images/car1.png";
car2.src = "images/car2.png";
car3.src = "images/car3.png";
car4.src = "images/car4.png";
car5.src = "images/car5.png";
car6.src = "images/car6.png";

add.addEventListener('mouseover', highlight);

add.addEventListener('mouseleave', restore);

add.addEventListener('click', function() {
    fromText.value = null;
    nam.value = null;
    toText.value = null;
    boxes.value = null;
    notes.value = null;
    taxis.style.display = "grid";
});


cancel.addEventListener('mouseover', highlight);
cancel.addEventListener('mouseleave', restore);
cancel.addEventListener('click', function() {
    taxis.style.display = "none";
})

conf.addEventListener('mouseover', highlight);
conf.addEventListener('mouseleave', restore);

from.addEventListener('mouseover', textHighlight);
from.addEventListener('mouseleave', textRestore);

to.addEventListener('mouseover', textHighlight);
to.addEventListener('mouseleave', textRestore);

function highlight() {
    this.style.backgroundColor = "#404040";
}

function restore() {
    this.style.backgroundColor = "#827F7F";
}

function textHighlight() {
    this.style.color = "#878383";
}

function textRestore() {
    this.style.color = "#FFFFFF";
}

function select(id){
    
    var car = document.getElementById(id);
    car1.style.borderStyle = "none";
    car2.style.borderStyle = "none";
    car3.style.borderStyle = "none";
    car4.style.borderStyle = "none";
    car5.style.borderStyle = "none";
    car6.style.borderStyle = "none";
    car.style.borderStyle = "solid";
    car.style.borderColor = "#518DFC"
}