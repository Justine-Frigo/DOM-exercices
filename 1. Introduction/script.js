console.log(document.title);

document.title = "Modifying the DOM";

document.body.style.backgroundColor = "#FF69B4";

function randomColor(){
    let number = Math.floor(Math.random() * (255-0+1) + 0);
    return number;
}

document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;

for (let elem of document.body.children){
    console.log(elem);
}