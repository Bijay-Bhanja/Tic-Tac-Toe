let boxes = document.querySelectorAll(".box");
let winner=document.querySelector("#winner")
let reset=document.querySelector("#reset")
let winingPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let win=false
let turn = true;
let count=0
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
      count++
    } else {
      box.innerText = "O";
      turn = true;
      count++
    }
    console.log(count)
    box.disabled = true;
    checkWinner();
    matchDraw()

  });
});
function matchDraw(){
    if(count===9&&win===false){
        winner.innerText="Match draw please restart the game 🙁"
        winner.style.color="red"
        winner.style.fontSize="20px"
    }
}


let checkWinner = () => {
  for (let pattern of winingPattern) {
    let positionOne = boxes[pattern[0]].innerText;
    let positionTwo = boxes[pattern[1]].innerText;
    let positionthree = boxes[pattern[2]].innerText;

    if(positionOne!==""&&positionTwo!==""&&positionthree!==""){
        if (positionOne === positionTwo && positionTwo === positionthree) {
            winner.innerText=`winner is ${positionOne} 🎉🎉🎉`
            boxes.forEach((box)=>{
                box.disabled=true
                win=true
            })     
          }
    } 
  }
};

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=""
        winner.innerText=""
        box.disabled=false
        count=0
    })
})


