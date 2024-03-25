"use strict"
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");
const newBtn = document.querySelector("#new");
resetBtn.addEventListener("click",resetGrid);
newBtn.addEventListener("click",newGrid);
/*default grid*/
window.onload=createGrid(16);
function createGrid(size){
    for(let i=1;i<=size;i++){
        const row = document.createElement("div");
        container.appendChild(row);
        for(let j=1;j<=size;j++){
            console.log("div no "+j+" of row "+i+" created")
            const box = document.createElement("div");
            box.style.width="30px";
            box.style.height="30px";
            box.style.border="2px solid blue";
            box.classList.add("box");
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="white"
            });
           row.appendChild(box);
        }
    }
}
function resetGrid(){
    const container = document.getElementsByClassName("container")[0];
    while (container.firstChild) {
    container.box.removeAttribute("style");
    }
}
function clearGrid(){
    const container = document.getElementsByClassName("container")[0];
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}
function newGrid(){
    let size=0;
    /*making sure size is less than 100*/
    while(true){
        size= window.prompt("Enter the no. of boxes per row");
        if(size<=100){
            break;
        }
        else{
            alert("Please enter a number below 100");
        }
    }
    clearGrid();
    createGrid(size);
}