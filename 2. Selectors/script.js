
let items = document.querySelectorAll('.important');

for (elem of items){
    elem.setAttribute("title","This is an important item");
}

let images = document.querySelectorAll('img');

for (pic of images){
    (pic.classList.contains("important")) ? pic.style.display ="block" : pic.style.display ="none";   
}

let paragraphs = document.querySelectorAll('p');

function randomColor(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

for (par of paragraphs){
    par.hasAttribute("class") ? console.log(par.innerHTML,par.classList) : (console.log(par.innerHTML), par.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`);
}