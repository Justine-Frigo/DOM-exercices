let myList = document.querySelector('ul');
let listItems = myList.childNodes;

for (i of listItems){
    

    if (i.nodeType === 1 ) {

        for (elem of listItems){

          if ( elem.isSameNode(i) ){
            continue; 
            
          }
           else if ( elem.nodeType === 1) {    
          
            if (elem.isEqualNode(i)){
            myList.removeChild(elem);              
            } 
        }
        
        } 

        if (i.innerHTML === "Fast and Furious"){
            myList.insertBefore(i, listItems[0]);
            i.classList.add("important");
        }

    }

    i.addEventListener('click', (e) => {

        if (e.target.classList.contains("important")){
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        } else {

        alert(e.target.innerHTML);
        }

    });  

   
}


window.addEventListener('keyup', (e) => {
    if (e.code === "KeyR"){
      
   for (elem of listItems){
    myList.appendChild(elem);
   
    if (elem.innerHTML === "Fast and Furious"){
        myList.insertBefore(elem, listItems[0]);
        elem.classList.add("important");
      }
      
    }
    }

    if (e.code === "KeyD"){
      
      let fastAndFurious = document.querySelector(".important");
      let cloneFast = fastAndFurious.cloneNode(true);
      console.log(cloneFast);
      myList.insertBefore(cloneFast, listItems[1]);
         }
         }
  )


let newDiv = document.createElement("div");
document.body.insertBefore(newDiv, myList);

let selectNew = document.createElement("select");
let optionOne = document.createElement("option");
let optionTwo = document.createElement("option");

let optionOneText = document.createTextNode("important franchises");
let optionTwoText = document.createTextNode("normal franchises");

optionOne.setAttribute("value", "important");
optionTwo.setAttribute("value", "normal");

optionOne.appendChild(optionOneText);
optionTwo.appendChild(optionTwoText);

selectNew.append(optionOne, optionTwo);
newDiv.append(selectNew);

selectNew.addEventListener("change", () => {
let selectedIndex = selectNew.selectedIndex;
let selectedOption = selectNew.getElementsByTagName("option")[selectedIndex];
let selectedValue = selectedOption.value;
console.log(selectedValue);

if (selectedValue === "important"){   
   
    for (elem of listItems){

    if (elem.nodeType === 1){

        console.log(listItems);

    if (elem.classList.contains('important')){

        elem.style.display = "block";

    } else {

        elem.style.display = "none";

    }
}
   }
} else if (selectedValue === "normal"){
       
    for (elem of listItems){

        if (elem.nodeType === 1){
    
            console.log(listItems);
    
        if (elem.classList.contains('important')){
    
            elem.style.display = "none";
    
        } else {
    
            elem.style.display = "block";
    
        }
    }
       }
    }

    

})








