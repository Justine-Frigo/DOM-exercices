const becodeStudents = [ 
    "Adrien B.",
    "Adrien C.",
    "Angel",
    "Arnaud",
    "Caroline",
    "Denis",
    "Dorian",
    "Dylan",
    "Dzheylyan",
    "Giovanni",
    "Iliess",
    "Isabelle",
    "Jordan",
    "Julie",
    "Justine",
    "Ludovic",
    "Lyne",
    "Manu",
    "Maryam",
    "Mohamed",
    "Nathanaël",
    "Natallia",
    "Stacy",
    "Tom",
    "Youris",
    "Zahra",
];

const display = becodeStudents.sort((a,b) => 0.5 - Math.random());


function randomColor(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

for (let item of display){
    let newSection = document.createElement("section");

    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();

    let contrast = (red * 0.299) + (green * 0.587) + (blue * 0.114);

    newSection.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(item);

    (contrast > 150) ? paragraph.style.color = "black" : paragraph.style.color = "white"; 

    paragraph.appendChild(textNode);
    newSection.appendChild(paragraph);
    document.querySelector("article").appendChild(newSection);
}
