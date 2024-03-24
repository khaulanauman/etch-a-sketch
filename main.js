"use strict"
const container = document.querySelector(".container");
window.onload=createGrid;
function createGrid(){
    for(let i=1;i<=16;i++){
        const row = document.createElement("div");
        row.style.display="flex";
        container.appendChild(row);
        for(let j=1;j<=16;j++){
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