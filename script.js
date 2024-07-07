let elementArray = new Array(9).fill(-1);
let cell = document.querySelectorAll(".cell");
let head2 = document.querySelector("h2");
let count = 1;
let gameOver = false;
for(let i = 0; i < cell.length; i++){
  
    cell[i].dataset.number = i;
    cell[i].addEventListener("click", function(){
        if(gameOver) return;
        console.log(this.dataset.number);
        if(elementArray[this.dataset.number] === -1 && count === 1){
            elementArray[this.dataset.number] = "X";
            this.innerText = "X";
            count = 0;
        }
        else if(elementArray[this.dataset.number] === -1 && count === 0){
            elementArray[this.dataset.number] = "O";
            this.innerText = "O";
            count = 1;
        }
        if(count===0)
            document.querySelector("h2").innerText="Move - O";
        else
            document.querySelector("h2").innerText="Move - X";
        console.log(elementArray);
        if((elementArray[0] !== -1 && elementArray[0] === elementArray[1] && elementArray[0] === elementArray[2]) ||
           (elementArray[3] !== -1 && elementArray[3] === elementArray[4] && elementArray[3] === elementArray[5]) ||
           (elementArray[6] !== -1 && elementArray[6] === elementArray[7] && elementArray[6] === elementArray[8]) ||
           (elementArray[0] !== -1 && elementArray[0] === elementArray[3] && elementArray[0] === elementArray[6]) ||
           (elementArray[1] !== -1 && elementArray[1] === elementArray[4] && elementArray[1] === elementArray[7]) ||
           (elementArray[2] !== -1 && elementArray[2] === elementArray[5] && elementArray[2] === elementArray[8]) ||
           (elementArray[0] !== -1 && elementArray[0] === elementArray[4] && elementArray[0] === elementArray[8]) ||
           (elementArray[2] !== -1 && elementArray[2] === elementArray[4] && elementArray[2] === elementArray[6])){
            head2.innerText = (count === 1 ? "O" : "X") + " is the winner 🥳";
            gameOver = true;
        }
        else if(!elementArray.includes(-1)){
            head2.innerText = "Draw";
            gameOver = true;
        }
    });
}
document.querySelector(".bttn").addEventListener("click",function(){
    for(let i = 0; i < cell.length; i++){
        cell[i].innerText = " ";
    }
    elementArray.fill(-1);
    count = 1;
    gameOver = false;
    head2.innerText = "Move - x";
});