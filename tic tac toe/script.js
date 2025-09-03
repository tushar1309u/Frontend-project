let box=document.querySelectorAll(".box");
let resetButton=document.querySelector(".gamereset");
let newGameBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".message");
let msg=document.querySelector("#mess");
let turnO=true;//player x//playero
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 const reset=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

 }
   box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            // box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
   })
   const disableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
   };
   const enableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
   }
   const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   }
   const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);
        // 
        let pos1Val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;
        if(pos1Val !="" && pos2val != "" && pos3Val !=""){
            if(pos1Val===pos2val && pos2val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    };
    
   };
   

   
   newGameBtn.addEventListener("click",reset);
   resetButton.addEventListener("click",reset);
   
  

