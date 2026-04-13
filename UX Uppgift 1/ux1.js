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
var taxi1 = document.getElementById("taxi-1");
var taxi2 = document.getElementById("taxi-2");
var taxi3 = document.getElementById("taxi-3");
var taxi4 = document.getElementById("taxi-4");
var taxi5 = document.getElementById("taxi-5");
var taxi6 = document.getElementById("taxi-6");

var car1 = document.createElement("img");
var car2 = document.createElement("img");
var car3 = document.createElement("img");
var car4 = document.createElement("img");
var car5 = document.createElement("img");
var car6 = document.createElement("img");

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
    taxi1.appendChild(car1);
    taxi2.appendChild(car2);
    taxi3.appendChild(car3);
    taxi4.appendChild(car4);
    taxi5.appendChild(car5);
    taxi6.appendChild(car6);
});


cancel.addEventListener('mouseover', highlight);
cancel.addEventListener('mouseleave', restore);
cancel.addEventListener('click', function() {
    taxi1.innerHTML = null;
    taxi2.innerHTML = null;
    taxi3.innerHTML = null;
    taxi4.innerHTML = null;
    taxi5.innerHTML = null;
    taxi6.innerHTML = null;
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